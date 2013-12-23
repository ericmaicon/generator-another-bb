'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ModelGenerator = module.exports = function ModelGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);
};

util.inherits(ModelGenerator, yeoman.generators.NamedBase);

ModelGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  var prompts = [{
    name: 'modelName',
    message: 'What is your model name?'
  }, 
  {
    name: 'modelUrl',
    message: 'What is your model URL?'
  }];

  this.prompt(prompts, function (props) {
    this.modelName = props.modelName;
    this.modelUrl = props.modelUrl;

    cb();
  }.bind(this));
};

ModelGenerator.prototype.files = function files() {
  this.copy('model.js', 'app/js/model/' + this.modelName.toLowerCase() + '.js');
};