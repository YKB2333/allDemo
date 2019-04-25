<template>
    <div class="floor j_expo expo_loaded" event_id="MHome_DGardenFloorExpo" event_param="机不离手_家装耗材_流行风尚_随心夜跑_乐在桌上_桃花美肌" floor_id="4847" floor_order="47" floor_index="6">
        <div>
            <img src="https://m.360buyimg.com/mobilecms/s750x80_jfs/t25132/272/777079429/42670/e6ced36f/5b7a6fa1N94e7f9d9.jpg!q70.jpg.dpg" />
        </div>
        <div class="desList">
           <a data-role="ga" v-for="(item,idx) in dList" data-done="频道" href="javascript:;" >
               <span>{{item.title}}</span>
               <span>{{item.detail}}</span>
			    <img src="https://m.360buyimg.com/n1/s150x150_jfs/t1/34840/24/3223/15768/5cbd65d3E685eddad/0e188bc8da7f5680.jpg!q70.jpg.dpg" class="icon-show">
			</a>
       </div>
    </div>
</template>
<script>
export default {
    props:[],
    data(){
        return {
             dList:[{title:"免息星球",detail:"白条免息购"},{title:"免息星球",detail:"白条免息购"},{title:"免息星球",detail:"白条免息购"},{title:"免息星球",detail:"白条免息购"},{title:"免息星球",detail:"白条免息购"},{title:"免息星球",detail:"白条免息购"},{title:"免息星球",detail:"白条免息购"},{title:"免息星球",detail:"白条免息购"}]
        }
    },
    created(){
    },
    mounted(){

    }
}
</script>
<style lang="scss" scoped>
.j_expo{
    display: flex;
    flex-direction:column;
    background-color:#f6f6f6;
    div{
    text-align:center;

    }
    img{
        display:inline-block;
        width:55%;
        height:1rem;
    }
        .desList {
        display: flex;
        flex-wrap: wrap;
        clear: both;
        background: #fff;
        a {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        background: #fff;
        width: 2.4rem;
        text-align: center;
        margin: 0.3rem 0 0 0;
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
}
</style>
