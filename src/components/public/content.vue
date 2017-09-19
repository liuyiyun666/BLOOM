<template>
    <div class="content">
        <slot></slot>
    </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
    header~.content{
        padding-top: 0.9rem;
    }
    footer~.content{
        padding-bottom: 0.1rem;
    }
</style>
