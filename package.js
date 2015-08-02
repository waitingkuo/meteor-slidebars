Package.describe({
  summary: 'Slidebars - A jQuery framework for off-canvas menus and sidebars.',
  version: '0.0.1',
  name: 'waitingkuo:slidebars',
  git: 'https://github.com/waitingkuo/meteor-slidebars'

});

Package.onUse(function (api) {

  api.versionsFrom('METEOR@1.1.0.2');
  api.use('jquery');
  api.addFiles(['Slidebars/dist/0.10.3/slidebars.css', 'Slidebars/dist/0.10.3/slidebars.js'], 'client');

});
