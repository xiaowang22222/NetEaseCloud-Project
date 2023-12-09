<template>
    <div class="login">
        <div class="login_body">
            <div class="login_header">
                <div @click="back">
                    <Icon icon="ph:x" />
                </div>
                <span>游客登录</span>
            </div>
            <div v-if="this.display">
                <div class="login_netEase_icon">
                    <Icon icon="ri:netease-cloud-music-fill" />
                </div>
                <div>
                    <div class="login_inputAll">
                        <div class="login_input">
                            <input type="text" placeholder="请输入手机号" v-model="phone" />
                            <div class="zhong" @click="show = true">
                                {{ area }}
                                <Icon icon="bxs:down-arrow" />
                            </div>
                            <div class="last" @click.stop="empty">
                                <Icon icon="ph:x-circle-fill" />
                            </div>
                        </div>
                        <button @click.stop="sendCode">获取验证码</button>
                        <div class="login_term">
                            <input type="radio" :checked="flag" @click="negation" />
                            我已阅读并同意《服务条款》、《隐私政策》
                        </div>
                    </div>
                </div>
                <van-action-sheet v-model="show" title="选择国家和地区">
                    <van-index-bar v-if="areaAll">
                        <div v-for="item in  areaAll" :key="item.id">
                            <van-index-anchor :index="item.label" />
                            <div v-for="item1 in item.countryList" :key="item1.id"  class="flex justify-between pr-[10vw]" @click="tagbel(item1.code)">
                                <van-cell :title="item1.zh" />
                                <span>+{{ item1.code }}</span>
                            </div>
                        </div>
                    </van-index-bar>
                </van-action-sheet>
            </div>

            <div v-else>
                <h4>输入验证码</h4>
                <p>验证码已发送至+{{ area }} {{ phone }}</p>
                <div>
                    <!-- 密码输入框 -->
                    <input type="number" maxlength="4" minlength="4" ref="input" v-model="value" class="w-[0] h-[0]">
                    <PasswordInput 
                    :value="value" 
                    @click="focusInput"
                    :length="4" 
                    :focused="focused" 
                    class="border-[1px]"
                    :gutter="10"
                    :mask="false"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getCaptcha, areaDataAll } from "@/service"
import {PasswordInput} from "vant"
export default {
    components:{PasswordInput},
    data() {
        return {
            show: false,
            area: "+86",
            flag: false,
            phone: "",
            display: true,
            value: '',
            focused: false,
            areaAll: ""
        }
    },
    methods: {
        tagbel(a){
            this.area = a
        },
        back() {
            this.$router.go(-1)
        },
        async sendCode() {
            if (this.flag) {
                if (!/^1[356789]\d{9}/.test(this.phone)) return alert("手机号格式错误")
                const [err, res] = await getCaptcha({ phone: this.phone })
                if (err) return alert("发送失败")
                alert("验证码发送成功")
                console.log(res);
                this.display = false

            } else {
                alert("请勾选协议")
            }
        },
        negation() {
            this.flag = !this.flag
        },
        empty() {
            this.phone = ""
        },
        focusInput(){
            // console.log("a",this);
            this.$refs.input.focus()
            this.focused = true
        }
    },
    watch: {
        value(value) {
            if (value.length === 4) {
                this.$store.dispatch("loginCellphoneDate", { phone: this.phone, captcha: value })
                this.$router.push({
                    path:"/homePage"
                })
            } else {
                console.log("b");
            }
        },
    },
    async created() {
        const [err, res] = await areaDataAll()
        if (err) return alert("获取失败")
        this.areaAll = res.data.data
        console.log(this.areaAll);
    }
}
</script>
<style scoped>
.login {
    width: 100%;
    height: 100vh;
    background-color: #fff;
    position: relative;
    z-index: 10;
    overflow: hidden;
}

.content {
    padding: 16px 16px 160px;
}

.login_body {
    width: 100%;
    margin-top: 15vw;
    padding: 0 6vw 0 5vw;
}

.login_header {
    width: 100%;
    height: 4vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #a9adb5
}


.login_netEase_icon {
    width: 100%;
    height: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login_netEase_icon svg {
    font-size: 26vw;
    color: #de4033
}

.login_inputAll {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.login_input {
    width: 90%;
    height: 16vw;
    background-color: #f2f3f4;
    position: relative;
    border-radius: 15px;
    margin: 0 auto;
}

.login_input input {
    width: 100%;
    height: 16vw;
    background-color: #f2f3f4;
    padding-left: 25vw;
    border-radius: 15px;
    outline: none;
    font-size: 20px;
}

.login_input>.zhong {
    position: absolute;
    left: 5vw;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    background-color: #f2f3f4;
    display: flex;

}


.login_input>.last {
    position: absolute;
    right: 5vw;
    top: 50%;
    transform: translateY(-50%);
    font-size: 6vw;
}

button {
    width: 90%;
    height: 12vw;
    background-color: #ea4d44;
    margin: 5vw auto;
    margin-left: 5vw;
    border-radius: 25px;
    color: #fff;
}

.login_term {
    font-size: 12px;
}
</style>