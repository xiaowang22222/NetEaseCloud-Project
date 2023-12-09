// import Main from './main.vue'
import Player from './player.js'
const player = new Player()
// (vue) => {
//     console.log(vue);
//     vue.component(Main.name,Main)
// }
// export default Main
export default {
    install(Vue) {
        // Vue.component(Main.name,Main);
        Vue.mixin({ //全局混入响应的Player实例
            computed:{
                mixin_player(){
                    return Vue.observable(player);
                }
            }
        })
    }
} 