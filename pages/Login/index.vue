<template>
	<view class="app">
		<transition name="plus-icon">
			<image class="log" v-if="loading" src="../../static/jd.jpeg"></image>
		</transition>

		<view class="top-container">
			<u-icon name="close"></u-icon>
			<text>帮助</text>
		</view>


		<view class="log-container">
			<image class="log2" src="../../static/jd-icon.png"></image>
		</view>

		<view class="login-container">
			<u--input placeholder="国家/地区" shape="circle" border="surround" disabled>
				<u--text text="+86" slot="suffix" margin="0 3px 0 0" type="tips"></u--text>
			</u--input>
			<u--input class="resetInput" placeholder="请输入手机号码" shape="circle" border="surround" v-model="value"
				@change="change"></u--input>
		</view>
		<view class="rule-container">
			<u-checkbox-group v-model="checkboxValue1" placement="column" @change="checkboxChange">
				<u-checkbox shape="circle" :customStyle="{ marginBottom: '8px' }" v-for="(item, index) in checkboxList1"
					:key="index" :label="item.name" :name="item.name">
				</u-checkbox>
			</u-checkbox-group>
			<view>
				未注册的手机号验证后将自动创建京东账号,登录即代表您已同意
				<span style="color:dodgerblue">《京东隐式政策》</span>
			</view>

		</view>
		<view style="padding: 20px;">
			<u-button type="error" text="获取验证码" shape="circle" color="linear-gradient(to right, #f10000, #ff4f18)"
				:disabled="!checkboxValue1.length" @click="handleCapture"></u-button>
		</view>

	</view>
</template>

<script>
import { textFn } from '../../api/index.js'
export default {
	data() {
		return {
			loading: false,
			value: '',
			checkboxValue1: [],
			// 基本案列数据
			checkboxList1: [{
				name: '',
				disabled: false
			}
			],
		}
	},
	onLoad() {

	},
	created() {
		setTimeout(() => {
			this.loading = false
		}, 2000)
		textFn()
	},
	methods: {
		change(e) {
			console.log('change', e);
		},
		handleCapture() {
			uni.navigateTo({
				url: `/pages/VerificationCode/index?code=${1}`
			})
		}
	}
}
</script>

<style lang="scss">
$padding: 40rpx;

.app {
	height: 100vh;
	width: 100vw;
	padding: $padding;
	box-sizing: border-box;

	.log {
		position: fixed;
		z-index: 100;
		width: 100%;
		height: 100%;
	}

	.log2 {
		width: 100px;
		height: 100px;
	}

	.plus-icon-enter-active {
		transition: opacity 1s;
	}

	.plus-icon-enter {
		opacity: 0;
	}

	.plus-icon-leave-active {
		transition: opacity 1s;
	}

	.plus-icon-leave-to {
		opacity: 0;
	}

	.log-container {
		padding: $padding;
		text-align: center;
	}

	.top-container {
		display: flex;
		justify-content: space-between;
	}

	.rule-container {
		padding-top: $padding;
		display: flex;
	}
}
</style>
<style>
.resetInput.u-input {
	margin-top: 10px;
	background-color: rgb(245, 247, 250);
}
</style>
