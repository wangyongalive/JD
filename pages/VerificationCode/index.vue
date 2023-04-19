<template>
    <view class="app">
        <view class="box">
            <img src="../../static/jd-icon.png" />
            <view class="">请输入验证码</view>
            <view><text class="text-info">已发送至</text><text>+86&nbsp;&nbsp;&nbsp;{{ tel }}</text></view>
            <u-code-input @change="change" @finish="finish"></u-code-input>
            <view :class="[count === 10 ? 'text-normal' : 'text-info']" @click.stop="sendSms">重新发送({{ count }})</view>
            <u-button shape="circle" :color="
                code.length === 6
                    ? 'linear-gradient(to right, #f10000, #ff4f18)'
                    : 'linear-gradient(to right, #fab3b3, #ffcaba)'
            " text="登录" @click="login" :disabled="code.length != 6"></u-button>

            <u-toast ref="uToast"></u-toast>
        </view>
    </view>
</template>

<script>
import { geTel } from "../../utils/index";
import { sendSms, login } from "../../api/index.js";
const defaultTime = 60
export default {
    data() {
        return {
            timer: null,
            count: 60,
            color: "linear-gradient(to right, #f10000, #ff4f18)",
            code: "",
            tel: "",
            phone: "",
            captcha: "",
        };
    },
    onLoad(options) {
        const { phone, captcha } = JSON.parse(options.params);
        this.captcha = captcha;
        this.phone = phone;
        this.tel = geTel(phone);
    },
    created() { },
    mounted() {
        this.task();
    },
    destroyed() {
        clearInterval(this.timer);
        defaultTime = null
    },
    methods: {
        task() {
            this.timer = setInterval(() => {
                this.count--;
                if (this.count === 0) {
                    clearInterval(this.timer);
                    this.count = defaultTime;
                }
            }, 1000);
        },
        change(e) {
            // console.log("内容改变，当前值为：" + e);
            // console.log(e.length);
            // this.code = e;
        },
        finish(e) {
            // console.log("输入结束，当前值为：" + e);
            this.code = e;
        },
        async login() {
            // console.log('login')
            try {
                await login({
                    phone: this.phone,
                    sms_code: this.code,
                });
                this.$refs.uToast.show({
                    type: 'default',
                    message: "登录成功",
                    position: 'top'
                })
                uni.navigateTo({
                    url: `/pages/home/index`
                })
            } catch (err) {
                const { data } = err;
                this.$refs.uToast.show({
                    type: "error",
                    message: data,
                    position: "top",
                });
            }
        },
        async sendSms() {
            if (this.count !== defaultTime) {
                return;
            }
            this.task();
            try {
                const { data } = await sendSms({
                    phone: this.phone,
                });
                this.captcha = data;
            } catch (err) {
                const { data } = err;
                this.$refs.uToast.show({
                    type: "error",
                    message: data,
                    position: "top",
                });
            }
        },
    },
};
</script>

<style lang="scss">
page {
    height: 100%;
}

.app {
    height: 100%;
    display: flex;
    justify-content: center;

    .box {
        height: 280px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding-top: 50px;

        img {
            width: 100px;
            height: 100px;
        }

        .text-info {
            color: #8f9ca2;
            font-size: 14px;
        }

        .text-normal {
            color: #000;
            font-size: 14px;
        }
    }
}
</style>
