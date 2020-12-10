import { reactive, toRefs, readonly } from 'vue'

const state = reactive({
  drawer: 'hide',
  drawerCase: null,
  form: {
    entity: null,
    action: null
  },
  principalButton: 'add',
  selectedSection: null
})

export default function () {
  const openLauncherEntitiesDrawer = () => {
    state.drawer = 'half'
    state.principalButton = 'close'
    state.drawerCase = 'addEntitiesMenu'
  }

  const openFormDrawer = (entity, action) => {
    state.drawer = 'complete'
    state.drawerCase = 'form'
    state.form.entity = entity
    state.form.action = action
  }

  const closeDrawer = () => {
    state.drawer = 'hide'
    state.principalButton = 'add'
  }

  const changeSection = (section) => {
    state.selectedSection = section
  }

  return {
    openLauncherEntitiesDrawer,
    openFormDrawer,
    closeDrawer,
    changeSection,
    ...toRefs(readonly(state))
  }
}
