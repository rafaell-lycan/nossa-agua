class WaterController {
  constructor($scope, $timeout) {
    'ngInject';
    this.scope = $scope;
    this.timeout = $timeout;
    this.level;
  }

  $onInit() {
    this.scope.$on('waterLevelChanged', ($event, level) => {
      console.log("->",convertWaterPercentageLevel(level))
      this.level = convertWaterPercentageLevel(level);
    });
  }
}

function convertWaterPercentageLevel(level) {
  let maxLevel = 100;
  return maxLevel - (parseInt(level) || null);
}

export default WaterController;
