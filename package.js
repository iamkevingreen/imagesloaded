Package.describe({
  name: "iamkevingreen:imagesloaded",
  git: "https://github.com/iamkevingreen/imagesloaded.git",
  summary: "Meteor packaging of imagesloaded",
  "version": "1.0.1"
});
Package.onUse(function(api) {

  api.versionsFrom('1.0.2.1');
  api.use('jquery', 'client');

  api.addFiles('imagesloaded/imagesloaded.js');
});
