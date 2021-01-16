<template>
  <router-link :to='coachDetailPath'>
  <section>
    <h3>{{coach.firstName}} {{coach.lastName}}</h3>
    <div>
      <CoachRating :coachId='id'/>
      <ExpertiseBadgeList :expertises='coach.expertiseList'/>
    </div>
  </section>
  </router-link>
</template>

<script>
import ExpertiseBadgeList from '@/pages/coaches/badge/ExpertiseBadgeList';
import CoachRating from '@/pages/coaches/rating/CoachRating';
export default {
  name: 'CoachItem',
  components: { CoachRating, ExpertiseBadgeList },
  props: ['id'],
  computed: {
    coach(){
      return this.$store.getters['coaches/getCoachById'](this.id);
    },
    coachDetailPath(){
      return '/coaches/' + this.id;
    }
  }
};
</script>

<style scoped>
section {
  margin: 3% 0 3% auto;
  border-radius: 15%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 5%;
  background-color: #ffffff;
}
section:hover {
  background-color: #d44949;
  cursor: pointer;
}
h3{
  margin: auto;
  width: 50%;
  padding: 10px;
}
</style>