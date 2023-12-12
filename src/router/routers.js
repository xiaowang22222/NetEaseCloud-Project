import homePage from '@/views/home/index.vue'
import theCharts from "@/views/theCharts/index.vue"
import mymi from "@/views/mymi/index.vue"
import follow from "@/views/follow/index.vue"
import community from "@/views/community/index.vue"
import Playlist from "@/views/Playlist/index.vue"
import login from "@/views/login/index.vue"
import myUrl from "@/components/myCharts/mv.vue"
import audioPlay from "@/views/audioPlay/index.vue"
import comment from "@/views/comment/index.vue"
export default [
    {
        path:"/",
        redirect: "/homePage"
    },
    {
        path:"/homePage",
        name:"homePage",
        component:homePage
    },
    {
        path:"/theCharts",
        name:"theCharts",
        component:theCharts
    },
    {
        path:"/mymi",
        name:"mymi",
        component:mymi
    },
    {
        path:"/follow",
        name:"follow",
        component:follow
    },
    {
        path:"/community",
        name:"community",
        component:community
    },
    {
        path:"/Playlist",
        name:"Playlist",
        component:Playlist
    },
    {
        path:"/login",
        name:"login",
        component:login
    },
    {
        path:"/mvUrl",
        name:"mvUrl",
        component:myUrl
    },
    {
        path:"/audioPlay",
        name:"audioPlay",
        component:audioPlay
    },
    {
        path:"/comment",
        name:"comment",
        component:comment
    }
]