<template>
	<div class="hotline"
  		:class="{toggle : show}">
		<div class="hotline-wrap clear"
    		@click="show = false">
			<div class="tp">
				<i class="iconfont icon-kehufuwu"></i>
				<div>
					<p>{{lang==0?'客户服务热线':'Hotline'}}</p>
					<p>{{ hotline }}</p>
				</div>
			</div>
			<div class="btm" @click="zixun">
				<span>{{lang==0?'立即在线咨询':'Consultation'}}</span>
			</div>
		</div>
    <div class="btn" :class="{right: show}" @click="show=!show" style="background: url('static/img/left_2.png') no-repeat center center;"></div>
	</div>
</template>
<script type="text/ecmascript-6">
	export default{
	props: ['hotline'],
    data(){
      return {
        show: false,
		lang: lang
      }
    },
    methods:{
    	zixun(){
    		if($(window).width()>=768){
    			window.open ('http://chat10.live800.com/live800/chatClient/chatbox.jsp?companyID=425636&configID=217193&jid=4425310040', 'newwindow', 'height=620, width=760, top=0,left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no');
    		}else{
    			window.open ('http://chat10.live800.com/live800/chatClient/chatbox.jsp?companyID=425636&configID=217193&jid=4425310040', 'newwindow', 'height=100%, width=100%, top=0,left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no');
    		}
    		
    	}
    }
  };
</script>
<style type="text/css">
	@import 'hotline.css';
</style>
