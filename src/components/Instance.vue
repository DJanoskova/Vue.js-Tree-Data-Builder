<template>
  <div class="child">
    <span class="handle mr-1">
      <i class="el-icon-rank" />
    </span>

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

      <Draggable v-model="model.children" handle=".handle">
        <Instance v-for="(instance, key) in model.children"
          v-model="model.children[key]"
          :key="instance.id"
          :level="level + 1"
          @onDelete="handleDelete"
        />
      </Draggable>

    </div>
  </div>
</template>

<script>
import { Input, Button, Tooltip } from 'element-ui'
import Draggable from 'vuedraggable'

import { Child } from '../models/child';

export default {
  props: {
    value: Object,
    level: Number
  },
  data () {
    return {
      model: JSON.parse(JSON.stringify(this.value))
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
  watch: {
    model: {
      deep: true,
      handler () {
        this.$emit('input', this.model)
      }
    }
  },
  components: {
    [Input.name]: Input,
    [Button.name]: Button,
    [Tooltip.name]: Tooltip,
    Instance: () => import('./Instance'),
    Draggable
  },
  mounted () {
    this.$refs.input.focus()
  }
}
</script>
