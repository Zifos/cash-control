<template>
  <div class="add-entity__wrapper">
    <label>{{text.toUpperCase()}}</label>
    <div :class="['icon', color]">+</div>
  </div>
</template>

<script>
export default {
  name: 'AddEntity',
  props: ['text', 'color']
}
</script>

<style lang="scss" scoped>
  .add-entity {
    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: .45rem 0;
      border-top: 1px solid #ddd;
      label{
        font-size: .75rem;
        color: #333
      }
      .icon{
        font-size: 1.5rem;
        width: 2rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 1rem;
        margin-left: .75rem;
        color: white;
        &.green {
          box-shadow: 1px 1px 5px -1px rgb(47, 160, 109);
          background: #0c4b5a;
        }
        &.blue {
          box-shadow: 1px 1px 5px -1px rgb(47, 102, 160);
          background: #071f3d
        }
        &.red {
          box-shadow: 1px 1px 5px -1px rgb(94, 47, 160);
          background: #bc342c
        }
        &.yellow {
          box-shadow: 1px 1px 5px -1px rgb(160, 156, 47);
          background: #f6c76f
        }
        &.orange {
          box-shadow: 1px 1px 5px -1px rgb(160, 124, 47);
          background: #ed4534
        }
      }
    }
  }
</style>
