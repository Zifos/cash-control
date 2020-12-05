<template>
  <div class="button">
    <label>+</label>
  </div>
</template>

<script>
export default {
  name: 'NavButton'
}
</script>

<style lang="scss" scoped>
  .button{
    width: 5rem;
    height: 5rem;
    background: rgb(65,184,131);
    background: linear-gradient(115deg, rgba(65,184,131,1) 0%, rgba(50,150,177,1) 100%);
    box-shadow: 1px 1px 5px #aaa;
    color: #fff;
    border-radius: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
  }
</style>
