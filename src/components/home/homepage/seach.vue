<template>
    <div class="dark:from-[#2c1a2b] dark:to-[#1a1c23] bg-gradient-to-b from-[#E6E6FB] to-[#f1f1f1] opacity-0.2">
        <div class="searchHeader w-[100vw] h-[20vw] p-[3vw] pl-[1vw] flex justify-between items-center">
            <van-cell @click="showPopup" style="width: 15vw; height: 15vw;background: transparent;">
                <Icon icon="material-symbols:menu" class="w-[10vw] h-[10vw]" />
            </van-cell>
            <div class="Scach_input">
                <input type="text" name="headerSceah" id=""
                    class="dark:from-[#34304b] dark:to-[#403246] dark:border-0 text-[4.47vw] pl-[8vw] bg-gradient-to-r from-[#d9ddfd] text-[#8189A1] to-[#f3d9ef] opacity-0.2 w-[75vw] h-[9.9vw] border-2 border-[#CCCEF7] rounded-[25px]">
                <Icon icon="material-symbols:keyboard-voice" class="w-[1em] h-[1em] Scach_input_1" />
                <Icon icon="tabler:scan" class="w-[1em] h-[1em] Scach_input_2" />
            </div>
            <Icon icon="material-symbols:keyboard-voice" class="w-[10vw] h-[10vw]" />
        </div>
        <van-popup v-model="show" position="left" :style="{ height: '100%' }" style="background-color: #e9e9e9;">
            <router-link to="/login" v-show="flag" class=" block w-10vw h-[10vw]">立刻登录</router-link>
            <div class="dark:bg-[#151515] flex justify-between items-center h-[16vw] px-[5vw] w-[84vw] sticky">
                <div class="flex items-center justify-between ">
                    <div class="flex items-center">
                        <div
                            class="w-[7vw] h-[7vw] rounded-[50%] mr-[2vw] bg-[#f4f4f1] flex items-center justify-center overflow-hidden">
                            <img :src="Info.data?.profile?.avatarUrl" alt="">
                        </div>
                        <span class="dark:text-[#f0f0f0] text-[#383838] text-[3.5vw]">{{ Info.data?.profile?.nickname
                        }}</span>
                        <Icon icon="mingcute:right-line" color="#000"
                            class="dark:text-[#f0f0f0] text-[#383838] text-[4vw] iconify iconify--mingcute" />
                    </div>
                </div>
                <Icon icon="mdi:line-scan" color="#000"
                    class="dark:text-[#f0f0f0] text-[#383838] text-[5vw] iconify iconify--teenyicons" />
            </div>
            <div class="scroll-content h-[410vw]">
                <toolSide></toolSide>
            </div>
        </van-popup>
    </div>
</template>
<script>
import { personalInformation } from "@/service"
import toolSide from "./toolSide.vue"
export default {
    props: ["auth"],
    name: "SearchHeader",

    data() {
        return {
            show: false,
            Info: [],
            flag: true
        }
    },
    methods: {
        showPopup() {
            this.show = true;
        },

    },
    components: {
        toolSide
    },
     created() {
        personalInformation({ uid: this.auth.account.id }).then((res) => {
            this.Info = res
            console.log(this.Info);
        }).catch((err) => {
            console.log(err);
        })
    },
}
</script >
<style scoped >
.searchHeader {
    display: flex;
    align-items: center;
}

.searchHeader>svg {
    display: block;
    vertical-align: middle;
}

.Scach_input {
    position: relative;
}



.Scach_input svg {
    position: absolute;
}

.Scach_input svg.Scach_input_1 {
    left: 2vw;
    top: 3.2vw;
}

.Scach_input svg.Scach_input_2 {
    right: 2vw;
    top: 3.2vw;
}

.sticky {
    position: sticky;
    top: 0px;
    background-color: rgb(233, 233, 233);
}
</style>