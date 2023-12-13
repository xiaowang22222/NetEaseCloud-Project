<template>
    <div class="" v-if="is_show">
        <div class="px-[4.5vw]   border-b-[1px] border-[#F5F8FA] flex items-center w-[100vw]  bg-[#fff]">
            <div class="flex items-center">
                <div class="flex items-center" @click.stop="audioPlay">
                    <div
                        class="w-[10vw] h-[10vw] relative flex items-center justify-center rotateAnimation paused-animation">
                        <img src="/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png" alt="" class="absolute top-0 left-0 z-[1]">
                        <img :src="mixin_player.CurrentTrackDetails?.al?.picUrl" alt=""
                            class="w-[7vw] h-[7vw] rounded-[50%]">
                    </div>
                    <div class="text-[3vw] w-[60vw] text-ellipsis overflow-hidden whitespace-nowrap ml-[2vw]"><span
                            class="text-[#3E485E]">{{ mixin_player.CurrentTrackDetails?.name }}</span>
                        <span class="text-[#7B8591]">-{{ mixin_player.CurrentTrackDetails?.ar?.name }}</span>
                    </div>
                </div>
                <div class="w-[6vw] h-[10vw] relative  overflow-hidden" @click.stop="mixin_player.toggle()">
                    <van-circle :value="mixin_player.progress * 100" :speed="100" layer-color="#ccc" color="black"
                        size="5.2vw" class=" absolute top-2.5 left-0.5 " />
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                        role="img" width="11px" height="11px" viewBox="0 0 32 32"
                        class="top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] absolute iconify iconify--carbon"
                        v-if="mixin_player.playing">
                        <path fill="currentColor"
                            d="M12 6h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm10 0h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z">
                        </path>
                    </svg>
                    <Icon icon="ph:play-fill"
                        class="top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] absolute iconify iconify--ph"
                        v-else />

                </div>
            </div>

            <van-cell @click.stop="showPopup">
                <Icon icon="icon-park-solid:music-list" class="w-[5vw] h-[5vw]" />
            </van-cell>
        </div>
        <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
            <div class="pl-[5vw] pr-[5vw]">
                <div data-v-36d9f586="" class="playmusic py-[6vw]">
                    <h1 data-v-36d9f586="" class="text-[4vw] font-extrabold">
                        当前播放 <span data-v-36d9f586="" class="text-[2vw] text-[#929293]">({{ playlist.length }}) </span></h1>
                    <div data-v-36d9f586="" class="flex justify-between mt-[6.6vw] items-center">
                        <div data-v-36d9f586="" class="flex"><svg data-v-36d9f586="" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em"
                                height="1em" viewBox="0 0 48 48"
                                class="text-[5vw] text-[#B1B1B1] iconify iconify--arcticons">
                                <g transform="translate(48 0) scale(-1 1)">
                                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        d="M17.72 12.5H16A11.5 11.5 0 0 0 4.5 24h0A11.5 11.5 0 0 0 16 35.5h16A11.5 11.5 0 0 0 43.5 24h0A11.5 11.5 0 0 0 32 12.5H21.881">
                                    </path>
                                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        d="m28.701 5.68l-6.82 6.82l6.82 6.82"></path>
                                </g>
                            </svg>
                            <h1 data-v-36d9f586="" class="ml-[1.5vw] text-[3.4vw] font-medium">列表循环</h1>
                        </div>
                        <div data-v-36d9f586="" class="flex w-[30vw] justify-between"><svg data-v-36d9f586=""
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                                class="text-[5vw] text-[#B1B1B1] iconify iconify--mi">
                                <g transform="translate(24 0) scale(-1 1)">
                                    <path fill="currentColor"
                                        d="M12 2a1 1 0 0 1 1 1v10.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V3a1 1 0 0 1 1-1zM5 17a1 1 0 0 1 1 1v2h12v-2a1 1 0 1 1 2 0v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z">
                                    </path>
                                </g>
                            </svg> <svg data-v-36d9f586="" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em"
                                height="1em" viewBox="0 0 20 20" class="text-[5vw] text-[#B1B1B1] iconify iconify--fluent">
                                <g transform="translate(20 0) scale(-1 1)">
                                    <path fill="currentColor"
                                        d="M15.5 7a2.5 2.5 0 0 1 2.496 2.335l.005.164v6a2.5 2.5 0 0 1-2.336 2.495l-.164.005h-6a2.5 2.5 0 0 1-2.495-2.336l-.005-.164v-6a2.5 2.5 0 0 1 2.336-2.495L9.5 7h6Zm0 1H9.502a1.5 1.5 0 0 0-1.493 1.355l-.007.144v6a1.5 1.5 0 0 0 1.356 1.493l.144.007h6a1.5 1.5 0 0 0 1.493-1.356L17 15.5v-6a1.5 1.5 0 0 0-1.356-1.493L15.5 8Zm-2.999 1a.5.5 0 0 1 .492.41L13 9.5v2.498h2.501a.5.5 0 0 1 .09.992l-.09.008H13l.001 2.5a.5.5 0 0 1-.992.09l-.008-.09L12 13H9.501a.5.5 0 0 1-.09-.992l.09-.008H12l.001-2.5a.5.5 0 0 1 .5-.5Zm.162-5.306l.048.158l.575 2.147H12.25l-.505-1.889a1.5 1.5 0 0 0-1.696-1.091l-.141.03l-5.796 1.554a1.5 1.5 0 0 0-1.091 1.695l.03.142l1.554 5.795A1.5 1.5 0 0 0 6 13.346v1a2.502 2.502 0 0 1-2.31-1.682l-.052-.17l-1.553-5.795a2.5 2.5 0 0 1 1.61-3.015l.158-.047l5.795-1.553a2.5 2.5 0 0 1 2.957 1.458l.057.152Z">
                                    </path>
                                </g>
                            </svg> <svg data-v-36d9f586="" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em"
                                height="1em" viewBox="0 0 2048 2048"
                                class="text-[5vw] text-[#B1B1B1] iconify iconify--fluent-mdl2">
                                <g transform="translate(2048 0) scale(-1 1)">
                                    <path fill="currentColor"
                                        d="M1792 384h-128v1472q0 40-15 75t-41 61t-61 41t-75 15H448q-40 0-75-15t-61-41t-41-61t-15-75V384H128V256h512V128q0-27 10-50t27-40t41-28t50-10h384q27 0 50 10t40 27t28 41t10 50v128h512v128zM768 256h384V128H768v128zm768 128H384v1472q0 26 19 45t45 19h1024q26 0 45-19t19-45V384zM768 1664H640V640h128v1024zm256 0H896V640h128v1024zm256 0h-128V640h128v1024z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
                <div>
                    <div data-v-36d9f586="" class="flex justify-between items-center h-[14vw] " :class="{'red':index==mixin_player.index}" v-for="(item,index) in playlist"
                        :key="item.id" @click.stop="qie(item)">
                        <div data-v-36d9f586="" class="flex items-center"><!---->
                            <div data-v-36d9f586="" class="text-[4.1vw] ml-[2vw] w-[60vw] line-clamp-1" :class="{'red':index==mixin_player.index}"><!----> <!---->
                                {{ item.al.name }}
                                <span data-v-36d9f586="" class="text-[3vw] text-[#BCBCBC]" :class="{'red':index==mixin_player.index}">{{ item.ar[0].name }}</span>
                            </div>
                        </div>
                        <div data-v-36d9f586="" class="flex items-center"><!----> <svg data-v-36d9f586=""
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                                class="text-[5vw] text-[#B1B1B1] iconify iconify--ic">
                                <g transform="translate(24 0) scale(-1 1)">
                                    <path fill="currentColor"
                                        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </van-popup>

    </div>
</template>

<script>

export default {
    data() {
        return {
            show: false,
            parameter: "",
            is_show: false,
        };
    },
    props: ["playlist"],
    created() {
        setTimeout(() => {
            this.is_show = true
            this.mixin_player.CurrentTrackDetails
            this.mixin_player.listOfPlaylistDetails = this.playlist
        }, 300);
    },
    methods: {
        showPopup() {
            this.show = true
        },
        qie(a) {
            this.show = false
            this.mixin_player.replaceTracks(this.mixin_player.tracks, a.id)
        },
        audioPlay() {
            this.$router.push({
                path: "/audioPlay"
            })
        }
    },

    components: {
        // drawer
    }
};
</script>

<style scoped>
    .red{
        color: red;
    }
</style>