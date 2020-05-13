export default{
	//首页时间转换
	dateTime(e){
		let old =new Date(e)
		let now =new Date();
		//获取old具体时间
		let d =old.getTime();
		let h =old.getHours();
		let m =old.getMinutes();
		let Y =old.getFullYear();
		let M =old.getMonth()+1;
		let D =old.getDate();
		
		let nd =now.getTime();
		let nh =now.getHours();
		let nm =now.getMinutes();
		let nY =now.getFullYear();
		let nM =now.getMonth()+1;
		let nD =old.getDate()
		if(D=== nD && Y === nY && M ===nM){
			//当天时间
			if(h<0){
				h='0'+h;
			}
			if(m<0){
				m='0'+m;
			}
			let date =h+':'+m
			return date;
		}
		if(D+1=== nD && Y === nY && M ===nM){
			//当天时间
			if(h<0){
				h='0'+h;
			}
			if(m<0){
				m='0'+m;
			}
			let date ='昨天'+h+':'+m
			return date;
		}
		else{
			return Y+'/'+M+'/'+D;
		}
	}
}