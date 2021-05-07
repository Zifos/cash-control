<template>
  <div class="layout">
    <div class="layout__content">
      <router-view />
    </div>
    <drawer class="layout__drawer" :mod="drawerMod">
      <drawer-content :drawerCase="drawerCase" />
    </drawer>
    <nav-bar class="layout__navbar" :mod="navBarMod" />
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
    DrawerContent,
  },
  setup() {
    const { drawer, drawerCase, openFormDrawer, navBarMod, closeDrawer } = useLayoutStore()

    return {
      drawerMod: drawer,
      openFormDrawer,
      closeDrawer,
      drawerCase,
      navBarMod,
    }
  },
}
</script>

<style lang="postcss" scoped></style>
