<template>
  <div class="layout">
    <div class="layout__content">
      <router-view />
    </div>
    <nav-bar class="layout__navbar"/>
  </div>
</template>

<script>
import NavBar from '@/components/layout/NavBar'

export default {
  name: 'DefaultLayout',
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>
.layout{
  &__navbar{
    position: fixed;
    width: 100%;
    bottom: 0;
  }
}

</style>
