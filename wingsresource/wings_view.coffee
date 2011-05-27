class WingsView
  constructor: (@controller) ->

  openInCurrentTab: (controllerToOpen) ->
    if @controller.navGroupRootWindow
      controllerToOpen.navGroupRootWindow = @controller.navGroupRootWindow
      controller.navGroupRootWindow.tab.open(@controllerToOpen.win)
    else
      controllerToOpen.navGroupRootWindow = @controller.win
      @controller.win.tab.open(controllerToOpen.win)