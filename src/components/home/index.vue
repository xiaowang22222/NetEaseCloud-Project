<template>
    <div class="dark:bg-[#454545]">
        <component :is="blocksTypeComonentMap[reource.blockCode] " :horizontal="reource"></component>
    </div>
</template>

<script>

import recommended from "./homepage/recommended.vue" //推荐歌单
// import zalbum from "./homepage/zalbum.vue" ///新歌专辑
import Ranking from "./homepage/Ranking.vue"
import StylePlaylist from "./homepage/stylePlaylist.vue"
const blocksTypeComonentMap = {
    // "HOMEPAGE_BANNER": banner,//轮播图
    // "HOMEPAGE_BLOCK_OLD_DRAGON_BALL": erevy,//每日推荐
    // "HOMEPAGE_BLOCK_PLAYLIST_RCMD":music_main ,//推荐歌单
    // "HOMEPAGE_BLOCK_STYLE_RCMD": newmusic,//
    // // list,
    // "HOMEPAGE_BLOCK_MGC_PLAYLIST": radar,//雷达歌单

    HOMEPAGE_BLOCK_PLAYLIST_RCMD: recommended,
    HOMEPAGE_BLOCK_STYLE_RCMD: StylePlaylist,
    HOMEPAGE_BLOCK_MGC_PLAYLIST: Ranking,
    // HOMEPAGE_BLOCK_NEW_ALBUM_NEW_SONG: zalbum,
}
export default {
    name: "home-Index",
    props: {
        reource: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            blocksTypeComonentMap
        }
    },
    created() {
        // console.log(this.reource);
    }
}  
</script>

<style></style>
