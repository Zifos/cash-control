<template>
  <div class="add-entity__wrapper" @click="openForm">
    <label>{{text.toUpperCase()}}</label>
    <div :class="['icon', color]">+</div>
  </div>
</template>

<script>
import useLayoutStore from '@/stores/layout.store'

export default {
  name: 'LaunchEntityFormButton',
  props: ['text', 'color', 'action', 'entity'],
  setup (props) {
    const { openFormDrawer } = useLayoutStore()

    const openForm = () => {
      openFormDrawer(props.entity, props.action)
    }

    return {
      openForm
    }
  }
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
          box-shadow: 1px 1px 6px -2px #2b8a3e;
          background: #40c057;
        }
        &.blue {
          box-shadow: 1px 1px 6px -2px #1864ab;
          background: #228be6
        }
        &.red {
          box-shadow: 1px 1px 6px -2px #c92a2a;
          background: #fa5252
        }
        &.yellow {
          box-shadow: 1px 1px 6px -2px #e67700;
          background: #fab005
        }
        &.orange {
          box-shadow: 1px 1px 6px -2px #d9480f;
          background: #fd7e14
        }
        &.indigo {
          box-shadow: 1px 1px 6px -2px #364fc7;
          background: #4c6ef5
        }
        &.cyan {
          box-shadow: 1px 1px 6px -2px #0b7285;
          background: #15aabf
        }
        &.violet {
          box-shadow: 1px 1px 6px -2px #5f3dc4;
          background: #7950f2
        }
        &.pink {
          box-shadow: 1px 1px 6px -2px #a61e4d;
          background: #e64980
        }
        &.teal {
          box-shadow: 1px 1px 6px -2px #087f5b;
          background: #12b886
        }
      }
    }
  }
</style>
