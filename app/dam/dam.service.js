import DamSystem from './dam-system.class';

class DamService {
  constructor($http, $q, appConfig, $rootScope) {
    'ngInject';

    this.http = $http;
    this.promise = $q;
    this.host = appConfig.apiUrl;
    this.scope = $rootScope;
    this.damData;
    this.damList = [
      new DamSystem('cantareira', 'Cantareira'),
      new DamSystem('alto-tiete', 'Alto Tietê'),
      new DamSystem('guarapiranga', 'Guarapiranga'),
      new DamSystem('cotia', 'Cotia'),
      new DamSystem('rio-grande', 'Rio Grande'),
      new DamSystem('rio-claro', 'Rio Claro')
    ];
  }

  get(path, method = 'GET') {
    let deffered = this.promise.defer();
    if(this.damData) {
      deffered.resolve(this.damData);
      return deffered.promise;
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
    let deffered = this.promise.defer();
    if(this.damData) {
      deffered.resolve(getDamFromCollection(this.damData, name));
    } else {
      this.scope.$on('loaded', () => {
        deffered.resolve(getDamFromCollection(this.damData, name));
      });
    }

    return deffered.promise;
  }

  getDamList() {
    return this.damList;
  }
}

function getDamFromCollection(collection, name) {
  switch(name) {
    case 'cantareira':
      return parseDamInfo(collection[0]);
    case 'alto-tiete':
      return parseDamInfo(collection[1]);
    case 'guarapiranga':
      return parseDamInfo(collection[2]);
    case 'cotia':
      return parseDamInfo(collection[3]);
    case 'rio-grande':
      return parseDamInfo(collection[4]);
    case 'rio-claro':
      return parseDamInfo(collection[5]);
    default:
      throw new Error(`Couldn't find information about the dam system ${name}.`);
  }
}

function parseDamInfo(damInfo) {
  return {
    name: damInfo.name,
    amount: damInfo.data['volume_armazenado'].replace(' %', ''),
    dailyAmount: damInfo.data['pluviometria_do_dia']
  };
}

export default DamService;
