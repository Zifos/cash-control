<template>
  <div :class="['button', mod]">
    <label>+</label>
  </div>
</template>

<script>
export default {
  name: 'NavButton',
  props: ['mod'],
}
</script>

<style lang="postcss" scoped>
.button {
  width: 5rem;
  height: 5rem;
  background: rgb(65, 184, 131);
  box-shadow: 1px 1px 5px #aaa;
  color: #fff;
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  transition: background-color 0.5s;
  label {
    transition: 0.5s;
    transform: rotate(0deg);
  }
}

.close {
  background: #fa5252;
  label {
    transform: rotate(135deg);
  }
}
</style>
