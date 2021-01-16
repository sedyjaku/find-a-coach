<template>
  <div>
    <CoachItem v-for='coach in coachList' :key='coach.id' :id='coach.id'></CoachItem>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CoachItem from '@/pages/coaches/CoachItem';

export default {
  name: 'CoachList',
  components: {
    CoachItem
  },
  computed: {
    ...mapGetters('coaches', { coachList: 'getCoaches' })
  }
};
</script>

<style scoped>
div {
  margin: 3% auto;
  max-width: 60rem;
  width: 80%;
  border-radius: 1%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 5%;
  background-color: #fa7b7b
}
</style>