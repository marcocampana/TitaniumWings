var WingsController = {
  extend: function(klass, win){

    function loadAndRender() {
      klass.loadData({
        renderOnSuccess:function(data){
          klass.viewClass.render(klass, win, data);
        }
      });
    }

    klass.openWindow = function(){
      loadAndRender();
      win.open({animated:true, fullscreen:true});
    };

    klass.openInCurrentTab = function(w){
      loadAndRender();
      klass.navGroupRootWindow.tab.open(w,{animated:true, fullscreen:true});
    };

    klass.renderWin = function(w) {
      loadAndRender();
      return win;
    }

    // win.addEventListener('focus', function(e){
    //   Ti.API.info('window is focused');
    //   loadAndRender();
    //   win.open();
    // });

    // win getter method
    klass.win = function(){ return win };
  }
}