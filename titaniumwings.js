WINGS_ROOT = '/vendor/titaniumwings';

Ti.include(WINGS_ROOT + '/wingsresource/wings_controller.js');
Ti.include(WINGS_ROOT + '/wingsresource/wings_view.js');
Ti.include(WINGS_ROOT + '/wingscomponents/wings_components.js');

Ti.include('/config/application.js');

if(WINGS_ENV) {
  Ti.include('/config/environments/' + WINGS_ENV + '.js');
}

Ti.include('/config/includes.js');