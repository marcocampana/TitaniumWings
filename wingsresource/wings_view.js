(function() {
  var WingsView;
  WingsView = (function() {
    function WingsView(controller) {
      this.controller = controller;
    }
    WingsView.prototype.openInCurrentTab = function(controllerToOpen) {
      if (this.controller.navGroupRootWindow) {
        controllerToOpen.navGroupRootWindow = this.controller.navGroupRootWindow;
        return controller.navGroupRootWindow.tab.open(this.controllerToOpen.win);
      } else {
        controllerToOpen.navGroupRootWindow = this.controller.win;
        return this.controller.win.tab.open(controllerToOpen.win);
      }
    };
    return WingsView;
  })();
}).call(this);
