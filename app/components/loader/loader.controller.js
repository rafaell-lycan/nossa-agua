class LoaderController {
  constructor($scope, $timeout) {
    'ngInject';
    console.log("loader...")
    this.scope = $scope;
    this.timeout = $timeout;
    this.isLoading = true;
    this.isHidden = false;
  }

  $onInit() {
    this.scope.$on('loaded', () => {
      this.isLoading = false;
      this.timeout(() => this.isHidden = true, 3000);
    });
  }
}

export default LoaderController;
