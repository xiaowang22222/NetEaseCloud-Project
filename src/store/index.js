import Vue from "vue"
import Vuex from "vuex"
import persistedstate from "vuex-persistedstate"
import { horizontalAll, loginCellphone, userPlaylist } from "@/service"

Vue.use(Vuex)

const store = new Vuex.Store({
    //存储公共数据
    state: {
        blocks: [],
        auth: [],
        playlistdata: [],
        show:false,
       
    },
    // actions触发store.dispatch("")
    mutations: {
        updateBlocks(state, res) {
            state.blocks = res.data.data.blocks
        },
        undateLoginCell(state, res) {
            state.auth = res.data
        },
        userPlaylistDate(state, res) {
            state.playlistdata = res
        },
        deleteCachedData(state) {
            if (confirm('确定退出吗？')) {
                state.auth = {};
            }

        },
        showa(state,val){
            state.show=val 
        },
    },
    //mutations 定义同步修改公共数据的方法
    actions: {
        async horizontalAllDate() {
            const [err, HomePageData] = await horizontalAll();
            if (err) return;
            store.commit("updateBlocks", HomePageData)
        },
        async loginCellphoneDate(store, data) {
            const [err, HomePageData] = await loginCellphone(data);
            if (err) return;
            console.log(HomePageData);
            store.commit("undateLoginCell", HomePageData)
        },
        async userPlaylistDate(store, data) {
            const [err, HomePageData] = await userPlaylist(data);
            console.log(data);
            if (err) {
                return false
            } else {
                console.log(HomePageData);
                store.commit("userPlaylistDate", HomePageData)
            }

        }
    },
    //actions 定义异步修改公共数据的方法(借助mutations)
    //plugins  扩展其他额外的功能
    plugins: [
        persistedstate()
    ]
})

export default store