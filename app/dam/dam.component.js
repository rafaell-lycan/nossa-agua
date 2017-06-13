import template from './dam.html';
import controller from './dam.controller';

const damComponent = {
  template,
  controller,
  bindings: {
    info : '<'
  }
};

export default damComponent;
