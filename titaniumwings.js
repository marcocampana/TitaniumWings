WINGS_ROOT = 'vendor/titaniumwings';

Ti.include(WINGS_ROOT + '/wingsresource/wings_controller.js');

// TODO extract this into a method and include models and lib files
var resourcesDir = Titanium.Filesystem.getResourcesDirectory();
var dir = Titanium.Filesystem.getFile(resourcesDir + '/app/controllers');
var dir_files = dir.getDirectoryListing();

for (var i=1;i<dir_files.length;i++){
  if (dir_files[i].toString().match(/.*_controller\.js/)) {
    Ti.include( 'app/controllers/' + dir_files[i]);
  }
}