import axios from 'axios';
import { COACH_ENDPOINT, COACH_RATING_ENDPOINT } from '@/constants/endpoints';

const coachModule = {
  namespaced: true,
  state() {
    return {
      coaches: []
    };
  },
  mutations: {
    addCoach(state, payload) {
      state.coaches.push(payload);
    },
    updateCoach(state, payload) {
      console.log('current state :');
      console.log(state.coaches)
      console.log('payload:');
      console.log(payload);
      state.coaches =  state.coaches.map(coach => {
        if(coach.id=== payload.id){
          return payload;
        }
        return coach;
      });
    },
    deleteCoach(state, payload) {
      const coachIndex = state.coaches.indexOf(coach => coach.id === payload.id);
      state.coaches.slice(coachIndex, 1);
    },
    setCoaches(state, payload) {
      console.log('new coaches');
      console.log(payload)
      state.coaches = payload.data;
    },
    setRating(state, payload) {
      let coachToUpdate = state.coaches.find(coach => coach.id === payload.coachId);
      coachToUpdate.rating = payload.rating;
    }
  },
  getters: {
    getCoachById: (state) => (coachId) => state.coaches.find(coach => coach.id === coachId),
    getCoaches: (state) => state.coaches
  },
  actions: {
    fetchCoaches(context) {
      console.log(COACH_ENDPOINT);
      axios.get(COACH_ENDPOINT).then(coaches =>
        context.commit('setCoaches', coaches)
      ).catch(error => console.log(error));
    },
    fetchCoach(context, payload) {
      console.log(COACH_ENDPOINT);
      axios.get(COACH_ENDPOINT + '/' + payload.id).then(coach => {
        console.log(coach.data);
        context.commit('updateCoach', coach.data);
      }
      ).catch(error => console.log(error));
    },
    updateCoach(context, payload) {
      axios.put(COACH_ENDPOINT + '/' + payload.id, payload).then(updatedCoach =>
        context.commit('updateCoach', updatedCoach)
      );
    },
    createCoach(context, payload) {
      axios.post(COACH_ENDPOINT, payload).then(createdCoach =>
        context.commit('addCoach', createdCoach)
      );
    },
    deleteCoach(context, payload) {
      axios.delete(COACH_ENDPOINT + '/' + payload.id).then(() =>
        context.commit('deleteCoach', payload)
      );
    },
    createRating(context, payload) {
      axios.post(COACH_RATING_ENDPOINT, payload).then(rating => {
          console.log(rating);
          context.dispatch('fetchCoach', { id: rating.data.coachId });
        }
      );
    }
  }

};
export default coachModule;