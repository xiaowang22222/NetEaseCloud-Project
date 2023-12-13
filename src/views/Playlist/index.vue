<template>
    <div class="w-[100%] h-[100vh] z-[100] relative dark:bg-[#454545]">
        <van-sticky>
            <van-button type="primary">
                <div class="playlist_assembly w-[100vw] ml-[-4vw] dark:bg-[#454545]">
                    <div class="h-[8vw]">
                        <div class="playlist_header_header pl-[5vw] dark:bg-[#454545]">
                            <div class="playlist_header_left flex justify-between" @click="back">
                                <Icon icon="teenyicons:arrow-left-outline" class="" />
                                <div class="w-[30vw] h-[10vw] overflow-hidden relative ">
                                    <p class="absolute top-[3vw] left-7" :class="{ micuelist: show }">歌单</p>
                                    <van-notice-bar scrollable :text="playlist.playlist.name" color='#fff'
                                        background="#6186AB" class="absolute w-[70vw] h-[10vw] top-[8vw] dark:bg-[#454545]"
                                        :class="{ micuelist1: show1 }" />
                                </div>
                            </div>
                            <div class="playlist_header_left">
                                <Icon icon="grommet-icons:form-search" />
                                <Icon icon="ant-design:more-outlined" />
                            </div>
                        </div>
                    </div>
                </div>
            </van-button>
        </van-sticky>
        <div @click="jie">
            <playListTou :playlist="playlist" :recommendations="recommendations"></playListTou>
            <playlistBody :playlist="mucisPlay"></playlistBody>
        </div>
        <!-- <div class="fixed bottom-0 h-[100%] w-[100%]"> -->
          <!-- <audioList></audioList> -->

        <!-- </div> -->
    </div>
</template>
 
<script>
import { playlistDetail, relatedPlaylist,playlistDetaila } from "@/service"
import playListTou from "@/components/Playlist/playListTou.vue"
import playlistBody from "@/components/Playlist/playlistBody.vue"
export default {
    data() {
        return {
            playlist: {},
            show: true,
            show1: false,
            recommendations: {},
            mucisPlay:{}
        }
    },
    components: {
        playListTou,
        playlistBody
    },
    async created() {
        console.log(this.$route.query.id);
        const [err, res] = await playlistDetail({ id: this.$route.query.id })
        if (err) return console.log(err)
        this.playlist = res.data


        const [error, resData] = await relatedPlaylist({ id: this.$route.query.id })
        if (error) return console.log(error)
        this.recommendations = resData

        const [errorr, resDatas] = await playlistDetaila({ id: this.$route.query.id })
        if (errorr) return console.log(error)
        this.mucisPlay = resDatas.data.songs

    },
    methods: {
        handleScrollx() {
            if (window.pageYOffset >= 200) {
                this.show = false
                this.show1 = true

            } else if (window.pageXOffset < 200) {
                this.show1 = false
                this.show = true

            }

        },
        back() {
            this.$router.go(-1);
        },
        jie(e) {
            console.log(e);


        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScrollx, true)

    },

}
</script>
<style scoped>
.playlist_assembly {
    width: 100%;
    height: 100vh;
    background-color: white;
    z-index: 9;
    position: relative;
}

.playlist_header_header {
    width: 100%;
    height: 13.5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0px;
    background: #6186AB
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

.roll {
    background-color: initial;
    color: white;
    width: 50vw;
    margin-left: 20vw;
    transition: all 1s;
}

.micuelist {
    top: 3vw
}

.micuelist1 {
    top: 0vw
}
</style>
 