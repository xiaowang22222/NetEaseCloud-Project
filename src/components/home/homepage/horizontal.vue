<template>
    <div class="w-[100vw] pr-[5vw] pl-[5vw] mx-auto overflow-hidden scroll-wrapper h-[20vw] horizontal dark:bg-[#454545]"
        ref="scroll">
        <div class="flex w-[190vw] mx-auto overflow-hidden h-[20vw] scroll-content relative ">
            <div class="w-[19vw] scroll-item flex items-center justify-center flex-wrap mr-[6vw] "
                v-for="item in horizontal" :key="item.resourceId"> <img :src="item.uiElement.image.imageUrl2" alt="">
                <span
                    class="currentdate dark:text-[#1a1c23] absolute text-center top-[-1vw] w-[15vw] h-[19vw] leading-[19vw] items-center text-[3.5vw] text-[#fff] font-[800]">{{
                        item.resourceId == -1 ? currentdate : "" }}</span>
                <p class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]">{{
                    item.uiElement.mainTitle.title }}</p>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import BScroll from '@better-scroll/core'
import Scrollbar from '@better-scroll/scroll-bar'
import { horizontalAlLlst } from "@/service"
BScroll.use(Scrollbar)

export default {
    data() {
        return {
            horizontal: "",
            currentdate: ""
        }
    },
    mounted() {
        this.init()
    }, beforeDestroy() {
        this.scroll.destroy()
    },
    methods: {
        init() {
            this.scroll = new BScroll(this.$refs.scroll, {
                scrollX: true,
                scrollY: false,
                click: true,
                probeType: 1,
                // scrollbar: {
                //     fade: false,
                //     interactive: true,
                //     scrollbarTrackClickable: true,
                //     scrollbarTrackOffsetType: 'clickedPoint' // can use 'step'
                // }
            })
            this.scroll.on('scrollEnd', () => {
                console.log('scrollEnd')
            })
            this.scroll.on('scrollStart', () => {
                console.log('scrollStart')
            })
            this.scroll.on('scroll', () => {
                console.log('scroll')
            })
        }
    },
    created() {
        horizontalAlLlst().then((res) => {
            this.horizontal = res.data.data.blocks[1].creatives[0].resources
        }).catch((err) => {
            console.log(err);
        })
        this.currentdate = new Date().getDate()
    },
}
</script>
<style scoped>
.horizontal {
    overflow-x: hidden;
    overflow-y: scroll;
}
</style>
