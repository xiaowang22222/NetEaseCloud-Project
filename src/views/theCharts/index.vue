<template>
    <div class="buPmeF pb-[24vw] dark:bg-[#454545] dark:text-[#fff]">
        <h1
            class="flex items-center justify-center w-[100%] px-[4vw] py-[3vw] bg-[#fff] text-[#010101]  text-[4.2vw] font-[600] dark:bg-[#454545] dark:text-[#fff]">
            MV排行榜</h1>
        <div>
           <myCharts></myCharts>
        </div>
        <routerfoot></routerfoot>
    </div>
</template>

<script>
import myCharts from "@/components/myCharts/myCharts.vue";
export default {
    name: "theCharts",
    data() {
        return {
           
        }
    },
    components:{
        myCharts
    }
}  
</script>

<style scoped></style>
