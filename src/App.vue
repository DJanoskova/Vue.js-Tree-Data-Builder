<template>
  <div>
    <h1>Tree data builder</h1>
    <p>
      Build data trees optimized for d3 structure quickly with this app!
    </p>
    <div class="children-wrapper">
      <Instance v-model="model" :level="0" />
    </div>
    <p>
      JSON result
    </p>

    <ElTooltip content="Click to copy to clipboard">
      <pre @click="copyData">{{ model }}</pre>
    </ElTooltip>
  </div>
</template>

<script>
import { Tooltip } from 'element-ui'

import { Child } from './models/child'

import Instance from './components/Instance'

export default {
  data () {
    return {
      model: new Child()
    }
  },
  methods: {
    copyData () {
      this.$clipboard(this.model)
    }
  },
  components: {
    [Tooltip.name]: Tooltip,
    Instance
  }
};
</script>
