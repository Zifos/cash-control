<template>
  <div>
    <div v-if="drawerCase === 'addEntitiesMenu'">
      <launch-entity-form-button
        v-for="item in entitiesItems"
        :key="`${item.entity}`"
        :color="item.color"
        :text="item.text"
        :action="item.action"
        :entity="item.entity"
      />
    </div>
    <div v-else-if="drawerCase === 'form'">
      <form-builder />
    </div>
  </div>
</template>

<script>
import LaunchEntityFormButton from './LaunchEntityFormButton'
import FormBuilder from '../forms/FormBuilder'

export default {
  name: 'DrawerContent',
  components: {
    LaunchEntityFormButton,
    FormBuilder
  },
  props: {
    drawerCase: String
  },
  data () {
    return {
      entitiesItems: [
        { text: 'Registrar categoría', color: 'violet', entity: 'category', action: 'create' },
        { text: 'Registrar Límite', color: 'indigo', entity: 'budget', action: 'create' },
        { text: 'Registrar Cuenta', color: 'cyan', entity: 'account', action: 'create' },
        { text: 'Registrar Ingreso', color: 'teal', entity: 'income', action: 'create' },
        { text: 'Registrar Gasto', color: 'pink', entity: 'expense', action: 'create' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
