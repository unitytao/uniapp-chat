<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left">
				<image src="../../static/image/index/return.png" @tap="back"></image>
			</view>
			<view class="top-bar-center">
			</view>
			<view class="top-bar-right">
				<view class="search" ><image src="../../static/image/index/more.png"></image></view>
			</view>
		</view>
		<view class="bg">
			<view class="bg-bai"></view>
			<image src="../../static/image/img/lm.jpg" class="bg-img" mode="aspectFill"></image>
		</view>
		<view class="main">
			<view class="user-content">
				<view class="user-avatar">
					<view class="img">
						<image src="../../static/image/img/lm.jpg"></image>
					</view>
					<view class="icon">
						<image src="../../static/image/index/female.png"></image>
					</view>
				</view>
				<view class="user-name">
					<text>蕾姆</text>
				</view>
				<view class="nick-name">
					<text>昵称：你的蕾姆</text>
				</view>
				<view class="user-desc">
					<text>记忆总是储存一些难忘的人和事，有些记忆是刻骨的，任岁月怎样地流逝，都带不走它的痕迹，甚至也没有模糊的可能。</text>
				</view>
			</view>
			<view class="add-user">
				<view class="add-button">
					<button type="primary" @tap="toAddUser">添加好友</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toAddUser: function(){
				uni.navigateTo({
					url:'../addUser/addUser'
				})
			},
			back:function(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/my.scss";
	.top-bar{
		box-shadow: none;
	}
	.bg{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		.bg-img{
			opacity: 0.4;
			position: absolute;
			left: -10rpx;
			top: -10rpx;
			width: 110%;
			height: 110%;
			filter: blur(16px);
		}
	}
	.main {
		display: flex;
		background-color: $uni-bg-color-grey;
		padding-top: 200rpx;
		height: 1080rpx;
		flex-direction: column;
	  .user-content {
		  flex: 1;
		  display: flex;
		  flex-direction: column;
		  justify-content: space-between;
		  align-items: center;
	    .user-avatar {
			position: relative;
	      .img {
			  width:200rpx;
			  height:200rpx;
			  border-radius:24px;
			  border:3px solid rgba(255,255,255,1);
	        image {
				width: 100%;
				height: 100%;
				border-radius:24px;
	        }
	      }
	      .icon {
			  position: absolute;
			  bottom: 0rpx;
			  right: 0rpx;
			  display: flex;
			  justify-content: center;
			  align-items: center;
			  width:32rpx;
			  height:32rpx;
			  background:rgba(255,93,91,1);
			  border-radius:18rpx;
	        image {
				width:24rpx;
				height:24rpx;
				top: 0rpx;
	        }
	      }
	    }
	
	    .user-name {
	      text {
				width:252rpx;
				height:74rpx;
				font-size:52rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(39,40,50,1);
				line-height:74rpx;
	      }
	    }
	
	    .nick-name {
	      text {
				width:190rpx;
				height:40rpx;
				font-size:28rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(39,40,50,1);
				line-height:40rpx;
	      }
	    }
	
	    .user-desc {
			width:552rpx;
			height:170rpx;
	      text {
				font-size:24rpx;
				font-family:PingFangSC-Light,PingFang SC;
				font-weight:300;
				color:rgba(39,40,50,1);
				line-height:48rpx;
	      }
	    }
	  }
	
	  .add-user {
		  flex: 1.5;
		  display: flex;
		  flex-direction: column;
		  justify-content: flex-end;
	    .add-button {
			
	      button {
			border-radius:10rpx;
			width:684rpx;
			line-height:80rpx;
	      }
	    }
	  }
	}
</style>
