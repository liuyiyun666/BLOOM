<template>
    <div>
        <header>
            <router-link to="/search">
                <b class="iconfont icon-sousuo"></b>
                <input type="text" placeholder="请输入鲜花名称/关键字"/>
            </router-link>
        </header>

        <div class="content">
            <aside>
                <ul>
                    <li v-for="(ele,index) in classification" :class="{'active':ind === index}" @click="changeBgc(index)">{{ele.name}}</li>
                </ul>
            </aside>
            <div class="right">
                <div v-for="(ele,index) in classification" class="bigbox">
                    <div v-for="(data,i) in ele.themes" class="smallbox">
                        <img :src="data.iconURL"/>
                    </div>
                </div>
            </div>
        </div>


        <v-footer></v-footer>
    </div>
</template>

<script>
export default{
    data(){
        return{
            ind: 0
        }
    },
    methods:{
        changeBgc:function(index){
            this.ind =index
        }
    },
    computed:{
        classification(){
        //通过计算数据  实时接收数据
        return this.$store.state.classification
        }
    },
    mounted(){
        this.$store.dispatch("getClassification")
    }
}
</script>


<style lang="less" scoped>
    header{
        width:100%;
        height:0.9rem;
        border-bottom:solid 0.01rem #d9d9d9;
        position:fixed;
        left:0;
        top:0;
        background:#fff;
        z-index:1;
        a{
            width:100%;
            height:100%;
            display:block;
            position:relative;
            display:flex;
            align-items:center;
            b{
            width:0.28rem;
            height:0.3rem;
            display:block;
            position:absolute;
            left:1rem;
            font-size:0.3rem;
            top:0.3rem;
            color:gray;
        }
        input {
            display:block;
            width:5.92rem;
            height:0.58rem;
            border:none;
            background-color:rgb(237,237,237);
            border-radius:0.1rem;
            font-size:0.28rem;
            padding-left:0.6rem;
            margin:0 auto;
            outline:none;
        }
        }
    }
    

    .content{
        width:100%;
        background: #ededed;
        padding-top: 0.9rem;
        padding-bottom: 1rem;
        aside{
            width:1.8rem;
            height:100%;
            position:fixed;
            left:0;
            top:0.9rem;
            ul{
                .active{
                    background:#fff;
                    border-left:solid 0.09rem #333;
                }
                li{
                    width:100%;
                    height:1rem;
                    color:#333;
                    font-size:0.3rem;
                    line-height:1rem;
                    text-align:center;
                }
            }
        }
        .right{
            height:100%;
            background:white;
            margin-left: 1.9rem;
            padding-left:0.22rem;
            padding-top:0.22rem;
            .bigbox{
                width:6.0809rem;
                overflow:hidden;
                border-bottom: 0.01rem solid #ddd;
                margin-top: 0.22rem;
                .smallbox{
                    width:50%;
                    display: block;
                    float: left;
                    padding-right: 0.22rem;
                    box-sizing: border-box;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
            }
        }
    }
</style>