<template>
<div>
  <select v-model="modelValue" @change="changeOptions">
      <option disabled value=""> Выберите из списка </option>
      <option v-for="option in options" :key="option.value" :value="option.value">{{option.name}}</option>
  </select>
  </div>
</template>

<script> 
import toggleMixin from '@/mixins/toggleMixin'
export default {
name:'my-select',
mixins:[ toggleMixin ]
}
</script>

<style scoped>

</style>