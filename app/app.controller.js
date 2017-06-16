class AppController {
  constructor(DamService, $rootScope) {
    'ngInject';
    this.service = DamService;
    this.scope = $rootScope;
  }

  $onInit() {
    this.service.get()
      .then(data => {
        this.scope.$broadcast('loaded');
      })
      .catch(console.error);
  }
}

export default AppController;
