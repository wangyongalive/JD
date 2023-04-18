<template>
    <view class="app">
        <view class="box">
            <img src="../../static/jd-icon.png" />
            <view class="">请输入验证码</view>
            <view><text class="text-info">已发送至</text><text>+86&nbsp;&nbsp;&nbsp;138****6251</text></view>
            <u-code-input @change="change" @finish="finish"></u-code-input>
            <view :class="[count === 10 ? 'text-normal' : 'text-info']">重新发送({{ count }})</view>
            <u-button shape="circle"
                :color="code.length === 6 ? 'linear-gradient(to right, #f10000, #ff4f18)' : 'linear-gradient(to right, #fab3b3, #ffcaba)'"
                text="登录"></u-button>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            timer: null,
            count: 10,
            color: 'linear-gradient(to right, #f10000, #ff4f18)',
            code: ''
        }
    },
    onLoad() {

    },
    created() {

    },
    mounted() {
        this.timer = setInterval(() => {
            this.count--
            if (this.count === 0) {
                clearInterval(this.timer);
                this.count = 10;
            }
        }, 1000)
    },
    destroyed() {
        clearInterval(this.timer);
        this.count = 10;
    },
    methods: {
        change(e) {
            console.log('内容改变，当前值为：' + e);
            console.log(e.length)
            this.code = e;
        },
        finish(e) {
            console.log('输入结束，当前值为：' + e);
        },
    }
}
</script>

<style lang="scss">
page {
    height: 100%
}

.app {
    height: 100%;
    display: flex;
    justify-content: center;

    .box {
        height: 280PX;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding-top: 50PX;

        img {
            width: 100PX;
            height: 100PX;
        }

        .text-info {
            color: #8f9ca2;
            font-size: 14PX;
        }
        .text-normal {
            color: #000;
            font-size: 14PX;
        }
    }

}
</style>
