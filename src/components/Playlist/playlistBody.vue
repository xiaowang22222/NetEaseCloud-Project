<template>
    <div class=" bg-white dark:bg-[#454545]">
        <van-sticky :offset-top="10 + 'vw'">
            <div class="header flex px-[4vw] justify-between bg-white dark:bg-[#454545]">
                <div class="flex items-center ">
                    <div>
                        <svg class="w-[6vw] text-red-600" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                            viewBox="0 0 32 32">
                            <path fill="none"
                                d="M11 23a1 1 0 0 1-1-1V10a1 1 0 0 1 1.447-.894l12 6a1 1 0 0 1 0 1.788l-12 6A1.001 1.001 0 0 1 11 23Z" />
                            <path fill="currentColor"
                                d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm7.447 14.895l-12 6A1 1 0 0 1 10 22V10a1 1 0 0 1 1.447-.894l12 6a1 1 0 0 1 0 1.788Z" />
                        </svg>
                    </div>
                    <div class="ml-[3vw] ">
                        <span class="text-[4vw] text-gray-700" @click.stop="playAll">播放全部</span>
                        <span class=" ml-[1vw] text-[3vw] text-gray-500">({{  playlist.length  }})</span>
                    </div>
                </div>
                <div class="flex items-center ">
                    <svg class="mr-[4vw] w-[6vw]" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                        viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="1.5" d="M6 20h12M12 4v12m0 0l3.5-3.5M12 16l-3.5-3.5" />
                    </svg>
                    <svg class="w-[5vw]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20">
                        <path fill="currentColor"
                            d="M19.296 16.608c.386 0 .7.312.7.696a.698.698 0 0 1-.7.696H.7a.698.698 0 0 1-.7-.696c0-.384.313-.696.7-.696h18.596ZM4.033 6.625a.698.698 0 0 1-.003.987L1.697 9.944l2.32 2.32a.698.698 0 0 1-.003.987a.698.698 0 0 1-.987.003L.216 10.442a.698.698 0 0 1 .002-.987l2.828-2.827a.698.698 0 0 1 .987-.003ZM19.3 9.131c.387 0 .7.312.7.696a.698.698 0 0 1-.7.696H5.183a.698.698 0 0 1-.7-.696c0-.384.313-.696.7-.696H19.3ZM19.296 2c.386 0 .7.312.7.696a.698.698 0 0 1-.7.696H.7a.698.698 0 0 1-.7-.696C0 2.312.313 2 .7 2h18.596Z" />
                    </svg>
                </div>
            </div>
        </van-sticky>
        <!-- 歌曲 -->
        <div>
            <!-- <router-link :to="{
                path: '/index_play_song', query: {
                    song_all: song_arr,
                    // id_all: tracks,
                    now_index: index,
                    item: item
                }
            }"> -->
            <div v-for="item, index in playlist"  @click.stop="obtain(index)" 
                class="flex px-[4vw] h-[15vw] flex-wrap content-center justify-between"
                 :key="item.id">
                <div class="flex">
                    <div class="h-[100%] flex items-center">

                        <span class="text-[3.5vw] text-gray-400 w-[8vw] ">{{ index + 1 }}</span>
                    </div>

                    <div class="flex flex-col ">
                        <div class="w-[65vw] overflow-hidden h-[4.5vw]">
                            <span class="text-[3.5vw] h-[4vw] overflow-hidden w-[70vw] flex items-center ">{{ item.name
                            }}</span>
                            <span v-if="item.alia[0]" class="text-[3.5vw] h-[4vw] overflow-hidden w-[70vw] ">({{
                                item.alia[0] }})</span>
                        </div>
                        <div class="w-[50vw] flex items-center mt-[1vw] overflow-hidden">
                            <div v-if="item.originCoverType" class="flex">
                                <span data-v-32bd4a63=""
                                    class="w-[8.5vw] h-[6vw] rounded-[3px] border-[1px] border-[red] font-[800] text-[3vw] text-[red] text-center leading-[6vw] scale-50 ml-[-2vw] mr-[-1vw]">vip</span>
                                <span data-v-32bd4a63=""
                                    class="w-[8.5vw] h-[6vw] rounded-[3px] border-[1px] border-[#60BDEF] text-[3vw] text-[#60BDEF] text-center leading-[6vw] scale-50 ml-[-2vw] mr-[-1vw]">试听</span>

                            </div>
                            <span class="text-[3vw] text-gray-400 h-[4vw] overflow-hidden ">{{ item.ar[0].name }}-{{
                                item.al.name }}</span>
                        </div>
                    </div>
                </div>
                <div class="flex ">
                    <div @click="getmvid(item.name)">
                        <svg class=" w-[5vw] text-gray-400 mr-[3vw]" xmlns="http://www.w3.org/2000/svg" width="32"
                            height="32" viewBox="-2 -2 24 24">
                            <path fill="currentColor"
                                d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm10.126 9.746l-4.055 2.898c-.905.646-2.13.389-2.737-.576A2.201 2.201 0 0 1 7 12.898V7.102C7 5.942 7.883 5 8.972 5c.391 0 .774.124 1.099.356l4.055 2.898c.905.647 1.146 1.952.54 2.917a2.042 2.042 0 0 1-.54.575zM8.972 7.102v5.796L13.027 10L8.972 7.102z" />
                        </svg>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" class=" w-[5vw] text-gray-400 " width="32" height="32"
                        viewBox="0 0 32 32">
                        <circle cx="16" cy="8" r="2" fill="currentColor" />
                        <circle cx="16" cy="16" r="2" fill="currentColor" />
                        <circle cx="16" cy="24" r="2" fill="currentColor" />
                    </svg>

                </div>
            </div>
            <!-- </router-link> -->
        </div>
        <div class="h-[20vw]"></div>
        <audioList1 class="w-[100%] fixed bottom-0 left-0 h-[10vw] opacity-100 bg-[black] z-[100] " v-if="flag" :playlist="playlist"></audioList1>
    </div>
</template>

<script>
import audioList1 from "@/components/audioList/index.vue"
export default {
    data() {
        return {
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
            let arr = []
            for (let index = 0; index < this.playlist.length; index++) {
                arr.push(this.playlist[index].id)
            }
            this.mixin_player.replaceTracks(arr,0)
        }
    }
}
</script>

<style scoped>
.a1 {
    background-color: white;
}
</style>