<template>
  <div class="child">
    <ElInput
      v-model="model.name"
      placeholder="Name"
      class="input"
      ref="input"
    />
    <ElInput
      v-model.number="model.value"
      placeholder="Value"
      class="input-small ml-1"
    />

    <ElTooltip :content="`Add child to ${model.name}`">
      <ElButton
        circle
        icon="el-icon-plus"
        type="primary"
        size="small"
        @click="addChild"
        class="ml-1"
      />
    </ElTooltip>

    <ElTooltip :content="`Delete ${model.name}`">
      <ElButton
        circle
        icon="el-icon-delete"
        size="small"
        @click="$emit('onDelete', model.id)"
        class="ml-1"
        plain
        :disabled="level < 1"
      />
    </ElTooltip>

    <div class="children-wrapper" v-if="model.children.length">
      <Instance v-for="(instance, key) in model.children"
        v-model="model.children[key]"
        :key="instance.id"
        :level="level + 1"
        @onDelete="handleDelete"
      />
    </div>
  </div>
</template>

<script>
import { Input, Button, Tooltip } from 'element-ui'

import { Child } from '../models/child';

export default {
  props: {
    value: Object,
    level: Number
  },
  data () {
    return {
      model: this.value
    }
  },
  methods: {
    addChild () {
      this.model.children.push(new Child())
    },
    handleDelete (id) {
      this.model.children = this.model.children.filter(child => child.id !== id)
    }
  },
  components: {
    [Input.name]: Input,
    [Button.name]: Button,
    [Tooltip.name]: Tooltip,
    Instance: () => import('./Instance')
  },
  mounted () {
    this.$refs.input.focus()
  }
}
</script>
