<template>
	<div class="newsDetail">
		<banner v-if="showBanner" :options="{ src:base_url+'/public/'+newsBannerCn.BannerImage, title: newsBannerCn.ModuleName, subTitle: newsBannerEn.ModuleName, intro: lang==0?newsBannerCn.ModuleNamePlus:newsBannerEn.ModuleNamePlus}" />

		<div class="bread"  v-show="showPage">
			<ul class="clear">
				<li><router-link to="/">{{lang==0?'首页':'HOME'}}</router-link></li>
				<li><router-link to="/share">{{lang==0?'案例分享':'CASE'}}</router-link></li>
				<li>{{newsDetail.NewsTitle}}</li>
			</ul>
		</div>

		<loading v-show="showLoading||!showBanner"></loading>

		<div class="newsDetailCon clear"  v-show="showPage">
			<div class="mainLt">
				<h3 class="name">{{newsDetail.NewsTitle}}</h3>
				<div class="time">
					<span>{{lang==0?'发布时间':'Release time'}}: {{newsDetail.Year}}-{{newsDetail.Month}}-{{newsDetail.Day}}</span>
					<span>{{lang==0?'浏览次数':'Browse times'}}: {{newsDetail.Clicks}}{{lang==0?'次':''}}</span>
				</div>
				<div class="content" v-html="newsDetail.NewsContent"></div>
			</div>
			<div class="mainRt">
				<h3 v-show="newsPrev.NewsTitle!=null">{{lang==0?'上一篇':'Previous article'}}:</h3>
				<router-link  v-show="newsPrev.NewsTitle!=null" :to="{path:newsPrev.NewsId}">{{newsPrev.NewsTitle}}</router-link>
				<h3 v-show="newsNext.NewsTitle">{{lang==0?'下一篇':'Next article'}}:</h3>
				<router-link v-show="newsNext.NewsTitle" :to="{path:newsNext.NewsId}">{{newsNext.NewsTitle}}</router-link>
			</div>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
	export default{
		name: 'newsDetail',
		data() {
			return {
      	newsDetail: {},
      	newsNext: {},
      	newsPrev: {},
      	baseUrl: baseUrl,
      	showPage: true,
      	showBanner: true,
				showLoading: false,
				newsBannerEn:{},
				newsBannerCn:{},
				base_url:baseUrl,
				newsUrl:null,
				dark: false,
				lang: parseInt(localStorage['lang']),
				Year:'2000',
				Month:'01',
				Day:'01'
    	};
		},
		watch:{
			"$route": "getData"
		},
		created() {
			this.getBanner();
			this.getData();
    	},
    	methods:{
    		isShow(){
				this.showPage=!this.showPage;
				this.showLoading=!this.showLoading;
			},
			getData(){
				if(this.$route.params.id==undefined){
					this.newsDetail = {}
					return
				}
				this.isShow();
				let that = this;
				this.$http.jsonp(newsUrl+'News_Interface_Clicks.html?lang='+lang+'&pid=1&nid='+this.$route.params.id).then((response) => {
				},(error) =>{
					// alert(response)
				});
				this.$http.jsonp(newsUrl+'News_Interface_GetContent.html?lang='+lang+'&pid=1&field=13-15-18-19&method=s&nid='+this.$route.params.id+'&sort=1&neighbor=2&nfield=13').then((response) => {
					/*&field=13-15-18-19*/
					console.log(1);
					this.newsDetail=response.body.content;
					let time=response.body.content.CreateDate.split(' ')[0].split('-');
					/*console.log(response.body);*/
					this.newsDetail.Year=time[0];
					this.newsDetail.Month=time[1];
					this.newsDetail.Day=time[2];
					this.newsNext=response.body.content_next;
					this.newsPrev=response.body.content_pre;
					this.isShow();
					var ops={
					 	NewsId:null,
					 	NewsTitle:null
					}
					if(this.newsNext==""){
						this.newsNext=ops;
					}
					if(this.newsPrev==""){
						this.newsPrev=ops;
					}
				},(error)=>{
					return
					console.log(error)
				});
			},
			getBanner(){
				//获取banner数据
				if(this.$route.params.id==undefined){
					this.newsDetail = {}
					return
				}
				this.showBanner=false;
				this.$emit('isdark');
				this.$http.get(baseUrl+'public/json/case_header_en.json?time='+Date.parse(new Date())).then((response) => {
						this.newsBannerEn=response.body.content;
					});
				this.$http.get(baseUrl+'public/json/case_header.json?time='+Date.parse(new Date())).then((response) => {
						this.showBanner=true;
						this.newsBannerCn=response.body.content;
						this.$emit('isdark');
 					});
			}
    	},
		destroyed() {
			this.newsDetail = {}
		},
		beforeCreate(){
			//将产品详情写入localStorage
			localStorage['solu']=0;
			localStorage['pro']=0;
			localStorage['news']=1;
		}
	};
</script>
<style type="text/css">
	@import 'share.css';
</style>
