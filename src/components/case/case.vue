<template>
	<div class="case">
		<!-- <banner :options="{ src:'../../../static/img/case_bg.jpg', title: '客户案例', subTitle: '/ CUSTOMER CASE', intro: '在这些行业，我们有领先的解决方案与实施经验助力企业发展，实现HR管理战略的提升'}" />
		</banner> -->
		<banner v-show="showBanner" :options="{ src :baseUrl+ 'public/'+caseBannerCn.BannerImage, title: caseBannerCn.ModuleName, subTitle: caseBannerEn.ModuleName, intro: lang==0?caseBannerCn.ModuleNamePlus:caseBannerEn.ModuleNamePlus}" /></baner>

		<loading v-show="!showCase||!showBanner"></loading>


		<div class="case_list"   v-show="showCase">
			<div class="title" v-if="state">
				<ul class="clear" ref="ullist" :class="{long:lang}">
					<li class="active" type-id='0' @click="clickFn($event,-1,0)"><span>{{lang==0?'全部':'All'}}</span></li>
					<li :type-id='item.CaseTypeId' v-for="(item,index) in caseList" @click="clickFn($event,index,item.CaseTypeId)">
						<span>{{ item.CaseTypeTitle }}</span>
					</li>
				</ul>
			</div>
			<swiper :options="swiperOption" class="title title1" v-else ref="mobile">
				<swiper-slide>全部</swiper-slide>
		    <swiper-slide v-for="(i,index) in caseList" :key="index">{{i.CaseTypeTitle}}</swiper-slide>
    		</swiper>
			<div class="cont">
				<loading v-show="!showDetail"></loading>
				<ul class="clear list" v-show='showDetail'>
					<li class="item" v-for="(item,index) in contentList" :style="'background-image:url('+baseUrl+'public/'+item.ThumbPicture+')'"><a :href="item.Url==''? 'javascript:;' : item.Url"></a></li>
				</ul>
			</div>
			<div v-show="!state" style="text-align: center;margin-bottom: 4rem;">
				<page :pageLength="pageLength" @changePage="getPage"/>
			</div>
		</div>
	</div>
</template>
<script>
import $ from 'jquery';
	export default{
		data(){
			return{
				baseUrl: baseUrl,
				state:true,
				showBanner:true,
				showLoading: false,
				showCase: false,
				showDetail:false,
				dark:false,
				page: '1',
				pageLength: 11,
				swiperIndex: 0,
				swiperOption: {
        pagination: '.swiper-pagination',
        slidesPerView: 5,
        spaceBetween: 0,
        slideToClickedSlide: true,
        preventLinksPropagation : true,
        centeredSlides: false,
        loop:false,
        simulateTouch : true,
         onTap: function(swiper){
        	this.swiperIndex=swiper.clickedIndex;
        }.bind(this)
				},
				caseBannerEn:{},
				caseBannerCn:{},
				caseList:{},
				contentList:{},
				lang:parseInt(localStorage['lang']),
				allLogo:{}
			}
		},
		methods: {
				show:function () {          //当浏览器大小变化时
			    if($(document).width()<=767){		//浏览器时下窗口文档的宽度
						this.state=false;
			    	}else if($(document).width()>767){
			    		this.state=true;
			    	}
			    },
			    getPage(msg){
					this.page = msg;
				},
				getBanner(){
					this.showBanner=false;
					this.$emit('isdark');
					this.$http.get(baseUrl+'public/json/case_header_en.json?time='+Date.parse(new Date())).then((response) => {
						this.caseBannerEn=response.body.content;
					});
					this.$http.get(baseUrl+'public/json/case_header.json?time='+Date.parse(new Date())).then((response) => {
						this.showBanner=true;
						this.caseBannerCn=response.body.content;
						this.$emit('isdark');
 					});
				},
				getList(){
					this.showCase=false;
					let file = '';
					if(localStorage['lang'] == 0){
						file = "case.json";
					}else{
						file = "case_en.json";
					}
					this.$http.get(baseUrl+'public/json/'+file+'?time='+Date.parse(new Date())).then((response) => {
						this.caseList=response.body.content;
						let resContent = this.caseList;
						let content = [];
						for(let i = 0; i< resContent.length;i++){
							for(let j = 0; j<resContent[i].caseinfo.length;j++){
								content.push({ ThumbPicture : resContent[i].caseinfo[j].ThumbPicture});
							}
						}

						this.contentList=content;
						this.allLogo = content;
						//console.log(typeof(this.contentList));
						this.showCase=true;
						this.showDetail=true;
					});
				},
				choose(obj) {
				},
				clickFn: function(event,index,type){
					//点击显示不同的案例列表
					let that=this;
					if($(this.$refs.ullist).children().eq(index+1).hasClass('active')){
						/*return false;*/
						this.previousRequest.abort();
						return false;
					}else{
						$(this.$refs.ullist).children().eq(index+1).addClass('active').siblings().removeClass('active');
						this.showDetail=false;
						let file = '';
						if(localStorage['lang'] == 0){
							file = "case.json";
						}else{
							file = "case_en.json";
						}
						this.$http.get(baseUrl+'public/json/'+file+'?time='+Date.parse(new Date()),{
							before(request){
								if (this.previousRequest) {
					        this.previousRequest.abort();
					      }
					      this.previousRequest = request;
							}
						}).then((response) => {
							let cont = response.body.content;
							if(parseInt(type) == 0){
								this.contentList = this.allLogo;
							}else{
								for(let i = 0; i< cont.length;i++){
									if(cont[i].CaseTypeId == parseInt(type)){
										this.contentList = cont[i].caseinfo
									}
								}
							}
							
							//this.contentList=response.body.content[parseInt(type)-1].caseinfo;
							this.showDetail=true;
						});
					}
				},
				getTitle() {
					/*this.$http.jsonp(baseUrl+'system_admin/saas_case/Case_Interface_GetContent.html?lang='+lang+'&pid=1&field=27&method=t&size=100').then((response) => {
						this.caseList=response.body.content;
					});*/
				}
			},

		created(){
			this.show();
			this.getBanner();
			this.getTitle();
			this.getList();
			//sessionStorage['route'] = this.$route.path;
		},
		mounted(){
			$(window).resize(this.show);

		},
		beforeCreate(){
			//将产品详情写入localStorage
				localStorage['solu']=0;
				localStorage['pro']=0;
				localStorage['news']=0;
		}
	};
</script>
<style lang="stylus" rel="stylesheet/stylus">
	@import 'case.css';
</style>
