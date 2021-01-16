<template>
  <div
    class='grid'
    :style='gridTemplateColumnsStyle'
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'GridContainer',
  props: ['columns'],
  computed: {
    gridTemplateColumnsStyle(){
      const columnAmount = this.columns? this.columns : 2;
      return 'grid-template-columns: repeat(' + columnAmount + ', auto)';
    }
  }
};
</script>

<style scoped>

.grid {
  display: grid;
  grid-gap: 10px;
  padding: 10px;
}


</style>