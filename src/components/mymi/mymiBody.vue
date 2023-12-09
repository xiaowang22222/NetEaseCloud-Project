<template>
    <div class="">
        <personalData :auth="auth"></personalData>
        <application></application>
        <loveMiuce></loveMiuce>
        <ImportPlaylist></ImportPlaylist>
        <collect></collect>
    </div>
</template>

<script>
import personalData from "./mymiBodyAll/personalData.vue"
import loveMiuce from "./mymiBodyAll/loveMiuce.vue"
import collect from "./mymiBodyAll/collect.vue"
import ImportPlaylist from "./mymiBodyAll/ImportPlaylist.vue"
import application from "./mymiBodyAll/application.vue"
export default {
    data() {
        return {
            auth: [],
            userplayList: []
        }
    },
    components: {
        personalData,
        application,
        loveMiuce,
        ImportPlaylist,
        collect
    },
    created() {
        this.auth = this.$store.state.auth;
        this.$store.dispatch("userPlaylistDate", { uid: this.auth.account.id })
    },

}
</script>

<style scoped></style>