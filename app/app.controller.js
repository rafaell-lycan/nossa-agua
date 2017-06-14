class AppController {
  constructor(DamService, $rootScope) {
    'ngInject';
    this.service = DamService;
    this.scope = $rootScope;
    this.damSelected = false;
    this.damData;
  }

  $onInit() {
    this.service.get()
      .then(data => {
        this.damData = data;
        //this.scope.$broadcast('loaded');
      });
  }
}

export default AppController;
