<template>
    <div class="recommended_tou">
        <div class="flex items-start justify-between">
            <div class="zalbum_song flex items-center">
                <h4 class="dark:text-[#e9ebf2] text-[#374d5b] text-[4vw] font-[800]">{{ title }}</h4>

                <Icon icon="ic:outline-greater-than" />
            </div>

            <div>
                <van-cell @click="showPopup" class="touming">
                    <Icon icon="ant-design:more-outlined" />
                </van-cell>
            </div>

        </div>
        <div>
            <div class="w-[92vw] mx-auto overflow-hidden scroll-wrapper  horizontal" ref="scroll">
                <slot></slot>
            </div>
        </div>
        <van-popup v-model="show" position="bottom" :style="{ height: '25%' }" class="dark:bg-[#454545] text-[#fff]">
            <div>
                <div class="">
                    <div class=" h-[15vw] pl-[5vw] pr-[5vw] flex justify-between items-center card-heaer">
                        <h3>{{ title }}</h3>
                        <span>X</span>
                    </div>
                    <div class="son_body">
                        <ul>
                            <li>
                                <Icon icon="mdi:like-outline" />
                                优先推荐
                            </li>
                            <li>
                                <Icon icon="mdi:find-love" />
                                减少推荐
                            </li>
                            <li>
                                <Icon icon="mingcute:more-4-line" />
                                更多内容
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </van-popup>
    </div>
</template>
<script>
import BScroll from '@better-scroll/core'
import Scrollbar from '@better-scroll/scroll-bar'
import Bus from '@/Hub.js'
BScroll.use(Scrollbar)
export default {
    props: {
        title: {
            type: String,
            Required: true,
        }
    },
    data() {
        return {
            show: false,
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
        },
        homeShow() {
            this.$parent.$parent.$parent.flag = !this.$parent.$parent.$parent.flag
            Bus.$emit('val', this.title)
        },
        showPopup() {
            this.show = true;
        },
    },
}
</script>
<style scoped>
.recommended_tou {
    padding: 3vw;
}

.card-heaer{
    border-bottom: 2px solid #ccc;
}

.son_body ul li{
    padding-left: 3vw;
    height: 12vw;
    line-height: 12vw;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #ccc;
}

.son_body ul li svg{
    margin-right: 3vw;
}

.touming{
    background-color: initial;
}
</style>