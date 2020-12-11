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
      box-shadow: 0px 2px 3px -2px #ccc;
      padding: 1rem;
      button {
        height: 2rem;
        font-size: .9rem;
        border-radius: .2rem;
        font-weight: bold;
        border: 0;
      }
      &-cancel {
        color: #fff;
        background: #fa5252;
        box-shadow: 1px 1px 6px -2px #c92a2a;
      }
      &-save {
        color: #fff;
        background: #40c057;
        box-shadow: 1px 1px 6px -2px #2b8a3e;
      }
    }
    &__content {
      padding: 1rem;
    }
  }
</style>
