import axios from 'axios';
import { USER_MESSAGE_ENDPOINT } from '@/constants/endpoints';

const userMessageModule = {
  namespaced: true,
  state() {
    return {
      messages: []
    };
  },
  mutations: {
    addMessage(state, payload) {
      this.state.messages.push(
        {
          id: payload.id,
          title: payload.title,
          message: payload.message,
          answer: payload.answer,
          coachId: payload.coachId,
          userId: 'DefaultUser'
        }
      );
    },
    updateMessage(state, payload) {
      const messageIndex = this.state.messages.indexOf(message => message.id === payload.id);
      this.state.messages[messageIndex]= payload;
    },
    deleteMessage(state, payload) {
      const messageIndex = this.state.messages.indexOf(message => message.id === payload.id);
      this.state.messages.slice(messageIndex, 1);
    },
    setMessages(state, payload) {
      this.state.messages = payload;
    }
  },
  getters: {
    getMessageById: (state) => (messageId) => state.messages.find(message => message.id === messageId),
    getMessages: (state) => state.messages
  },
  actions: {
    fetchMessages(context) {
      axios.get(USER_MESSAGE_ENDPOINT).then(messages =>
        context.commit('setMessages', messages)
      );
    },
    updateMessage(context, payload) {
      axios.put(USER_MESSAGE_ENDPOINT + '/' + payload.id, payload).then(updatedMessage =>
        context.commit('updateMessage', updatedMessage)
      );
    },
    createMessage(context, payload) {
      axios.post(USER_MESSAGE_ENDPOINT, payload).then(createdMessage =>
        context.commit('addMessage', createdMessage)
      );
    },
    deleteMessage(context, payload) {
      axios.delete(USER_MESSAGE_ENDPOINT + '/' + payload.id).then(() =>
        context.commit('deleteMessage', payload)
      );
    }
  }

};
export default userMessageModule;