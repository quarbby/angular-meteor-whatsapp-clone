// Libs
import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Loader from 'angular-ecmascript/module-loader';
import Angular from 'angular';
import { Meteor } from 'meteor/meteor';
 
// Modules
import ChatsCtrl from '../controllers/chats.controller';
import RoutesConfig from '../routes';

const App = 'Whatsapp';
 
// App
Angular.module(App, [
  'angular-meteor',
  'ionic'
]);

new Loader(App)
    .load(ChatsCtrl)
    .load(RoutesConfig);

// Startup
if (Meteor.isCordova) {
  Angular.element(document).on('deviceready', onReady);
}
else {
  Angular.element(document).ready(onReady);
}
 
function onReady() {
  Angular.bootstrap(document, [App]);
}