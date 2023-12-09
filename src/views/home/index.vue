<template>
    <div class="bg-[#F4F4F4] ">
        <div class="h-[89vh] overflow-auto">
            <seach :auth="auth"></seach>
            <Homesiwper></Homesiwper>
            <horizontal></horizontal>
            <home v-for="block in blocks" :key="block.blockCode" :reource="block"></home>
        </div>
        <routerfoot></routerfoot>

    </div>
</template>

<script>

import home from "@/components/home/index.vue"
import seach from "@/components/home/homepage/seach.vue" //搜索
import Homesiwper from "@/components/home/homepage/homesiwper.vue" //轮播
import horizontal from "@/components/home/homepage/horizontal.vue" //图标选项

import {mapState} from "vuex"
export default {
    name: "home-Index",
    data(){
        return{
            flag:false,
            auth: [],
        }
    },
    computed:{
        ...mapState(['blocks'])
    },
    components: {
        home,
        seach,
        Homesiwper,
        horizontal,
    },
    created() {
        this.auth = this.$store.state.auth;
        this.$store.dispatch("userPlaylistDate", { uid: this.auth.account.id })
    },
}  
</script>

<style></style>
