<template>
  <div
    :class="['navbar', mod]">
    <nav>
      <nav-button
        v-for="button in navButtons"
        :key="`button-${button.name}`"
        :label="button.label"
        :icon="button.icon"
        :selected="selectedSection === button.name"
        @click="changeSection(button.name)"
      />
    </nav>
    <div class="navbar__primary-action">
      <add-button
        class="primary-action__button"
        :mod="principalButton"
        @click="principalAction"
      />
    </div>
  </div>
</template>

<script>
import NavButton from './NavButton'
import AddButton from './AddButton'
import useLayoutStore from '@/stores/layout.store'

export default {
  name: 'NavBar',
  components: {
    NavButton,
    AddButton
  },
  props: [
    'mod'
  ],
  data () {
    return {
      navButtons: [
        { label: 'Salir', icon: 'logout', name: 'logout' },
        { label: 'Categorías', icon: 'categories', name: 'categories' },
        { label: 'Límites', icon: 'budgets', name: 'budgets' },
        { label: 'Cuentas', icon: 'accounts', name: 'accounts' }
      ]
    }
  },
  setup () {
    const {
      selectedSection,
      principalButton,
      changeSection,
      openLauncherEntitiesDrawer,
      closeDrawer
    } = useLayoutStore()

    const principalAction = () => {
      switch (principalButton.value) {
        case 'add':
          openLauncherEntitiesDrawer()
          break
        case 'close':
          closeDrawer()
          break
      }
    }

    return {
      principalButton,
      changeSection,
      selectedSection,
      principalAction
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar{
  background: #fff;
  border-top: 1px solid #ccc;
  display: flex;
  padding: .5rem .25rem;
  nav{
    display: flex;
    justify-content: space-around;
    flex: 9 0 0;
  }
  &__primary-action{
    flex: 3 0 0;
    display: flex;
    justify-content: center;
    .primary-action__button{
      position: absolute;
      bottom: .5rem;
    }
  }
}
</style>
