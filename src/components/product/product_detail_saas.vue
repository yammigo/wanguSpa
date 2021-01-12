<style lang="less" scoped>
@basic: #0078f0;
	.container {
		width: 67.5rem;
		max-width: 90%;
		margin: auto;
		&:after {
			content: '';
			display: block;
			clear: both;
		}
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
	.content-title {
		text-align: center;
		padding-top: 3rem;
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
	.content {
		background: #f7f9fa;
		padding-bottom: 2.8rem;
		.img {
			float: left;
			width: 27.5rem;
			max-width: 100%;
			margin-right: 5.7rem;
			img {
				width: 100%;
			}
		}
		.content-intro {
			font-size: 14px;
			color: #666;
			margin-top: 7rem;
			line-height: 1.6rem;
		}
	}
	.content-2 {
		.card-group {
			width: 53rem;
			margin: 0 auto 4rem;
			.card {
				float: left;
				width: 50%;
				padding: 0 2.4rem;
				i {
					font-size: 3rem;
					text-align: center;
					color: @basic;
					display: block;
					margin-bottom: 2.5rem;
				}
				.card-title {
					font-size: 22px;
					color: @basic;
					text-align: center;
					margin-bottom: 1.5rem;
				}
				.card-content {
					font-size: 14px;
					color: #666;
					line-height: 1.7rem;
					text-align: center;
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
		background: #f7f9fa;
		padding-bottom: 4rem;
		.box {
			position: relative;
			width: 100%;
			height: 29.5rem;
			.box-bg {
				position: absolute;
				top: 0; bottom: 0;
				left: 0; right: 0;
				height: 100%;
				margin: auto;
			}
			.item {
				position: absolute;
				top: 0; bottom: 0;
				left: 0; right: 0;
				margin: auto;
				width: 21rem;
				.item-img {
					position: absolute;
					width: 1.7rem;
					img {
						width: 100%;
					}
				}
				.item-title {
					color: @basic;
					font-size: 20px;
					line-height: 1.8rem;
					margin-bottom: 1.15rem;
				}
				.item-content {
					font-size: 14px;
					color: #333;
					line-height: 1.4rem;
				}
				&.item-1,
				&.item-2 { 
					text-align: right; 
					text-indent: 2em;
					.item-img{
						right: -1.3rem;
					}
				}
				&.item-1 {
					top: 4rem;
					right: 46rem;
				}
				&.item-2 {
					top: 15rem;
					right: 43.2rem;
				}
				&.item-3,
				&.item-4,
				&.item-5 { 
					.item-img{
						left: -3.1rem;
					}
				}
				&.item-3 {
					top: 2rem;
					left: 42rem;
				}
				&.item-4 {
					top: 10.5rem;
					left: 46rem;
				}
				&.item-5 {
					top: 18.8rem;
					left: 38rem;
				}
			}
		}
	}
@media screen and (max-width: 765px) {
	.tab { font-size: .7rem; }
	.title { font-size: 1.7rem; }
	.intro { font-size: .9rem; }
	.content-title { font-size: 1.5rem; }
	.content {
		.img {
			margin-bottom: 1rem;
		}
		.content-intro { font-size: .7rem; }
	}
	.content-2 {
		.card-group {
			width: 100%;
			.card {
				padding: 0 1rem;
				.card-title { font-size: 1.1rem; }
				.card-content { font-size: .7rem; }
			}
		}
	}
	.content-3 {
		.box {
			height: auto;
			.box-bg { display: none; }
			.item {
				position: static;
				width: 100%;
				margin-top: 1.5rem;
				padding: 1.5rem;
				padding-left: 4rem;
				border: 1px solid #d9dadb;
				background: #fff;

				.item-title { font-size: 1rem; }
				.item-content { font-size: .7rem; }
				&.item-1,&.item-2 { text-align: left; text-indent: 0;}

				&.item-1,
				&.item-2,
				&.item-3,
				&.item-4,
				&.item-5 {
					.item-img {
						left: 1rem;
					}
				}
			}
		}
	}
}
</style>

<template>
	<div>
		<banner :options="{ src:'../../../static/img/product/banner.png', title: '产品与服务', subTitle: '/ PRODUCT AND SERVICES', intro: '在这些行业，我们有领先的解决方案与实施经验助力企业发展，实现HR管理战略的提升'}" />
		<div class="tab container">
			<router-link class="tab-hasNext" to="/">首页</router-link><router-link class="tab-hasNext" to="/product">产品与服务</router-link><span>HR SaaS</span>
		</div>
		<div class="title">HR SAAS</div>
		<div class="intro container">基于云服务的人才资源管理在线应用平台，助力中小企业实现互联网+下的HR管理变革。</div>
		<div class="content">
			<div class="container">
				<div class="content-title">产品介绍</div>
				<div class="img">
					<img src="../../../static/img/iMac.png">
				</div>
				<div class="content-intro">Vcloud 是万古科技推出的基于云服务的人才资源管理在线应用平台，万古提供价格合理、易于部署、快速上线、全面集成的人力资源管理服务，强大分析功能和基于互联网的在线自助服务帮助中小企业随时随地获取人力资源的总量、分布和发展趋势分析，从而有效支持企业人才资本管理的变革，全面提升组织绩效和员工满意度。</div>
			</div>
		</div>
		<div class="content-2">
			<div class="content-title">产品特点</div>
			<div class="card-group">
				<div class="card">
					<i class="iconfont icon-linianpingtai"></i>
					<div class="card-title">创新的系统设计理念</div>
					<div class="card-content">以人才管理为基础，结合人事、薪酬福利、员工假期管理以及基于互联网的员工自助服务等多方面综合的管控，为企业搭建创新的人力资源管理信息化共享服务平台。</div>
				</div>
				<div class="card">
					<i class="iconfont icon-hulianwangchanpin"></i>
					<div class="card-title">高度互联网化</div>
					<div class="card-content">基于云服务的系统部署平台，提供个性化应用软件订购服务，提供软件系统数据的实时备份存储，用户按照定购的服务多少和时间长短支付费用，无需考虑购买软件以及软件的维护，也无需担心数据安全及其他风险。</div>
				</div>
			</div>
		</div>
		<div class="content-3">
			<div class="container">
				<div class="content-title">SAAS带来的改变</div>
				<div class="box">
					<img class="box-bg" src="../../../static/img/矢量智能对象_bg.png">
					<div class="item item-1">
						<div class="item-img">
							<img src="../../../static/img/矢量智能对象_01.png">
						</div>
						<div class="item-title">基于云平台有效减低成本</div>
						<div class="item-content">没有折旧、不占用营运资金、实现协同，没有一次性投资，企业无需再投移动办公资硬、软件设备，也不需要配备IT专业人员。极大地降低了投资、运营和维护成本。</div>
					</div>
					<div class="item item-2">
						<div class="item-img">
							<img src="../../../static/img/矢量智能对象_02.png">
						</div>
						<div class="item-title">基于云平台有效减低成本</div>
						<div class="item-content">没有折旧、不占用营运资金、实现协同，没有一次性投资，企业无需再投移动办公资硬、软件设备，也不需要配备IT专业人员。极大地降低了投资、运营和维护成本。</div>
					</div>
					<div class="item item-3">
						<div class="item-img">
							<img src="../../../static/img/矢量智能对象_03.png">
						</div>
						<div class="item-title">基于云平台有效减低成本</div>
						<div class="item-content">没有折旧、不占用营运资金、实现协同，没有一次性投资，企业无需再投移动办公资硬、软件设备，也不需要配备IT专业人员。</div>
					</div>
					<div class="item item-4">
						<div class="item-img">
							<img src="../../../static/img/矢量智能对象_04.png">
						</div>
						<div class="item-title">基于云平台有效减低成本</div>
						<div class="item-content">没有折旧、不占用营运资金、实现协同，没有一次性投资，企业无需再投移动办公资硬、软件设备，也不需要配备IT专业人员。</div>
					</div>
					<div class="item item-5">
						<div class="item-img">
							<img src="../../../static/img/矢量智能对象_05.png">
						</div>
						<div class="item-title">基于云平台有效减低成本</div>
						<div class="item-content">没有折旧、不占用营运资金、实现协同，没有一次性投资，企业无需再投移动办公资硬、软件设备，也不需要配备IT专业人员。</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	
</script>