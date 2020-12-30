<template>
  <header>
    <nav>
      <ul>
        <li>
          <NavigationButton to='/register'>
            Register Coach
          </NavigationButton>
        </li>
        <li>
          <NavigationButton to='/coaches'>
            Available Coaches
          </NavigationButton>
        </li>
        <li>
          <NavigationButton to='/requests'>
            View requests
          </NavigationButton>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import NavigationButton from '@/components/ui/NavigationButton';

export default {
  name: 'TheHeader',
  components: { NavigationButton }
};
</script>

<style scoped>


header {
  width: 100%;
  height: 5rem;
  background-color: #eed79e;
  border: 1px solid black
}


nav {
  height: 100%;

}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}
</style>