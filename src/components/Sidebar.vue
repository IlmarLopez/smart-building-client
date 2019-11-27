<template>
  <div class="sidebar">
    <div class="sidebar-inner">
      <div class="sidebar-logo">
        <router-link to="{ name: 'dashboard' }" class="sidebar-logo__link">
          <h5>Smart building <small>beta</small></h5>
        </router-link>
        <div class="sidebar-logo__toggle" @click="sidebarToggle">
          <span><i class="material-icons">close</i></span>
        </div>
      </div>
      <ul class="sidebar-menu">
        <li class="nav-item">
          <router-link
            :to="{ name: 'dashboard' }"
            class="nav-item__link"
            active-class="nav-item__link--active"
          >
            <span class="nav-item__icon-holder">
              <i class="material-icons">dashboard</i>
            </span>
            <span class="nav-item__title">Dashboard</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{ name: 'emissions' }"
            class="nav-item__link"
            active-class="nav-item__link--active"
          >
            <span class="nav-item__icon-holder">
              <i class="material-icons">cloud</i>
            </span>
            <span class="nav-item__title">Emissions</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Sidebar',
  data() {
    return {};
  },
  methods: {
    sidebarToggle() {
      this.$emit('sidebar-toggle');
    },
  },
};
</script>
<style scoped lang="sass">
.sidebar
  background-color: $white
  width: 250px
  overflow: hidden
  position: fixed
  top: 0
  bottom: 0
  left: 0
  transition: all .2s ease
  z-index: 1000
  box-shadow: 13px -2px 27px -12px rgba(41, 50, 66, 0.075)
  +modifier('is-collapsed')
    width: 0
    .nav-item
      +element('title')
        opacity: 0
    +forTablet
      width: 100px
      &:hover
        width: 250px
        .nav-item
          +element('title')
            opacity: 1
.sidebar-inner
  position: relative
  height: 100%
.sidebar-logo
  border-bottom: 1px solid rgba(0,0,0,.0625)
  border-right: 1px solid rgba(0,0,0,.0625)
  line-height: 0
  height: 65px
  padding: 0 20px
  transition: all .2s ease
  display: flex
  justify-content: space-between
  align-items: center
  +element('link')
    text-decoration: none
    color: $text-darkest
    font-size: 1.2em
    transition: all .3s ease-in-out
  +element('toggle')
    cursor: pointer
    +forTablet
      display: none
.sidebar-menu
  list-style-type: none
  position: relative
  border-right: 1px solid rgba(0,0,0,.0625)
  padding: 0
  margin: 0
  overflow: hidden
  height: calc(100vh - 65px)
  .nav-item
    &:first-child
      margin-top: 30px
    +element('link')
      color: $grey-dark
      text-decoration: none
      font-weight: 500
      padding: 5px 40px
      white-space: nowrap
      transition: all .3s ease
      display: flex
      align-items: center
      font-size: 1em
      &:hover
        color: $text-dodger-blue
      +modifier('active')
        background-color: rgba(0,0,0,0.03)
        color: $text-dodger-blue
    +element('icon-holder')
      min-width: 40px
      height: 35px
      line-height: 35px
      font-size: 20px
      display: inline-block
    +element('title')
</style>
