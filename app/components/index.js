import angular from 'angular';
import loaderComponent from './loader/loader.component';
import waterComponent from './water/water.component';
import navComponent from './navigation/nav.component';

const ComponentsModule = angular
  .module('app.components',[])
  .component('loader', loaderComponent)
  .component('mainMenu', navComponent)
  .component('water', waterComponent);

  console.log("Components...")

export default ComponentsModule;
