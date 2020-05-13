<template>
  <view>
    <view class="top-bar">
      <view class="top-bar-left"></view>
      <view class="top-bar-center"></view>
      <view class="top-bar-right">
        <text @tap="toLogin">返回登录</text>
      </view>
    </view>
	<view class="main-content">
		<view class="app-icon">
			<image src="../../static/image/index/tubiao.png"></image>
		</view>
		<view class="login-title">
			<view class="login-title-text">
				<text>注册</text>
			</view>
			<view class="login-welcome">
				<text>您好，欢迎来到Ac!</text>
			</view>
			<view class="login-form">
				<view class="username-box">
					<input type="text" placeholder="用户名" placeholder-style="color:#aaa"/>
					<view class="employd" v-if="employ">用户名已存在</view>
					<image src="../../static/image/index/ok.png" v-if="isUser" class="ok"></image>
				</view>
				<view class="email-box">
					<input type="text" placeholder="邮箱" placeholder-style="color:#aaa" @blur="isEmailType" v-model="email"/>
					<view class="employd" v-if="employ">邮箱已存在</view>
					<view class="employd" v-if="invalid">邮箱无效</view>
					<image src="../../static/image/index/ok.png" v-if="isEmail" class="ok"></image>
				</view>
				<view class="password-box">
					<input :type="psType" placeholder="密码" placeholder-style="color:#aaa"/>
					<view class="employd" v-if="employ">格式错误</view>
					<image :src="lookUrl" class="look-ps" @tap="looks"></image>
				</view>
				<view class="yanzheng-box">
					<input type="text" placeholder="验证码" class="yanzheng" placeholder-style="color:#aaa"/><button type="primary">获取验证码</button>
				</view>
			</view>
		</view>
		
		<view class="login-button">
			<button type="primary" :disabled="isOk">注册</button>
		</view>
	</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
		isOk:true,
		email:'',
		employ:false,
		psType:'password',
		isUser:false,
		isEmail:false,
		showPass:false,
		invalid:false,
		lookUrl:'../../static/image/index/hideps.png'
	};
  },
  methods: {
	  //切换查看密码
	  looks: function(){
			if(this.showPass){
				this.psType ="password";
				this.lookUrl ='../../static/image/index/hideps.png'
				this.showPass=!this.showPass;
				console.log(this.psType)
				console.log(this.showPass)
			}else{
				this.psType ="text";
				this.lookUrl ='../../static/image/index/showps.png'
				this.showPass=!this.showPass
				console.log(this.psType)
				console.log(this.showPass)
			}
	  },
	  //判断邮箱格式
	  isEmailType:function(e){
		  var email = this.email
		  var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
		  if(reg.test(email)){
		  	this.isEmail =true;
			this.invalid =false;
		  }else{
		  	this.invalid =true;
			this.isEmail =false;
		  }
	  },
	  //跳转到登录
	  toLogin: function(){
		  uni.navigateTo({
		  	url: '../login/login'
		  })
	  }
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
	height: 980rpx;
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
			padding-top: 24rpx;
			width: 100%;
			input{
				margin: 12rpx;
				height: 88rpx;
				border-bottom: 1rpx solid #999999;
			}
			input:hover{
				margin: 12rpx;
				height: 88rpx;
				border-bottom: 1rpx solid blue;
			}
			.yanzheng-box{
				width: 100%;
				height: 62rpx;
				display: flex;
				flex-direction: row;
				align-items: center;
				.yanzheng{
					width: 50%;
				}
			}	
			button{
				width: 38%;
				height: 64rpx;
				font-size: 24rpx;
			}
			.employd,.invalid{
				position: absolute;
				right: 20rpx;
				top: 0rpx;
				font-size: 24rpx;
				font-weight: 800;
				color:$uni-color-error;
				line-height: 88rpx;
			}
			.username-box{
				position: relative;
			}
			.email-box{
				position: relative;
			}
			.password-box{
				position: relative;
			}
			.ok{
				width: 42rpx;
				height: 42rpx;
				position: absolute;
				right: 20rpx;
				top: 32rpx;
			}
			.look-ps{
				width: 42rpx;
				height: 42rpx;
				position: absolute;
				right: 20rpx;
				top: 32rpx;
			}
			}
	}
	
	.login-button{
		width: 80%;
		button{
			width: 580rpx;
			height: 96rpx;
			box-shadow: 0px 50rpx 32rpx -36rpx rgba(255,228,49,0.4);
			border-radius:18rpx;
			line-height: 88rpx;
		}
	}
}
</style>

