<template>
  <div class="layout">
    <div class="layout__content">
      <router-view />
    </div>
    <drawer class="layout__drawer" :mod="drawerMod">
      <add-entity text="Ingresar límite" color="blue"></add-entity>
      <add-entity text="Ingresar categoría" color="green" @click="closeDrawer"></add-entity>
      <add-entity text="Ingresar ingreso" color="yellow"></add-entity>
      <add-entity text="Ingresar gasto" color="orange"></add-entity>
      <add-entity text="Ingresar cuenta" color="red"></add-entity>
    </drawer>
    <nav-bar class="layout__navbar"/>
  </div>
</template>

<script>
import NavBar from '@/components/layout/NavBar'
import Drawer from '@/components/layout/Drawer'
import AddEntity from '@/components/layout/AddEntity'
import useLayoutStore from '@/stores/layout.store'

export default {
  name: 'DefaultLayout',
  components: {
    NavBar,
    Drawer,
    AddEntity
  },
  setup () {
    const { drawer, closeDrawer } = useLayoutStore()

    return {
      drawerMod: drawer,
      closeDrawer
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
