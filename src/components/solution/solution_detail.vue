<template>
	<div class="solutionDetail">
		<banner v-show="showBanner" :options="{ src:base_url+'/public/'+bannerCn.BannerImage, title: bannerCn.ModuleName, subTitle: bannerEn.ModuleName, intro: lang==0?bannerCn.ModuleNamePlus:bannerEn.ModuleNamePlus}" />

		<loading v-show="!showBanner||showLoading"></loading>

		<div class="bread" v-show="!showLoading">
			<ul class="clear">
				<li><router-link to="/">{{lang==0?'首页':'HOME'}}</router-link></li>
				<li><router-link to="/solution">{{lang==0?'解决方案':'SOLUTION'}}</router-link></li>
				<li>{{planDetail.PlanTitle}}</li>
			</ul>
		</div>
		<div class="detailCon bTop" v-show="!showLoading">
			<h3>{{planDetail.PlanTitle}}</h3>
			<!-- <p>{{planDetail.PlanTitlePlus}}</p> -->
			<div class="text" v-html="planDetail.PlanIntro"></div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		name: 'solutionDetail',
		data(){
			return{
				planDetail:{},
				baseUrl: baseUrl,
				showLoading: false,
				showBanner: true,
        bannerCn:{},
        bannerEn: {},
        base_url:baseUrl,
        dark:false,
				lang: parseInt(localStorage['lang']),
				planIntro:''
			}
		},
		watch:{
			"$route": "getData"
		},
		methods:{
			getData(){
				this.showLoading=true;
				this.$http.jsonp(baseUrl+'system_admin/saas_plan/Plan_Interface_GetContent.html?lang='+lang+'&pid=1&field=37-40&method=s&ppid='+this.$route.params.id).then((response) => {
					/*&field=37-40*/
					this.planDetail=response.body.content;
					this.showLoading=false;
					/*this.base_url=response.body.base_url;*/
					/*let Intro=response.body.content.PlanIntro;
					console.log(Intro);
					if(Intro.indexOf('src=')){
						this.planIntro=Intro.split('src="')[0]+'src="'+baseUrl+'public'+Intro.split('src="')[1];
					}*/
				});
			},
			getBanner(){
				this.showBanner=false;
				this.$emit('isdark');
				this.$http.get(baseUrl+'public/json/plan_header.json?time='+Date.parse(new Date())).then((response) => {
					this.showBanner=true;
					this.$emit('isdark');
					this.bannerCn=response.body.content;
					/*this.base_url=response.body.base_url;*/
				});
				this.$http.get(baseUrl+'public/json/plan_header_en.json?time='+Date.parse(new Date())).then((response) => {
					this.bannerEn=response.body.content;
				});

			},
		},
		created() {
			this.getBanner();
			this.getData();

    	},
    	beforeCreate(){
		//将产品详情写入localStorage
			localStorage['solu']=1;
			localStorage['pro']=0;
			localStorage['news']=0;
    	}
	}
</script>
<style type="text/css">
	@import 'solution_detail.css';
</style>
