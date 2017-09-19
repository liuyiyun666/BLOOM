<template>
    <div class="footer">
        <ul>
            <li>
                <p class="iconfont icon-shouye-copy"></p>
                <router-link to="/" exact-active-class="active">首页</router-link>
            </li>
            <li>
                <p class="iconfont icon-fenlei"></p>
                <router-link to="/classify" exact-active-class="active">分类</router-link>
            </li>
            <li>
                <p class="iconfont icon-wode"></p>
                <router-link to="my" exact-active-class="active">我的</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" >
.footer {
    width: 100%;
    height: 1rem;
    border-top: solid 0.01rem #ddd;
    position: fixed;
    left: 0;
    bottom: 0;
    font-size: 0.3rem;
    background:white;
    width: 333px;
    ul {
        li {
        float: left;
        width: 33.3%;
        text-align: center;
        margin-top:0.1rem;
        p{
            font-size: 0.4rem !important;
            color:gray;
        }
        .active{
            color: pink;
        }
    }
}
}
</style>