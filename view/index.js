'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ViewGenerator = module.exports = function ViewGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);
};

util.inherits(ViewGenerator, yeoman.generators.NamedBase);

ViewGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  var prompts = [{
    name: 'viewName',
    message: 'What is your view name?'
  }, 
  {
    name: 'viewParent',
    message: 'What is your view parent?', 
    default: 'Backbone.View'
  }, 
  {
    name: 'viewPath',
    message: 'Where do you wanna create your view?', 
    default: 'views'
  }];

  this.prompt(prompts, function (props) {
    this.viewName = props.viewName;
    this.viewParent = props.viewParent;
    this.viewPath = props.viewPath;

    cb();
  }.bind(this));
};

ViewGenerator.prototype.files = function files() {
  this.copy('view.js', 'app/js/' + this.viewPath + '/' + this.viewName.toLowerCase() + '.js');
};