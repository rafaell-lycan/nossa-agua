class DamService {
  constructor($http, $q, appConfig) {
    'ngInject';

    this.http = $http;
    this.promise = $q;
    this.host = appConfig.apiUrl;
    this.damData;
  }

  get(path, method = 'GET') {
    let deffered = this.promise.defer();

    if(this.damData) {
      deffered.resolve(this.damData);
    }

    return this.http({
      method,
      url: `${this.host}`
    })
    .then(response => {
      this.damData = response.data;
      return this.damData;
    });
  }

  getInfo(name) {
    switch(name) {
      case 'cantareira':
        return this.damData[0];
      case 'alto-tiete':
        return this.damData[1];
      case 'guarapiranga':
        return this.damData[2];
      case 'cotia':
        return this.damData[3];
      case 'rio-grande':
        return this.damData[4];
      case 'rio-claro':
        return this.damData[5];
    }
  }
}

export default DamService;
