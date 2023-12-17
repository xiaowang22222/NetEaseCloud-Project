<template>
    <Card :title="horizontal.uiElement.subTitle.title">
        <div class="flex w-[150vw] mx-auto overflow-hidden h-[40vw] scroll-content relative ">
            <div class="w-[19vw] scroll-item flex items-center justify-center flex-wrap mr-[6vw] "
                v-for="item in horizontal.creatives" :key="item.resourceId"> <img :src="item.uiElement.image.imageUrl"
                    alt="">
                <router-link :to="{path:'/playlist',query:{id:item.creativeId}}">
                    <span
                        class="currentdate dark:text-[#1a1c23] absolute text-center top-[-1vw] w-[15vw] h-[19vw] leading-[19vw] items-center text-[3.5vw] text-[#fff] font-[800]">{{
                            item.resourceId == -1 ? currentdate : "" }}</span>
                    <p class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[2vw]">{{
                        item.uiElement.mainTitle.title }}</p>
                </router-link>
            </div>
        </div>
    </Card>
</template>

<script>
import { RouterLink } from "vue-router";
import Card from "./card.vue"

export default {
    components: {
        Card,
        RouterLink
    },
    props: ['horizontal'],
    created() {
        console.log("adas", this.horizontal);
    }
}
</script>
<style scoped></style>
