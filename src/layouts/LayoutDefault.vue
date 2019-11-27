<template>
  <div class="layout-default">
    <sidebar
      :class="{ 'sidebar--is-collapsed': isSidebarCollapsed }"
      @sidebar-toggle="sidebarToggle"
    />
    <div class="page-container" :class="{ 'page-container--margin-left-100': isSidebarCollapsed }">
      <header class="header navbar">
        <div class="header__container">
          <ul class="header__nav header__nav--left">
            <li class="header__nav-item">
              <router-link to="" class="sidebar-toggle">
                <i class="material-icons" @click="sidebarToggle()">menu</i>
              </router-link>
            </li>
          </ul>
          <ul class="header__nav header__nav--right">
            <li class="header__nav-item">
              <span>User name</span>
            </li>
          </ul>
        </div>
      </header>
      <main class="main">
        <slot />
      </main>
    </div>
    <vue-snotify></vue-snotify>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'LayoutDefault',
  components: {
    Sidebar,
  },
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
.page-container
  transition: all .2s ease
  +forTablet
    padding-left: 250px
    +modifier('margin-left-100')
      padding-left: 100px
.header
  height: 65px
  border-bottom: 1px solid rgba(0,0,0,.0625)
  width: 100%
  background-color: $white
  +element('container')
    height: inherit
    display: flex
    align-items: center
    justify-content: space-between
  +element('nav')
    list-style-type: none
    padding: 0
    height: inherit
    +modifier('left')
      margin-left: 1em
    +modifier('right')
      margin-right: 1em
  +element('nav-item')
    height: inherit
    display: flex
    align-items: center
    text-align: center
.main
  overflow: hidden
  +forTablet
    // height: calc(100vh - 65px)
.sidebar-toggle
  color: #72777a
  font-size: 20px
  display: block
  padding: 0 15px 0 0
  min-height: 65px
  line-height: 65px
  transition: all .2s ease-in-out
</style>
