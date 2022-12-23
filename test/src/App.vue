<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {

    
    const a = ref('test string')
  }
})
</script>

<template>
  <div>
    {{ a }}
  </div>
</template>
