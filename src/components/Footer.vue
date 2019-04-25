<template>
  <footer>
    <ul>
      <li :class="{active:index==activeIdx}" :index="item+''" v-for="(item,index) in  mun" :key="index"  >
        <i :class="item.classname" ></i>
        <span>{{item.name}}</span>
      </li>
    </ul>
  </footer>
</template>
<script>
export default {
  props:["activeIdx"],
  data() {
    return {
        mun: [
        {
          name: "首页",
          classname: "iconfont icon-shouye"
        },
        {
          name: "目的地",
          classname: "iconfont icon-dingwei"
        },
        {
          name: "发现",
          classname: "iconfont icon-shezhi"
        },
        {
          name: "客服",
          classname: "iconfont icon-kefu"
        },
        {
          name: "我的",
          classname: "iconfont icon-wode"
        }
      ],
    };
  },
  methods:{
  }
};
</script>
<style scoped lang="scss">
footer {
  z-index: 999;
  background: #fff;
}
footer ul {
  width: 100%;
  height: 1.306667rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
footer ul li {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(143, 141, 141);
  font-size: 0.266667rem;
}
footer ul li .iconfont {
  font-size: 0.666667rem;
}
footer ul li.active {
  color: rgb(33, 122, 33);
  .iconfont {
    color: rgb(33, 122, 33);
  }
}
</style>

