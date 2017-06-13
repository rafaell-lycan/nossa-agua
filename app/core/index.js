import angular from 'angular';
import constants from './app.constants';
import routes from './app.routes';
import run from './app.run';

const CoreModule = angular
  .module('app.core',[])
  .constant('AppConstants', constants)
  .config(routes)
  .run(routes);

export default CoreModule;
