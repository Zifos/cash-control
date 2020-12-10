<template>
  <div class="form__wrapper">
    <div class="form__wrapper__actions">
      <button @click="openLauncherEntitiesDrawer">Cancelar</button>
      <button>Guardar</button>
    </div>
    <div class="form__wrapper__content">
      <input type="number"/>
    </div>
    {{ `${entity} - ${action}` }}
  </div>
</template>

<script>
import useLayoutStore from '@/stores/layout.store'

export default {
  name: 'FormBuilder',
  setup () {
    const { form, openLauncherEntitiesDrawer } = useLayoutStore()
    const { entity, action } = form.value
    return {
      openLauncherEntitiesDrawer,
      entity,
      action
    }
  }
}
</script>

<style lang="scss" scoped>
  .form__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    &__actions {
      display: flex;
      justify-content: space-between;
    }
  }
</style>
