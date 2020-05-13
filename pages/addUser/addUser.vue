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
				<view class="add-desc-box">
					<textarea class="add-desc" type="text" placeholder="交个朋友吧~"/>	
				</view>
			</view>
			<view class="add-user">
				<view class="add-button">
					<button type="primary">返回</button>
					<button type="primary">确定</button>
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
	page{
	}
	.content{
	}
	.top-bar{
		box-shadow: none;
		background-color: #FFFFFF;
	}
	.main {
		display: flex;
		background-color: #FFFFFF;
		padding-top: 88rpx;
		height: 1080rpx;
		flex-direction: column;
		justify-content: flex-start;
	  .user-content {
		  padding-top: 20rpx;
		  border: none;
		  background-color: #1296db;
		  flex: 1;
		  display: flex;
		  flex-direction: column;
		  justify-content: flex-start;
		  align-items: flex-start;
	    .user-avatar {
			position: relative;
			padding-left: 20rpx;
	      .img {
			  width:200rpx;
			  height:200rpx;
			  border-radius:200rpx;
			  border:3px solid rgba(255,255,255,1);
	        image {
				width: 100%;
				height: 100%;
				 border-radius:200rpx;
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
			width:252rpx;
			height:74rpx;
			text {
				font-size:52rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(39,40,50,1);
				line-height:74rpx;
				padding-left: 25%;
	      }
	    }
		.add-desc-box{
				width: 100%;
				display: flex;
				justify-content: center;
				background-color: #FFFFFF;
				border-radius: 40rpx 40rpx 0rpx 0rpx;
			.add-desc{
				margin-top: 30rpx;
				width:638rpx;
				height:600rpx;
				background:rgba(243,244,246,1);
				border-radius:30rpx;
				display: flex;
				justify-content: flex-start;
				padding: 30rpx;
				text{
					width:372rpx;
					height:44rpx;
					font-size:32px;
					font-family:PingFangSC-Regular,PingFang SC;
					font-weight:400;
					color:rgba(39,40,50,1);
					line-height:44rpx;
				}
			}
	  }
	  }	
	  .add-user {
		  flex: 1.5;
		  display: flex;
		  flex-direction: column;
		  justify-content: flex-end;
		  background-color: #FFFFFF;
	    .add-button {
			display: flex;
				flex-direction: row;
	      button {
			border-radius:10rpx;
			width:300rpx;
			line-height:80rpx;
			background-color: #1296db;
			color: black;
	      }
	    }
	  }
	}
</style>
