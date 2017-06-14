class NavController {
  constructor($rootScope) {
    'ngInject';
    this.scope = $rootScope;
  }

  $onInit() {}

  sendClickEvent(damName) {
    this.scope.$broadcast('damChanged', damName);
  }
}

export default NavController;
