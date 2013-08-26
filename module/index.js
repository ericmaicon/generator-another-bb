'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ModuleGenerator = module.exports = function ModuleGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);
};

util.inherits(ModuleGenerator, yeoman.generators.NamedBase);

ModuleGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  var prompts = [{
    name: 'moduleName',
    message: 'What is your module name?'
  }];

  this.prompt(prompts, function (props) {
    this.moduleName = props.moduleName;

    cb();
  }.bind(this));
};

ModuleGenerator.prototype.files = function files() {

  this.mkdir('app/js/modules/' + this.moduleName);
  this.mkdir('app/js/modules/' + this.moduleName + '/collections');
  this.mkdir('app/js/modules/' + this.moduleName + '/models');
  this.mkdir('app/js/modules/' + this.moduleName + '/routes');
  this.mkdir('app/js/modules/' + this.moduleName + '/templates');
  this.mkdir('app/js/modules/' + this.moduleName + '/views');

  this.copy('route.js', 'app/js/modules/' + this.moduleName + '/routes/route.js');
};
