function appConfig($stateProvider, $urlRouterProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: `<dam-info></dam-info>`
    })
    .state('dam', {
      url: '/:damName',
      template: `<dam-info data="$resolve.data"></dam-info>`,
      resolve: {
        data : ($state, $stateParams, DamService, $rootScope) => {
          'ngInject';
          return DamService.getInfo($stateParams.damName)
            .then(info => {
              $rootScope.$broadcast('waterLevelChanged', info.amount)
              return info;
            })
            .catch(err => $state.go('home'));
        }
      }
    });
}

export default appConfig;
