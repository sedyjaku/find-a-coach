<template>
  <router-link>
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: 'NavigationButton'
};
</script>

<style scoped>
a{
  text-decoration: none;
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: black;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:hover,
a:active{
  color: #110e00;
  border-color: #0a0101;
  background-color: #ff851f;
}


a.router-link-active{
  color: #000000;
  border-color: #000000;
  font-weight: bold;
  background-color: #fca714;
}
</style>