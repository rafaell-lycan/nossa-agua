class NavController {
  constructor(DamService) {
    'ngInject';
    this.service = DamService;
    this.damList;
  }

  $onInit() {
    this.damList = this.service.getDamList();
  }

  sendClickEvent(damName) {
    console.log("NavController:sendClickEvent", damName)
  }
}

export default NavController;
