function appConfig($stateProvider, $urlRouterProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: `<dam-info></dam-info>`
    })
    .state('cantareiraSystem', {
      url: '/cantareira',
      template: `<dam-info></dam-info>`
    })
    .state('altoTieteSystem', {
      url: '/alto-tiete',
      template: `<dam-info></dam-info>`
    })
    .state('guarapirangaSystem', {
      url: '/guarapiranga',
      template: `<dam-info></dam-info>`
    })
    .state('cotiaSystem', {
      url: '/cotia',
      template: `<dam-info></dam-info>`
    })
    .state('rioGrandeSystem', {
      url: '/rio-grande',
      template: `<dam-info></dam-info>`
    })
    .state('rioClaroSystem', {
      url: '/rio-claro',
      template: `<dam-info></dam-info>`
    });
}

export default appConfig;
