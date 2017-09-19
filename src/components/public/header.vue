<template>
  <header>
      <slot>内容</slot>
  </header>
</template>

<script>
    
</script>

<style lang="less" scoped>
  header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.9rem;
    background: #fff;
    padding: 0 0.24rem;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
  }
</style>
