<template>
  <div
    :class="['drawer__wrapper', mod]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Wrapper',
  props: ['mod']
}
</script>

<style>
  .drawer__wrapper {
    width: 100vw;
    background: #fff;
    position: fixed;
    transition: .5s;
    padding: 1.5rem 1.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-end;
    bottom: 0;
  }
  .complete {
    height: 100vh;
  }
  .three-quarters {
    height: 75vh;
    border-radius: 1rem;
    box-shadow: 0px 0px 1rem #555;
  }
  .half {
    height: 50vh;
    border-radius: 1rem;
    box-shadow: 0px 0px 1rem #555;
  }
  .hide {
    height: 0vh;
  }
</style>
