<template>
    <div class="swiper">
        <div class="swiper-container swiper-container2">
            <ul class="swiper-wrapper">
                <li v-for="(item,idx) in goodsList" class="swiper-slide" :key="item.goods_id">
                    <img :src="item.goods_image" alt="">
                    <span>￥99</span>
                    <del>￥99</del>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper/dist/js/swiper.js'
export default {
    data(){
        return {
            goodsList:[
                    {
                        "goods_id": "226857",
                        "goods_name": "男士外套冬季2018新款韩版潮流短款加厚羽绒棉服帅气立领棉衣男装 灰色 XL",
                        "goods_promotion_price": "158.00",
                        "goods_price": "158.00",
                        "goods_image": "https://www.nanshig.com/data/upload/shop/store/goods/34/34_05962460773414914_240.jpg"
                    },
                    {
                        "goods_id": "226935",
                        "goods_name": "冬季加厚羊羔绒毛短款外套男士修身帅气棉衣韩版休闲情侣棉袄潮装 灰色 L",
                        "goods_promotion_price": "169.00",
                        "goods_price": "169.00",
                        "goods_image": "https://www.nanshig.com/data/upload/shop/store/goods/39/39_05977667423494467_240.jpg"
                    },
                    {
                        "goods_id": "227005",
                        "goods_name": "冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 绿色 L",
                        "goods_promotion_price": "178.00",
                        "goods_price": "178.00",
                        "goods_image": "https://www.nanshig.com/data/upload/shop/store/goods/39/39_05977681207148056_240.jpg"
                    },
                    {
                        "goods_id": "226977",
                        "goods_name": "冬季羊羔毛加绒加厚外套男士棉服韩版帅气棉衣潮流短款情侣装棉袄 军绿色 L",
                        "goods_promotion_price": "159.00",
                        "goods_price": "159.00",
                        "goods_image": "https://www.nanshig.com/data/upload/shop/store/goods/39/39_05977679684046298_240.jpg"
                    },
                    {
                        "goods_id": "227026",
                        "goods_name": "冬季胖子棉衣男士灯芯绒加厚棉服韩版个性外套加肥大码潮男装棉袄 蓝色 L",
                        "goods_promotion_price": "169.00",
                        "goods_price": "169.00",
                        "goods_image": "https://www.nanshig.com/data/upload/shop/store/goods/39/39_05982346437961674_240.jpg"
                    },
                    {
                        "goods_id": "227040",
                        "goods_name": "冬季情侣连帽面包服男士帅气短款棉衣韩版休闲棉袄潮男装加厚外套 灰色 L",
                        "goods_promotion_price": "189.00",
                        "goods_price": "189.00",
                        "goods_image": "https://www.nanshig.com/data/upload/shop/store/goods/39/39_05982349565989895_240.jpg"
                    },
                    {
                        "goods_id": "227068",
                        "goods_name": "冬季休闲工装棉服男士宽松拼接棉衣韩版百搭加厚棉袄潮流男装外套 蓝色 L",
                        "goods_promotion_price": "149.00",
                        "goods_price": "149.00",
                        "goods_image": "https://www.nanshig.com/data/upload/shop/store/goods/39/39_05982351287518959_240.jpg"
                    },
                    {
                        "goods_id": "227096",
                        "goods_name": "冬季情侣连帽棉衣男士宽松帅气面包服韩版加厚棉袄潮男装外套棉服 蓝色 L",
                        "goods_promotion_price": "179.00",
                        "goods_price": "179.00",
                        "goods_image": "https://www.nanshig.com/data/upload/shop/store/goods/39/39_05982353053204907_240.jpg"
                    }]
        }
    },
    created(){
    },
    mounted(){
        var swiper2=new Swiper('.swiper-container2', {
            autoplay:false,
            slidesPerView : 4,
            centeredSlides : false,
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
            
        })
    }
}
</script>
<style lang="scss" scoped>
.swiper{
    li{
        float:left;
        display:flex;
        flex-direction:column;
        width:3.4rem;
        height:3.5rem;
        padding:.4rem;
    }
    img{
        width:100%;
        height:75%;
    }
}
</style>
