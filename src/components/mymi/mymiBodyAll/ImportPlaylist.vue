<template>
    <div class="w-[100vw]">
        <div class="playAll w-[92vw]  flex justify-around items-center pl-[5vw] pr-[5vw]">
            <span class="">创建歌单
                <span class="w-[5vw] h-[1vw] bg-[red] block underline"></span>
            </span>
            <span>收藏歌单</span>
        </div>
        <div class="dark:bg-[#2C2C2C] w-[92vw]  rounded-[15px] bg-[#fff] mb-[3.7vw] relative m-[auto] mt-[2vw]">
            <div class=" flex w-[92vw] h-[15vw] justify-between  pl-[5vw] pr-[5vw] colectTou">
                <span>创建歌单</span>
                <div class="w-[15vw] flex justify-between">
                    <Icon icon="ic:sharp-plus" />
                    <Icon icon="ant-design:more-outlined" />
                </div>
            </div>
            <div class="pl-[5vw] pr-[5vw] mt-[3vw]" v-for="(item, index) in playlistdata?.data?.playlist" :key="item.id">
                <div v-if="index >= 1 && item.subscribed == false" class="flex items-center">
                    <img :src="item.coverImgUrl" alt="" class="w-[20vw] h-[20vw] miplay mr-[5vw]">
                    <div>
                        <p class="text-[4vw]" style="color: #817e7e; font-family: 500;">{{ item.name }}</p>
                        <p class="text-[3vw]" style="color: #b1aeae;">{{ item.trackCount }}首</p>
                    </div>
                </div>
            </div>
            <div class="playlist flex pl-[5vw] text-[5vw] items-center p-[3vw]">
                <Icon icon="la:file-import" class="text-[10vw]" />
                <span>一键导入外部音乐</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex"
export default {
    computed: {
        ...mapState(['playlistdata'])
    },
}
</script>

<style scoped>
.colectTou {
    align-items: center;
}

.underline {
    border-radius: 20px;
    margin-left: 5vw;
}

.miplay{
    border-radius: 10px;
}


</style>