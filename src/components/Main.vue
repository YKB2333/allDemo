<template>
    <main>
      <Header></Header>
      <Lunbotu></Lunbotu>
      <img  src="//m.360buyimg.com/mobilecms/s750x230_jfs/t1/42333/1/123/176383/5cc06e38Ef06c5236/bd36399e97fb0807.jpg!q70.jpg.dpg" class="opa1">
      <div class="desList">
           <a data-role="ga" v-for="(item,idx) in desList" data-done="频道" href="javascript:;" >
				<img src="../assets/img/icon_H1.png" class="icon-show"><span>{{item}}</span>
			</a>
       </div>
       <div class="news_list_wrapper">
           <img  src="//m.360buyimg.com/mobilecms/jfs/t14752/82/2574581467/6535/c8158ace/5aa8935bN94e31ff6.jpg.dpg">
            <a  href="javascript:void(0);" >
                <span class="j_event_param" style="display: none;"></span>
                <span class="red">热门</span>实测iQOO、米9指纹识别性能悬殊
            </a>
            <a class="news_more" href="javascript:;"><i class="line"></i>更多</a>
       </div>
        <div class="floor j_expo expo_loaded">
           <a><img src="https://m.360buyimg.com/mobilecms/jfs/t1/24056/17/2005/80908/5c186655E14dc7cf2/820a7029a2540e25.jpg!q70.jpg.dpg" class="icon-show"></a>
           <a><img src="https://m.360buyimg.com/mobilecms/jfs/t1/26685/26/1930/47992/5c186663Ee07857b2/533b3a90ad7aa17b.jpg!q70.jpg.dpg" class="icon-show"></a>
           <a><img src="https://m.360buyimg.com/mobilecms/jfs/t1/18133/22/6850/53621/5c63f35bE724cd222/c62f916947c69035.jpg!q70.jpg.dpg" class="icon-show"></a>
       </div>
        <div>
            <div class="title_wrap">
                <span style="color:red;">京东秒杀</span>
                <a  href="javascript:void(0);" >
                    <span class="j_event_param" style="display: none;"></span>
                    <span class="red">15点场</span>
                </a>
                <a class="news_more" href="javascript:;"><i class="line"></i>更多秒杀</a>
            </div>
            <Yswiper></Yswiper>
        </div>
        <StyleClass></StyleClass>
        <div class="j_event_param">
            <img src="https://m.360buyimg.com/mobilecms/jfs/t1/39921/14/2426/242933/5cc04847E797b4425/82a52ac1678664b5.gif">
        </div>
    </main>
</template>
<script>
import Header from "./Header";
import Lunbotu from "./Lunbotu";
import Yswiper from "./Yswiper";
import StyleClass from "./StyleClass";

export default {
  props:["activeIdx"],
  data() {
    return {
        desList:["京东超市","京东超市","京东超市","京东超市","京东超市","京东超市","京东超市","京东超市","京东超市","京东超市",]
    };
  },
  components:{
      Header,
      Lunbotu,
      Yswiper,
      StyleClass
  },
  methods:{
  },
  mounted(){
      
  }
};
</script>
<style scoped lang="scss">
main{
    .opa1{
        width:100%;
    }
    .desList {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        clear: both;
        background: #fff;
        a {
        display: block;
        width: 1.8rem;
        height: 2rem;
        text-align: center;
        margin: 0.3rem 0.2rem 0 0;
        border-radius: 0.09rem;
        overflow: hidden;
        color: #333;
        font-size: 0.2rem;
        .icon-show {
            display: inline-block;
            width: 1.7rem;
            height: 1.4rem;
            }
        }
    }
    .news_list_wrapper,.j_expo,.title_wrap{
        display:flex;
        justify-content:space-between;
    }
    .news_list_wrapper{
        padding-right:.2rem;
        padding-left:.2rem;
        margin-top:.3rem;
        a{
            color:#000;
        }
        img{
            width: 1.65rem;
            height: .4rem;
        }
        .red{
            color:red;
            padding:.1rem;
        }
    }
    .j_expo{
        padding-right:.1rem;
        padding-left:.1rem;
        margin-top:.3rem;
        a{
            &:first-child{
                flex:2;
                height: 3rem;
            }
            &:nth-child(2){
                flex:1;
                height: 3rem;
            }
            &:nth-child(3){
                flex:1;
                height: 3rem;
            }
            img{
                width:100%;
            }
        }
    }
    .title_wrap{
        padding-right:.1rem;
        padding-left:.1rem;
        margin-top:.3rem;
    }
    .j_event_param{
        img{
            width:100%;
        }
    }
}
</style>

