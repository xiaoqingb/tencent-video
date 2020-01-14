<template>
  <div id="list-title">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'ListTitle'
}
</script>

<style lang='less' scoped>
    #list-title{
        font-size: 18px;
        padding: 10px 0 0 0;
        font-weight: 700;
    }
</style>
