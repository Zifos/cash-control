<template>
  <div class="form__wrapper">
    <div class="form__wrapper__actions">
      <button @click="openLauncherEntitiesDrawer" class="form__wrapper__actions-cancel">CANCELAR</button>
      <button class="form__wrapper__actions-save">GUARDAR</button>
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
      button {
        height: 2rem;
        font-size: .9rem;
        border-radius: .2rem;
      }
      &-cancel {
        color: #fa5252;
        background: #fff5f5;
        border: 1px solid #fa5252;
      }
      &-save {
        color: #40c057;
        background: #ebfbee;
        border: 1px solid #40c057;
      }
    }
  }
</style>
