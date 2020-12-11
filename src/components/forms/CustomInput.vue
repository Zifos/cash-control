<template>
  <div class="input__wrapper">
    <label>{{ label }}</label>
    <input :type="type" :placeholder="placeholder"/>
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  props: ['label', 'placeholder', 'type']
}
</script>

<style lang="scss" scoped>
.input__wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1rem 0;
  input {
    background: transparent;
    border: 2px solid #4c6ef5;
    border-radius: .2rem;
    min-height: 2.5rem;
    font-size: 1.25rem;
    padding: .25rem;
    width: 100%;
    color: #444;
  }
  label {
    font-size: .85rem;
    color: #364fc7;
    margin-bottom: .25rem;
  }
}

</style>
