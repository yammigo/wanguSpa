<style lang="less" scoped>
@basic: #0078f0;
	.search {
		position: absolute;
		top: 14.3rem; left:0; right: 0;
		width: 30rem;
		height: 3.3rem;
		margin: auto;
		
		input {
			width: 100%;
			height: 100%;
			border-radius: 1.65rem;
			padding-left: 1.65rem;
			padding-right: 5.5rem;
		}
		.icon-search {
			position: absolute;
			top: 0; bottom: 0; right: 1.6rem;
			margin: auto;
			background-image: url('../../../static/img/search2.png');
			background-size: contain;
			width: 1.5rem;
			height: 1.5rem;
			cursor: pointer; 
		}
		.icon-F {
			position: absolute;
			top: 0; bottom: 0; right: 4.2rem;
			margin: auto;
			background-image: url('../../../static/img/F.png');
			background-size: contain;
			width: .8rem;
			height: .8rem;
			cursor: pointer; 
		}
	}
	.search-callback {
		line-height: 4.8rem;
		font-size: 16px;
		color: @basic;
	}
	.container {
		width: 60rem;
		margin: auto;
	}
	.no {
		margin: 5rem auto 18.5rem;
		width: 23rem;
		height: 9.5rem;
		img {
			width: 100%;
			height: 100%;
		}
	}
	nav {
		height: 1.9rem;
		font-size: 16px;
		line-height: .8rem;
		border-bottom: 1px solid #ccc;

		li {
			float: left;
			padding: 0 1rem 1rem;
			color: #333;
			border-bottom: 2px solid rgba(0,0,0,0);
			margin-bottom: -2px;
			cursor: pointer;
			transition: all .5s;
			-webkit-transition: all .5s;
			-moz-transition: all .5s;
			-ms-transition: all .5s;
			-o-transition: all .5s;
			position:relative;
			&.active {
				cursor: default;
				color: @basic;
				border-bottom: 2px solid @basic;
			}
			span.icon{
				position:absolute;
				display: block;
				top: -8px;
				right: 0px;
				width:1rem;
				height: 1rem;
				background:#f00;
				border-radius:50%;
				color:#fff;
				text-align:center;
				line-height:1rem;
				font-size:12px;
			}
		}
	}
	.list-item {
		margin-top: 2.5rem;
		&+.list-item {
			margin-top: 1.8rem;
		}

		.list-title {
			font-size: 18px;
			line-height: .9rem;
			color: #333;
			.main-rt {
				float: right;
				font-size: 14px;
				color: #999;
				.iconfont {
					font-size: 12px;
				}
			}
		}
		.list-line {
			margin-top: .9rem;
			width: 2.3rem;
			height: 2px;
			background: @basic;
		}
		.list-content {
			box-sizing: content-box;
			margin-top: 1.1rem;
			font-size: 14px;
			height: .7rem;
			color: #666;
			padding-bottom: 1.8rem;
			border-bottom: .05rem solid #d9dadb;
			.main-lt {
				width: 42.7rem;
				white-space:nowrap; 
				text-overflow:ellipsis; 
				-o-text-overflow:ellipsis; 
				overflow: hidden;
			}
			.main-rt {
				float: right;
				color: @basic;
				a{
					display: block;
					width:100%;
					height: 100%;
					color:#0078f8;
				}
				img {
					width: .8rem;
					height: .5rem;
				}
			}
		}
	}
	.pages{
		margin-top:2.5rem;
		margin-bottom:10rem;
		text-align: right;
	}

@media screen and (max-width:765px) {
	.search {
		width: 29rem;
	}
	.container {
		width: 100%;
		padding: 0 1.5rem;
		
		.list-item {
			position: relative;
			.list-content {
				width: 100%;
				height: 4rem;
				padding-bottom: 3.3rem;
				.main-lt {
					white-space: inherit;
					width: 100%;
					line-height: 2rem;
					height: 100%;
				    position:relative;
				    overflow:hidden;
				}
				.main-lt:after {
				    content:"...";
				    font-weight:bold;
				    position:absolute;
				    bottom:0;
				    right:0;
				    padding:0 20px 1px 45px;
				    background:url('../../../static/img/text_more.png') repeat-y;
				}
			}
			.list-title .main-rt,
			.list-content .main-rt {
				position: absolute;
				bottom: 1.7rem;
			}
			.list-content .main-rt {
				right: 0;
			}
		}
	}
	.pages{
		text-align: center;
	}
}
</style>

<template>
	<div>
		<banner :options="{ src:'http://www.zhongqinsoft.com/zq_saas/public/images/2017-06-27/201706270941136808.jpg', title: '搜索结果', subTitle: 'SEARCH RESULTS', intro: ''}" />
		
		<div class="search">
			<input type="text" v-model="searchTxt">
			<i class="icon-search" @click="pageSearch"></i>
			<!-- <i class="icon-F" v-show="searchTxt!==''" @click="goSearch"></i> -->
		</div>
		<loading v-show='loading'></loading>
		<div class="search_box" v-show="!loading">
			<div class="search-callback container">共有 {{msgLength}} 条搜索结果。</div>
			<nav>
				<ul class="container">
					<li :class="state==1?'active':''"
					@click="state=1"
					>新闻 <span class="icon" v-show="newsList > 0">{{ newsList }}</span></li>
					<li :class="state==2?'active':''"
					@click="state=2"
					>解决方案 <span class="icon" v-show="planList > 0">{{ planList }}</span></li>
					<li :class="state==3?'active':''"
					@click="state=3"
					>产品与服务 <span class="icon" v-show="productList > 0">{{ productList }}</span></li>
				</ul>
			</nav>
			<div class="container" v-show="state==1">
				<div class="news_wrap" v-show='!newsloading'>
					<div class="no" v-if='newsShow'>
						<img src="../../../static/img/暂无数据.jpg" alt="">
					</div>
					<div class="wrap" v-else>
						<div class="list-item" v-for="i in resultNews">
							<div class="list-title">
								<span class="main-rt">
									<span class="iconfont icon-time"></span>
									{{i.Month}}/{{i.Day}} {{i.Year}}
								</span>
								{{ i.NewsTitle }}
							</div>
							<div class="list-line"></div>
							<div class="list-content">
								<div class="main-rt">
									<router-link :to="{path:'/newsDetail/'+i.NewsId}">查看详情 <img src="../../../static/img/right.png" alt=""></router-link>
								</div>
								<div class="main-lt">{{i.NewsContentShort}}</div>
							</div>
						</div>
					</div>
					<div class="container clear pages" style="" v-show="showNewspage&&newsPagelength>1">
						<!-- 传入一个总页数，定义一个getPage方法获取当前页数 -->
						<page :pageLength="newsPagelength" @changePage="getNewspage"/> 
					</div>
				</div>
				<loading v-show='newsloading'></loading>
			</div>
			<div class="container" v-show="state==2">
				<div class="plan_wrap" v-show='!planloading'>
					<div class="no" v-if='solutionShow'>
						<img src="../../../static/img/暂无数据.jpg" alt="">
					</div>
					<div class="wrap" v-else>
						<div class="list-item" v-for="i in resultSolution">
							<div class="list-title">
								{{ i.PlanTitle }}
							</div>
							<div class="list-line"></div>
							<div class="list-content">
								<div class="main-rt">
									<router-link :to="{path:'/solutionDetail/'+i.PlanId}">查看详情 <img src="../../../static/img/right.png" alt=""></router-link>
									
								</div>
								<div class="main-lt">{{ i.PlanTitlePlus }}</div>
							</div>
						</div>
					</div>
					<div class="container clear pages" style="" v-show="getPlanpage&&solutionPagelenth>1">
						<!-- 传入一个总页数，定义一个getPage方法获取当前页数 -->
						<page :pageLength="solutionPagelenth" @changePage="getPlanpage"/> 
					</div>
				</div>
				<loading v-show='planloading'></loading>	
			</div>
			<div class="container" v-show="state==3">
				<div class="product_wrap" v-show='!productloading'>
					<div class="no" v-if='productShow'>
						<img src="../../../static/img/暂无数据.jpg" alt="">
					</div>
					<div class="wrap" v-else>
						<div class="list-item" v-for="i in resultProduct">
							<div class="list-title">
								{{i.ProductTitle}}
							</div>
							<div class="list-line"></div>
							<div class="list-content">
								<div class="main-rt">
									<router-link :to="{path:'/solutionDetail/'+i.ProductId}">查看详情 <img src="../../../static/img/right.png" alt=""></router-link>
								</div>
								<div class="main-lt">{{ i.ProductTitlePlus }}</div>
							</div>
						</div>
					</div>
					<div class="container clear pages" style="" v-show="showProductpage&&productPagelenth>1">
						<!-- 传入一个总页数，定义一个getPage方法获取当前页数 -->
						<page :pageLength="productPagelenth" @changePage="getProductpage"/> 
					</div>
				</div>
				<loading v-show='productloading'></loading>		
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		data () {
			return {
				searchTxt: '',
				state: 1,
				page: '',
				newsPage:1,
				solutionPage:1,
				productPage:1,
				showNewspage:true,
				showSolutionpage:true,
				showProductpage:true,
				pageLength: 11,
				newsPagelength:0,
				solutionPagelenth:0,
				productPagelenth:0,
				keyword:'',
				newsShow:false,
				solutionShow:false,
				productShow:false,
				resultNews:'',
				resultSolution:'',
				resultProduct:'',
				pageVal:'',
				msgLength:0,
				loading: true,
				newsloading:false,
				planloading:false,
				productloading:false,
				newsList:0,
				planList:0,
				productList:0
			}
		},
		watch: {
			"$route": "search"
		},
		methods: {
			getNewspage(msg){
				this.newsloading=true;
				this.planloading=true;
				this.productloading=true;
				this.newsPage = msg;
				/*this.getNeswResult();*/
				this.getResult();
			},
			getPlanpage(msg){
				this.newsloading=true;
				this.planloading=true;
				this.productloading=true;
				this.solutionPage = msg;
				/*this.getPlanResult();*/
				this.getResult();
			},
			getProductpage(msg){
				this.newsloading=true;
				this.planloading=true;
				this.productloading=true;
				this.productPage = msg;
				/*this.getProductResult();*/
				this.getResult();

			},
			getUrl(){
				/*var len = window.location.href.split('/').length;*/
				this.keyword=this.$route.params.id;
			},
			getTotalpage(){
				this.msgLength=0;
				//获取所有页码
				this.$http.jsonp(baseUrl+'system_admin/saas_news/News_Interface_GetContent.html?pid=1&method=m&keyword='+this.keyword).then((response) => {
					this.msgLength+=response.body.content.length;
					this.newsList=response.body.content.length;
				});
				this.$http.jsonp(baseUrl+'system_admin/saas_plan/Plan_Interface_GetContent.html?pid=1&method=m&keyword='+this.keyword).then((response) => {
					this.msgLength+=response.body.content.length;
					this.planList=response.body.content.length;
				});
				this.$http.jsonp(baseUrl+'system_admin/saas_product/Product_Interface_GetContent.html?pid=1&method=m&size=6&keyword='+this.keyword).then((response) => {
					this.msgLength+=response.body.content.length;
					this.productList=response.body.content.length;

				});
			},
			getResult() {
				
				this.$http.jsonp(baseUrl+'system_admin/saas_news/News_Interface_GetContent.html?pid=1&method=m&size=6&keyword='+this.keyword+'&page='+this.newsPage).then((response) => {
					if(response.body.content.length > 0){
						this.newsShow=false;
					}else{
						this.newsShow=true;
					}
					this.resultNews=response.body.content;
					this.newsPagelength=response.body.pages;
					this.newsloading=false;
				});
				this.$http.jsonp(baseUrl+'system_admin/saas_plan/Plan_Interface_GetContent.html?pid=1&method=m&size=6&keyword='+this.keyword+'&page='+this.solutionPage).then((response) => {
					
					if(response.body.content.length > 0){
						this.solutionShow=false;
					}else{
						this.solutionShow=true;
					}
					this.resultSolution=response.body.content;
					this.solutionPagelenth=response.body.pages;
					this.planloading=false;
				});
				this.$http.jsonp(baseUrl+'system_admin/saas_product/Product_Interface_GetContent.html?pid=1&method=m&size=6&keyword='+this.keyword+'&page='+this.productPage).then((response) => {
					if(response.body.content.length > 0){
						this.productShow=false;
					}else{
						this.productShow=true;
					}
					this.resultProduct=response.body.content;
					this.productPagelenth=response.body.pages;
					this.loading=false;
					this.getActive();
				});

			},
			pageSearch(){
				if(this.searchTxt.indexOf('%')!=-1){
					alert("输入的内容不能含有%，请重新输入");
					this.searchTxt="";
				}else{
					this.$router.push({path:'/search/'+this.searchTxt});
				}
			},
			search(){
				this.loading=true;
				this.getUrl();
				this.getResult();
				this.getTotalpage();
			},
			goSearch(){

			},
			getActive(){
				if(this.newsList==0 && this.planList==0 && this.productList==0){
					$('div.search_box nav ul.container li').eq(0).trigger('click');
				}else if(this.newsList==0 && this.planList>0){
					$('div.search_box nav ul.container li').eq(1).trigger('click');
				}else if(this.newsList==0 && this.planList==0){
					$('div.search_box nav ul.container li').eq(2).trigger('click');
				}
			}
		},
		created() {
			this.getUrl();
			this.getResult();
			this.getTotalpage();
		},
		beforeCreate(){
			//将产品详情写入localStorage
				localStorage['solu']=0;
				localStorage['pro']=0;
		}
	}
</script>