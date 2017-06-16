import controller from './water.controller';

const waterComponent = {
  template: `<section class="water" id="water" style="top: {{ $ctrl.level || 50 }}%"></section>`,
  controller
};

export default waterComponent;
