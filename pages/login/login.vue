<template>
  <view>
    <view class="top-bar">
      <view class="top-bar-left"></view>
      <view class="top-bar-center"></view>
      <view class="top-bar-right">
        <text @tap="toRefister">注册</text>
      </view>
    </view>
	<view class="main-content">
		<view class="app-icon">
			<image src="../../static/image/index/tubiao.png"></image>
		</view>
		<view class="login-title">
			<view class="login-title-text">
				<text>登录</text>
			</view>
			<view class="login-welcome">
				<text>您好，欢迎来到Ac!</text>
			</view>
			<view class="login-form">
				<input type="text" placeholder="用户名" v-model="params.user"/>
				<input type="password" placeholder="密码" v-model="params.password"/>
			</view>
			<view class="tips" v-if="isErr">
				<text>用户名或密码错误!</text>
			</view>
		</view>
		
		<view class="login-button">
			<button type="primary" @tap="login">登录</button>
		</view>
	</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
		isErr:false,
		errMsg:'',
		params:{
			user:'',
			password:''
		}
	};
  },
  methods: {
	  async login () {
			if(this.params.user!=''&&this.params.password!=''){
				const result = await this.$request({
				   url: '/user/login',
					  method:'POST',
				   data: this.params
				 })
				console.log(result)
				if(result.data.code===0){
						uni.showToast({
								   title:"登陆成功",
								   icon:"none"
							   })
						const userInfo ={
							img:result.data.userInfo[0].img,
							mail:result.data.userInfo[0].mail,
							user:result.data.userInfo[0].user,
							sex:result.data.userInfo[0].sex,
							_id:result.data.userInfo[0]._id
						}
						  this.$store.dispatch('recordUser',userInfo)
						  console.log(this.$store.state.userInfo)
						   uni.setStorage({
						                  key: 'userInfo',
						                  data: userInfo
						              })
						  uni.switchTab({
						  	url:'../chat/chat'
						  })
				}
						  
			}
	   	   },
	  toRefister: function(){
	  		  uni.navigateTo({
	  		  	url: '../register/register'
	  		  })
	  },
	  // toMain:function(){
		 //  if(this.username!=''&&this.password!=''){
			//   const userInfo ={
			//   		username : this.username
			// 	}
			//   this.$store.dispatch('recordUser',userInfo)
			//    uni.setStorage({
			//                   key: 'userinfo',
			//                   data: userInfo
			//               })
			//   uni.switchTab({
			//   	url:'../chat/chat'
			//   })
		 //  }
	  // }
  }
};
</script>

<style lang="scss">
.top-bar {
  padding-top: var(--status-bar-height);
  z-index: 1;
  position: fixed;
  width: 100%;
  display: flex;
  height: 88rpx;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  //box-shadow: 0px 1px 0px 0px rgba($color: #8f8f8f, $alpha: 0.1);
  .top-bar-left {
    flex: 1;
  }
  .top-bar-center {
    flex: 1;
  }
  .top-bar-right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    text {
      font-size: 32rpx;
      font-weight: 500;
      padding-right: 32rpx;
    }
  }
}
.main-content{
	padding-top: 128rpx;
	width: 100%;
	height: 920rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
	.app-icon{
		width: 150rpx;
		height: 150rpx;
		display: flex;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.login-title{
		width: 80%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		.login-title-text{
			text{
					font-size: 48rpx;
					font-weight: 600;
					color: black;
				}
		}
		.login-welcome{
			text{
					font-size: 36rpx;
					color: #AAAAAA;
				}
		}
		.login-form{
			padding-top: 48rpx;
			width: 100%;
			input{
				margin: 8rpx;
				height: 78rpx;
				border-bottom: 2rpx solid #999999;
			}
			}
			.tips{
				font-size: 32rpx;
				color: #999999;
			}
	}
	
	.login-button{
		width: 80%;
		button{
			width: 580rpx;
			height: 96rpx;
			box-shadow: 0px 50rpx 32rpx -36rpx rgba(255,228,49,0.4);
			border-radius:18rpx;
		}
	}
}
</style>
