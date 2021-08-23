<template>
  <div class="dialoge" v-if="show" @click.stop="hideDialoge">
      <div @click.stop class="dialoge-content">
          <slot></slot>
      </div>

  </div>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin'
export default {
name:'my-dialoge',
mixins:[ toggleMixin ]
}
</script>

<style scoped>
.dialoge{
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0,0,0, 0.5);
    position:fixed;
    display: flex;
    justify-content: center;
    align-items: center;
}
.dialoge-content{
    margin:auto;
    background: white;
    border-radius: 10px;
    min-height: auto;
    min-width: 800px;
    padding: 10px 20px;
}
</style>

