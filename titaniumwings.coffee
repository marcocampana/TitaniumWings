# The purpose of this file is to include the frameworks's
# components and the application specific onfiguration and
# files

# Change this variable to the path where Wings is installed
WINGS_ROOT = '/vendor/titaniumwings'

Ti.include(WINGS_ROOT + '/wingsresource/wings_controller.js')
Ti.include(WINGS_ROOT + '/wingsresource/wings_view.js')
Ti.include(WINGS_ROOT + '/wingscomponents/wings_components.js')

# Load application configuration
Ti.include('/config/application.js')

# Load environment specific configuration
if WINGS_ENV
  Ti.include('/config/environments/' + WINGS_ENV + '.js')

# Include application files
Ti.include('/config/includes.js')