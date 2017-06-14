export default function run($rootScope, $state) {
 'ngInject';

 console.log("Running...")

 $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
   console.log("Route =>", toState, toParams)
  });

}
