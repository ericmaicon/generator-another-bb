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
  }];

  this.prompt(prompts, function (props) {
    this.collectionName = props.collectionName;
    this.collectionUrl = props.collectionUrl;

    cb();
  }.bind(this));
};

CollectionGenerator.prototype.files = function files() {
  this.copy('collection.js', 'app/js/collections/' + this.collectionName.toLowerCase() + '.js');
};