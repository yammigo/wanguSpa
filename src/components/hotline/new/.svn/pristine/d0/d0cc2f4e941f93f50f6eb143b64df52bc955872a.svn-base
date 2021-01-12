<template>
	<div class="hotline"
  		:class="{toggle : show}">
		<div class="hotline-wrap clear"
    		@click="show = false">
			<div class="tp">
				<i class="iconfont icon-kehufuwu"></i>
				<div>
					<p>{{lang==0?'客户服务热线':'Hotline'}}</p>
					<p>400-810-8819</p>
				</div>
			</div>
			<div class="btm">
				<span>{{lang==0?'立即在线咨询':'Consultation'}}</span>
			</div>
		</div>
    <div class="btn" :class="{right: show}" @click="show=!show" style="background: url('static/img/left_2.png') no-repeat center center;"></div>
	</div>
</template>
<script type="text/ecmascript-6">
	export default{
    data(){
      return {
        show: false,
		lang: lang
      }
    }
  };
</script>
<style type="text/css">
	@import 'hotline.css';
</style>
