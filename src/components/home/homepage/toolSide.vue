<template>
    <div  class="dark:bg-[#454545] dark:text-[#fff]">
        <!-- 开通黑胶VIP -->
        <div
            class="mx-auto w-[76vw] h-[27.66vw] bg-gradient-to-r from-[#3b3b3b] to-[#5f5050] px-[3.96vw] text-[#9e8f8f] rounded-[20px]">
            <div class="h-[10vw] flex justify-between items-center">
                <h1 class="text-[3.6vw] text-[#ffeeeb]">开通黑胶VIP</h1>
                <div
                    class="w-[15.78vw] h-[6.56vw] leading-[6vw] text-center rounded-[100px] border-[1px] border-[#9e8f8f] text-[2.5vw] mt-[3vw]">
                    会员中心
                </div>
            </div>
            <div class="h-[7vw] border-b-[1px] border-[#494443]">
                <p class="text-[2.73vw]">点击恢复超21项专属特权</p>
            </div>
            <div class="h-[11vw] leading-[11vw] flex justify-between items-center mr-[4.45vw]">
                <div class="text-[2.5vw] h-[11vw]">受邀专享，黑胶VIP低至0.27元/天!</div>
                <div class="scale-50 w-[8vw]">
                    <div class="w-[22vw] h-[22vw] rounded-[10px] bg-[#e54701] text-[#fff] pl-[3vw] text-[8vw] scale-50">受邀专享
                    </div>
                </div>
            </div>
        </div>
        <!-- 消息部分 -->
        <div class="dark:bg-[#2c2c2c] rounded-[15px] bg-[#fff] w-[76vw] mx-auto mt-[4vw]" style="pointer-events: auto;">
            <div class="px-[4vw]">
                <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                    <div class="flex items-center">
                        <Icon icon="lets-icons:message-light" color="#000"
                            class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar" />
                        <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">我的消息</span>
                    </div>
                    <div class="flex items-center">
                        <Icon icon="mingcute:right-line" color="#000"
                            class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute" />
                    </div>
                </div>
                <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                    <div class="flex items-center">
                        <Icon icon="simple-icons:shell" color="#000"
                            class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--cib" />
                        <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">云贝中心</span>
                    </div>
                    <div class="flex items-center">
                        <span class="text-[color:#a7a7a7] text-[3vw]">签到</span>
                        <Icon icon="mingcute:right-line" color="#000"
                            class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute" />
                    </div>
                </div>
                <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                    <div class="flex items-center">
                        <Icon icon="tabler:bulb-filled" color="black"
                            class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw]" />
                        <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">创作者中心</span>
                    </div>
                    <div class="flex items-center">
                        <Icon icon="mingcute:right-line" color="#000"
                            class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute" />
                    </div>
                </div>
            </div>
        </div>
        <!-- 音乐服务 -->
        <div class="dark:bg-[#2c2c2c] rounded-[15px] bg-[#fff] w-[76vw] mx-auto mt-[4vw]" style="pointer-events: auto;">
            <div
                class="dark:border-b-[#333] text-[#969696] text-[3vw] px-[4vw] py-[3vw] border-b-[0.35vw] border-b-[#E8e8e8]">
                音乐服务
            </div>
            <div class="px-[4vw]">
                <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                    <div class="flex items-center">
                        <Icon icon="lets-icons:message-light" color="#000"
                            class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar" />
                        <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">趣测</span>
                    </div>
                    <div class="flex items-center">
                        <Icon icon="mingcute:right-line" color="#000"
                            class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute" />
                    </div>
                </div>
                <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                    <div class="flex items-center">
                        <Icon icon="emojione-monotone:admission-tickets" color="black" :rotate="1"
                            class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw]" />
                        <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">云村有票</span>
                    </div>
                    <div class="flex items-center">
                        <Icon icon="mingcute:right-line" color="#000"
                            class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute" />
                    </div>
                </div>
                <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                    <div class="flex items-center">
                        <Icon icon="lets-icons:message-light" color="#000"
                            class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar" />
                        <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">多多嘻嘻口袋</span>
                    </div>
                    <div class="flex items-center">
                        <Icon icon="mingcute:right-line" color="#000"
                            class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute" />
                    </div>
                </div>
                <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                    <div class="flex items-center">
                        <Icon icon="ant-design:shopping-outlined" color="black"
                            class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] " />
                        <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">商城</span>
                    </div>
                    <div class="flex items-center">
                        <Icon icon="mingcute:right-line" color="#000"
                            class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute" />
                    </div>
                </div>
                <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                    <div class="flex items-center">
                        <Icon icon="icon-park-outline:electrocardiogram" color="black"
                            class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] " />
                        <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">Beat专区</span>
                    </div>
                    <div class="flex items-center">
                        <span class="text-[color:#a7a7a7] text-[3vw]">顶尖制作邀你创作</span>
                        <Icon icon="mingcute:right-line" color="#000"
                            class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute" />
                    </div>
                </div>
                <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                    <div class="flex items-center">
                        <Icon icon="iwwa:alarm" color="black"
                            class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] " />
                        <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">口袋彩铃</span>
                    </div>
                    <div class="flex items-center">
                        <Icon icon="mingcute:right-line" color="#000"
                            class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute" />
                    </div>
                </div>
                <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                    <div class="flex items-center">
                        <Icon icon="fluent-mdl2:game" color="black"
                            class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] " />
                        <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">游戏专区</span>
                    </div>
                    <div class="flex items-center">
                        <span class="text-[color:#a7a7a7] text-[3vw]">音乐浇灌治愈花园</span>
                        <Icon icon="mingcute:right-line" color="#000"
                            class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute" />
                    </div>
                </div>
            </div>
        </div>
        <!-- 其他配置项 -->
        <div class="dark:bg-[#2c2c2c] rounded-[15px] bg-[#fff] w-[76vw] mx-auto mt-[4vw]">
            <div
                class="dark:border-b-[#333] text-[#969696] text-[3vw] px-[4vw] py-[3vw] border-b-[0.35vw] border-b-[#E8e8e8]">
                其他
            </div>
            <div class="px-[4vw]">
                <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                            class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--ri">
                            <path fill="currentColor"
                                d="m12 1l9.5 5.5v11L12 23l-9.5-5.5v-11L12 1Zm0 2.311L4.5 7.653v8.694l7.5 4.342l7.5-4.342V7.653L12 3.311ZM12 16a4 4 0 1 1 0-8a4 4 0 0 1 0 8Zm0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z">
                            </path>
                        </svg>
                        <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">设置</span>
                    </div>
                    <div class="flex items-center"><!---->
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                            class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute" style="color: rgb(181, 181, 181);">
                            <g fill="none" fill-rule="evenodd">
                                <path
                                    d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092">
                                </path>
                                <path fill="currentColor"
                                    d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657">
                                </path>
                            </g>
                        </svg> <!---->
                    </div>
                </div>
                <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                            class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--line-md">
                            <g fill="currentColor" fill-opacity="0">
                                <path
                                    d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
                                    <animate id="iconifyVue0" fill="freeze" attributeName="fill-opacity"
                                        begin="0.7s;iconifyVue0.begin+6s" dur="0.4s" values="0;1">

                                    </animate>
                                    <animate fill="freeze" attributeName="fill-opacity" begin="iconifyVue0.begin+2.2s"
                                        dur="0.4s" values="1;0">

                                    </animate>
                                </path>
                                <path
                                    d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                                    <animate fill="freeze" attributeName="fill-opacity" begin="iconifyVue0.begin+3s"
                                        dur="0.4s" values="0;1">

                                    </animate>
                                    <animate fill="freeze" attributeName="fill-opacity" begin="iconifyVue0.begin+5.2s"
                                        dur="0.4s" values="1;0">

                                    </animate>
                                </path>
                                <path
                                    d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                                    <animate fill="freeze" attributeName="fill-opacity" begin="iconifyVue0.begin+0.4s"
                                        dur="0.4s" values="0;1">

                                    </animate>
                                    <animate fill="freeze" attributeName="fill-opacity" begin="iconifyVue0.begin+2.8s"
                                        dur="0.4s" values="1;0">

                                    </animate>
                                </path>
                                <path
                                    d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
                                    <animate fill="freeze" attributeName="fill-opacity" begin="iconifyVue0.begin+3.4s"
                                        dur="0.4s" values="0;1">

                                    </animate>
                                    <animate fill="freeze" attributeName="fill-opacity" begin="iconifyVue0.begin+5.6s"
                                        dur="0.4s" values="1;0"></animate>
                                </path>
                            </g>
                            <path fill="none" stroke="currentColor" stroke-dasharray="56" stroke-dashoffset="56"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z">
                                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0">

                                </animate>
                            </path>
                        </svg>
                        <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">深色模式</span>
                    </div>
                    <div class="flex items-center">
                        <div class="relative inline-block mr-2 align-middle select-none transition duration-200 ease-in">
                            <div>
                                <van-switch v-model="checked" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                            class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--mdi">
                            <path fill="currentColor"
                                d="M12 20a7 7 0 0 1-7-7a7 7 0 0 1 7-7a7 7 0 0 1 7 7a7 7 0 0 1-7 7m0-16a9 9 0 0 0-9 9a9 9 0 0 0 9 9a9 9 0 0 0 9-9a9 9 0 0 0-9-9m.5 4H11v6l4.75 2.85l.75-1.23l-4-2.37zM7.88 3.39L6.6 1.86L2 5.71l1.29 1.53zM22 5.72l-4.6-3.86l-1.29 1.53l4.6 3.86z">

                            </path>
                        </svg>
                        <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">定时关闭</span>
                    </div>
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                            class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute" style="color: rgb(181, 181, 181);">
                            <g fill="none" fill-rule="evenodd">
                                <path
                                    d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092">

                                </path>
                                <path fill="currentColor"
                                    d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657">

                                </path>
                            </g>
                        </svg>
                    </div>
                </div>
                <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 256 256"
                            class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--ph">
                            <path fill="currentColor"
                                d="m245.68 64.73l-51.77-28.24A4 4 0 0 0 192 36h-32a4 4 0 0 0-4 4a28 28 0 0 1-56 0a4 4 0 0 0-4-4H64a4 4 0 0 0-1.9.5L10.32 64.73a11.79 11.79 0 0 0-5 15.89l19.28 36.81a12.37 12.37 0 0 0 11 6.57H60v84a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12v-84h24.33a12.37 12.37 0 0 0 11-6.57l19.28-36.81a11.79 11.79 0 0 0-4.93-15.89ZM35.67 116a4.46 4.46 0 0 1-4-2.28L12.44 76.91a3.79 3.79 0 0 1 1.71-5.15L60 46.74V116ZM188 208a4 4 0 0 1-4 4H72a4 4 0 0 1-4-4V44h24.22a36 36 0 0 0 71.56 0H188Zm55.56-131.09l-19.27 36.81a4.46 4.46 0 0 1-4 2.28H196V46.74l45.85 25a3.79 3.79 0 0 1 1.71 5.17Z">

                            </path>
                        </svg>
                        <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">个性装扮</span>
                    </div>
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                            class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute" style="color: rgb(181, 181, 181);">
                            <g fill="none" fill-rule="evenodd">
                                <path
                                    d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092">

                                </path>
                                <path fill="currentColor"
                                    d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657">

                                </path>
                            </g>
                        </svg>
                    </div>
                </div>
                <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                            class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--iconoir">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5">
                                <path d="M12 12v5m0 4.01l.01-.011M4 13.5V13c0-4.97 3.582-9 8-9s8 4.03 8 9v.5">

                                </path>
                                <path
                                    d="M2 17.439v-1.877a2 2 0 0 1 1.515-1.94L4 13.5l1.254-.314a.6.6 0 0 1 .746.582v5.464a.6.6 0 0 1-.746.582l-1.74-.435A2 2 0 0 1 2 17.439m20 0v-1.877a2 2 0 0 0-1.515-1.94L20 13.5l-1.255-.314a.6.6 0 0 0-.745.582v5.464a.6.6 0 0 0 .745.582l1.74-.435A2 2 0 0 0 22 17.439">

                                </path>
                            </g>
                        </svg>
                        <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">边听边存</span>
                    </div>
                    <div class="flex items-center">
                        <span class="text-[color:#a7a7a7] text-[3vw]">未开启</span>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                            class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute" style="color: rgb(181, 181, 181);">
                            <g fill="none" fill-rule="evenodd">
                                <path
                                    d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092">

                                </path>
                                <path fill="currentColor"
                                    d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657">

                                </path>
                            </g>
                        </svg>
                    </div>
                </div>
                <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                            class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--iconoir">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5">
                                <path d="M12 12v5m0 4.01l.01-.011M4 13.5V13c0-4.97 3.582-9 8-9s8 4.03 8 9v.5">

                                </path>
                                <path
                                    d="M2 17.439v-1.877a2 2 0 0 1 1.515-1.94L4 13.5l1.254-.314a.6.6 0 0 1 .746.582v5.464a.6.6 0 0 1-.746.582l-1.74-.435A2 2 0 0 1 2 17.439m20 0v-1.877a2 2 0 0 0-1.515-1.94L20 13.5l-1.255-.314a.6.6 0 0 0-.745.582v5.464a.6.6 0 0 0 .745.582l1.74-.435A2 2 0 0 0 22 17.439">

                                </path>
                            </g>
                        </svg>
                        <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">在线听歌免流量</span>
                    </div>
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                            class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute" style="color: rgb(181, 181, 181);">
                            <g fill="none" fill-rule="evenodd">
                                <path
                                    d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092">

                                </path>
                                <path fill="currentColor"
                                    d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657">

                                </path>
                            </g>
                        </svg>
                    </div>
                </div>
                <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                            class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar">
                            <g fill="none" stroke="currentColor" stroke-width="1.5">
                                <path
                                    d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12Z">

                                </path>
                                <path stroke-linecap="round" d="M10 16H6m8 0h-1.5M2 10h20">

                                </path>
                            </g>
                        </svg>
                        <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">音乐黑名单</span>
                    </div>
                    <div class="flex items-center">
                        <span class="text-[color:#a7a7a7] text-[3vw]">未开启</span>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                            class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute" style="color: rgb(181, 181, 181);">
                            <g fill="none" fill-rule="evenodd">
                                <path
                                    d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092">

                                </path>
                                <path fill="currentColor"
                                    d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657">

                                </path>
                            </g>
                        </svg>
                    </div>
                </div>
                <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 1024 1024"
                            class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--ant-design">
                            <path fill="currentColor"
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372c0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372c0 89-31.3 170.8-83.5 234.8z">

                            </path>
                        </svg>
                        <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">青少年模式</span>
                    </div>
                    <div class="flex items-center">
                        <span class="text-[color:#a7a7a7] text-[3vw]">未开启</span>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                            class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute" style="color: rgb(181, 181, 181);">
                            <g fill="none" fill-rule="evenodd">
                                <path
                                    d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092">

                                </path>
                                <path fill="currentColor"
                                    d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657">

                                </path>
                            </g>
                        </svg>
                    </div>
                </div>
                <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 1024 1024"
                            class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--ep">
                            <path fill="currentColor"
                                d="M512 832a320 320 0 1 0 0-640a320 320 0 0 0 0 640m0 64a384 384 0 1 1 0-768a384 384 0 0 1 0 768">

                            </path>
                            <path fill="currentColor"
                                d="m292.288 824.576l55.424 32l-48 83.136a32 32 0 1 1-55.424-32zm439.424 0l-55.424 32l48 83.136a32 32 0 1 0 55.424-32zM512 512h160a32 32 0 1 1 0 64H480a32 32 0 0 1-32-32V320a32 32 0 0 1 64 0zM90.496 312.256A160 160 0 0 1 312.32 90.496l-46.848 46.848a96 96 0 0 0-128 128L90.56 312.256zm835.264 0A160 160 0 0 0 704 90.496l46.848 46.848a96 96 0 0 1 128 128z">

                            </path>
                        </svg>
                        <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">音乐闹钟</span>
                    </div>
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                            class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute" style="color: rgb(181, 181, 181);">
                            <g fill="none" fill-rule="evenodd">
                                <path
                                    d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092">

                                </path>
                                <path fill="currentColor"
                                    d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657">

                                </path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <!-- 订单类 -->
        <div class="dark:bg-[#2c2c2c] rounded-[15px] bg-[#fff] w-[76vw] mx-auto mt-[4vw]" style="pointer-events: auto;">
            <div class="px-[4vw]">
                <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                            class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--iconoir">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5">
                                <path
                                    d="M4 21.4V2.6a.6.6 0 0 1 .6-.6h11.652a.6.6 0 0 1 .424.176l3.148 3.148A.6.6 0 0 1 20 5.75V21.4a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6M8 10h8m-8 8h8m-8-4h4">

                                </path>
                                <path d="M16 2v3.4a.6.6 0 0 0 .6.6H20">

                                </path>
                            </g>
                        </svg>
                        <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">我的订单</span>
                    </div>
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                            class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute" style="color: rgb(181, 181, 181);">
                            <g fill="none" fill-rule="evenodd">
                                <path
                                    d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092">

                                </path>
                                <path fill="currentColor"
                                    d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657">

                                </path>
                            </g>
                        </svg>
                    </div>
                </div>
                <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 512 512"
                            class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--ion">
                            <path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"
                                d="M366.05 146a46.7 46.7 0 0 1-2.42-63.42a3.87 3.87 0 0 0-.22-5.26l-44.13-44.18a3.89 3.89 0 0 0-5.5 0l-70.34 70.34a23.62 23.62 0 0 0-5.71 9.24a23.66 23.66 0 0 1-14.95 15a23.7 23.7 0 0 0-9.25 5.71L33.14 313.78a3.89 3.89 0 0 0 0 5.5l44.13 44.13a3.87 3.87 0 0 0 5.26.22a46.69 46.69 0 0 1 65.84 65.84a3.87 3.87 0 0 0 .22 5.26l44.13 44.13a3.89 3.89 0 0 0 5.5 0l180.4-180.39a23.7 23.7 0 0 0 5.71-9.25a23.66 23.66 0 0 1 14.95-15a23.62 23.62 0 0 0 9.24-5.71l70.34-70.34a3.89 3.89 0 0 0 0-5.5l-44.13-44.13a3.87 3.87 0 0 0-5.26-.22a46.7 46.7 0 0 1-63.42-2.32Z">

                            </path>
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10"
                                stroke-width="32"
                                d="m250.5 140.44l-16.51-16.51m60.53 60.53l-11.01-11m55.03 55.03l-11-11.01m60.53 60.53l-16.51-16.51">

                            </path>
                        </svg>
                        <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">优惠券</span>
                    </div>
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                            class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute" style="color: rgb(181, 181, 181);">
                            <g fill="none" fill-rule="evenodd">
                                <path
                                    d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092">

                                </path>
                                <path fill="currentColor"
                                    d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657">

                                </path>
                            </g>
                        </svg>
                    </div>
                </div>
                <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 1024 1024"
                            class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--ep">
                            <path fill="currentColor"
                                d="M864 409.6a192 192 0 0 1-37.888 349.44A256.064 256.064 0 0 1 576 960h-96a32 32 0 1 1 0-64h96a192.064 192.064 0 0 0 181.12-128H736a32 32 0 0 1-32-32V416a32 32 0 0 1 32-32h32c10.368 0 20.544.832 30.528 2.432a288 288 0 0 0-573.056 0A193.235 193.235 0 0 1 256 384h32a32 32 0 0 1 32 32v320a32 32 0 0 1-32 32h-32a192 192 0 0 1-96-358.4a352 352 0 0 1 704 0M256 448a128 128 0 1 0 0 256zm640 128a128 128 0 0 0-128-128v256a128 128 0 0 0 128-128">

                            </path>
                        </svg>
                        <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">我的客服</span>
                    </div>
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                            class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute" style="color: rgb(181, 181, 181);">
                            <g fill="none" fill-rule="evenodd">
                                <path
                                    d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092">

                                </path>
                                <path fill="currentColor"
                                    d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657">

                                </path>
                            </g>
                        </svg>
                    </div>
                </div>
                <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                            class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--ri">
                            <path fill="currentColor"
                                d="M11 2.05v2.012A8.001 8.001 0 0 0 12 20a8.001 8.001 0 0 0 7.938-7h2.013c-.502 5.053-4.766 9-9.951 9c-5.523 0-10-4.477-10-10c0-5.185 3.947-9.449 9-9.95Zm9 3.364l-8 8L10.586 12l8-8H14V2h8v8h-2V5.414Z">

                            </path>
                        </svg>
                        <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">分享网易云音乐</span>
                    </div>
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                            class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute" style="color: rgb(181, 181, 181);">
                            <g fill="none" fill-rule="evenodd">
                                <path
                                    d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092">

                                </path>
                                <path fill="currentColor"
                                    d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657">

                                </path>
                            </g>
                        </svg>
                    </div>
                </div>
                <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 256 256"
                            class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--ph">
                            <path fill="currentColor"
                                d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83ZM156 41.65L198.34 84H156ZM200 220H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4Z">

                        </path>
                    </svg>
                    <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">个人信息收集与使用清单</span>
                </div>
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                        class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute" style="color: rgb(181, 181, 181);">
                        <g fill="none" fill-rule="evenodd">
                            <path
                                d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092">

                            </path>
                            <path fill="currentColor"
                                d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657">

                            </path>
                        </g>
                    </svg>
                </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 48 48"
                        class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--icon-park-outline">
                        <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4">
                            <path
                                d="M40 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8ZM24 28a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm16 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8ZM8 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0 32a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z">

                            </path>
                            <path stroke-linecap="round" d="M20 40h8M20 8h8M8 20v8m32-8v8">

                            </path>
                        </g>
                    </svg>
                    <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">个人信息第三方共享清单</span>
                </div>
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                        class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute" style="color: rgb(181, 181, 181);">
                        <g fill="none" fill-rule="evenodd">
                            <path
                                d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092">

                            </path>
                            <path fill="currentColor"
                                d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657">

                            </path>
                        </g>
                    </svg>
                </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                <div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em"
                        height="1em" viewBox="0 0 32 32"
                        class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--icons8">
                        <path fill="currentColor"
                            d="M16 4c-2.144 0-3.884 1.72-3.97 3.844A9.933 9.933 0 0 0 6 17c0 .17-.008.36 0 .563c-1.185.696-2 1.972-2 3.437c0 2.197 1.803 4 4 4c.575 0 1.13-.122 1.625-.344C11.358 26.112 13.618 27 16 27s4.642-.888 6.375-2.344A3.98 3.98 0 0 0 24 25c2.197 0 4-1.803 4-4c0-1.48-.825-2.777-2.03-3.47c.015-.16.03-.32.03-.53a9.931 9.931 0 0 0-6.03-9.156C19.883 5.72 18.143 4 16 4m0 2c1.116 0 2 .884 2 2s-.884 2-2 2s-2-.884-2-2s.884-2 2-2m-3.53 3.844C13.14 11.118 14.47 12 16 12c1.53 0 2.86-.882 3.53-2.156A7.937 7.937 0 0 1 24 17c-2.197 0-4 1.803-4 4c0 .895.31 1.706.813 2.375A8.08 8.08 0 0 1 16 25a8.077 8.077 0 0 1-4.813-1.625A3.93 3.93 0 0 0 12 21c0-2.197-1.803-4-4-4c0-3.12 1.79-5.856 4.47-7.156zM8 19c1.116 0 2 .884 2 2s-.884 2-2 2s-2-.884-2-2s.884-2 2-2m16 0c1.116 0 2 .884 2 2s-.884 2-2 2s-2-.884-2-2s.884-2 2-2">

                        </path>
                    </svg>
                    <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">个人信息与隐私保护</span>
                </div>
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                        class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute" style="color: rgb(181, 181, 181);">
                        <g fill="none" fill-rule="evenodd">
                            <path
                                d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092">

                            </path>
                            <path fill="currentColor"
                                d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657">

                            </path>
                        </g>
                    </svg>
                </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 48 48"
                        class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--icon-park-outline">
                        <g fill="none">
                            <path stroke="currentColor" stroke-linejoin="round" stroke-width="4"
                                d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4A19.938 19.938 0 0 0 9.858 9.858A19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z">

                            </path>
                            <path fill="currentColor" fill-rule="evenodd" d="M24 37a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"
                                clip-rule="evenodd">

                            </path>
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"
                                d="M24 12v16">

                            </path>
                        </g>
                    </svg>
                    <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">关于</span>
                </div>
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                        class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute" style="color: rgb(181, 181, 181);">
                        <g fill="none" fill-rule="evenodd">
                            <path
                                d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092">

                            </path>
                            <path fill="currentColor"
                                d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657">

                            </path>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <!-- 退出登录 -->
    <div class="dark:bg-[#2c2c2c] h-[12vw] px-[3.6vw] bg-[#fff] w-[76vw] mt-[4vw] rounded-[15px] mx-auto leading-[12vw] text-center text-[3.6vw] text-[#ef4239]"
        style="pointer-events: auto;" @click.stop="deleteCachedData">退出登录</div>
    </div>
</template>

<script>
export default {
    name: "my-toolSide",
    methods: {
       
    },

    computed:{
        checked:{
            get(){
                return this.$store.state.show
            },
            set:function(newValue){
                this.$store.commit("showa",newValue)
            },
            deleteCachedData(){
                this.$store.commit("deleteCachedData")
            }
        }
    },
}
</script>
<style>
</style>