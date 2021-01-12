<template>
	<div class="product">
		<banner v-show="showBanner" :options="{ src:base_url+'/public/'+bannerCn.BannerImage, title: bannerCn.ModuleName, subTitle: bannerEn.ModuleName, intro: lang==0? bannerCn.ModuleNamePlus:bannerEn.ModuleNamePlus}" />

		<loading v-show="!showBanner||showLoading"></loading>

		<div class="proContent" v-show="!showLoading">
			<div :class="{ 'active' : scroll >= (index * 600 +80)&&scroll <= (index * 600 +680) }" class="item" v-for="(item,index) in product">
				<div class="container">
					<div class="img fl">
						<img :src="proUrl+'public/'+item.ProductThumb" alt="">
					</div>
					<div class="text">
						<span class="line"></span>
						<h3 class="name">{{item.ProductTitle}}</h3>
						<div class="con" v-html="item.ProductTitlePlus"></div>
						<router-link  :to="{ path: 'productDetail/'+item.ProductId}" class="more"><span>{{lang==0?'查看详情':'Details'}}</span></router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
	export default{
		name: 'product',
		data(){
			return{
				product: {},
				scroll: "",
				baseUrl: baseUrl,
				showLoading: false,
				showBanner: true,
				bannerCn:{},
				bannerEn:{},
				base_url:baseUrl,
				proUrl: null,
				dark:false,
				lang: parseInt(localStorage['lang'])
			}
		},
		methods: {
			oScroll(){
				this.scroll=document.body.scrollTop;
			},
			getDate(){
				this.showLoading=true;
				let file = '';
				if(localStorage['lang'] == 0){
					file = "product.json";
				}else{
					file = "product_en.json";
				}
				this.$http.get(baseUrl+'public/json/'+file+'?time='+Date.parse(new Date())).then((response) => {
					this.product=response.body.content;
					this.showLoading=false;
					this.proUrl=response.body.base_url;
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
		created() {
			this.getBanner();
			this.getDate();
			//sessionStorage['route'] = this.$route.path;

    	},
    	mounted() {
			window.addEventListener('scroll', this.oScroll);
    	}
	};
</script>
<style type="text/css">
	@import 'product.css';
</style>
