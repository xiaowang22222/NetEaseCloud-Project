<template>
    <div class="dark:bg-[#454545] dark:text-[#fff]" >
        <van-tabs v-model="active" >
            <van-tab title="内地">
                <div class="van-tab__pane">
                    <div class="overflow-auto px-[4vw] h-[82vh]">
                        <div class="w-[92vw]" v-for="(item, index) in topMv[0]" :key="item.id">
                            <div class="w-[100%] h-[52vw] relative" @click="mv(item)">
                                <img :src="item.cover" alt="" class=" w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]">
                                <div class="absolute top-[2vw] text-[#fff] right-[2vw] text-[2.6vw] flex items-center">
                                    <Icon icon="clarity:play-solid" color="white"
                                        class="iconify iconify--solar mr-[0.5vw] text-[2.6vw]" />
                                    {{ item.playCount }}
                                </div>
                            </div>
                            <div class="h-[15vw] flex items-center flex-wrap">
                                <div class="flex h-[5vw] w-[100vw]">
                                    <span class="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]">{{ index + 1
                                    }}</span>
                                    <span class=" flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]">{{
                                        item.name }}</span>
                                </div>
                                <div class="flex h-[4vw] items-center">
                                    <div
                                        class="w-[5.3vw] text-[#999999] text-[2vw] mr-[2.8vw] flex items-center justify-center">
                                        --</div>
                                    <div class=" flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                                        <span>{{ item.artistName }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="港台">
                <div class="van-tab__pane">
                    <div class="overflow-auto px-[4vw] h-[82vh]">
                        <div class="w-[92vw]" v-for="(item, index) in topMv[1]" :key="item.id">
                            <div class="w-[100%] h-[52vw] relative" @click="mv(item)">
                                <img :src="item.cover" alt="" class=" w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]">
                                <div class="absolute top-[2vw] text-[#fff] right-[2vw] text-[2.6vw] flex items-center">
                                    <Icon icon="clarity:play-solid" color="white"
                                        class="iconify iconify--solar mr-[0.5vw] text-[2.6vw]" />
                                    {{ item.playCount }}
                                </div>
                            </div>
                            <div class="h-[15vw] flex items-center flex-wrap">
                                <div class="flex h-[5vw] w-[100vw]">
                                    <span class="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]">{{ index + 1
                                    }}</span>
                                    <span class=" flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]">{{
                                        item.name }}</span>
                                </div>
                                <div class="flex h-[4vw] items-center">
                                    <div
                                        class="w-[5.3vw] text-[#999999] text-[2vw] mr-[2.8vw] flex items-center justify-center">
                                        --</div>
                                    <div class=" flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                                        <span>{{ item.artistName }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="欧美">
                <div class="van-tab__pane">
                    <div class="overflow-auto px-[4vw] h-[82vh]">
                        <div class="w-[92vw]" v-for="(item, index) in topMv[2]" :key="item.id">
                            <div class="w-[100%] h-[52vw] relative" @click="mv(item)">
                                <img :src="item.cover" alt="" class=" w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]">
                                <div class="absolute top-[2vw] text-[#fff] right-[2vw] text-[2.6vw] flex items-center">
                                    <Icon icon="clarity:play-solid" color="white"
                                        class="iconify iconify--solar mr-[0.5vw] text-[2.6vw]" />
                                    {{ item.playCount }}
                                </div>
                            </div>
                            <div class="h-[15vw] flex items-center flex-wrap">
                                <div class="flex h-[5vw] w-[100vw]">
                                    <span class="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]">{{ index + 1
                                    }}</span>
                                    <span class=" flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]">{{
                                        item.name }}</span>
                                </div>
                                <div class="flex h-[4vw] items-center">
                                    <div
                                        class="w-[5.3vw] text-[#999999] text-[2vw] mr-[2.8vw] flex items-center justify-center">
                                        --</div>
                                    <div class=" flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                                        <span>{{ item.artistName }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="韩国">
                <div class="van-tab__pane">
                    <div class="overflow-auto px-[4vw] h-[82vh]">
                        <div class="w-[92vw]" v-for="(item, index) in topMv[3]" :key="item.id">
                            <div class="w-[100%] h-[52vw] relative" @click="mv(item)">
                                <img :src="item.cover" alt="" class=" w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]">
                                <div class="absolute top-[2vw] text-[#fff] right-[2vw] text-[2.6vw] flex items-center">
                                    <Icon icon="clarity:play-solid" color="white"
                                        class="iconify iconify--solar mr-[0.5vw] text-[2.6vw]" />
                                    {{ item.playCount }}
                                </div>
                            </div>
                            <div class="h-[15vw] flex items-center flex-wrap">
                                <div class="flex h-[5vw] w-[100vw]">
                                    <span class="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]">{{ index + 1
                                    }}</span>
                                    <span class=" flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]">{{
                                        item.name }}</span>
                                </div>
                                <div class="flex h-[4vw] items-center">
                                    <div
                                        class="w-[5.3vw] text-[#999999] text-[2vw] mr-[2.8vw] flex items-center justify-center">
                                        --</div>
                                    <div class=" flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                                        <span>{{ item.artistName }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="日本">
                <div class="van-tab__pane">
                    <div class="overflow-auto px-[4vw] h-[82vh]">
                        <div class="w-[92vw]" v-for="(item, index) in topMv[4]" :key="item.id">
                            <div class="w-[100%] h-[52vw] relative" @click="mv(item)">
                                <img :src="item.cover" alt="" class=" w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]">
                                <div class="absolute top-[2vw] text-[#fff] right-[2vw] text-[2.6vw] flex items-center">
                                    <Icon icon="clarity:play-solid" color="white"
                                        class="iconify iconify--solar mr-[0.5vw] text-[2.6vw]" />
                                    {{ item.playCount }}
                                </div>
                            </div>
                            <div class="h-[15vw] flex items-center flex-wrap">
                                <div class="flex h-[5vw] w-[100vw]">
                                    <span class="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]">{{ index + 1
                                    }}</span>
                                    <span class=" flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]">{{
                                        item.name }}</span>
                                </div>
                                <div class="flex h-[4vw] items-center">
                                    <div
                                        class="w-[5.3vw] text-[#999999] text-[2vw] mr-[2.8vw] flex items-center justify-center">
                                        --</div>
                                    <div class=" flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                                        <span>{{ item.artistName }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import { topMv } from "@/service"
export default {
    data() {
        return {
            arseAll: [
                { id: 1, arse: "内地", },
                { id: 2, arse: "港台", },
                { id: 3, arse: "欧美", },
                { id: 4, arse: "韩国", },
                { id: 5, arse: "日本", }],
            active: 0,
            topMv: []
        }
    },
    methods:{
        mv(a){
            this.$router.push({
                path:"/mvUrl",
                query:{
                    id:a.mv.id
                }
            })
        }
    },
    created() {
        this.arseAll.forEach((val) => {
            topMv({ limit: 30, area: val.arse }).then((res) => {
                this.topMv.push(res.data.data)
            }).catch((err) => {
                console.log(err);
            })
        })
        console.log(this.topMv);
    }
}
</script>

<style></style>