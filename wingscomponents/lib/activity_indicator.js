WingsComponents.UI.ActivityIndicator = function() {
  var indWin = null;
  var actInd = null;

  this.show = function(message) {
    if(Titanium.Platform.name === 'android') {
      showAndroidIndicator(message);
    } else {
      showIOSIndicator(message);
    }
  }

  this.hide = function() {
    if(Titanium.Platform.name === 'android') {
      hideAndroidIndicator();
    } else {
      hideIOSIndicator();
    }
  }

  function showIOSIndicator(message) {
    // window container
    indWin = Titanium.UI.createWindow({
      height:150,
      width:150
    });

    // black view
    var indView = Titanium.UI.createView({
      height:150,
      width:150,
      backgroundColor:'#000',
      borderRadius:10,
      opacity:0.8
    });
    indWin.add(indView);

    // loading indicator
    actInd = Titanium.UI.createActivityIndicator({
      style:Titanium.UI.iPhone.ActivityIndicatorStyle.BIG,
      height:30,
      width:30,
    });
    indWin.add(actInd);

    // message
    var message = Titanium.UI.createLabel({
      text:message,
      color:'#fff',
      width:'auto',
      height:'auto',
      font:{fontSize:18},
      bottom:20
    });
    indWin.add(message);
    indWin.open();
    actInd.show();
  }

  function hideIOSIndicator() {
    actInd.hide();
    indWin.close({opacity:0,duration:500});
   }

   function showAndroidIndicator(message) {
     actInd = Titanium.UI.createActivityIndicator({
       style:Titanium.UI.iPhone.ActivityIndicatorStyle.BIG,
       height:30,
       width:30,
       message:message
     });
     actInd.show();
  }

  function hideAndroidIndicator() {
    actInd.hide();
  }
}