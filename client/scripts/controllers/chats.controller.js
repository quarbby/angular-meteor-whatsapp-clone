import Moment from 'moment';
import { Controller } from 'angular-ecmascript/module-helpers';
import {Chats} from '../../../lib/collections';
 
export default class ChatsCtrl extends Controller {    
  constructor() {
    super(...arguments);

    this.helpers({
       data() {
           return Chats.find();
       } 
    });

  }
  
  showNewChatModal() {
    this.NewChat.showModal();
  }
  
  remove(chat) {
      Meteor.call('removeChat', chat._id);
  }
}

ChatsCtrl.$inject = ['NewChat'];