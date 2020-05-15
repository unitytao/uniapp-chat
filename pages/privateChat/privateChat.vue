<template>
  <view>
	<view class="top-bar">
      <view class="top-bar-left">
        <image src="../../static/image/index/return.png" @tap="back"></image>
      </view>
      <view class="top-bar-center">
        <text>病友交流群</text>
      </view>
      <view class="top-bar-right">
        <view class="search"
          ><image src="../../static/image/img/test.jpg"></image></view>
      </view>
    </view>
    <view class="chat-main">
      <view class="chat-list">
		  <view class="chat-items" v-for="(item, index) in Arr" :key="index">
				<view class="chat-item-left" v-if="item.id===1">
				  <view class="chat-header">
				    <text>{{item.date}}</text>
				  </view>
				  <view class="chat-content">
				    <view class="usesr-avatar">
				      <image :src="item.img"></image>
				      <text>{{item.name}}</text>
				    </view>
				    <view class="user-text">
				      <text>{{item.msg}}</text>
				    </view>
				  </view>
				</view>
				<view class="chat-item-right" v-if="item.id===2">
				    <view class="chat-header">
				      <text>{{item.date}}</text>
				    </view>
				    <view class="chat-content">
				      <view class="usesr-avatar">
				        <image :src="item.img"></image>
				        <text>{{item.name}}</text>
				      </view>
				      <view class="user-text-right">
						  <view class="user-text-right-box"></view>
				        <text>{{item.msg}}</text>
				      </view>
				    </view>
				 </view>
				<view class="chat-item-left" v-if="item.id===4">
				    <view class="chat-header">
				      <text>4月12号 13:20</text>
				    </view>
				    <view class="chat-content">
				      <view class="usesr-avatar">
				        <image src="../../static/image/img/lm.jpg"></image>
				        <text>蕾姆</text>
				      </view>
					  <view class="user-image">
					  	 <image src="../../static/image/img/test.jpg"></image>
					  </view>
				    </view>
				</view>
				<view class="join-center" v-if="item.id===3">
				  	<text>{{item.name}}</text>
				</view>
		  </view>
				  <!-- <view class="none" v-for="item in Arr">
						<p>{{item.msg}}</p>
				  </view> -->
	  </view>
    </view>
    <view class="chat-botton">
		<view class="left-icon">
			<image src="/static/image/index/yuyin.png"></image>
		</view>
		<view class="input-box">
			<input type="text" value="" v-model="words"/>
		</view>
		<view class="right-icon">
			<!-- <image src="/static/image/index/biaoqin.png"></image>
			<image src="/static/image/index/add.png"></image> -->
			<button @click="sendPravte">发送</button>
		</view>
	</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
		Arr:[{
			name:'蕾姆',
			uid:'0',
			msg:'蕾姆相信。不管是多么辛酸痛苦的事，即使昴看起来快输了，就算这世界没有人相信昴，就连昴自己都不相信自己——雷姆也会相信你。',
			date:'2020-05-13 6:22',
			img:'../../static/image/img/lm.jpg',
			id:1
		},
		{
			name:'蕾姆',
			uid:'2',
			msg:'蕾姆你发错了',
			date:'2020-05-13 7:32',
			img:'../../static/image/img/almy.jpg',
			id:2
		},{
			name:'欢迎 小明 加入群聊',
			id:3
		}],
		words:'',
		name:'',
		img:''
	};
  },
  // onHide() {
  // 	this.socket.emit('disconnection',this.$store.state.userInfo.username)
  // },
  onLoad(e){
	  let username = uni.getStorageSync('userinfo').username // 判断有没有username，有则说明登录过了，重新把缓存存进vuex
	              if (username) {
	                  uni.getStorage({
	                      key: 'userinfo',
	                      success: (res) => {
							  //console.log(res)
	                         this.$store.dispatch('recordUser',res.data)
	                      }
	                  })
	   }
	  this.name=this.$store.state.userInfo.username
	  this.img =e.img
	  console.log(this.name,this.img)
	  // this.getMsg()
	  this.join()
	  // this.welcome()
	  this.getPravteMsg()
	  // this.disconnection()
  },

  methods: {
	  join:function(){
		this.socket.emit('join', this.name)  
	  },
	  back:function(){
		this.socket.emit('disconnection',this.$store.state.userInfo.username)
	  	uni.switchTab({
	  		url:'../chat/chat'
	  	})
	  },
	  sendPravte:function(){
		  if(this.words.length>0){
		  			//发送
		  			let message ={
		  					name:this.name,
		  					uid:0,
		  					msg:this.words,
		  					data:getDate(),
		  					img:this.img,
		  					id:2,
							userTo:'蕾姆'
		  			}
		  			this.Arr.push(message)
		  			this.socket.emit('private message',message)
		  			this.words =''
		  }
	  },
	  // send:function(){
		 //  if(this.words.length>0){
			// //发送
			// let message ={
			// 		name:this.name,
			// 		uid:0,
			// 		msg:this.words,
			// 		data:getDate(),
			// 		img:this.img,
			// 		id:2
			// }
			// this.Arr.push(message)
			// this.socket.emit('message',message)
			// this.words =''
		 //  }
	  // },
	  // getMsg:function(){
		 //  this.socket.on('gbmsg', data =>{
			//   data.id =1
			//  this.Arr.push(data)
		 //  })
	  // },
	  getPravteMsg:function(){
		  this.socket.on('receive private message', data =>{
		  			  data.id =1
		  			 this.Arr.push(data)
		  })
	  },
	  // welcome: function(){
		 //  this.socket.on('welcome', name =>{
			//   let item ={
			// 	  name: '欢迎' +name +'加入群聊',
			// 	  id:3
			//   }
			// 	this.Arr.push(item)
		 //  })
	  // },
	  // disconnection:function(){
		 //    this.socket.on('disconnection',data =>{
			// 	let item ={
			// 	name: data +'离开了群聊',
			// 	id:3
			// 	}
			// 	this.Arr.push(item)
			// })
	  // }
  },
    
};
</script>

<style lang="scss">
@import "../../commons/css/my.scss";
.top-bar {
  background-color: rgba(244, 244, 244, 1);
}
page {
  background-color: rgba(244, 244, 244, 1);
}
.chat-main {

  .chat-list {
	  display: flex;
	  flex-direction: column;
	  flex-wrap: warp;
	  padding-top: 92rpx;
	  padding-bottom: 300rpx;
    .chat-item-left {
		padding-left: 30rpx;
		display: flex;
		flex-direction: column;
      .chat-header {
		  display: flex;
		  justify-content: center;
		  align-items: center;
		  padding: 30rpx;
        text {
			font-size: 24rpx;
			color: #272832;
        }
      }

      .chat-content {
		  display: flex;
		  flex-direction: row;
		  justify-content: flex-start;
        .usesr-avatar {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
          image {
			 width: 80rpx;
			 height: 80rpx;
			 border-radius: 50%;
          }

          text {
			  text-align: center;
			  font-size:24rpx;
			  font-family:PingFangSC-Regular,PingFang SC;
			  font-weight:400;
			  color:rgba(39,40,50,1);
          }
        }
		.user-image{
			image{
					width:320rpx;
					height:320rpx;
					border-radius:40rpx;
					margin-left: 20rpx;
			}
		}
        .user-text {
			position: relative;
			margin-left: 50rpx;
			margin-right: 100rpx;
			background:rgba(255,255,255,1);
			border-radius:20rpx;
			padding: 20rpx;
          text {
			  font-size:30rpx;
			  font-family:PingFangSC-Regular,PingFang SC;
			  font-weight:400;
			  color:rgba(39,40,50,1);
          }
        }
		.user-text:before{
			position:absolute;
				content:"\00a0";
				width:0rpx;
				height:0rpx;
				border-width:16rpx 36rpx 16rpx 0;
				border-style:solid;
				border-color:transparent #FFFFFF transparent transparent;
				top:30rpx;
				left:-36rpx;
		}
      }
    }
	.chat-item-right {
			padding-left: 30rpx;
			display: flex;
			flex-direction: column;
	    .chat-header {
			  display: flex;
			  justify-content: center;
			  align-items: center;
			  padding: 30rpx;
	      text {
				font-size: 24rpx;
				color: #272832;
	      }
	    }
	
	    .chat-content {
			  display: flex;
			  flex-direction: row-reverse;
			  justify-content: flex-start;
	      .usesr-avatar {
			  padding: 10rpx;
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: center;
	        image {
				 width: 80rpx;
				 height: 80rpx;
				 border-radius: 50%;
	        }
	
	        text {
				  text-align: center;
				  font-size:24rpx;
				  font-family:PingFangSC-Regular,PingFang SC;
				  font-weight:400;
				  color:rgba(39,40,50,1);
	        }
	      }
	
	      .user-text-right {
				position: relative;
				display: flex;
				align-items: center;
			    margin-left: 100rpx;
				margin-right: 50rpx;
				border-radius:20rpx;
				padding: 20rpx;
				color: white;
				background:#6699FF;
	        text {
				  font-size:30rpx;
				  font-family:PingFangSC-Regular,PingFang SC;
				  font-weight:400;
				  line-height: 30rpx;
	        }
			.user-text-right-box{
					position:absolute;
						content:"\00a0";
						display:inline-block;
						top: 30rpx;
						width:0rpx;
						height:0rpx;
						border-width:16rpx 0rpx 16rpx 36rpx;
						right: -36rpx;
						border-style:solid;
						border-color:transparent transparent transparent #6699FF;
			}
	      }
	    }
	  }
	}		  
}
.chat-botton{
	position: fixed;
	bottom: -5rpx;
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 128rpx;
	background:rgba(244,244,244,1);
	box-shadow:0px 1px 0px 0px rgba(0,0,0,0.1);
	.left-icon{
		padding-left:12rpx ;
		padding-right:12rpx ;
		display: flex;
		align-items: center;
		image{
			width: 56rpx;
			height: 56rpx;
		}
	}
	.input-box{
		input{
			width:500rpx;
			height:72rpx;
			background:rgba(255,255,255,1);
			border-radius:10rpx;
		}
	}
	.right-icon{
		width: 188rpx;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		image{
			width: 56rpx;
			height: 56rpx;
		}
	}
}
.join-center{
	padding: 30rpx;
	display: flex;
	justify-content: center;
	text{
		font-size: 24rpx;
	}
}
</style>

