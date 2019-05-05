<template>
  <div>
    <h1>Tree data builder</h1>
    <p>
      Build data trees optimized for d3 structure quickly with this small app!
    </p>
    <div class="children-wrapper">
      <Instance v-model="model" :level="0" />
    </div>
    <p>
      JSON result
    </p>
    <pre>{{ model }}</pre>
  </div>
</template>

<script>
import { Child } from './models/child';

import Instance from './components/Instance'

export default {
  data () {
    return {
      model: new Child()
    }
  },
  components: {
    Instance
  }
};
</script>
