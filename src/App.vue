<template>
  <div>
    <h1>Tree data builder</h1>
    <p>
      Build data trees optimized for d3 structure quickly with this app!
    </p>

    <div class="text-muted">
      You can pass an existing JSON config
      <ElInput v-model="modelJson" class="ml-1 input-big" />
    </div>

    <div class="children-wrapper">
      <Instance v-model="model" :level="0" />
    </div>

    <p>
      JSON result
    </p>
    <ElTooltip content="Click to copy to clipboard">
      <pre @click="copyData">{{ model }}</pre>
    </ElTooltip>

    <hr />

    <div class="text-center">
      <a href="https://github.com/DJanoskova/Vue.js-Tree-Data-Builder" target="_blank">
        https://github.com/DJanoskova/Vue.js-Tree-Data-Builder
      </a>
    </div>
  </div>
</template>

<script>
import { Tooltip, Input } from 'element-ui'

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
  computed: {
    modelJson: {
      get () {
        return JSON.stringify(this.model)
      },
      set (value) {
        this.model = JSON.parse(value)
      }
    }
  },
  components: {
    [Tooltip.name]: Tooltip,
    [Input.name]: Input,
    Instance
  }
};
</script>
