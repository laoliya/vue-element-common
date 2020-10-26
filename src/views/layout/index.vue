<template>
  <div>
    <sidebar class="sidebar-container"/>
    <div class="main-container">
      <navbar/>
      <div class="route">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from './components/sidebar'
import navbar from './components/navbar'
export default {
  components: {
    sidebar,navbar
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
  .sidebar-container{
    width: 210px;
    height: 100%;
    background-color: #1f2e54;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
  }
  .main-container{
    margin-left: 202px;
  }
  .route{
    width: 100%;
    height: 100%;
    padding: 10px;
  }
</style>
