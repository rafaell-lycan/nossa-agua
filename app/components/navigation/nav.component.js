import template from './nav.html';
import controller from './nav.controller';

const navComponent = {
  template,
  controller,
  bindings: {
    goTo : '='
  }
};

export default navComponent;
