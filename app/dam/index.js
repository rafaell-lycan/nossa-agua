import angular from 'angular';
import DamService from './dam.service';
import damComponent from './dam.component';

const DamModule = angular
  .module('app.dam',[])
  .service('DamService', DamService)
  .component('damInfo', damComponent);

export default DamModule;
