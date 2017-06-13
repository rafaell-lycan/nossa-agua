class LoaderController {
  constructor($rootScope) {
    'ngInject';
    this.scope = $rootScope;
    console.log('Loader')
  }

  $onInit() {
    this.isLoading = true;

    this.scope.$on('loaded', function(){
      this.isLoading = false;
    });
  }
}

export default LoaderController;
