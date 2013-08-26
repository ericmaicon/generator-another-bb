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
  }, 
  {
    name: 'modelParent',
    message: 'What is your model parent?', 
    default: 'Backbone.Model'
  }, 
  {
    name: 'modelPath',
    message: 'Where do you wanna create your model?', 
    default: 'models'
  }];

  this.prompt(prompts, function (props) {
    this.modelName = props.modelName;
    this.modelUrl = props.modelUrl;
    this.modelParent = props.modelParent;
    this.modelPath = props.modelPath;

    cb();
  }.bind(this));
};

ModelGenerator.prototype.files = function files() {
  this.copy('model.js', 'app/js/' + this.modelPath + '/' + this.modelName.toLowerCase() + '.js');
};