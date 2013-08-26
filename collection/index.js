'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var CollectionGenerator = module.exports = function CollectionGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);
};

util.inherits(CollectionGenerator, yeoman.generators.NamedBase);

CollectionGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  var prompts = [{
    name: 'collectionName',
    message: 'What is your collection name?'
  }, 
  {
    name: 'collectionUrl',
    message: 'What is your collection URL?'
  }, 
  {
    name: 'collectionParent',
    message: 'What is your collection parent?', 
    default: 'Backbone.Collection'
  }, 
  {
    name: 'collectionPath',
    message: 'Where do you wanna create your collection?', 
    default: 'collections'
  }];

  this.prompt(prompts, function (props) {
    this.collectionName = props.collectionName;
    this.collectionUrl = props.collectionUrl;
    this.collectionParent = props.collectionParent;
    this.collectionPath = props.collectionPath;

    cb();
  }.bind(this));
};

CollectionGenerator.prototype.files = function files() {
  this.copy('collection.js', 'app/js/' + this.collectionPath + '/' + this.collectionName.toLowerCase() + '.js');
};
