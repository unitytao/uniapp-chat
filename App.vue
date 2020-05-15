<script>
	export default {
		onLaunch: function() {
			let userInfo = uni.getStorageSync('userInfo') // 判断有没有username，有则说明登录过了，重新把缓存存进vuex
			            if (userInfo.user) {
			                uni.getStorage({
			                    key: 'userInfo',
			                    success: (res) => {
										 // console.log(res)
			                       this.$store.dispatch('recordUser',res.data)
								   console.log(this.$store.state.userInfo)
			                    }
			                })
						}
		},
		onShow: function() {
		},
		onHide: function() {
		},
	}
</script>

<style>
	/*每个页面公共css */
</style>
