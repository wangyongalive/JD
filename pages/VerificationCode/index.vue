<template>
    <view class="app">
        <view class="box">
            <img src="../../static/jd-icon.png" />
            <view class="">请输入验证码</view>
            <view><text class="text-info">已发送至</text><text>+86&nbsp;&nbsp;&nbsp;138****6251</text></view>
            <u-code-input @change="change" @finish="finish"></u-code-input>
            <u-button shape="circle" color="linear-gradient(to right, #f10000, #ff4f18)" text="登录"></u-button>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    onLoad() {

    },
    created() {

    },
    methods: {
        change(e) {
            console.log('内容改变，当前值为：' + e);
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
    }

}
</style>
