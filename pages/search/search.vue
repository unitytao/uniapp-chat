<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left">
				<input type="text" class="search-box" placeholder="搜索用户/群" @input="search" v-model="keyword"/>
				<view class="search"><image src="../../static/image/index/select.png"></image></view>
			</view>
			<view class="top-bar-right">
				<view class="text-box">
					<text @tap="back">取消</text>
				</view>
			</view>
		</view>
		<view class="main">
			<view class="search-user">
				<view class="title" v-if="userArr.length>0">用户</view>
				<view class="list-user">
					<view class="user-item" v-for="(item, index) in userArr" :key="index">
						<view class="user-image">
							<image :src="item.imgUrl"></image>
						</view>
						<view class="content-select">
							<view class="username">
								<text v-html="item.name"></text>
							</view>
							<view class="email">
								<text v-html="item.email"></text>
							</view>
						</view>
						
						<view class="right-button">
							<view>
								<button type="warn" v-if="item.tip ===0">加好友</button>
								<button type="primary" v-if="item.tip ===1">发送消息</button>
							</view>
							
						</view>
					</view>
				</view>
			</view>
			<view class="search-more">
				<view class="title" v-if="qunArr.length>0">群组</view>
			</view>
		</view>
	</view>
</template>

<script>
	import datas from '../../commons/js/datas.js'
	export default {
		data() {
			return {
				keyword:'',
				userArr:[],
				qunArr:[]
			}
		},
		methods: {
			//获取关键词
			search: function(e){
				this.userArr =[]
				let searchVal =e.detail.value
				if(searchVal.length>0){
					this.searchUser(searchVal)
				}
			},
			//寻找关键词匹配的用户
			searchUser:function(e){
				let arr =datas.friends();
				let exp =eval("/"+e+"/g");
				for (var i = 0; i < arr.length; i++) {
					if(arr[i].name.search(e) !=-1 || arr[i].email.search(e) !=-1){
						this.isFriend(arr[i])
						console.log(arr[i].id, arr[i].tip)
						arr[i].imgUrl ='../../static/image/img/' + arr[i].imgUrl;
						arr[i].name= arr[i].name.replace(exp, "<span style='color:#4AAAFF;'>"+ e +"</span>");
						arr[i].email= arr[i].email.replace(exp, "<span style='color:#4AAAFF;'>"+ e +"</span>");
						this.userArr.push(arr[i])
					}
				}
				// console.log(this.userArr)
			},
			//判断是否为好友
			isFriend: function(e){
				let tip =0;
				let arr =datas.isFriend();
				// console.log(e)
				// console.log(arr)
				for(let i=0; i<arr.length; i++){
					if(arr[i].friend===e.id){
						tip =1
					}
				}
				e.tip =tip
				//console.log(e.tap)
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
.top-bar{
	padding-top: var(--status-bar-height);
	z-index:1;
	position: fixed;
	width: 100%;
	display: flex;
	height: 88rpx;
	justify-content: space-between;
	align-items: center;
	background-color: #FFFFFF;
	.top-bar-left{
	flex: 6;
	display: flex;
	align-items: center;
	image{
	width: 68rpx;
	height: 68rpx;
	border-radius: 50%;
	margin-left: 20rpx;
	}
	.search-box{
		width: 500rpx;
		height: 60rpx;
		background: rgba(243,244,246,1);
		border-radius: 10rpx;
		margin-left: 30rpx;
	}
	.search{
	width: 88rpx;
	height: 88rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	}
	image{
		width: 52rpx;
		height: 52rpx;
		}
	}
	}
	.top-bar-right{
		flex: 1;
		display: flex;
		justify-content: center;
		.text-box{
			text{
				font-size: 36rpx;
				font-weight: 600;
				color: #808080;
				line-height: 88rpx;
			}
		}
}
.main{
	padding-top: 88rpx;
	.title{
		font-size: 44rpx;
		font-weight: 600;
		color: rgba(39,40,50,1);
		line-height: 60rpx;
	}
	.list-user{
		padding-top: 20rpx;
		display: flex;
		flex-direction: column;
		.user-item{
			height: 118rpx;
			display: flex;
			flex-direction: row;
			box-shadow: 0px 1px 0px 0px rgba($color: #8f8f8f, $alpha: 0.1);
			margin-top: 12rpx;
			margin-bottom: 12rpx;
			.user-image{
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: center;
				image{
					width: 88rpx;
					height: 88rpx;
					border-radius: 50%;
				}
			}
			.content-select{
				flex: 3;
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				.username{
					flex: 1;
					font-size: 36rpx;
					padding-top: 10rpx;
					text{
						line-height: 70rpx;
						font-weight: 500;
					}
				}
				.email{
					flex: 1;
					font-size: 24rpx;
					text{
						color: #555555;
						line-height: 32rpx;
					}
				}
			}
			.right-button{
				flex: 2;
				display: flex;
				justify-content: center;
				align-items: center;
				button{
					width: 160rpx;
					height: 64rpx;
					font-size: 28rpx;
					line-height: 64rpx;
					border-radius: 64rpx;
				}
			}
		}
	}
}
</style>
