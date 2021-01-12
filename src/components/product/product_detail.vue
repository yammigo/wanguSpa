<template>
	<div class="proDetail">
		<banner v-show="showBanner" :options="{ src:base_url+'/public/'+bannerCn.BannerImage, title: bannerCn.ModuleName, subTitle: bannerEn.ModuleName, intro: lang==0?bannerCn.ModuleNamePlus:bannerEn.ModuleNamePlus}" />

		<loading v-show="!showBanner||showLoading"></loading>

		<div class="protit" v-show="state&&!showLoading">
			<router-link to='/'>{{lang==0?'首页':'HOME'}}</router-link><span>&gt;</span>
			<router-link to='/product'>{{lang==0?'产品与服务':'PRODUCTS AND SERVICES'}}</router-link><span>&gt;</span>
			<router-link to='/proDetail'><span>{{proDetail.ProductTitle}}</span></router-link>
		</div>
		<div class="part part01" v-show="!showLoading">
			<div class="title">
				<h4>{{proDetail.ProductTitle}}</h4>

				<p>{{proDetail.ProductTitlePlus}}</p>
			</div>
		</div>
		<div v-show="showCon&&!showLoading" v-html="proDetail.Html"></div>
	</div>
</template>
<script>
import $ from 'jquery';
	export default{
		data(){
			return{
				state:true,
				baseUrl: baseUrl,
				proDetail:{},
				showCon: true,
				showLoading: false,
				showBanner: true,
				bannerCn:{},
				bannerEn:{},
				base_url:baseUrl,
				dark:false,
				lang:lang
			}
		},
		watch:{
			"$route": "getDate"
		},
		methods: {
			show:function () {          //当浏览器大小变化时
		   		 if($(document.body).width()<=767){		//浏览器时下窗口文档的宽度
					this.state=false;
		    	}else if($(document.body).width()>767){
		    		this.state=true;
		    	}
		    },
		    getDate(){
		    	this.showLoading=true;
		    	this.$http.jsonp(baseUrl+'system_admin/saas_product/Product_Interface_GetContent.html?pid=1&field=35-36-91&method=s&prid='+this.$route.params.id).then((response) => {
					this.proDetail=response.body.content;
					console.log(this.proDetail);
					this.showLoading=false;
					if(response.body.content.Html=='undefined'){
						this.showCon=false;
					}
				});
		    },
		    getBanner(){
				this.showBanner=false;
				this.$emit('isdark');
				this.$http.get(baseUrl+'public/json/product_header_en.json?time='+Date.parse(new Date())).then((response) => {
					this.bannerEn=response.body.content;
				});
				this.$http.get(baseUrl+'public/json/plan_header.json?time='+Date.parse(new Date())).then((response) => {
					this.showBanner=true;
					this.$emit('isdark');
					this.bannerCn=response.body.content;
					/*this.base_url=response.body.base_url;*/
				});
			},
			del(){
				//删除可编辑属性
				$('body').delegate('.HtmlEdit','load',function(){
					$(this).remove();
				});
			}
		},
		beforeCreate(){
			//将详情页被打开的状态写入localstorage
    	localStorage['pro']=1;
    	localStorage['solu']=0;
    	localStorage['news']=0;
		},
		created(){
			this.getBanner();
			this.getDate();
			this.del();
		},
		mounted(){
			$(window).resize(this.show);
		}
	};
	window.onload=function(){
		//删除可编辑属性
		dellink();
	}
	function dellink(){
		//删除可编辑属性
		$('.HtmlEdit').remove();
	}
</script>
<style lang="stylus" rel="stylesheet/stylus">
	@import 'product_detail.css';
	@import 'productAll.css';
</style>
