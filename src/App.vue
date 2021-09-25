<template>
  <div id="nav">
    <router-link :to="{name: 'Home'}" class="routed-links"><button class="btn btn-danger rounded-4">View All Tasks</button></router-link>
    <router-link :to="{name: 'About'}" class="routed-links"><button class="btn btn-danger rounded-4">Add New Task</button></router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.d-flex{
  background-color: black;
  align-items: center;
  height: 50px;
  justify-content: center;
}

.routed-links{
  padding-left: 15px;
  padding-right: 15px;
}

</style>
