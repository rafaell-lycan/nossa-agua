import controller from './nav.controller';

const navComponent = {
  template: `
    <nav class="nav" ng-if="$ctrl.damList">
      <ul>
        <li class="cantareira" ng-repeat="item in ::$ctrl.damList">
          <a ui-sref="dam({damName: item.code })" ui-sref-active="is-active" ng-click="$ctrl.sendClickEvent(item.code)">{{ ::item.name | lowercase }}</a>
        </li>
      </ul>
    </nav>
  `,
  controller,
};

export default navComponent;
