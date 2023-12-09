<template>
    <ul class="footer_navigation w-[100vw] h-[12vw] text-center fixed bottom-0">
        <li class="van-tabbar-item van-tabbar-item--active dark:text-[#fff] dark:bg-[#454545]">
            <router-link to="/homePage" class="van-tabbar-item__text dark:text-[#fff]">
                <div class="van-tabbar-item__icon ">
                    <Icon icon="ri:netease-cloud-music-fill" />
                </div>首页
            </router-link>
        </li>
        <li class="van-tabbar-item van-tabbar-item--active dark:text-[#fff] dark:bg-[#454545]">
            <router-link to="/theCharts" class="van-tabbar-item__text  dark:text-[#fff]">
                <div class="van-tabbar-item__icon">
                    <Icon icon="icon-park-outline:ranking" />
                </div>排行榜
            </router-link>
        </li>
        <li class="van-tabbar-item van-tabbar-item--active  dark:text-[#fff] dark:bg-[#454545]">
            <router-link to="/mymi" class="van-tabbar-item__text  dark:text-[#fff]">
                <div class="van-tabbar-item__icon ">
                    <Icon icon="mingcute:music-line" />
                </div>我的
            </router-link>
        </li>
        <li class="van-tabbar-item van-tabbar-item--active dark:text-[#fff] dark:bg-[#454545]">
            <router-link to="/follow" class="van-tabbar-item__text  dark:text-[#fff]">
                <div class="van-tabbar-item__icon ">
                    <Icon icon="ri:user-follow-line" />
                </div>
                关注
            </router-link>
        </li>
        <li class="van-tabbar-item van-tabbar-item--active dark:text-[#fff] dark:bg-[#454545]">
            <router-link to="/community" class="van-tabbar-item__text  dark:text-[#fff]">
                <div class="van-tabbar-item__icon">
                    <Icon icon="la:weixin" />
                </div>
                社区
            </router-link>
        </li>
    </ul>
</template>
<script>
export default {

}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}



.footer_navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer_navigation li {
    width: 20%;
}


.van-tabbar {
    height: 100px;
}

.footer_navigation li a {
    color: black;
    border-radius: 50%;
    width: 12vw;
    display: block;
    height: 12vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.van-tabbar-item__icon {
    position: relative;
    height: 22px;
    width: 22px;
}



.van-tabbar-item__icon svg {
    width: 1em;
    height: 1em;
    font-size: 22px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.router-link-exact-active {
    background-color: red;
    color: white !important;
}

.slide-fade-enter-active {
    transition: all 0.5s;
}

/* .slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
} */
.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateY(100%);
    opacity: 0;
}
</style>