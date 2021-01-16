<template>
  <div class='maindiv'>
    <h2 v-if='coach'>{{coach.firstName + ' ' + coach.lastName}}</h2>
    <h2 v-else>Loading...</h2>
    <GridContainer v-if='coach'>
      <GridItem>Age:</GridItem>
      <GridItem>{{coach.age}}</GridItem>
      <GridItem>Email:</GridItem>
      <GridItem>{{coach.email}}</GridItem>
      <GridItem>Gender:</GridItem>
      <GridItem>{{coach.sexType}}</GridItem>
      <GridItem>Expertises:</GridItem>
      <GridItem>{{coach.expertiseList}}</GridItem>
      <GridItem>Rating:</GridItem>
      <GridItem>{{coach.rating}}</GridItem>
    </GridContainer>
    <NavigationButton :to='"/coaches/" + id + "/contact"'>Contact</NavigationButton>
  </div>
  <router-view></router-view>
</template>

<script>
import GridContainer from '@/components/ui/GridContainer';
import GridItem from '@/components/ui/GridItem';
import NavigationButton from '@/components/ui/NavigationButton';
export default {
  name: 'CoachDetail',
  components: { NavigationButton, GridItem, GridContainer },
  props: ['id'],
  computed: {
    coach(){
      console.log(this.id)
      let coach = this.$store.getters['coaches/getCoachById'](this.id);
      console.log(coach);
      return coach;
    }
  }

};
</script>

<style scoped>
h2{
  text-align:center;
}

div.maindiv {
  margin: 3% auto;
  max-width: 60rem;
  width: 80%;
  border-radius: 1%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 5%;
  background-color: #fa7b7b
}
</style>