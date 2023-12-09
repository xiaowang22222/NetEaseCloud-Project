<template>
    <div class="dark:bg-[#2C2C2C] w-[92vw]  rounded-[15px] bg-[#fff] mb-[3.7vw] relative m-[auto] mt-[10vw]">
        <div class=" flex w-[92vw] h-[15vw] justify-between  pl-[5vw] pr-[5vw] colectTou">
            <span>收藏歌单</span>
            <Icon icon="ant-design:more-outlined" />
        </div>
        <div class="w-[92vw]  ">
            <div v-for="item in playlistdata?.data?.playlist" :key="item.id" class="pl-[5vw] pr-[5vw] mt-[3vw] ">
                <div v-if="item.subscribed == true" class="flex items-center p-[3vw]">
                    <img :src="item.coverImgUrl" alt="" class="w-[20vw] h-[20vw] miplay mr-[5vw]">
                    <div>
                        <p class="text-[4vw]" style="color: #817e7e; font-family: 500;">{{ item.name }}</p>
                        <p class="text-[3vw]" style="color: #b1aeae;">{{ item.trackCount }}首</p>
                    </div>
                </div>
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

.miplay {
    border-radius: 10px;
}

.collect {
    /* padding-bottom:2vw;s */

}
</style>