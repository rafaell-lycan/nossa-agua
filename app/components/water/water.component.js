import controller from './water.controller';

const waterComponent = {
  template: `<section class="water" id="water" style="top: {{ $ctrl.level }}"></section>`,
  controller,
};

export default waterComponent;
