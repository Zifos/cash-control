<template>
  <div>
    {{ `${entity} - ${action}` }}
  </div>
</template>

<script>
import useLayoutStore from '@/stores/layout.store'

export default {
  name: 'FormBuilder',
  setup () {
    const { form } = useLayoutStore()
    const { entity, action } = form.value
    return {
      entity,
      action
    }
  }
}
</script>
