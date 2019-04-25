<template>
    <div class="Yswiper">
        <div class="swiper-container swiper-container1">
            <div class="swiper-wrapper">
                <div class="swiper-slide" key="0">
                    <img src="http://media.china-sss.com/img/M00/04/77/wKjFbFyI2tKAKyWdAAVnwiW4XQQ647.png" alt="">
                </div>
                    <div class="swiper-slide" key="1">
                    <img src="http://media.china-sss.com/img/M00/04/76/wKjFbFyHgJCAJBXYAARmX3q0V7Q.12.png" alt="">
                </div>
                <div class="swiper-slide" key="2">
                    <img src="http://media.china-sss.com/img/M00/04/6C/wKjFbFx_c4yAdAulAAF_VjtD9iA116.jpg" alt="">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper/dist/js/swiper.js'
export default {
    mounted(){
        var swiper2=new Swiper('.swiper-container1', {
            autoplay: true,//可选选项，自动滑动
            centeredSlides : false,
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
            pagination: {
                el: '.swiper-pagination',
            },
            loop : true,
        })
    }
}
</script>
<style lang="scss" scoped>
.Yswiper{
    img{
        width:100%;
    }
}
</style>
