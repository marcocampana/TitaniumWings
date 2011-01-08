titaniumWingsRoot = 'vendor/titaniumwings'

wingsFiles = [
  titaniumWingsRoot + '/wingsresource/wings_controller.js'
];
wingsFiles.each(function(file) { Ti.include(file) });