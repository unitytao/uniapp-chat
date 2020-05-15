<template>
	<view>
		<!-- <view class="top-space"></view> -->
		<view class="content">
				<view class="top-bar">
					<view class="top-bar-left">
						<image :src="userInfo.img"></image>
					</view>
					<view class="top-bar-center">
						<label>消息</label>
					</view>
					<view class="top-bar-right">
						<view class="search" @tap="toSearch"><image src="../../static/image/index/select.png"></image></view>
						<view class="add"><image src="../../static/image/index/add.png"></image></view>
					</view>
				</view>
				<view class="main">
					<view class="apply">
						<view class="friend-item">
								<view class="friend-item-left">	
								<view class="friend-img">
									<image src="../../static/image/index/addfriend.png"></image>
								</view>
								<view class="tip">2</view>
								</view>
								<view class="friend-item-right">
									<view class="friend-content-top">
										<view class="friend-name">
											<text>新的朋友</text>
										</view>
										<view class="comment-time">
											<text>8:30</text>
										</view>
									</view>
									<view class="friden-content">
										<text>XXX请求添加为好友</text>
									</view>
								</view>
							</view>
						
						
					</view>
						<view class="friends">
						<view class="friends-list">
								<view class="friend-item" v-for="(item, index) in friends" :key="index" @tap="toChat">
								<view class="friend-item-left">	
								<view class="friend-img">
									<image :src="item.imgUrl"></image>
								</view>
								<view class="tip" v-if="item.tip!=0">{{item.tip}}</view>
								</view>
								<view class="friend-item-right">
									<view class="friend-content-top">
										<view class="friend-name">
											<text>{{item.name}}</text>
										</view>
										<view class="comment-time">
											<text>{{changeTime(item.time)}}</text>
										</view>
									</view>
									<view class="friden-content">
										<text>{{item.news}}</text>
									</view>
								</view>
							</view>
							</view>
					</view>
				</view>
			</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	import datas from '../../commons/js/datas.js'
	import myFun from '../../commons/js/dataTransform.js'
	export default {
		computed:{
			...mapState(['userInfo'])
		},
		data() {
			return {
				friends:[]
			}
		},
		onLoad() {
			this.getFriend();
		},
		methods: {
			changeTime: function(date){
				return myFun.dateTime(date)
			},
			getFriend: function (){
				this.friends =datas.friends();
				for (var i = 0; i < this.friends.length; i++) {
				this.friends[i].imgUrl ='../../static/image/img/' + this.friends[i].imgUrl
				}
				//console.log(this.friends)
			},
			toSearch: function(){
				uni.navigateTo({
					url:'../search/search'
				})
			},
			toChat: function(){
				uni.navigateTo({
					url:'../joinChat/joinChat'
				})
			}
	},
}
</script>

<style lang="scss">
	
	.top-space{
		z-index:1;
		display: block;
		width: 100%;
		height: var(--status-bar-height);
		background-color: black;
	}
	.content {
		width: 100%;
		 @import "../../commons/css/my.scss";
		// .top-bar{
		// 		padding-top: var(--status-bar-height);
		// 		z-index:1;
		// 		position: fixed;
		// 		width: 100%;
		// 		display: flex;
		// 		height: 88rpx;
		// 		justify-content: space-between;
		// 		align-items: center;
		// 		background-color: #FFFFFF;
		// 		box-shadow: 0px 1px 0px 0px rgba($color: #8f8f8f, $alpha: 0.1);
		// 		.top-bar-left{
		// 			flex: 1;
		// 			image{
		// 				width: 68rpx;
		// 				height: 68rpx;
		// 				border-radius: 50%;
		// 				margin-left: 20rpx;
		// 			}
		// 		}
		// 		.top-bar-center{
		// 			flex: 1;
		// 			text-align: center;
		// 		}
		// 		.top-bar-right{
		// 			flex: 1;
		// 			display: flex;
		// 			justify-content: flex-end;
		// 			.search{
		// 				width: 88rpx;
		// 				height: 88rpx;
		// 				display: flex;
		// 				justify-content: center;
		// 				align-items: center;
		// 			}
		// 			.add{
		// 				height: 88rpx;
		// 				width: 88rpx;
		// 				display: flex;
		// 				justify-content: center;
		// 				align-items: center;
		// 			}
		// 			image{
		// 				width: 52rpx;
		// 				height: 52rpx;
		// 			}
		// 		}
		// 		}	
			.main {
			  .apply{
				  padding-top: 88rpx;
				  .friend-item {
				  				width: 100%;
				  				height: 118rpx;
				  				display: flex;
				  				flex-direction: row;
				  				box-shadow: 0px 1px 0px 0px rgba($color: #8f8f8f, $alpha: 0.1);
				  				margin-top: 12rpx;
				  				margin-bottom: 12rpx;
				  				&:active{background-color: $uni-bg-color-grey}
				    .friend-item-left {
				  						flex: 1;
				  						display: flex;
				  						position: relative;
				  						justify-content: center;
				  						align-items: center;
				  						.friend-img{
				  							width: 88rpx;
				  							height: 88rpx;
				  							image{
				  								background-color: #FFD700;
				  								width: 100%;
				  								height: 100%;
				  								border-radius: 50%;
				  							}
				  						}
				  						.tip{
				  							color: white;
				  							font-size: 24rpx;
				  							text-align: center;
				  							width:36rpx ;
				  							height: 36rpx;
				  							position: absolute;
				  							top: 10rpx;
				  							right: 10rpx;
				  							border-radius: 50%;
				  							border: 1rpx solid red;
				  							background-color: red;
				  						}
				    }
				  			
				    .friend-item-right {
				  						flex: 5;
				  						display: flex;
				  						flex-direction: column;
				      .friend-content-top {
				  						  flex: 1;
				  						  display: flex;
				  						  flex-direction: row;
				  						  align-items: center;
				  						.friend-name {
				  							flex: 4;
				  							text{
				  								font-size: 30rpx;
				  								font-weight: 800;
				  							}
				        }
				        .comment-time {
				  							flex: 1;
				  							text{
				  								font-size: 16rpx;
				  								color: $uni-text-color-grey;
				  								padding-left: 40rpx;
				  								display: block;
				  								overflow: hidden; 
				  								white-space: nowrap;
				  							}
				        }
				      }
				  			
				      .friden-content {
				  						flex: 2;
				  						text{	
				  								color: $uni-text-color-grey;
				  								font-size: 28rpx;
				  								line-height: 64rpx;
				  								text-overflow: ellipsis;
				  								width: 600rpx; 
				  								display: block; 
				  								overflow: hidden; 
				  								white-space: nowrap;
				  						}
				      }
				    }
				  }
			  }		
			  .friends {
				  height: calc(100vh -88rpx);
				  overflow: hidden;
			    .friends-list {
					width: 100%;
					display: flex;
					flex-wrap: wrap;
			      .friend-item {
					  width: 100%;
					  height: 118rpx;
					  display: flex;
					  flex-direction: row;
					  box-shadow: 0px 1px 0px 0px rgba($color: #8f8f8f, $alpha: 0.1);
					  margin-top: 12rpx;
					  margin-bottom: 12rpx;
					  &:active{background-color: $uni-bg-color-grey}
			        .friend-item-left {
						flex: 1;
						display: flex;
						position: relative;
						justify-content: center;
						align-items: center;
						.friend-img{
							width: 88rpx;
							height: 88rpx;
							image{
								background-color: #FFD700;
								width: 100%;
								height: 100%;
								border-radius: 50%;
							}
						}
						.tip{
							color: white;
							font-size: 24rpx;
							text-align: center;
							width:36rpx ;
							height: 36rpx;
							position: absolute;
							top: 10rpx;
							right: 10rpx;
							border-radius: 50%;
							border: 1rpx solid red;
							background-color: red;
						}
			        }
			
			        .friend-item-right {
						flex: 5;
						display: flex;
						flex-direction: column;
			          .friend-content-top {
						  flex: 1;
						  display: flex;
						  flex-direction: row;
						  align-items: center;
						.friend-name {
							flex: 4;
							text{
								font-size: 30rpx;
								font-weight: 800;
							}
			            }
			            .comment-time {
							flex: 1;
							text{
								font-size: 16rpx;
								color: $uni-text-color-grey;
								padding-left: 40rpx;
								display: block;
								overflow: hidden; 
								white-space: nowrap;
							}
			            }
			          }
			
			          .friden-content {
						flex: 2;
						text{	
								color: $uni-text-color-grey;
								font-size: 28rpx;
								line-height: 64rpx;
								text-overflow: ellipsis;
								width: 600rpx; 
								display: block; 
								overflow: hidden; 
								white-space: nowrap;
						}
			          }
			        }
			      }
			    }
			  }
			}
		
}
</style>

