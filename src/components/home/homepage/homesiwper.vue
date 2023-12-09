<template>
    <div class="dark:bg-[#454545]">
        <div class="swiper-container w-[95vw] h-[40vw] m-[auto] rounded-[3vw] text-center ">
            <div class="swiper-wrapper">
                <!-- <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div> -->
                <div class="swiper-slide w-[100%] h-[100%]" v-for="(item, index) in banners" :key="index">
                    <img :src="item.imageUrl" class="w-[100%] h-[100%]">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

            <!-- 如果需要导航按钮 -->
            <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->

            <!-- 如果需要滚动条 -->
            <!-- <div class="swiper-scrollbar"></div> -->
        </div>
    </div>
</template>
<script>
import { CarouselAll } from "@/service"
import Swiper from "swiper"
import "swiper/css/swiper.min.css"
export default {
    data() {
        return {
            banners: "" //轮播图
        }
    },
    updated() {
        new Swiper('.swiper-container', {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // 自动切换
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },

            // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        })

    },
    created() {
        CarouselAll().then((res) => {
            let { data: { banners } } = res
            this.banners = banners
            console.log(banners);
        }).catch((err) => console.log(err))
    }
}
</script>
<style scoped>
.swiper {
    width: 600px;
    height: 470px;
    margin: 0 auto;
}
</style>
