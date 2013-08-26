'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var RouteGenerator = module.exports = function RouteGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);
};

util.inherits(RouteGenerator, yeoman.generators.NamedBase);

RouteGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  var prompts = [{
    name: 'routerName',
    message: 'What is your router name?'
  }, 
  {
    name: 'routerParent',
    message: 'What is your router parent?', 
    default: 'Backbone.Router'
  }, 
  {
    name: 'routerPath',
    message: 'Where do you wanna create your router?', 
    default: 'routes'
  }];

  this.prompt(prompts, function (props) {
    this.routerName = props.routerName;
    this.routerParent = props.routerParent;
    this.routerPath = props.routerPath;

    cb();
  }.bind(this));
};

RouteGenerator.prototype.files = function files() {
  this.copy('router.js', 'app/js/' + this.routerPath + '/' + this.routerName.toLowerCase() + '.js');
};
