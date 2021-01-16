<template>
  <div class='badges'>
    <ExpertiseBadge v-for='expertise in expertises' :key='expertise'  :expertiseName='expertise'/>
  </div>
</template>

<script>
import ExpertiseBadge from '@/pages/coaches/badge/ExpertiseBadge';

export default {
  components: { ExpertiseBadge },
  name: 'ExpertiseBadgeList',
  props: ['expertises']
};
</script>

<style scoped>
.badges{
  overflow: hidden;
}
</style>