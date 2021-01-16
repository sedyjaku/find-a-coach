<template>
  <div :class='badgeMapping[expertiseName]'>
    {{badgeMapping[expertiseName]}}
  </div>
</template>

<script>
export default {
  name: 'ExpertiseBadge',
  props: ['expertiseName'],
  data() {
    return {
      badgeMapping: {
        BACKEND: 'be',
        FRONTEND: 'fe',
        MATH: 'math',
        SOFT_SKILLS: 'soft-skills',
        SCIENCE: 'science'
      }
    }
  }
};
</script>

<style scoped>
div{
  margin-right: 3%;
  float: right;
  white-space: nowrap;
  border-radius: 50%;
  padding: 3%;
}
.fe {
  background-color: #ff851f;
}
.be {
  background-color: #92f192;
}
.science {
  background-color: #e7fd85;
}
.soft-skills {
  background-color: #8989ff;
}
.math {
  background-color: #b888fa;
}
</style>