<template>
  <input :value="modelValue" @input="updateInput" type="text">
</template>

<script>
export default {
name:'my-input',
props:{
  modelValue:[String,Number]
},
methods:{
  updateInput(event){
    this.$emit('update:modelValue',event.target.value)

  }
}
}
</script>

<style scoped>
input{
  width: auto;
  border: 1px solid grey;
  padding: 10px 20px;
  margin: 10px 0;
}
</style>

