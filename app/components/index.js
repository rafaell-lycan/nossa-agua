import angular from 'angular';
import loaderComponent from './loader.component';

const ComponentsModule = angular
  .module('app.components',[])
  .component('loader', loaderComponent);

export default ComponentsModule;
