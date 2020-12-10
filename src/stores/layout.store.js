import { reactive, toRefs, readonly } from 'vue'

const state = reactive({
  drawer: 'hide',
  principalButton: 'add',
  selectedSection: null
})

export default function () {
  const openAddEntityDrawer = () => {
    state.drawer = 'half'
    state.principalButton = 'close'
  }

  const closeDrawer = () => {
    state.drawer = 'hide'
    state.principalButton = 'add'
  }

  const changeSection = (section) => {
    state.selectedSection = section
  }

  return {
    openAddEntityDrawer,
    closeDrawer,
    changeSection,
    ...toRefs(readonly(state))
  }
}
