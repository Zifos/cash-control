<template>
  <div class="form__wrapper">
    <div class="form__wrapper__actions">
      <button @click="openLauncherEntitiesDrawer" class="form__wrapper__actions-cancel">CANCELAR</button>
      <button class="form__wrapper__actions-save">GUARDAR</button>
    </div>
    <div class="form__wrapper__content">
      <custom-input label="Titulo" placeholder="Nombra tu categoría" type="text" />
      <custom-input label="Titulo" placeholder="Nombra tu categoría" type="text" />
      <custom-input label="Titulo" placeholder="Nombra tu categoría" type="text" />
    </div>
  </div>
</template>

<script>
import useLayoutStore from '@/stores/layout.store'
import CustomInput from './CustomInput.vue'

export default {
  name: 'FormBuilder',
  components: {
    CustomInput
  },
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
        font-weight: bold;
      }
      &-cancel {
        color: #fa5252;
        background: #fff5f5;
        border: 2px solid #fa5252;
      }
      &-save {
        color: #40c057;
        background: #ebfbee;
        border: 2px solid #40c057;
      }
    }
    &__content {
      padding: 1rem;
    }
  }
</style>
