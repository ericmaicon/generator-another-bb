'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var TemplateGenerator = module.exports = function TemplateGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);
};

util.inherits(TemplateGenerator, yeoman.generators.NamedBase);

TemplateGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};
