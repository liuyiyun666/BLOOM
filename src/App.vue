<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
    margin:0;
    padding:0;
}
fieldset,img {
    border:none;
}
/* 去掉 firefox 下此元素的边框 */
abbr,acronym {
    border:none;
    font-variant:normal;
}
/* 一致的 del 样式 */
del {
    text-decoration:line-through;
}
address,caption,cite,code,dfn,em,th,var {
    font-style:normal;
    font-weight:500;
}
/* 去掉列表前的标识，li 会继承 */
ol,ul {
    list-style:none;
}
/* 让链接在 hover 状态下显示下划线 */
a:hover {
    text-decoration:none;
}
/* 默认不显示下划线，保持页面简洁 */
ins,a {
    text-decoration:none;
}
/* 去除 ie6 & ie7 焦点点状线 */
a:focus,*:focus {
    outline:none;
}

.setfz(1600px);
.setfz(1024px);
.setfz(800px);
.setfz(768px);
.setfz(750px);
.setfz(640px);
.setfz(600px);
.setfz(414px);
.setfz(412px);
.setfz(384px);
.setfz(375px);
.setfz(360px);
.setfz(320px);

.setfz(@width){
    @fz : @width / 1024 * 100px;

    @media screen and (max-width : (@width+2px) ){
        html{
            font-size: @fz;
        }
    }
}
body{
    background: #fff;
}

</style>
