import angular from 'angular';
import constants from './app.constants';
import routes from './app.routes';
import run from './app.run';

const CoreModule = angular
  .module('app.core',[])
  .constant('appConfig', constants)
  .config(routes)
  .run(run);

  console.log("Core Module...")

export default CoreModule;
