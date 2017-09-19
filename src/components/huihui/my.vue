<template>
    <div class="my">
        <v-header>
            <div></div>
            <h2>我的</h2>
            <p class="iconfont icon-erji"></p>
        </v-header>
        <v-footer></v-footer>
     </div>
</template>

<script>
    import vHeader from "../public/header.vue";
    export default {
        neme : "my",
        components : {
            vHeader
        }
    }
</script>


<style lang="less" scoped>
    header{
        h2{
            font-size: 0.3rem;
            font-weight: 100;
        }
        p{
            font-size: 0.6rem;
        }
    }
</style>