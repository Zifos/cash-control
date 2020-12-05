<template>
  <div class="navbar">
    <nav>
      <nav-button label="Salir" icon="logout" />
      <nav-button label="Categorías" icon="categories" />
      <nav-button label="Límites" icon="budgets" />
      <nav-button label="Cuentas" icon="accounts" selected/>
    </nav>
    <div class="navbar__primary-action">
      <add-button class="primary-action__button"/>
    </div>
  </div>
</template>

<script>
import NavButton from './NavButton'
import AddButton from './AddButton'

export default {
  name: 'NavBar',
  components: {
    NavButton,
    AddButton
  }
}
</script>

<style lang="scss" scoped>
.navbar{
  background: #fff;
  border-radius: 1rem 1rem 0 0;
  box-shadow: 0px 0px 4px #ccc;
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
