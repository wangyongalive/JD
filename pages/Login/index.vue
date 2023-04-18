<template>
	<view class="login-container">
		<transition name="plus-icon">
			<image v-if="loading" src="../../static/jd.jpeg"></image>
		</transition>
		<view>11111111111</view>

	</view>
</template>

<script>
import { textFn } from '../../api/index.js'
export default {
	data() {
		return {
			loading: true
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

	}
}
</script>

<style lang="scss">
/* .content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
} */

.login-container {
	height: 100vh;
	width: 100vw;

	image {
		position: fixed;
		z-index: 100;
		width: 100%;
		height: 100%;
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


}
</style>
