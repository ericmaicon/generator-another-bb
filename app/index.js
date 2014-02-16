'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var AnotherBbGenerator = module.exports = function AnotherBbGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(AnotherBbGenerator, yeoman.generators.Base);

AnotherBbGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  var prompts = [{
    name: 'projectName',
    message: 'What is your project name?'
  }];

  this.prompt(prompts, function (props) {
    this.projectName = props.projectName;

    cb();
  }.bind(this));
};

AnotherBbGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/css');
  this.copy('css/_backgrid-paginator.scss', 'app/css/_backgrid-paginator.scss');
  this.copy('css/_backgrid.scss', 'app/css/_backgrid.scss');
  this.copy('css/_bootstrap-datepicker.scss', 'app/css/_bootstrap-datepicker.scss');
  this.copy('css/_bootstrap-modal.scss', 'app/css/_bootstrap-modal.scss');
  this.copy('css/_bootstrap-notify.scss', 'app/css/_bootstrap-notify.scss');
  this.copy('css/_bootstrap-responsive.scss', 'app/css/_bootstrap-responsive.scss');
  this.copy('css/_bootstrap.scss', 'app/css/_bootstrap.scss');
  this.copy('css/_font-awesome.min.scss', 'app/css/_font-awesome.min.scss');
  this.copy('css/_mixins.scss', 'app/css/_mixins.scss');
  this.copy('css/_normalize.scss', 'app/css/_normalize.scss');
  this.copy('css/_select2.scss', 'app/css/_select2.scss');
  this.copy('css/main.scss', 'app/css/main.scss');

  this.mkdir('app/images');

  this.mkdir('app/js');
  this.mkdir('app/js/collections');
  this.mkdir('app/js/helpers');
  this.copy('js/helpers/template.js', 'app/js/helpers/template.js');
  this.mkdir('app/js/models');
  this.mkdir('app/js/modules');
  this.mkdir('app/js/routes');
  this.mkdir('app/js/templates');
  this.mkdir('app/js/views');
  this.copy('js/app.js', 'app/js/app.js');
  this.copy('js/config.js', 'app/js/config.js');
  this.copy('js/main.js', 'app/js/main.js');
  this.copy('js/routes/router.js', 'app/js/routes/router.js');

  this.copy('404.html', 'app/404.html');
  this.copy('index.html', 'app/index.html');

  this.copy('_Gruntfile.js', 'Gruntfile.js');
  this.template('_package.json', 'package.json');
  this.template('_bower.json', 'bower.json');
};

AnotherBbGenerator.prototype.projectfiles = function projectfiles() {
};
