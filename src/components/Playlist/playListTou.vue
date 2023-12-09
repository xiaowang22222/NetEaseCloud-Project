<template>
    <div class="playlist_header h-[60vw] bg-gradient-to-br from-[#486D8D] to-[#6186AB] ">
        <!-- 头部 -->

        <!-- 歌单名称 -->
        <div class="h-[43vw] transition-all duration-20 0 relative from-[#486D8D] to-[#6186AB] pb-[5vw] pl-[3.9vw] pr-[3.4vw] pt-[3.5vw]"
            v-show="show">
            <div class="h-[29vw] flex pt-[2.6vw] justify-between">
                <div class="w-[24vw] h-[25vw] pt-[1vw] relative">
                    <img :src="playlist?.playlist?.coverImgUrl" alt=""
                        class="w-[24vw] h-[24vw] rounded-[10px] relative z-[2]">
                </div>
                <div>
                    <div class="w-[67vw] pr-[12vw]">
                        <p class="text-[#fff] text-[3.6vw] leading-[4.9vw] font-[800]">{{ playlist.playlist.name }}</p>
                    </div>
                    <div class="h-[10.5vw] flex items-center">
                        <img :src="playlist.playlist.creator.avatarUrl" alt="" class="w-[6vw] h-[6vw] rounded-[50%]">
                        <span class="text-[2.73vw] ml-[2vw] mr-[1.5vw] text-[#fff] opacity-50">{{
                            playlist.playlist.creator?.nickname }}</span>
                        <span
                            class="px-[2vw] py-[1.25vw] rounded-[50px] text-[2.2vw] text-[#fff] opacity-50 bg-opacity-20 bg-[#fff] flex items-center pr-[3.5vw]">
                            <Icon icon="ic:baseline-add" class="text-[4vw] text-[#fff] iconify iconify--material-symbols" />
                            关注
                        </span>
                    </div>
                    <div>
                        <ul class="flex">
                            <li v-for="item in playlist.playlist?.tags" :key="item.id"
                                class="flex items-center justify-center pl-[2.5vw] pr-[1.5vw] py-[0.7vw] bg-opacity-20 bg-[#fff] text-[#fff] rounded-[4px] mr-[1.4vw]">
                                <span class="text-[2.2vw]">{{ item }}</span>
                                <Icon icon="mingcute:right-line" class="text-[3vw] ml-[0.6vw] iconify iconify--ep" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="h-[4vw] flex items-center w-[90vw] overflow-hidden mt-[3.8vw] justify-between">
                <span class="text-[#fff] opacity-50 text-[2.8vw] whitespace-nowrap w-[83vw] overflow-hidden">{{
                    playlist.playlist?.description }}</span>

                <Icon icon="mingcute:right-line" class="text-[3vw] iconify iconify--ep" />
            </div>

        </div>
        <div v-show="!show">
            <div class="fade-in">
                <div class="h-[10vw] flex items-center text-[#fff] opacity-50 text-[3vw]">
                    喜欢这个歌单的用户也听了
                </div>
                <div class="w-[92vw] mx-auto overflow-hidden scroll-wrapper  horizontal" ref="scroll">
                    <div class="flex w-[160vw]" >
                        <div class="w-[28vw] mr-[2.5vw]" v-for="val in related.playlists" :key="val.id">
                            <router-link :to="{ path: '/Playlist', query: { id: val.id } }">
                                <div class="w-[28vw] h-[28vw] rounded-[8px] overflow-hidden relative pt-[1vw]"
                                    @click="dianji">
                                    <img :src="val.coverImgUrl" />
                                    <div
                                        class="dark:bg-[#272727] w-[26vw] h-[28vw] bg-opacity-20 bg-[#fff] absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[8px] z-[0]">
                                    </div>
                                </div>
                                <p class="dark:text-[#e3e5ec] text-[2.78vw] text-[#fff] mt-[2vw] scroll-item">{{
                                    val.name }}
                                </p>
                            </router-link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div @click.stop="show = !show"
            class="absolute right-[3.4vw] top-[16vw] w-[6vw] h-[6vw] rounded-[50%] bg-opacity-20 bg-[#fff] flex items-center justify-center">
            <Icon icon="material-symbols-light:arrow-upward" class="text-[3vw] mt-[0.5vw] iconify iconify--ep"
                v-show="!show" />
            <Icon icon="eva:arrow-ios-downward-fill" class="text-[3vw] mt-[0.5vw] iconify iconify--ep" v-show="show" />
        </div>
        <div>
            <ul class="flex items-center">
                <li
                    class="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-opacity-20 bg-[#fff] font-[800] flex-1 text-[#f8fefe] text-[3vw]">
                    <Icon icon="entypo:forward" class="text-[5vw] mr-[1.8vw] iconify iconify--majesticons" />
                    {{ playlist.playlist.subscribedCount }}
                </li>
                <li
                    class="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-opacity-20 bg-[#fff] font-[800] flex-1 text-[#f8fefe] text-[3vw]">
                    <Icon icon="iconamoon:comment-dots-light" class="text-[5vw] mr-[1.8vw] iconify iconify--majesticons" />
                    {{ playlist.playlist.shareCount }}
                </li>
                <li
                    class="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-[#ff2658] font-[800] flex-1 text-[#f8fefe] text-[3vw]">
                    <Icon icon="fluent:collections-add-24-regular"
                        class="text-[5vw] mr-[1.8vw] iconify iconify--majesticons" />
                    {{ playlist.playlist.commentCount }}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import BScroll from '@better-scroll/core'
import Scrollbar from '@better-scroll/scroll-bar'
BScroll.use(Scrollbar)
export default {
    data() {
        return {
            show: true,
            related: {}
        }
    },
    props: ["playlist", "recommendations"],
    created() {
        // console.log(this.playlist);

    },
    updated() {
        this.init()
    },
    beforeDestroy() {
        this.scroll.destroy()
    },
    methods: {
        dianji() {
            location.reload();
            // console.log("a");
        },
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

    },
    watch: {
        recommendations(val) {
            // console.log("a",val);
            this.related = val.data
            // console.log(this.related);
        }
    }

}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}



.playlist_header_header>div {
    width: 20vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.playlist_header_header>div>svg {
    font-size: 7vw;
}
</style>