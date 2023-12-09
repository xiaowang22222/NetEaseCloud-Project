<template>
    <div class="bg-[#fff] w-[100vw] rounded-[15px] relative mt-[-2.5vw] px-[3.8vw] dark:bg-[#454545] dark:text-[#fff]">
        <van-sticky :offset-top="13.5 + 'vw'">
            <van-button type="info" class="dark:bg-[#454545]" @click.stop="playAll">
                <div class="a1 h-[13vw] w-[105vw] ml-[-8vw] pl-[-7.5vw] pr-[-6.5vw] flex items-center justify-around">
                    <div class="flex items-center">
                        <Icon icon="carbon:play-filled"
                            class="text-[#ED3E20] text-[8vw] iconify iconify--heroicons-solid" />
                        <span class="text-[#25272C] text-[3.7vw] ml-[3.9vw] mr-[2.3vw]">播放全部 ({{
                            playlist.length }})</span>
                    </div>
                    <div class="flex items-center">
                        <Icon icon="clarity:download-line" class="text-[5vw] text-[#2C3034] iconify iconify--clarity" />
                        <Icon icon="foundation:indent-more"
                            class="text-[6vw] text-[#2C3034] ml-[5vw] mt-[1vw] iconify iconify--solar" />
                    </div>
                </div>
            </van-button>
        </van-sticky>
        <div class=" relative z-[10] :dark:text-[#fff]">
            <div class="flex items-center h-[14vw]" v-for="(item, index) in playlist" :key="item.id"
                @click.stop="obtain(index)">
                <div class="w-[4vw] text-[#bfbfbf] text-[3vw] text-center mr-[3.52vw] font-medium">{{ index + 1 }}</div>
                <img src="https://admirable-jalebi-ce44af.netlify.app/static/wave.gif" alt="" class="bg-[red]"
                    v-show="index == num">
                <div class="font-medium text-[3.6vw] w-[64vw]">
                    <div class="text-[3.6vw] text-ellipsis overflow-hidden whitespace-nowrap w-[50vw] text-[#949797]">
                        <span class="text-ellipsis text-[#000]  dark:text-[#fff]">{{ item.al.name }}</span>
                    </div>
                    <div
                        class="w-[64vw] text-ellipsis overflow-hidden whitespace-nowrap text-[#808080] text-[2.8vw] flex items-center">
                        <span class=" dark:text-[#fff]">{{ item.ar[0].name }}</span>
                    </div>
                </div>
                <Icon icon="icon-park-outline:play-two" class="text-[5vw] text-[#2C3034] iconify iconify--clarity" />
                <Icon icon="ant-design:more-outlined"
                    class="ml-[4.6vw] text-[5vw] text-[#B3B3B3] mt-[-2vw] iconify iconify--ri  dark:text-[#fff]" />
            </div>
        </div>
        <audioList1 class="w-[100%] fixed bottom-0 left-0 h-[10vw] opacity-100 bg-[black] z-[100]" v-if="flag" :playlist="playlist"></audioList1>
    </div>
</template>

<script>
import audioList1 from "@/components/audioList/index.vue"
export default {
    data() {
        return {
            num: null,
            flag:false
        }
    },
    created(){
        this.flag = true
    },
    components: {
        audioList1
    },
    props: ["playlist"],
    updated() {
        console.log(this.playlist);
    },
    methods: {
        obtain(index) {
            // console.log(this.playlist);
            let arr = []
            for (let index = 0; index < this.playlist.length; index++) {
                arr.push(this.playlist[index].id)
            }
            this.mixin_player.replaceTracks(arr, arr[index])
        },
        playAll() {
            let list = this.playlist.data.songs
            let PlayList = []
            list.forEach(val => {
                PlayList.push(val.id)
            });
            this.player.replaceTracks(PlayList)
        }
    }
}
</script>

<style scoped>
.a1 {
    background-color: white;
}
</style>