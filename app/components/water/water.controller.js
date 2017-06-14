class WaterController {
  constructor($scope, $timeout) {
    'ngInject';
    this.scope = $scope;
    this.timeout = $timeout;
    this.level = '50%';
  }

  $onInit() {
    this.scope.$on('waterLevelChanged', (level) => {
      this.level = level;
    });
  }
}

export default WaterController;
