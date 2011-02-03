WINGS_ROOT = '/vendor/titaniumwings';

Ti.include(WINGS_ROOT + '/wingsresource/wings_controller.js');
Ti.include(WINGS_ROOT + '/wingscomponents/wings_components.js');

Ti.include('/config/application.js');

if(WINGS_ENV) {
  Ti.include('/config/environments/' + WINGS_ENV + '.js');
}

Ti.include('/config/includes.js');

// function requireFilesIn(folder, pattern) {
//   var resourcesDir = Titanium.Filesystem.getResourcesDirectory();
//   var dir          = Titanium.Filesystem.getFile(resourcesDir + folder);
//   var dirFiles     = dir.getDirectoryListing();
//
//   if(dirFiles && dirFiles.length > 0) {
//
//     for (var i=0; i < dirFiles.length; i++){
//
//       if(dirFiles[i].toString().match(/.*\.js$/)) {
//
//         if(pattern && (dirFiles[i].toString().match(pattern))) {
//           // TODO add recursive listing of folders
//           Ti.include(folder + dirFiles[i]);
//         } else {
//           Ti.include(folder + dirFiles[i]);
//         }
//       }
//
//     }
//   }
// }

// requireFilesIn('/app/controllers/');
// requireFilesIn('/app/models/');
// requireFilesIn('/app/views/');
// requireFilesIn('/app/factories/');
// requireFilesIn('/app/helpers/');
// requireFilesIn('/lib/');
// requireFilesIn('/init/');