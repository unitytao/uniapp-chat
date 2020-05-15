<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left">
				<!-- <image src="../../static/image/index/return.png" @tap="back"></image> -->
			</view>
			<view class="top-bar-center">
				<label>个人信息</label>
			</view>
			<view class="top-bar-right">
			</view>
		</view>
		<view class="user-main">
			
		</view>
	<view class="user-info-item">
		<view class="user-main-info">
			<view class="left">
				<text>头像</text>
			</view>
			<view class="center">
				<view class="img-box">
					<image :src="userInfo.img"></image>
				</view>
			</view>
			<view class="right">
				<image src="../../static/image/index/more.png"></image>
			</view>
		</view>	
		</view>
		<view class="user-info-item">
			<view class="user-desc">
				<view class="left">
					<text>签名</text>
				</view>
				<view class="center">
					<text>天青色等烟雨，而我在等你</text>
				</view>
				<view class="right">
					<image src="../../static/image/index/more.png"></image>
				</view>
			</view>
			
		</view>
		<view class="user-info-item">
			<view class="user-register-time">
				<view class="left">
					<text>注册</text>
				</view>
				<view class="center">
					<text>2018-12-1</text>
				</view>
				<view class="right">
					<image src="../../static/image/index/more.png"></image>
				</view>
			</view>
		</view>
		<view class="user-info-item">
			<view class="user-nick-name">
				<view class="left">
					<text>昵称</text>
				</view>
				<view class="center">
					<text>{{userInfo.user}}</text>
				</view>
				<view class="right">
					<image src="../../static/image/index/more.png"></image>
				</view>
			</view>
		</view>
		<view class="user-info-item">
			<view class="user-sex">
				<view class="left">
					<text>性别</text>
				</view>
				<view class="center">
					<text>{{list[userInfo.sex]}}</text>
				</view>
				<view class="right">
					<image src="../../static/image/index/more.png"></image>
				</view>
			</view>
		</view>
		<view class="user-info-item">
			<view class="user-birthday">
				<view class="left">
					<text>生日</text>
				</view>
				<view class="center">
					<text>1998-02-09</text>
				</view>
				<view class="right">
					<image src="../../static/image/index/more.png"></image>
				</view>
			</view>
		</view>
		<view class="user-info-item">
			<view class="user-phone">
				<view class="left">
					<text>电话</text>
				</view>
				<view class="center">
					<text>15927643247</text>
				</view>
				<view class="right">
					<image src="../../static/image/index/more.png"></image>
				</view>
			</view>
		</view>
		<view class="user-info-item">
			<view class="user-email">
				<view class="left">
					<text>邮箱</text>
				</view>
				<view class="center">
					<text>{{userInfo.mail}}</text>
				</view>
				<view class="right">
					<image src="../../static/image/index/more.png"></image>
				</view>
			</view>
		</view>
		<view class="user-info-item">
			<view class="user-password">
				<view class="left">
					<text>密码</text>
				</view>
				<view class="center">
					<text>******</text>
				</view>
				<view class="right">
					<image src="../../static/image/index/more.png"></image>
				</view>
			</view>
		</view>
		<view class="quit-button">
			<button type="warn" @tap="toLogin">退出登录</button>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				list:['女','男']
			}
		},
		computed:{
			...mapState(['userInfo'])
		},
		methods: {
			back:function(){
				uni.navigateBack({
					delta:1
				})
			},
			toLogin:function(){
				uni.removeStorage({
				    key: 'userinfo',
				    success: function (res) {
				        console.log('success');
				    }
				});
				uni.navigateTo({
					url:'../login/login'
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/my.scss";
	.user-main{
		padding-top: 92rpx;
		display: flex;
	}
	.user-info-item{
		display: flex;
		flex-direction: row;
		height: 124rpx;
		box-shadow: 0px 1px 0px 0px rgba($color: #8f8f8f, $alpha: 0.1);
		.user-main-info{
			display: flex;
			flex-direction: row;
				.left{
				padding-left: 32rpx;
				height: 124rpx;
				display: flex;
				align-items: center;
				text{
					width: 64rpx;
					font-size:32rpx;
					font-family:PingFangSC-Regular,PingFang SC;
					font-weight:400;
					color:rgba(39,40,50,1);
				}
				}
				.center{
					width:580rpx;
					height: 124rpx;
					padding-left: 20rpx;
					.img-box{
						width:104rpx;
						height:104rpx;
						border-radius:50%;
					}
					image{
						border-radius:50%;
						width: 100%;
						height: 100%;
					}
				}
				.right{
					display: flex;
					width: 50rpx;
					height: 124rpx;
					justify-content: center;
					align-items: center;
					image{
						width: 32rpx;
						height: 32rpx;
					}	
				}
		}
		.user-desc{
			display: flex;
			flex-direction: row;
				.left{
				padding-left: 32rpx;
				height: 124rpx;
				display: flex;
				align-items: center;
				text{
					font-size:32rpx;
					font-family:PingFangSC-Regular,PingFang SC;
					font-weight:400;
					color:rgba(39,40,50,1);
				}
				}
				.center{
					width:600rpx;
					height: 124rpx;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					text{
						padding-left: 20rpx;
						font-size:32rpx;
						font-family:PingFangSC-Regular,PingFang SC;
						font-weight:400;
						color:rgba(39,40,50,0.6);
					}
				}
				.right{
					display: flex;
					width: 50rpx;
					height: 124rpx;
					justify-content: center;
					align-items: center;
					image{
						width: 32rpx;
						height: 32rpx;
					}	
				}
		}
		.user-register-time{
			display: flex;
			flex-direction: row;
				.left{
				padding-left: 32rpx;
				height: 124rpx;
				display: flex;
				align-items: center;
				text{
					font-size:32rpx;
					font-family:PingFangSC-Regular,PingFang SC;
					font-weight:400;
					color:rgba(39,40,50,1);
				}
				}
				.center{
				width:600rpx;
				height: 124rpx;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				text{
					padding-left: 20rpx;
					font-size:32rpx;
					font-family:PingFangSC-Regular,PingFang SC;
					font-weight:400;
					color:rgba(39,40,50,0.6);
				}
				}
				.right{
					display: flex;
					width: 50rpx;
					height: 124rpx;
					justify-content: center;
					align-items: center;
					image{
						width: 32rpx;
						height: 32rpx;
					}	
				}
		}
		.user-nick-name{
			display: flex;
			flex-direction: row;
				.left{
				padding-left: 32rpx;
				height: 124rpx;
				display: flex;
				align-items: center;
				text{
					font-size:32rpx;
					font-family:PingFangSC-Regular,PingFang SC;
					font-weight:400;
					color:rgba(39,40,50,1);
				}
				}
				.center{
					width:600rpx;
					height: 124rpx;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					text{
						padding-left: 20rpx;
						font-size:32rpx;
						font-family:PingFangSC-Regular,PingFang SC;
						font-weight:400;
						color:rgba(39,40,50,0.6);
					}
				}
				.right{
					display: flex;
					width: 50rpx;
					height: 124rpx;
					justify-content: center;
					align-items: center;
					image{
						width: 32rpx;
						height: 32rpx;
					}	
				}
		}
		.user-sex{
			display: flex;
			flex-direction: row;
				.left{
				padding-left: 32rpx;
				height: 124rpx;
				display: flex;
				align-items: center;
				text{
					font-size:32rpx;
					font-family:PingFangSC-Regular,PingFang SC;
					font-weight:400;
					color:rgba(39,40,50,1);
				}
				}
				.center{
					width:600rpx;
					height: 124rpx;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					text{
						padding-left: 20rpx;
						font-size:32rpx;
						font-family:PingFangSC-Regular,PingFang SC;
						font-weight:400;
						color:rgba(39,40,50,0.6);
					}
				}
				.right{
					display: flex;
					width: 50rpx;
					height: 124rpx;
					justify-content: center;
					align-items: center;
					image{
						width: 32rpx;
						height: 32rpx;
					}	
				}
		}
		.user-birthday{
			display: flex;
			flex-direction: row;
				.left{
				padding-left: 32rpx;
				height: 124rpx;
				display: flex;
				align-items: center;
				text{
					font-size:32rpx;
					font-family:PingFangSC-Regular,PingFang SC;
					font-weight:400;
					color:rgba(39,40,50,1);
				}
				}
				.center{
					width:600rpx;
					height: 124rpx;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					text{
						padding-left: 20rpx;
						font-size:32rpx;
						font-family:PingFangSC-Regular,PingFang SC;
						font-weight:400;
						color:rgba(39,40,50,0.6);
					}
				}
				.right{
					display: flex;
					width: 50rpx;
					height: 124rpx;
					justify-content: center;
					align-items: center;
					image{
						width: 32rpx;
						height: 32rpx;
					}	
				}
		}
		.user-phone{
			display: flex;
			flex-direction: row;
				.left{
				padding-left: 32rpx;
				height: 124rpx;
				display: flex;
				align-items: center;
				text{
					font-size:32rpx;
					font-family:PingFangSC-Regular,PingFang SC;
					font-weight:400;
					color:rgba(39,40,50,1);
				}
				}
				.center{
					width:600rpx;
					height: 124rpx;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					text{
						padding-left: 20rpx;
						font-size:32rpx;
						font-family:PingFangSC-Regular,PingFang SC;
						font-weight:400;
						color:rgba(39,40,50,0.6);
					}
				}
				.right{
					display: flex;
					width: 50rpx;
					height: 124rpx;
					justify-content: center;
					align-items: center;
					image{
						width: 32rpx;
						height: 32rpx;
					}	
				}
		}
		.user-email{
			display: flex;
			flex-direction: row;
				.left{
				padding-left: 32rpx;
				height: 124rpx;
				display: flex;
				align-items: center;
				text{
					font-size:32rpx;
					font-family:PingFangSC-Regular,PingFang SC;
					font-weight:400;
					color:rgba(39,40,50,1);
				}
				}
				.center{
					width:600rpx;
					height: 124rpx;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					text{
						padding-left: 20rpx;
						font-size:32rpx;
						font-family:PingFangSC-Regular,PingFang SC;
						font-weight:400;
						color:rgba(39,40,50,0.6);
					}
				}
				.right{
					display: flex;
					width: 50rpx;
					height: 124rpx;
					justify-content: center;
					align-items: center;
					image{
						width: 32rpx;
						height: 32rpx;
					}	
				}
		}
		.user-password{
			display: flex;
			flex-direction: row;
				.left{
				padding-left: 32rpx;
				height: 124rpx;
				display: flex;
				align-items: center;
				text{
					font-size:32rpx;
					font-family:PingFangSC-Regular,PingFang SC;
					font-weight:400;
					color:rgba(39,40,50,1);
				}
				}
				.center{
					width:600rpx;
					height: 124rpx;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					text{
						padding-left: 20rpx;
						font-size:32rpx;
						font-family:PingFangSC-Regular,PingFang SC;
						font-weight:400;
						color:rgba(39,40,50,0.6);
					}
				}
				.right{
					display: flex;
					width: 50rpx;
					height: 124rpx;
					justify-content: center;
					align-items: center;
					image{
						width: 32rpx;
						height: 32rpx;
					}	
				}
		}
	}
	.quit-button{
		margin-top: 30rpx;
		display: flex;
		width:100%;
		height:80rpx;
		border-radius:10rpx;
		align-items: center;
		justify-content: center;
		button{
			width: 100%;
			color: white;
			width:684rpx;
			height:80rpx;
		}
	}
</style>
