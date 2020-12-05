<template>
  <div :class="['button', selected ? 'selected' : '']">
    <img :src="icons[icon]" />
    <label>{{label}}</label>
  </div>
</template>

<script>

export default {
  name: 'NavButton',
  props: {
    label: String,
    icon: String,
    selected: Boolean
  },
  data () {
    return {
      icons: {
        categories: require('@/assets/icons/categories-icon.svg'),
        logout: require('@/assets/icons/logout-icon.svg'),
        budgets: require('@/assets/icons/budgets-icon.svg'),
        accounts: require('@/assets/icons/accounts-icon.svg')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .button{
    width: 3.5rem;
    height: 3.5rem;
    border: 1px solid;
    border-image-slice: 1;
    border-width: 2px;
    color: #555;
    border: 1px solid #bfbfbf;
    border-radius: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: .1rem;
    label{
      font-size: .6rem;
    }
    img {
      max-height: 2rem;
    }
  }
  .selected {
    background: #ddd;
    border: 1px solid #ddd;
  }
</style>
