export default{
	friends: function (){
		let friendList =[
			{
				id:1,
				imgUrl:'almy.jpg',
				tip:1,
				name:'爱莉米娅',
				time:new Date(),
				news:'老公加油!',
				email:'fawrar@163.com'
			},
			{
				id:2,
				imgUrl:'lm.jpg',
				tip:0,
				name:'蕾姆',
				time:new Date(),
				news:'主人最好了',
				email:'fawrar@163.com'
			},
			{
				id:3,
				imgUrl:'yjyx.jpg',
				tip:0,
				name:'衣锦夜行',
				time:new Date(),
				news:'死人出列，咱俩碰一碰',
				email:'fawrar@163.com'
			},
			{
				id:4,
				imgUrl:'user.jpg',
				tip:0,
				name:'二次元交流室',
				time:new Date(),
				news:'我的老天鹅啊',
				type:'群'
			
			}]	
			return friendList
	},
	//好友表
	isFriend: function(){
		let isfriend =[{
				userid:1,
				friend:1
		},
		{
				userid:1,
				friend:2
		},
		{
				userid:1,
				friend:3
		},
		{
				userid:1,
				friend:4
		}]
		return isfriend
	}
}