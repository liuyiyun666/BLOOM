<template>
    <div>
        <v-header>
            <router-link to="/search" class="iconfont icon-sousuo"></router-link>
            <img src="https://m.bloomapp.com.cn/static/logo_new.815d1730.png" alt="">
            <p class="iconfont icon-erji"></p>
        </v-header>
        <v-footer></v-footer>
        <v-content>

        </v-content>
    </div>
</template>

<script>
    import vHeader from "../public/header.vue"
    import vContent from "../public/content.vue"

    export default {
        name : "home",
        components : {
            vHeader,
            vContent
        },
        data(){
            return{
                siwpeData: []
            }
        },
        mounted(){
            console.log(this);
        }
    }
</script>


<style lang="less" scoped>
    header{
        a{
            font-size: 0.6rem;
        }
        img{
            width: 2.24rem;
            height: 0.45rem;
        }
        p{
            font-size: 0.6rem;
        }
    }
</style>