<style lang="less" scoped>
@basic: #0078f0;
	.basic {
		color: @basic;
	}
	.container {
		width: 67.5rem;
		max-width: 90%;
		margin: auto;
	}
	.tab {
		line-height: 3.7rem;
		border-bottom: 1px solid #d9dadb;
		font-size: 14px;
		color: #333;
		.tab-hasNext {
			color: @basic;
			&:after {
				content: " > ";
				color: #333;
			}
		}
	}
	.title {
		padding-top: 2.5rem;
		font-size: 34px;
		line-height: 1.7rem;
		color: @basic;
		margin-bottom: 1.5rem;
		text-align: center;
	}
	.intro {
		font-size: 18px;
		color: #666;
		margin-bottom: 3rem;
		text-align: center;
	}
	.content {
		padding-bottom: 2.15rem;
		img {
			float: right;
			width: 31.6rem;
			max-width: 100%;
		}
		.sub-title {
			padding-left: 1rem;
			border-left: 3px solid @basic;
			font-size: 24px;
			color: #333;
			margin-bottom: 1.5rem;
		}
		.ul-title {
			margin-bottom: 1.6rem;
			font-size: 20px;
			line-height: 1.4rem;
			color: @basic;
			position: relative;
			padding-left: 2.5rem;
			.iconfont {
				position: absolute;
				top: -.1rem; left: 0;
				font-size: 24px;
			}
		}
		ul {
			margin-bottom: 2.25rem;
			padding-left: 2.5rem;
		}
		li {
			position: relative;
			padding-left: .4rem;
			font-size: 14px;
			margin: 1.1rem 0;
			color: #666;
			line-height: 1.8rem;
			&:before {
				content: '';
				position: absolute;
				top: .8rem;
				left: -.4rem;
				width: .15rem;
				height: .15rem;
				background: #04bfb6;
			}
		}
	}
	.content-title {
		text-align: center;
		margin-bottom: 3rem;
		font-size: 30px;
		color: #333;
		&:after {
			content: '';
			margin: 1.2rem auto 0;
			display: block;
			width: 3.3rem;
			height: 3px;
			background: @basic;
			margin-bottom: 3rem;
		}
	}
	.content-2 {
		padding-top: 2.5rem;
		background: #f7f9fa;
		
		.card-group {
			.card {
				display: inline-block;
				vertical-align: top;
				padding: 0 2.5rem;
				width: 25%;
				text-align: center;
				.iconfont {
					display: block;
					font-size: 60px;
					margin-bottom: 1.6rem;
					color: #7a8a99;
				}
				.card-title {
					font-size: 20px;
					color: @basic;
					margin-bottom: 1.25rem;
				}
				.card-content {
					font-size: 14px;
					color: #666;
					line-height: 2em;
					margin-bottom: 3rem;
				}
			}
			&:after {
				content: '';
				display: block;
				clear: both;
			}
		}
	}
	.content-3 {
		padding-top: 3rem;
		margin-bottom: 6rem;
		.content-intro {
			color: #666;
			font-size: 14px;
			text-align: center;
			p {
				line-height: 2em;
			}
			margin-bottom: 3rem;
		}
		.img-group {
			.img {
				position: relative;
				vertical-align: middle;
				line-height: 11.25rem;
				height: 11.25rem;
				border: .5rem solid rgba(0,0,0,0);
				img {
					position: absolute;
					top: 0; bottom: 0;
					left: 0; right: 0;
					margin: auto;
					max-width: 100%;
					max-height: 100%;
				}
			}
		}
	}
	@media screen and (max-width:765px) {
		.tab { font-size: .7rem; }
		.title { font-size: 1.7rem; }
		.intro { font-size: .9rem; }
		.content {
			img {
				float: none;
				margin-bottom: 1rem;
			}
			.sub-title { font-size: 1.2rem; }
			.ul-title { font-size: 1rem; }
			li { font-size: .7rem; }
		}
		.content-title { font-size: 1.5rem; }
		.content-2 {
			.card-group {
				.card {
					padding: 0 1rem;
					width: 50%;
					.iconfont { font-size: 3rem; }
					.card-title { font-size: 1rem; }
					.card-content { font-size: .7rem; }
				}
			}
		}
		.content-3 {
			.content-intro { font-size: .7rem; }
		}
	}
</style>

<template>
	<div>
		<banner :options="{ src:'../../../static/img/product/banner.png', title: '产品与服务', subTitle: '/ PRODUCT AND SERVICES', intro: '在这些行业，我们有领先的解决方案与实施经验助力企业发展，实现HR管理战略的提升'}" />

		<div class="tab container">
			<router-link class="tab-hasNext" to="/">首页</router-link><router-link class="tab-hasNext" to="/product">产品与服务</router-link><span>背调服务</span>
		</div>
		<div class="title">万客在线极速背调</div>
		<div class="intro">助力企业高效屏蔽用人风险，HR身边的拆弹专家</div>
		<div class="content container">
			<img src="../../../static/img/shipin_pic.jpg">
			<div class="sub-title">产品特点</div>
			<div class="ul-title"><i class="iconfont icon-shipinhuizhen"></i><span>高清云会议室－最优成本的高清沟通</span></div>
			<ul>
				<li>全球性能领先、令人过目不忘的高清云视频会议室</li>
				<li>电脑、PAD、手机多终端免费安装软件即可参与视频会议</li>
				<li>电脑、PAD、手机多终端免费安装软件即可参与视频会议</li>
			</ul>
			<div class="ul-title"><i class="iconfont icon-caozuojiandan1"></i><span>最全面的终端设备支持</span></div>
			<ul>
				<li>自有设备免费安装ZOOM云视讯软件，进入高清云会议室或与X系列高清终端互联</li>
			</ul>
		</div>
		<div class="content-2">
			<div class="container">
				<div class="content-title">八大性能 业界领先</div>
				<div class="card-group">
					<div class="card">
						<i class="iconfont icon-ziyuan1"></i>
						<div class="card-title">高清</div>
						<div class="card-content">1080P高清画质、高清语音、高清视频实时录制，绝无马赛克1080P高清画质、高清语音、高清视频实时录制，绝无马赛克</div>
					</div><div class="card">
						<i class="iconfont icon-ziyuan1"></i>
						<div class="card-title">高清</div>
						<div class="card-content">1080P高清画质、高清语音、高清视频实时录制，绝无马赛克</div>
					</div><div class="card">
						<i class="iconfont icon-ziyuan1"></i>
						<div class="card-title">高清</div>
						<div class="card-content">1080P高清画质、高清语音、高清视频实时录制，绝无马赛克</div>
					</div><div class="card">
						<i class="iconfont icon-ziyuan1"></i>
						<div class="card-title">高清</div>
						<div class="card-content">1080P高清画质、高清语音、高清视频实时录制，绝无马赛克</div>
					</div><div class="card">
						<i class="iconfont icon-ziyuan1"></i>
						<div class="card-title">高清</div>
						<div class="card-content">1080P高清画质、高清语音、高清视频实时录制，绝无马赛克</div>
					</div><div class="card">
						<i class="iconfont icon-ziyuan1"></i>
						<div class="card-title">高清</div>
						<div class="card-content">1080P高清画质、高清语音、高清视频实时录制，绝无马赛克</div>
					</div><div class="card">
						<i class="iconfont icon-ziyuan1"></i>
						<div class="card-title">高清</div>
						<div class="card-content">1080P高清画质、高清语音、高清视频实时录制，绝无马赛克</div>
					</div><div class="card">
						<i class="iconfont icon-ziyuan1"></i>
						<div class="card-title">高清</div>
						<div class="card-content">1080P高清画质、高清语音、高清视频实时录制，绝无马赛克</div>
					</div>
				</div>
			</div>
		</div>
		<div class="content-3 container">
			<div class="content-title">获得奖项</div>
			<div class="content-intro">
				<p>Zoom Viedo Communications 位于美国硅谷，由WebEX创始人及核心工程师创立，并由李嘉诚及多家硅谷顶级风投战略投资，是高清云视频会议系统的世界级领先软件厂商。</p>
				<p>自2011年以来，Zoom产品在美国率先引领了推翻以宝利通和思科为代表的上一代视频会议系统的革命。</p>
			</div>
			 <swiper class="img-group" :options="swiperOption">
		        <swiper-slide class="img"><img src="../../../static/img/jx_01.jpg" alt=""></swiper-slide>
		        <swiper-slide class="img"><img src="../../../static/img/jx_02.jpg" alt=""></swiper-slide>
		        <swiper-slide class="img"><img src="../../../static/img/jx_03.jpg" alt=""></swiper-slide>
		        <swiper-slide class="img"><img src="../../../static/img/jx_04.jpg" alt=""></swiper-slide>
		        <swiper-slide class="img"><img src="../../../static/img/jx_05.jpg" alt=""></swiper-slide>
		        <swiper-slide class="img"><img src="../../../static/img/jx_06.jpg" alt=""></swiper-slide>
		        <swiper-slide class="img"><img src="../../../static/img/jx_01.jpg" alt=""></swiper-slide>
		        <swiper-slide class="img"><img src="../../../static/img/jx_02.jpg" alt=""></swiper-slide>
		        <swiper-slide class="img"><img src="../../../static/img/jx_03.jpg" alt=""></swiper-slide>
		      </swiper>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				swiperOption: {
				  autoplay: 2000,
				  autoplayDisableOnInteraction: false,
				  loop: true,
		          slidesPerView: 5,
		          spaceBetween: 30,
		          breakpoints: {
		            765: {
		              slidesPerView: 2,
		              spaceBetween: 30
		            }
		          }
				}
			}
		}
	}
</script>