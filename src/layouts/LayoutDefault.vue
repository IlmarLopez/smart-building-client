<template>
  <div class="layout-default">
    <div class="container">
      <header class="">
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
      </header>
      <main class="main">
        <slot/>
      </main>
    </div>
  </div>
</template>
<script>

export default {
  name: 'LayoutDefault',
  data() {
    return {
      isSidebarCollapsed: true,
    };
  },
  methods: {
    sidebarToggle() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    },
  },
};
</script>
<style lang="sass" scoped>
  .layout-default
    min-height: 100vh
    overflow: hidden
</style>
