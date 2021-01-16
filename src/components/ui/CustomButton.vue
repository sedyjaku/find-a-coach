<template>
  <button><slot></slot></button>
</template>

<script>
export default {
  name: 'CustomButton'
};
</script>

<style scoped>

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}


button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>