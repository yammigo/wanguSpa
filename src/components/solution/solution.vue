<template>
	<div class="solution">
		<banner v-show="showBanner" :options="{ src:base_url+'/public/'+bannerCn.BannerImage, title: bannerCn.ModuleName, subTitle: bannerEn.ModuleName, intro: lang==0?bannerCn.ModuleNamePlus:bannerEn.ModuleNamePlus}" />

		<loading v-show="!showBanner||!showCon"></loading>

		<div v-if="lang==0" v-html="bannerCn.Html"></div>
		<div v-else v-html="bannerEn.Html"></div>

		<div class="solFangan" v-show="showCon">
			<h3 class="solTitle">{{lang==0?'EHR解决方案':'EHR solutions'}}</h3>
			<div class="content container clear">
				<div class="item" v-for="(item,i) in plan" v-if="isShow=='true'&&i <= itemLen">
					<i class="iconfont" :class="item.PlanIcon"></i>
					<a href="javascript:" class="name">{{item.PlanTitle}}</a>
					<div class="text" v-html="item.PlanTitlePlus"></div>
					<div class="more"><router-link :to="{path: 'solutionDetail/'+item.PlanId}"><span>{{lang==0?'查看详情':'Details'}}</span></router-link></div>
				</div>
				<div class="item" v-for="(item,i) in plan" v-if="isShow=='false'">
					<i class="iconfont" :class="item.PlanIcon"></i>
					<a href="javascript:" class="name">{{item.PlanTitle}}</a>
					<div class="text" v-html="item.PlanTitlePlus"></div>
					<div class="more"><router-link :to="{path: 'solutionDetail/'+item.PlanId}"><span>{{lang==0?'查看详情':'Details'}}</span></router-link></div>
				</div>
			</div>
			<div @click="showAllToggle()" v-if="isShow=='true'" class="moreItem">
				<span v-if='itemLen<(plan.length-1)'>{{lang==0?'查看更多':'More'}}</span>
				<span v-if='itemLen>=plan.length'>{{lang==0?'没有更多了':'No more'}}</span>
			</div>
		</div>

	</div>
</template>
<script type="text/ecmascript-6">
	export default{
		name: 'solution',
		data(){
		    return {
		        swiperOption: {
		          	// 所有配置均为可选（同Swiper配置）
		          	autoplay: false,
		          	slidesPerView: "auto",
		          	onlyExternal : true,
		          	slidesPerView: 3,
		          	prevButton:'.swiper-button-prev',
        		  	nextButton:'.swiper-button-next',
		         	breakpoints: {
						768: {
							autoplay: 3000,
						    slidesPerView: 1,
						    onlyExternal : false,
					    },
			        }
		        },
		        plan: {},
		        isShow: 'true',
		        itemLen: 3,
		        showBanner: true,
		        bannerCn:{},
		        bannerEn: {},
		        base_url:baseUrl,
		        dark:false,
		        showCon: true,
						lang: parseInt(localStorage['lang'])
		    }
		},
		methods: {
			width() {
				this.isShow = $(window).width()>768?"false":"true";
			},
			showAllToggle() {
				this.itemLen+=5;
			},
			getDate(){
				//八个分类数据请求
				this.showCon=false;
				let file = '';
				if(localStorage['lang'] == 0){
					file = "plan.json";
				}else{
					file = "plan_en.json";
				}
				this.$http.get(baseUrl+'public/json/'+file+'?time='+Date.parse(new Date())).then((response) => {
					this.plan=response.body.content;
					this.showCon=true;
					for(let i=0,len=this.plan.length;i<len;i++){
			           this.plan[i].PlanTitlePlus = this.plan[i].PlanTitlePlus.replace(/\n/,"<br>")
			        }
				});
			},
			getBanner(){
				this.showBanner=false;
				this.$emit('isdark');
				this.$http.get(baseUrl+'public/json/plan_header_en.json?time='+Date.parse(new Date())).then((response) => {
					this.bannerEn=response.body.content;
				});
				this.$http.get(baseUrl+'public/json/plan_header.json?time='+Date.parse(new Date())).then((response) => {
					this.showBanner=true;
					this.$emit('isdark');
					this.bannerCn=response.body.content;
					/*this.base_url=response.body.base_url;*/
				});
			}
		},
		mounted(){
			this.isShow = $(window).width()>768?"false":"true";
			window.addEventListener('resize', this.width);
		},
		created() {
			this.getDate();
			this.getBanner();
    }
	};
</script>
<style type="text/css">
	@import 'solution.css';
</style>
