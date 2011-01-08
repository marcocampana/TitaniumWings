var WingsController = {
  extend: function(klass, win){

    function loadAndRender() {
      win.loadData({
        renderOnSuccess:function(data){
          win.viewClass.render(win, data)
        }
      });
    }

    win.openWindow = function(){
      loadAndRender();
      win.open({animated:true});
    };

    win.openInCurrentTab = function(w){
      loadAndRender();
      win.navGroupRootWindow.tab.open(w,{animated:true});
    };

    win.addEventListener('focus', function(e){
      Ti.API.info('window is focused');
      loadAndRender();
      win.open();
    });

    // win getter method
    klass.win = function(){ return win };
  }
}