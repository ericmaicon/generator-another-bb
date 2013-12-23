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
  }];

  this.prompt(prompts, function (props) {
    this.viewName = props.viewName;

    cb();
  }.bind(this));
};

ViewGenerator.prototype.files = function files() {
  this.copy('view.js', 'app/js/views/' + this.viewName.toLowerCase() + '.js');
  this.copy('view.ejs', 'app/js/templates/' + this.viewName.toLowerCase() + '.ejs');
};