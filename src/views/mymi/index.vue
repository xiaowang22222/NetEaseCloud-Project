<template>
    <div class="box dark:bg-[#454545] dark:text-[#fff]">
        <div class="pb-[24vw]">
            <mymiTou></mymiTou>
            <mymiBody></mymiBody>
        </div>
      <routerfoot></routerfoot>
    </div>
</template>

<script>
import mymiTou from "@/components/mymi/mymiTou.vue"
import mymiBody from "@/components/mymi/mymiBody.vue"

export default {
    name: "home-mymi",
    components: {
        mymiTou,
        mymiBody
    },
    
}  
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
}

.box{
    background-color: #ece8e8;
}
</style>
