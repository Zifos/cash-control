<template>
  <div class="layout">
    <div class="layout__content">
      <router-view />
    </div>
    <drawer class="layout__drawer" :mod="drawerMod">
      <drawer-content :drawerCase="drawerCase" />
    </drawer>
    <nav-bar class="layout__navbar"/>
  </div>
</template>

<script>
import NavBar from '@/components/layout/NavBar'
import Drawer from '@/components/layout/Drawer'
import DrawerContent from '@/components/layout/DrawerContent'
import useLayoutStore from '@/stores/layout.store'

export default {
  name: 'DefaultLayout',
  components: {
    NavBar,
    Drawer,
    DrawerContent
  },
  setup () {
    const { drawer, drawerCase, openFormDrawer } = useLayoutStore()

    return {
      drawerMod: drawer,
      openFormDrawer,
      drawerCase
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  &__navbar {
    position: fixed;
    width: 100%;
    bottom: 0;
  }
}

</style>
