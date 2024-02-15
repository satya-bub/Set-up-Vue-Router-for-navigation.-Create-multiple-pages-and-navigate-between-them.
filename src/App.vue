<template>
  <div id="app">
    <ul>
      <li><router-link to="/">HOME</router-link></li>
      <li><router-link to="/courses">COURSES</router-link></li>
      <li><router-link to="/courses/:id">COURSE DETAILS</router-link></li>
      <li><router-link to="/profile">USER PROFILE</router-link></li>
    </ul>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-image: url('/home/agile/Downloads/pexels-gabriel-peter-696644.jpg');
  background-size: cover;
  background-position: center;
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  background: #f1f1f1;
  margin: 0;
}

li {
  margin: 10px;
}

a {
  text-decoration: none;
  color: #333;
}
</style>
