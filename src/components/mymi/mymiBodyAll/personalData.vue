<template>
    <div class="dark:bg-[#2C2C2C] w-[92vw] h-[30vw] rounded-[15px] bg-[#fff] mb-[3.7vw] relative m-[auto] mt-[10vw]">
        <img :src="Info?.data?.profile?.avatarUrl" class="w-[18vw] h-[18vw] rounded-[50%] absolute top-[-9vw] left-1/2 translate-x-[-50%]" />
        <span
            class="absolute top-[-18vw]  left-[50%] translate-x-[-50%] bg-[#fff] text-[#000] state w-[25vw] h-[7vw] ">+添加状态</span>
        <span class=" tilte-name">{{ Info?.data?.profile?.nickname }}</span>
        <div class="wt-[3vw] text-[3vw] text-[#9396A2]  flex justify-center h-[43vw] items-center ">
            <span class="px-[2vw]">
                <span>{{ Info?.data?.profile?.follows }}</span>
                关注
            </span>
            <span class="px-[2vw]">
                <span>{{ Info?.data?.profile?.followeds }}</span>
                粉丝
            </span>
            <span class="px-[2vw]">
                <span>lv:</span>
                {{ Info?.data?.level }}
            </span>
        </div>
    </div>
</template>

<script>
import { personalInformation } from "@/service"

export default {
    props: ["auth"],
    data(){
        return{
            Info:[]
        }
    },
    created() {
      personalInformation({ uid: this.auth.account.id}).then((res)=>{
        this.Info = res
        console.log(this.Info);
      }).catch((err)=>{
        console.log(err);
      })
     
    },
}
</script>

<style scoped>
.state {
    border-radius: 25px;
    text-align: center;
    line-height: 7vw;
}

.tilte-name{
   position: absolute;
   left: 50%;
   transform:translateX(-50%);
   top:35%;
}
</style>