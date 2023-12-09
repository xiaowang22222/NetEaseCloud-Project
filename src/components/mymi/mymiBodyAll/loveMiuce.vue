<template>
    <div class="dark:bg-[#2C2C2C] w-[92vw] h-[30vw] rounded-[15px] bg-[#fff] mb-[3.7vw] relative m-[auto] mt-[10vw]">
        <div class=" flex  justify-around w-[92vw]">
            <div class="w-[55vw] h-[30vw] flex  lovetou ">
                <div class="muicelove w-[20vw] h-[20vw]">
                    <img :src="playlistdata?.data?.playlist[0]?.coverImgUrl" alt="">
                    <Icon icon="tdesign:heart-filled" color="white" class="text-[10vw]" />
                </div>
                <div class="miLove">
                    <p class=" text-[14px]">{{ playlistdata?.data?.playlist[0]?.name }}</p>
                    <p>{{ playlistdata?.data?.playlist[0]?.trackCount }}首</p>
                </div>
            </div>
            <div class="loveright">
                <div>
                    <Icon icon="ph:heart" />
                    <strong>~</strong>
                    <span>心动瞬间</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    props:["userplayList"],
    data() {
        return {
            love: []
        }
    },
    computed:{
        ...mapState(['playlistdata'])
    },
}
</script>

<style scoped>
.lovetou {
    justify-content: space-between;
    align-items: center;
}

.muicelove {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.muicelove>img{
    border-radius: 10px;
}
.loveright {
    display: flex;
    justify-content: center;
    align-items: center;
}

.loveright>div {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 20vw;
    height: 8vw;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.2);

}

.loveright>div>strong {
    position: absolute;
    top: 1vw;
    left: 2.3vw;
    color: red;
}

.loveright>div>svg {

    font-size: 23px;
}

.loveright>div>span {
    font-size: 12px;
}</style>