<template>
    <Card :title="horizontal.uiElement.subTitle.title">
        <div class="w-[210vw] flex  relative">
            <div class="w-[31vw] ml-[3vw] " v-for="item in horizontal.creatives" :key="item.creativeId">
                <div v-if="item.resources.length > 1" class="box h-[35vw]" @click="yincang">
                    <div :class="active[index]" v-for="item, index in item.resources" :key="item.encodeId">
                        <router-link :to="{ path: '/Playlist', query: { id: item.creativeId } }">
                            <img :src="item.uiElement.image.imageUrl"
                                class="w-[31vw] h-[31vw] rounded-[8px] relative z-[1]">
                            <p class="dark:text-[#e3e5ec] text-[2.78vw] text-[#3E4759] ">{{
                                item.uiElement.mainTitle.title }}</p>
                            <Icon icon="solar:play-bold" color="white" class=" absolute bottom-[10vw] right-[3vw] z-30" />
                        </router-link>
                    </div>
                </div>
                <div v-else @click="yincang">
                    <router-link :to="{ path: '/Playlist', query: { id: item.creativeId } }">
                        <img :src="item.uiElement.image.imageUrl" alt=""
                            class="w-[31vw] h-[31vw] rounded-[8px] relative z-[1]">
                        <p class="dark:text-[#e3e5ec] text-[2.78vw] text-[#3E4759] scroll-item">{{
                            item.uiElement.mainTitle.title }}</p>
                        <Icon icon="solar:play-bold" color="white" class=" absolute bottom-[10vw] right-[3vw] z-30" />
                    </router-link>

                </div>
            </div>
        </div>
    </Card>
</template>
<script>
import BScroll from '@better-scroll/core'
import Scrollbar from '@better-scroll/scroll-bar'
import Card from "./card.vue"
BScroll.use(Scrollbar)

export default {
    props: {
        horizontal: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            // 推荐歌单
            recommendSong: [],
            active: ['active0', 'active1', 'active2'],
            num: 0
        }
    },
    components: {
        Card
    },

    methods: {
        yincang(){
          this.$parent.$parent.$parent.falg = true
          this.$parent.$parent.$parent.routerLinka = false
        }
    },
    created() {
        console.log(this.horizontal);
    },

    mounted() {
        setInterval(() => {
            if (this.num < 2) {
                this.num++
            } else {
                this.num = 0
            }
            if (this.num == 0) {
                this.active = ['active1', 'active2', 'active0']

            } else if (this.num == 1) {

                this.active = ['active0', 'active1', 'active2']


            } else {
                this.active = ['active2', 'active0', 'active1']
            }
            // this.num = this.num==2?0:
        }, 3000)
    }
}
</script>

<style scoped>
/* .active:{
    
} */
.box {
    position: relative;
}

.box>div {
    position: absolute;
    left: 0;
    transition: .5s;
}

.active0 {
    transform: scale(0.5);
    top: -100%;
    z-index: -1;
}

.active1 {
    top: 0;

    z-index: 10 !important;
}

.active2 {
    top: 100%;
    z-index: -1;
}

.recommended_tou {
    padding: 3vw;
}
</style>