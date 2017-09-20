<template>
    <div>
        <v-header>
            <router-link to="/search" class="iconfont icon-sousuo"></router-link>
            <img src="https://m.bloomapp.com.cn/static/logo_new.815d1730.png" alt="">
            <p class="iconfont icon-erji"></p>
        </v-header>
        <v-footer></v-footer>
        <v-content>
            <div class="lunbo">
                <mt-swipe :auto="4000">
                    <mt-swipe-item v-for="(ele,index) in siwpeData" :key="index">
                        <img :src="ele.photo.URL" alt="">
                    </mt-swipe-item>
                </mt-swipe>
                <ul>
                    <li v-for="(ele,index) in lunboBom">
                        <span :class="ele.icon"></span>
                        <span>{{ele.txt}}</span>
                    </li>
                </ul>
            </div>
            <div class="home-list">
                <div class="home-gengduo">
                    <div class="home-gengduo-left"></div>
                    <div class="home-gengduo-txt">红玫瑰臻选</div>
                    <a href="">更多></a>
                </div>
                <img src="https://dn-g405gbtt.qbox.me/e1387bd6e6d62d337656.jpg" alt="">
                <ul>
                    <li v-for="(ele,index) in homeList">
                        <div class="home-img">
                            <img :src="ele.cover.URL" alt="">
                        </div>
                        <div class="home-content">
                            <h3>{{ele.name}}</h3>
                            <h4>{{ele.subname}}</h4>
                            <p>￥{{ele.price/100}}.00</p>
                        </div>
                    </li>
                </ul>
            </div>
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
                siwpeData: [],
                lunboBom: [
                    {icon:"iconfont icon-mofang--",txt:"匠心花艺严选"},
                    {icon:"iconfont icon-shijian",txt:"精准实时配送"},
                    {icon:"iconfont icon-zan",txt:"优质体现流程"}
                ],
                homeList:[]
            }
        },
        mounted(){
            // console.log(this);
            this.$http.get("/1.6/news/get?appName=BLOOM").then(res => {
                var swipeList = res.data.object;
                this.siwpeData = swipeList;
            })
            this.$http.get("/1.6/commodity/project/search?limit=2&skip=0&appName=BLOOM").then(res => {
                console.log(res);
                console.log(res.data.object[0].commodities);
                var home = res.data.object[0].commodities;
                this.homeList = home;
            })
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
    .content{
        .lunbo{
            .mint-swipe{
                width: 100%;
                height: 3.93rem;
                overflow: hidden;
                div{
                    width: 100%;
                }
            }
            ul{
                overflow: hidden;
                height: 0.7rem;
                line-height: 0.1rem;
                li{
                    width: 33%;
                    float: left;
                    text-align: center;
                    height: 0.7rem;
                    span{
                        font-size: 0.2rem;
                    }
                }
            }
        }
        .home-list{
            padding: 0.28rem;
            .home-gengduo{
                height: 0.94rem;
                .home-gengduo-left{
                    width: 0.1rem;
                    height: 0.38rem;
                    background: #ff5c41;
                    float: left;
                    margin-top: 0.23rem;
                    margin-right: 0.15rem;
                    border-radius: 0.08rem;
                }
                .home-gengduo-txt{
                    font-size: 0.32rem;
                    float: left;
                    line-height: 0.84rem;
                    color: #1b1a1b;
                }
                a{
                    float: right;
                    color: #404040;
                    line-height: 0.84rem;
                    font-size: 0.32rem;
                }
            }
            img{
                width: 100%;
                height: auto;
            }
            ul{
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                li{
                    width: 48%;
                    float: left;
                    border: 1px solid #ccc;
                    border-radius: 0.1rem;
                    margin-bottom: 0.2rem;
                    box-sizing: border-box;
                    .home-img{
                        height: 5.88rem;
                        overflow: hidden;
                        img{
                            width: 100%;
                            height: auto;
                        }
                    }
                    .home-content{
                        padding: 0 .15rem;
                        h3{
                            font-size: 0.15rem;
                            font-weight: 100;
                        }
                        h4{
                            font-size: 0.1rem;
                            font-weight: 400;
                            line-height: 0.35rem;
                            color: #999;
                        }
                        p{
                            font-size: 0.29rem;
                            color: #df4d28;
                            border-top: 1px solid #f5f5f5;
                            margin-top: 0.1rem;
                            line-height: 1rem;
                        }
                    }
                }
            }
        }
    }
</style>