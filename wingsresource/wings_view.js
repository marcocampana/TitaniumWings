var WingsView = {

  init: function(klass, controller, win) {
    klass.openInCurrentTab = function(controllerToOpen) {
      if(controller.navGroupRootWindow) {
        controllerToOpen.navGroupRootWindow = controller.navGroupRootWindow;
        controller.navGroupRootWindow.tab.open(controllerToOpen.win);
      } else {
        controllerToOpen.navGroupRootWindow = controller.win;
        controller.win.tab.open(controllerToOpen.win);
      }
    }
  }

}