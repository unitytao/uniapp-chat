<template>
	<view>
		<input v-model="name" type="text" style="width: 300px;height: 50px;"/>
		 <view class="uni-title uni-common-pl">地区选择器</view>
		        <view class="uni-list">
		            <view class="uni-list-cell">
		                <view class="uni-list-cell-left">
		                    当前选择
		                </view>
		                <view class="uni-list-cell-db">
		                    <picker @change="bindPickerChange" :value="index" :range="array">
		                        <view class="uni-input">{{array[index]}}</view>
		                    </picker>
		                </view>
		            </view>
		        </view>
		<button @tap="toChat">进入聊天室</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:'',
				array: ['../../static/image/img/almy.jpg', '../../static/image/img/lm.jpg', '../../static/image/img/user.jpg'],
				index: 0
			}
		},
		methods: {
			 bindPickerChange: function(e) {
			            console.log('picker发送选择改变，携带值为', e.target.value)
			            this.index = e.target.value
			        },
			toChat:function(){
				var msg ={
					name:this.name,
					img:this.array[this.index]
				}
				uni.navigateTo({
					url:'../chatPage/chatPage?name='+this.name+'&img='+this.array[this.index]
				})
			}		
		}
	}
</script>

<style>

</style>
