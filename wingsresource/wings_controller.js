var WingsController = {
  init: function(klass, params) {
    var win = Ti.UI.createWindow(params);

    klass.win = win;

    klass.render = function(params) {
      // TODO check if viewClass is set and throw expection if it isn't
      new klass.viewClass(klass, win).render(params);
    }

    return win;
  }
}