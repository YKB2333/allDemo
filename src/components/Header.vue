<template>
     <header id="header">
        <ul>
            <li><i class="iconfont icon-list"></i>
            </li>
            <li><input type="search" placeholder="Apple产品京东超级品牌日"></li>
            <li><span>登录</span></li>
        </ul>
    </header>
</template>
<script>
export default {
  data(){
    return{
      name:"YKB"
    }
  },
  props:["title"],
  methods:{
        goback(){
        this.$router.back();
    }
  }
}
</script>
<style scoped lang="scss">
#header{
    position:fixed;
    width:100%;
    z-index:10;
}
#header ul{
    height: 1.333333rem;
    display:flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    color: #fff;
    li{
        &:first-child{
           width: 1.573333rem;
           padding-left: 0.515625rem;
           margin-right: 0.415625rem;
        }
        &:nth-child(2){
            flex:1;
            border:none;
            border-radius:.75rem;
            background:#fff;
            input{
                height:.85rem;
                border:none;
            }
        }
        &:nth-child(3){
            width: 1.573333rem;
            text-align: right;
            padding-right: 0.515625rem;
            margin-left: 0.415625rem;
            font-size: .5rem;
        }
        i{
            font-size: 0.873333rem;
        }
    }
    
}

</style>

