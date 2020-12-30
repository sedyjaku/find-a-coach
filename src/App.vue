<template>
  <TheHeader></TheHeader>
  <router-view></router-view>
  <TheFooter></TheFooter>
</template>

<script>
import TheHeader from '@/components/navigation/TheHeader';
import TheFooter from '@/components/navigation/TheFooter';
export default {
  name: 'App',
  components: { TheFooter, TheHeader }
};
</script>

<style>

* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}


</style>