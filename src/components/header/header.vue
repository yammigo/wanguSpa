<template>
	<div class="header" :class="{ 'dark' : bgType || dark }">
		<div class="header_wrap clear">
			<div class="logo" ref='logo'>
				<router-link to="/">
					<img src="../../../static/img/logo_01.png">
				</router-link>
			</div>
			<div class="lang clear">
				<span><a href="javascript:;" @click="changeLang(1)">EN</a></span>
				<span class="line"></span>
				<span><a href="javascript:;" @click="changeLang(0)">CN</a></span>
				<span class="line"></span>
				<span v-if="language"><a href="http://vbs.vgtech.com.cn/">LOGIN</a></span>
				<span v-else><a href="http://vbs.vgtech.com.cn/">登录</a></span>
			</div>
			<div class="search">
				<form class="form">
					<div class="input-group">
						<input type="text" :placeholder="language==1?'SEARCH':'请输入关键词'" class="input" ref='pcSearch' v-model='pcSearch' @focus="clearVal()" @blur="addVal()">
						<button class="btn" type="button"><router-link :to="'/search/'+this.pcSearch"></router-link></button>
					</div>
				</form>
			</div>
			<div class="menu" ref="menuList">
				<div class="search">
					<form class="form">
						<div class="input-group" @click="close">
							<input type="text" :placeholder="language==1?'SEARCH':'请输入关键词'" class="input" v-model="pcSearch">
							<router-link class="btn" :to="'/search/'+this.pcSearch"><button type="button"></button></router-link>

						</div>
					</form>
				</div>
				<ul class="list clear" ref="menu">
					<li class="list-item active">
						<router-link to="/">
							<span class="icon"></span>
							<span v-if="language">HOME</span>
							<span v-else>首页</span>
						</router-link>
						<span class="line"></span>
					</li>

					<li class="list-item">
						<router-link to="/solution">
							<span class="icon"></span>
							<span v-if="language">SOLUTIONS</span>
							<span v-else>解决方案</span>
						</router-link>
						<span class="line"></span>
						<div class="submenu" :class="'width'+plan.length">
							<ul class="sub_wrap clear">
								<li class="sub_list" v-for="item in plan">
									<router-link :to="{path:'/solutionDetail/'+item.PlanId}">{{item.PlanTitle}}</router-link>
								</li>
							</ul>
						</div>
					</li>
					<li class="list-item">
						<router-link to="/product">
							<span class="icon"></span>
							<span v-if="language">PRODUCTS</span>
							<span v-else>产品与服务</span>
						</router-link>
						<span class="line"></span>
						<div class="submenu" :class="'width'+product.length">
							<ul class="sub_wrap clear">
								<li class="sub_list" v-for="item in product">
									<router-link :to="{path:'/productDetail/'+item.ProductId}">{{item.ProductTitle}}</router-link>
								</li>
							</ul>
						</div>
					</li>
					<li class="list-item">
						<router-link to="/case">
							<span class="icon"></span>
							<span v-if="language">CASE</span>
							<span v-else>客户案例</span>
						</router-link>
						<span class="line"></span>
					</li>
					<li class="list-item">
						<router-link to="/news" v-if="language">
							<span class="icon"></span>
							<span>NEWS</span>
						</router-link>
						<router-link to="/news" v-else>
							<span class="icon"></span>
							<span>资讯中心</span>
						</router-link>
						<span class="line"></span>
						<div class="submenu width2 fixed" style="width:12rem;">
							<ul class="sub_wrap clear">
								<li class="sub_list">
									<router-link to="/news" v-if="language">Latest News</router-link>
									<router-link to="/news" v-else>新闻中心</router-link>
								</li>
								<li class="sub_list">
									<router-link to="/discover" v-if="language">Industrial Insights</router-link>
									<router-link to="/discover" v-else>WE发现</router-link>
								</li>
							</ul>
						</div>
					</li>
					<li class="list-item">
						<router-link to="/about/one">
							<span class="icon"></span>
							<span v-if="language">ABOUT US</span>
							<span v-else>关于我们</span>
						</router-link>
						<span class="line"></span>
					</li>
				</ul>
				<div class="lang">
					<a href="javascript:;" @click="changeLang(1);">EN</a>
					<span> / </span>
					<a href="javascript:;" @click="changeLang(0);">CN</a>
				</div>
			</div>
			<div class="menu_icon clear" @click="openMenu" ref="menuIcon">
				<span class="line lg"></span>
				<span class="line md"></span>
				<span class="line sm"></span>
			</div>
			<div class="shadow"  @click="openMenu"></div>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
	import $ from 'jquery';

	const ERR_OK = 0;
	export default{
		props: ['dark','plan','product'],
		data() {
			return {
		        head: {},
		        scroll: '',
		        width:null,
		        pcSearch:'请输入关键词',
		        language:parseInt(localStorage['lang']),
		        planList:[]
		      };
		},
		watch: {
			"$route": "menuActive"
		},
		created() {
			this.font();
			this.getDate();
			if(localStorage['lang']==1){
				this.pcSearch='SEARCH';
			}
    	},
    	methods: {
    		getDate(){
    			
    		},
				menu() {
					this.scroll = document.body.scrollTop;
				},
				font() {
					var oWidth = $(window).width();
					this.width=$(window).width();
					if ($(window).width() >= 768) {
						$('html').css('font-size', oWidth * 20 / 1920 + 'px');
					} else {
						$('html').css('font-size', oWidth * 20 / 640 + 'px');
					}
				},
				openMenu() {
					if($(this.$refs.menuIcon).hasClass('active')){
						$(this.$refs.menuIcon).removeClass('active').siblings('div.logo').stop().fadeIn(600);
						$(this.$refs.menuList).stop().animate({
							'left':'100%'},400);
						$('.header .header_wrap div.shadow').css('z-index','-1').css('display','none');
					}else{
						$(this.$refs.menuIcon).addClass('active').siblings('div.logo').stop().fadeOut(600);
						$(this.$refs.menuList).stop().animate({
							'left':'11rem'},400);
						$('.header .header_wrap div.shadow').css('z-index','99').css('display','block');
					}
				},
				getActive(obj) {
					$(this.$refs.menu).children().eq(obj).addClass('active').siblings().removeClass('active');
					if($(window).width()<768){
						$(this.$refs.menuIcon).trigger('click');
						$('.header .header_wrap div.shadow').css('z-index','-1').css('display','none');
					}
					$('#toTop').trigger('click');
				},
				close(){
					$(this.$refs.menuIcon).removeClass('active').siblings('div.logo').stop().fadeIn(600);
					$(this.$refs.menuList).stop().animate({
							'left':'100%'},400);
					$('.header .header_wrap div.shadow').css('z-index','-1').css('display','none');
				},
				changeLang(num){
					//切换至当前语言无效
					let that= this;
					if(parseInt(localStorage['lang'])==num){
						return false;
					}else{
						//将语言信息录入localStorage
						localStorage['lang']=num;
						that.lang=num;
						if(parseInt(localStorage['pro'])==1){
							//alert('product');
							localStorage['pro']=0;
							that.$router.push({path:'/product'});
						}else if(parseInt(localStorage['solu'])==1){
							//alert('solu');
							localStorage['solu']=0;
							that.$router.push({path:'/solution'});
						}else if(parseInt(localStorage['news'])==1){
							//alert('news');
							localStorage['news']=0;
							that.$router.push({path:'/news'});
						}
						//.log('router',that.$route)
						//localStorage['route'] = that.$route.path;
						//sessionStorage['route'] = that.$route.path;
						//刷新网页
						 window.location.reload();
					}
	    	},
	    	planData(){
	    		let planList=this.plan;

	    	},
	    	menuActive(){
	    		if(this.$route.name=='home'){
	    			$(this.$refs.menu).children().eq(0).addClass('active').siblings().removeClass('active');
	    		}else if(this.$route.name=='solution' || this.$route.name=='solutionDetail'){
	    			$(this.$refs.menu).children().eq(1).addClass('active').siblings().removeClass('active');
	    		}else if(this.$route.name=='product' || this.$route.name=='productDetail'){
	    			$(this.$refs.menu).children().eq(2).addClass('active').siblings().removeClass('active');
	    		}else if(this.$route.name=='case'){
	    			$(this.$refs.menu).children().eq(3).addClass('active').siblings().removeClass('active');
	    		}else if(this.$route.name=='news' || this.$route.name=='newsDetail' || this.$route.name=='discover' || this.$route.name=='disDetail'){
	    			$(this.$refs.menu).children().eq(4).addClass('active').siblings().removeClass('active');
	    		}else if(this.$route.name=='about'){
	    			$(this.$refs.menu).children().eq(5).addClass('active').siblings().removeClass('active');
	    		}else if(this.$route.name=='search' || this.$route.name=='share'){
						$(this.$refs.menu).children().removeClass('active');
	    		}
	    		sessionStorage['route'] = this.$route.path;
	    		
	    	},
	    	clearVal(){
	    		$(this.$refs.pcSearch).val('');
	    	},
	    	addVal(){
	    		if($(this.$refs.pcSearch).val()==''){
	    			if(localStorage['lang']==1){
	    				$(this.$refs.pcSearch).val('SEARCH');
	    				this.pcSearch='SEARCH';
	    			}else{
	    				$(this.$refs.pcSearch).val('请输入关键词');
	    				this.pcSearch='请输入关键词';
	    			}
	    			/*$(this.$refs.pcSearch).val('请输入关键词');*/
	    			
	    		}
	    	},
	    	search(){
	    		
	    	}
	    },
    	computed: {
				bgType() {
					if(window.location.href.split('#')[1] == '/'){
						var scrollTop = $('div.banner').height();
					}else{
						var scrollTop = $('div.banner').height();
					}
					this.scroll = document.body.scrollTop || document.documentElement.scrollTop;
					return this.scroll > scrollTop;
				},
				dataComput(){


				}
    	},
    	mounted() {
			window.addEventListener('scroll', this.menu);
			window.addEventListener('resize', this.font);
    	}
	};

</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
	@import './header.css';
</style>
