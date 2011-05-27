(function() {
  Ti.WINGS_ROOT = '/vendor/titaniumwings';
  Ti.include(Ti.WINGS_ROOT + '/wingsresource/wings_controller.js');
  Ti.include(Ti.WINGS_ROOT + '/wingsresource/wings_view.js');
  Ti.include(Ti.WINGS_ROOT + '/wingscomponents/wings_components.js');
  Ti.include('/config/application.js');
  if (Ti.WINGS_ENV) {
    Ti.include('/config/environments/' + Ti.WINGS_ENV + '.js');
  }
  Ti.include('/config/includes.js');
}).call(this);
