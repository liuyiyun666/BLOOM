<template>
    <div>
        <header>
            <b class="iconfont icon-sousuo"></b>
            <input type="text" placeholder="请输入鲜花名称/关键字"/>
            <router-link to="/classify">取消</router-link>
        </header>

        <div class="hot">
            <h3>热搜</h3>
            <div class="hotTag">教师节鲜花</div>
            <div class="hotTag">康乃馨</div>
            <div class="hotTag">百合花</div>
        </div>

        <div class="clearbox">
            <div class="clearbtn">清除搜索历史记录</div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="less" scoped>
    header{
        width:100%;
        height:0.9rem;
        background:#f0f0f0;
        border-bottom: 1px solid #d9d9d9;
        position:relative;
        font-size:0.3rem;
        display:flex;
        align-items:center;
        b{
            position:absolute;
            left:0.4rem;
            top:0.3rem;
            font-size:0.3rem;
        }
        input{
            display:block;
            width:4.84rem;
            height:0.584rem;
            border:none;
            outline:none;
            border-radius: 0.1rem;
            padding-left: 0.6rem;
            margin-left:0.24rem;
            font-size:0.3rem;
        }
        a{
            font-size:0.34rem;
            margin-left:0.8rem;
            text-decoration:none;
            color:#525252d;
        }
        }


        .hot{
            width:100%;
            height:1.18rem;
            border-bottom:0.01rem solid #d9d9d9;
            display:flex;
            align-items:center;
            h3{
                width:0.5078rem;
                height:0.688rem;
                font-size:0.3rem;
                margin-right:0.34rem;
                color:#171717;
                padding-left:0.36rem;
            }
            .hotTag{
                font-size:0.3rem;
                margin-right:0.34rem;
                color:#7b7b7b;
                padding:0.17rem;
                background:#f0f0f0;
                border-radius:0.1rem;
            }
        }


        .clearbox{
            height:2.3rem;
            border-top: 1px solid #d9d9d9;
            margin-top: -1px;
            display:flex;
            align-items:center;
            .clearbtn{
                width:4.22rem;
                height:0.8rem;
                border:solid 0.02rem #d9d9d9;
                line-height:0.8rem;
                text-align:center;
                font-size:0.28rem;
                border-radius:0.1rem;
                margin:0 auto;
                color: #767676;
            }
        }
</style>