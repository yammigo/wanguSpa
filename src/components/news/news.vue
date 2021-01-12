<template>
	<div class="news">

		<banner v-if="showBanner" :options="{ src:base_url+'/public/'+newsBannerCn.BannerImage, title: newsBannerCn.ModuleName, subTitle:newsBannerEn.ModuleName, intro: lang==1?newsBannerEn.ModuleNamePlus:newsBannerCn.ModuleNamePlus}" />

		<loading v-show="showLoading||!showBanner"></loading>

		<div v-show="showPage" class="newsCon clear">
			<div class="item" v-for="(item,index) in news"  v-show =  'index > (page-1)*9 && index <= (page * 9) '>
				 <div class="img">
					<router-link :to="{ path: 'newsDetail/'+item.NewsId}" class="bgImg" :style="{backgroundImage:'url(\''+item.ThumbPicture+'\')'}"></router-link>
				 </div>
				 <!-- :style="{backgroundImage:'url(\''+ bannerUrl + 'public/' +item.SlideImage+'\')'}" -->
				 <span class="line"></span>
				 <router-link class="name" :to="{ path: 'newsDetail/'+item.NewsId}">{{item.NewsTitle}}</router-link>
				 <div class="text" v-html="item.NewsContentShort"></div>
				 <div class="bottom clear">
					<p>
						<span><i class="iconfont icon-time"></i></span>{{item.Month}}/{{item.Day}}  {{item.Year}}
					</p>
					<router-link class="more fr" :to="{ path: 'newsDetail/'+item.NewsId}">{{lang==0?'查看详情':'Details'}} <span class="icon"></span></router-link>
				 </div>
			</div>
		</div>

		<div v-show="showPage&&pageLength>1" class="container clear" style="margin-top:2.5rem;margin-bottom:10rem;text-align: center;">
			<!-- 传入一个总页数，定义一个getPage方法获取当前页数 -->
			<page :pageLength="pageLength" @changePage="getPage"/>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name: 'news',
		data() {
			return {
			news: {},
			page: '1',
			pageLength: '1',
			showPage: true,
			showBanner: true,
			showLoading: false,
			newsBannerEn:{},
			newsBannerCn:{},
			base_url:baseUrl,
			newsUrl:null,
			dark: false,
			lang: lang,
			imgs:[]
		  };
		},
		created() {
			this.getBanner();
			this.getDate();
			/*global.lang=1;*/
		},
		methods: {
			getPage(msg){
				this.page = msg;
				this.getDate();

			},
			getDate(){
				// 页码和loading是否显示
				this.isShow();
				// 获取数据
				if(parseInt(localStorage['lang'])==1){
					var type=4;
				}else{
					var type=1;
				}
				for(let i=1;i<14;i++){
					if(i<10){
						this.imgs.push('./static/img/news/news0'+i+'.jpg');
					}else{
						this.imgs.push('./static/img/news/news'+i+'.jpg');
					}
					
				}
				let file = '';
				if(localStorage['lang'] == 0){
					file = "news.json";
				}else{
					file = "news_en.json";
				}
				this.$http.get(baseUrl+'public/json/'+file+'?time='+Date.parse(new Date())).then((response) => {
					this.news=response.body.content;
					//console.log(this.news);
					if(this.news.length % 9 ==0){
						this.pageLength = this.news.length / 9;
					}else{
						this.pageLength = parseInt(this.news.length / 9) +1;
					}
					//this.pageLength=response.body.pages;
					this.newsUrl=response.body.base_url;
					let that=this;
					$(this.news).each(function(){
						if(this.ThumbPicture==null || this.ThumbPicture==""){
							let eq=parseInt(Math.random()*13);
							this.ThumbPicture=that.imgs[eq];
						}else{
							if(this.ThumbPicture.indexOf('http')==-1){
								this.ThumbPicture=that.base_url+'public/'+this.ThumbPicture;
							}
						}
					});

					this.isShow();
				});
			},
			getBanner(){
				this.showBanner=false;
				this.$emit('isdark');
				this.$http.get(baseUrl+'public/json/news_header_en.json?time='+Date.parse(new Date())).then((response) => {
					this.newsBannerEn=response.body.content;
				});
				this.$http.get(baseUrl+'public/json/news_header.json?time='+Date.parse(new Date())).then((response) => {
					this.showBanner=true;
					this.$emit('isdark');
					this.newsBannerCn=response.body.content;
					/*this.base_url=response.body.base_url;*/
				});
			},
			isShow(){
				this.showPage=!this.showPage;
				this.showLoading=!this.showLoading;
			}
		},
		destroyed() {
			this.news = {}
		},
		beforeCreate(){
			//将产品详情写入localStorage
				localStorage['solu']=0;
				localStorage['pro']=0;
		}
	};
</script>
<style type="text/css">
	@import 'news.css';
</style>
