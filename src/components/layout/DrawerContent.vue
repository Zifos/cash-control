<template>
  <div class="drawer-content__wrapper">
    <transition>
      <div v-if="drawerCase === 'addEntitiesMenu'" class="drawer-content__wrapper__case-container">
        <launch-entity-form-button
          v-for="item in entitiesItems"
          :key="`${item.entity}`"
          :color="item.color"
          :text="item.text"
          :action="item.action"
          :entity="item.entity"
        />
      </div>
      <div v-else-if="drawerCase === 'form'" class="drawer-content__wrapper__case-container">
        <form-builder />
      </div>
    </transition>
  </div>
</template>

<script>
import LaunchEntityFormButton from './LaunchEntityFormButton'
import FormBuilder from '../forms/FormBuilder'

export default {
  name: 'DrawerContent',
  components: {
    LaunchEntityFormButton,
    FormBuilder,
  },
  props: {
    drawerCase: String,
  },
  data() {
    return {
      entitiesItems: [
        {
          text: 'Registrar categoría',
          color: 'violet',
          entity: 'category',
          action: 'create',
        },
        {
          text: 'Registrar Límite',
          color: 'indigo',
          entity: 'budget',
          action: 'create',
        },
        {
          text: 'Registrar Cuenta',
          color: 'cyan',
          entity: 'account',
          action: 'create',
        },
        {
          text: 'Registrar Ingreso',
          color: 'teal',
          entity: 'income',
          action: 'create',
        },
        {
          text: 'Registrar Gasto',
          color: 'pink',
          entity: 'expense',
          action: 'create',
        },
      ],
    }
  },
}
</script>

<style lang="postcss" scoped>
.drawer-content__wrapper {
  height: 100%;
  &__case-container {
    height: 100%;
  }
}
</style>
