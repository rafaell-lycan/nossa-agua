export default class DamService {
  constructor($http, AppConstants) {
    'ngInject';

    this.http = $http;
    this.host = AppConstants.apiUrl;
    this.limit = AppConstants.limit;
  }

  get(path, method = 'GET') {
    return this.http({
      method,
      url: `${this.host}/${path}`
    })
    .then(response => response.data);
  }
}