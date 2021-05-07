<template>
  <div class="input__wrapper">
    <label>{{ label }}</label>
    <input :type="type" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  props: ['label', 'placeholder', 'type'],
}
</script>

<style lang="postcss" scoped>
.input__wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1rem 0;
  input {
    background: transparent;
    border: 2px solid #4c6ef5;
    border-radius: 0.2rem;
    min-height: 2.5rem;
    font-size: 1.25rem;
    padding: 0.25rem;
    width: 100%;
    color: #444;
  }
  label {
    font-size: 0.85rem;
    color: #364fc7;
    margin-bottom: 0.25rem;
  }
}
</style>
