<template>
    <Card :title="horizontal.uiElement.subTitle.title">
        <div class="scroll-content flex w-[346vw]">
            <ul v-for="item in horizontal.creatives" :key="item.id" class="w-[88vw] scroll-item pb-[3.8vw]">
                <li v-for="item1 in item.resources" :key="item1.resourceId"
                    class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw] flex">
                    <img :src="item1.uiElement.image.imageUrl" alt="" class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
                    <p v-if="item1.uiElement.subTitle" class="flex-1 pt-[2.85vw] ml-[1vw]
                     dark:text-[rgb(227,229,236)] text-[3.5vw] text-[#3E465B]">
                     {{item1.uiElement.mainTitle.title }}</p>
                </li>
            </ul>
        </div>
    </Card>
</template>

<script>
import Card from "./card.vue"

export default {
    components: {
        Card
    },
    props: ['horizontal'],
    created() {
        console.log(this.horizontal);
    }
}
</script>
<style scoped></style>
