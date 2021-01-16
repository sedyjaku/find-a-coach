<template>
  <div class='grid-item'>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'GridItem'
};
</script>

<style scoped>
.grid-item {
  text-align: center;
}

</style>