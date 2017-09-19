<template>
    <div>
        <header>
            <router-link to="/search">
                <b class="iconfont icon-sousuo"></b>
                <input type="text" placeholder="请输入鲜花名称/关键字"/>
            </router-link>
        </header>
        <v-footer></v-footer>
    </div>
</template>

<script>
    
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
        position:relative;
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
            left:0.8rem;
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
    
</style>