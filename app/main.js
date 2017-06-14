import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import AppComponent from './app.component';
import CoreModule from './core'
import DamModule from './dam'
import ComponentsModule from './components'

angular
  .module('app', [
    uiRouter,
    CoreModule.name,
    DamModule.name,
    ComponentsModule.name,
  ])
  .component('app', AppComponent);

angular.bootstrap(document, ["app"], {
  strictDi: true
});
