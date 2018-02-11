/**
 * Created by chq on 2018/2/10.
 */
 $.ajax({
 	type:"get",
 	url:"http://127.0.0.1:3000/test",
 	async:true,
 	success:function(res){
 		console.log(res);
 	}
 });
