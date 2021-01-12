<template>
	<div class="footer">
		<div class="foot_wrap clear">
			<div class="friend clear">
				<div class="item">
					<h4 class="title">
						<span v-if="language">SOLUTIONS</span><span v-else>EHR解决方案</span>
					</h4>
					<ul class="list">
						<li v-for="(item,index) in plan" class="list-item">
							<router-link :to="{path:'/solutionDetail/'+item.PlanId}">{{ item.PlanTitle }}</router-link>
						</li>
					</ul>
				</div>
				<div class="item">
					<h4 class="title">
						<span v-if="language">PRODUCTS</span><span v-else>产品与服务</span>
					</h4>
					<ul class="list">
						<li v-for="item in product" class="list-item">
							<router-link :to="{path:'/productDetail/'+item.ProductId}">{{ item.ProductTitle }}</router-link>
						</li>
					</ul>
				</div>
				<div class="item">
					<h4 class="title">
						<span v-if="language">CASE</span><span v-else>客户案例</span>
					</h4>
					<ul class="list">
						<li class="list-item" v-for="(item,index) in caselist" v-if="index < 6"><router-link to="/case">{{item.CaseTypeTitle}}</router-link></li>
						<li class="list-item" v-show="language" @click="toShare"><a href="javascript:;">Case Share</a></li>
						<li class="list-item" v-show="!language" @click="toShare"><a href="javascript:;">案例分享</a></li>
						<!-- 案例分享用news页面的样式 -->
						<li class="list-item" v-if="language"><router-link to="/case">More</router-link></li>
						<li class="list-item" v-else><router-link to="/case">更多</router-link></li>
					</ul>
				</div>
				<div class="item">
					<h4 class="title">
						<span v-if="language">ABOUT US</span><span v-else>关于我们</span>
					</h4>
					<ul class="list" v-if="language">
						<li class="list-item"><router-link to="/about/two">Company Profile</router-link></li>
						<li class="list-item"><router-link to="/about/three">Vanguard Memorabilia</router-link></li>
						<li class="list-item"><router-link to="/about/four">Team Introduction</router-link></li>
						<li class="list-item"><router-link to="/about/six">CONTACT US</router-link></li>
					</ul>
					<ul class="list" v-else>
						<li class="list-item"><router-link to="/about/two">公司介绍</router-link></li>
						<li class="list-item"><router-link to="/about/three">万古大事记</router-link></li>
						<li class="list-item"><router-link to="/about/four">团队介绍</router-link></li>
						<li class="list-item"><router-link to="/about/six">联系我们</router-link></li>
					</ul>
				</div>
			</div>
			<div class="code">
				<div class="logo">
					<img src="../../../static/img/logo_01.png">
				</div>
				<div class="code_item clear">
					<div class="item">
						<div class="img">
							<img :src="weixinImg">
						</div>
						<p v-if="language">WeChat QR Code</p>
						<p v-else>官方微信二维码</p>
					</div>
					<div class="item">
						<div class="img">
							<img :src="appImg">
						</div>
						<p v-if="language">Vanguard APP Download</p>
						<p v-else>万古APP下载</p>
					</div>
				</div>
			</div>
		</div>
		<div class="btm">
			<div class="wrap">
				<span>{{ CopyRight }}</span>
				<span class="line"></span>
				<span>{{ BackUp }}</span>
				<span class="line"></span>
				<span v-if="language">Technical Support：<a href="http://www.jianzhanren.cn/" style="color:#fff;">jianzhanren.cn</a></span>
				<span v-else>技术支持：<a href="http://www.jianzhanren.cn/" style="color:#fff;">建站人</a></span>
			</div>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
	const ERR_OK = 0;
	export default{
		props: ['plan','product','caselist','BackUp','CopyRight','weixinImg','appImg'],
		data() {
			return {
    		foot: {},
    		/*plan:{},
    		product:{},*/
    		language:parseInt(localStorage['lang'])
  		};
		},
		created() {
			this.getDate();
    	},
    	methods:{
    		getDate(){
    		},
    		toShare(){
    			this.$router.push('/share');
    		}
    	},
    	mounted() {
				if(localStorage['lang']){
					global.lang = localStorage['lang']
				}else {
					global.lang = 0
				}
    	}
	};
</script>
<style lang="stylus" rel="stylesheet/stylus">
	@import 'foot.css';
</style>
