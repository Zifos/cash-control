import { reactive, toRefs, readonly, computed } from 'vue'

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

  const navBarMod = computed(() => {
    return state.drawerCase === 'form' ? 'hide' : ''
  })

  return {
    openLauncherEntitiesDrawer,
    openFormDrawer,
    closeDrawer,
    changeSection,
    navBarMod,
    ...toRefs(readonly(state))
  }
}
