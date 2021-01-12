<template>
	<div class="proApp">
		<banner :options="{ src:'../../../static/img/product/banner.png', title: '产品与服务', subTitle: '/ PRODUCT AND SERVICES', intro: '在这些行业，我们有领先的解决方案与实施经验助力企业发展，实现HR管理战略的提升'}" />
		<div class="protit" v-show="state">
			<router-link to='/'>首页</router-link><span>&gt;</span>
			<router-link to='/product'>产品与服务</router-link><span>&gt;</span>
			<router-link to='/proDetail'><span>个人端APP</span></router-link>
		</div>
		<div class="container">
			<div class="title">
				<h4>万万客直聘</h4>
				<p>国内首家助力“人才自我管理与成长”的APP</p>
			</div>
			<div class="part01">
				<div class="title">
					<h4>产品介绍</h4>
					<span class="line"></span>
				</div>
				<p class="wenzi">从人才测评、人才估值、胜任力匹配、薪酬报告、职业发展到创业分析！从初入职场小白到成长为职场牛人的最完整人才管理服务！</p>
				<ul>
					<li>
						<div>50+</div>
						<p>覆盖全国核心城市</p>
					</li>
					<li>
						<div>百万条</div>
						<p>日更新职位</p>
					</li>
					<li>
						<div>八大</div>
						<p>应用模块</p>
					</li>
				</ul>
			</div>
			<div class="part02">
				<div class="title">
					<h4>八大应用模块</h4>
					<span class="line"></span>
				</div>
				<div class="container">
					<div class="item" v-for="(item,index) in product" :class="{ 'active' : scroll >= (index * 250 +580)&&scroll <= (index * 250 +1300) }">
						<div class="item_main clear">
							<div class="pic"><img :src="''+item.img+''" alt=""></div>
							<div class="content">
								<p class="tit">{{item.name}}</p>
								<p>{{item.message}}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="part03">
				<div class="title">
					<h4>下载APP</h4>
					<span class="line"></span>
				</div>
				<div class="container clear">
					<div class="code">
						<div class="pic">
							<img src="./../../../static/img/product/qqewm.jpg" alt="">
						</div>
						<p>
							<router-link to="/">扫描二维码</router-link> <router-link to="/">下载APP</router-link>
						</p>
					</div>
					<div class="phone">
						<div class="item">
							<div><img src="./../../../static/img/product/anzhuo.jpg"></div>
						</div>
						<div class="item">
							<div><img src="./../../../static/img/product/Apple.jpg"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import $ from 'jquery';
	export default{
		data(){
			return{
				state:true,
				scroll: "",
				product:[
					{name:"人才测评",message:"基于大量商用实践数据分析和高绩效领导力模型，针对性格、驱动力、学习力、技能特长、行为表现和心理特质等进行评估。从潜力、能力两个方面切入，通过科学、客观、标准的系统评价，从职场角度更加深刻、全面的认识自己。",img:"./../../../static/img/product/modal01.jpg"},
					{name:"人才估值",message:"来测试，看看您是否符合“牛人指数”！-基于全网千万简历数据，使用数据挖掘算法提取关键维度。-基于用户互联网络行为数据，结合北大心理学系研究建立棱镜模型，根据您的基本信息、职业信息、目前职位等进行指数测算和薪资预测！",img:"./../../../static/img/product/modal02.jpg"},
					{name:"能力鉴定",message:"实现从能力鉴定、胜任力学习到职位推荐的全链条服务！！！-输入您想要从事的职业定位，-鉴定职位需要的胜任力元素， -提供全方位胜任力培训课堂，-同时推荐最“Hot”职位信息，明确职业问题，清晰职位定位，探索职业可能，获取现在及将来工作所需的技能、知识。",img:"./../../../static/img/product/modal03.jpg"},
					{name:"薪酬查询",message:"想了解您的薪酬市场估值，想快速找到心仪职位吗？轻松查询不同地区、不同职位的薪酬数据，以最专业、最详实、最易用的方式呈现给您，根据你期望的的薪酬及职能，推荐匹配的职位信息。",img:"./../../../static/img/product/modal04.jpg"},
					{name:"创业分析",message:"创业已经成为社会化的浪潮，无数人投入其中淘金，但是，在激情创业之前创业者总会迷茫。创业分析---帮您解决创业前的烦恼根据您的基本信息，教育经历，专业技能等为您独家分析创业成功率，减少您创业的风险。",img:"./../../../static/img/product/modal05.jpg"},
					{name:"职业发展",message:"是否在职场打拼多年，疲于工作的海洋却看不到发展方向？查看自已的职业发展路径图，针对职业发展提前做好规划及准备，定位未来职业发展方向， 做自己人生的职业规划师！",img:"./../../../static/img/product/modal06.jpg"},
					{name:"视频简介",message:"还在苦恼文字的表达能力有限？担心HR难以从文字简历中看到亮点？最受HR青睐的视频简历来啦！！更直接展现您的职业形象及职业表述，内容丰富形象，更展现个人魅力，相信我，HR一天到晚看那些枯燥的文字简历，突然收到一份视频简历，一定会眼前一亮。",img:"./../../../static/img/product/modal07.jpg"},
					{name:"简历管理",message:"在这里，您可以创建文本简历，让文字描绘出您的精彩，也可以选择视频简历，在镜头面前尽情展现个人魅力。当然，您如果不想浪费时间创建简历，您也可以选择将51job和智联招聘的简历同步过来，不必担心麻烦，只需一键，轻松搞定。",img:"./../../../static/img/product/modal08.jpg"}
				]
			}
		},
		methods: {
				show:function () {          //当浏览器大小变化时
			    if($(document.body).width()<=767){		//浏览器时下窗口文档的宽度
						this.state=false;
			    	}else if($(document.body).width()>767){
			    		this.state=true;
			    	}
			    },
			    oScroll(){
					this.scroll=document.body.scrollTop;
					console.log(this.scroll);
				}
			},

		created(){
			},
			mounted(){
				$(window).resize(this.show);
				window.addEventListener('scroll', this.oScroll);
			}
	};
</script>
<style>
	@import 'product_app.css';
</style>
