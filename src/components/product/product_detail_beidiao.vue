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
		.sub-title {
			padding-left: 1rem;
			border-left: 3px solid @basic;
			font-size: 24px;
			color: #333;
			margin-bottom: 1.5rem;
		}
		.text {
			font-size: 14px;
			color: #666;
			line-height: 1.5rem;
			margin: -.4rem 0 2.6rem;
		}
		.img {
			float: right;
			width: 31.3rem;
			max-width: 100%;
			height: 26rem;
			background: url('../../../static/img/矢量智能对象.jpg') no-repeat;
			background-size: contain;
		}
		.img-group{
			margin: 0 -3.125rem 2.75rem;
			.item {
				float: left;
				width: 8.5rem;
				text-align: center;
				font-size: 14px;
				color: #666;
				margin: 0 3.125rem;
				img {
					display: block;
					width: 2.5rem;
					height: 2.5rem;
					margin: 3rem auto 1.5rem;
				}
				p {
					line-height: 1.5rem;
					font-size: 14px;
					color: #666;
				}
			}
			&:after {
				content: '';
				display: block;
				clear: both;
			}
		}
		.card-group {
			margin: -.75rem -1.25rem;
			padding-top: 1.5rem;
			padding-bottom: 3.25rem;
			&:after {
				content: '';
				display: block;
				clear: both;
			}
		}
		.card {
			float: left;
			margin: .75rem 1.25rem;
			width: 32.5rem;
			height: 10rem;
			background: #f7faf9;
			img {
				float: left;
				margin: 3rem 4.5rem 3rem 6rem;
				width: 3.7rem;
				height: 4rem;
			}
			.card-title {
				padding-top: 2rem;
				font-size: 22px;
				line-height: 1.1rem;
				color: @basic;
			}
			.card-content {
				padding-top: 1rem;
				margin: -.35rem 0;
				font-size: 14px;
				color: #666;
				line-height: 1.4rem;
			}
			.tips {
				padding-top: 1rem;
				.tip {
					float: left;
					margin-right: .6rem;
					font-size: 14px;
					&:before {
						content: '';
						display: inline-block;
						vertical-align: middle;
						width: .2rem;
						height: .2rem;
						border-radius: 50%;
						margin-right: .3rem;
					}
					&:nth-child(1) {
						color: @basic;
						&:before {
							background: @basic;
						}
					}
					&:nth-child(2) {
						color: #01beb5;
						&:before {
							background: #01beb5;
						}
					}
					&:nth-child(3) {
						color: #e79000;
						&:before {
							background: #e79000;
						}
					}
				}
				&:after {
					content: '';
					display: block;
					clear: both;
				}
			}
		}
	}
@media screen and (max-width:765px) {
	.tab {
		font-size: .7rem;
	}
	.title {
		font-size: 1.7rem;
	}
	.intro {
		font-size: .9rem;
	}
	.content {
		.sub-title {
			font-size: 1.2rem;
		}
		.text {
			font-size: .7rem;
		}
		.img {
			float: none;
		}
		.img-group {
			margin-left: 0;
			margin-right: 0;
			.item {
				float: none;
				display: inline-block;
				margin: 0;
				padding: 0 5%;
				width: 50%;
				vertical-align: top;
				p {
					font-size: .7rem;
				}
			}
		}
		.card {
			position: relative;
			width: 90%;
			margin-left: 5%;
			margin-right: 5%;
			padding-left: 43%;
			img {
				position: absolute;
				top: 0; bottom: 0;
				left: 18%; 
				margin: auto;
			}
			.card-title {
				font-size: 1.1rem;
			}
			.card-content {
				font-size: .7rem;
			}
			.tips {
				.tip {
					font-size: .7rem;
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
			<router-link class="tab-hasNext" to="/">首页</router-link><router-link class="tab-hasNext" to="/product">产品与服务</router-link><span>背调服务</span>
		</div>
		<div class="title">万客在线极速背调</div>
		<div class="intro">助力企业高效屏蔽用人风险，HR身边的拆弹专家</div>
		<div class="content container">
			<div class="img"></div>
			<div class="sub-title"><span class="basic">万古科技</span><span> - 您身边的拆弹专家</span></div>
			<div class="text">
				<p>雇员本应是公司最重要的财富–但非诚信员工，更像是隐藏的定时炸弹，可能会对企业带来损失和重创。</p>
			</div>
			<div class="sub-title"><span>我们的全部精力都将用来保障您企业的利益</span></div>
			<div class="text">
				<p>万客背调服务内容：身份信息核实、学历信息检验（国内/外）、民事诉讼/犯罪记录、法院失信记录、航空记录查询、P2P行业黑名单 、互联网数据风险评估、腾讯QQ、网络行为数据分析、消费数据分析、在逃人员查询、被调人简历下载。</p>
			</div>
			<div class="sub-title"><span>为什么要选择</span><span class="basic">万客背调服务</span>？</div>
			<div class="text">
				<p>提供大数据员工背景调查服务产品，充分运用大数据模型，提供全方位的人才获取风险控制方案，帮助您做出更快、更精准的人事决策。</p>
				<p>联合权威机构，服务大中型企业客户，在线背调领域里的大数据专家。</p>
				<p>依靠运营商、征信机构、教育部以及相关的社交信息形成全网大数据，几秒钟之内生成一份客观、真实的背景调查报告，奠定了万客背调系统的四大优势：速度快，价格低，结果准，数据全。</p>
			</div>
			<div class="sub-title"><span class="basic">万客背调</span><span>能带给您什么？</span></div>
			<div class="img-group">
				<div class="item">
					<img src="../../../static/img/icon_succ.jpg">
					<p>助力企业降低在公司资产、核心技术、劳动仲裁、企业声誉等方面的潜在风险。助力企业降低在公司资产、核心技术、劳动仲裁、企业声誉等方面的潜在风险。</p>
				</div><div class="item">
					<img src="../../../static/img/icon_succ.jpg">
					<p>针对简历内容去伪存真，了解应聘者诚信背景，避免为企业造成不必要的损失。</p>
				</div><div class="item">
					<img src="../../../static/img/icon_succ.jpg">
					<p>针对简历内容去伪存真，了解应聘者诚信背景，避免为企业造成不必要的损失。</p>
				</div><div class="item">
					<img src="../../../static/img/icon_succ.jpg">
					<p>针对简历内容去伪存真，了解应聘者诚信背景，避免为企业造成不必要的损失。</p>
				</div><div class="item">
					<img src="../../../static/img/icon_succ.jpg">
					<p>针对简历内容去伪存真，了解应聘者诚信背景，避免为企业造成不必要的损失。</p>
				</div>
			</div>
			<div class="sub-title"><span>为什么要对HR独立线下做背景调查Say No？</span></div>
			<div class="text">
				<p>员工背景调查工作非常必要，但企业HR部门全面的开展操作费时费力，而无法保证及时性和有效性，同时可能会因为是竞争对手的原因，而无法获得前任雇主的配合支持，无法获取对应聘候选人最真实的评价。</p>
				<p>用专业调查机构进行背景调查，能够最大限度提高效率，并规避竞争对手的因素，而无法获得前任雇主的配合支持的问题，第三方开展调查最容易获得应聘后选任最真实的信息。</p>
				<p>此外，专业机构拥有大量的信息资源，能够最快最准确获得一手资料。</p>
			</div>
			<div class="card-group">
				<div class="card">
					<img src="../../../static/img/速度快.png">
					<p class="card-title">速度更快</p>
					<div class="card-content">
						<p>在线调查最快几秒钟出报告</p>
						<p>在线调查最快几秒钟出报告</p>
					</div>
					<ul class="tips">
						<li class="tip">在线一分钟</li>
						<li class="tip">线下一天</li>
						<li class="tip">法院</li>
					</ul>
				</div><div class="card">
					<img src="../../../static/img/速度快.png">
					<p class="card-title">速度更快</p>
					<div class="card-content">
						<p>在线调查最快几秒钟出报告</p>
						<p>在线调查最快几秒钟出报告</p>
					</div>
					<ul class="tips">
						<li class="tip">在线一分钟</li>
						<li class="tip">线下一天</li>
						<li class="tip">法院</li>
					</ul>
				</div><div class="card">
					<img src="../../../static/img/速度快.png">
					<p class="card-title">速度更快</p>
					<div class="card-content">
						<p>在线调查最快几秒钟出报告</p>
						<p>在线调查最快几秒钟出报告</p>
					</div>
					<ul class="tips">
						<li class="tip">在线一分钟</li>
						<li class="tip">线下一天</li>
						<li class="tip">法院</li>
					</ul>
				</div><div class="card">
					<img src="../../../static/img/速度快.png">
					<p class="card-title">速度更快</p>
					<div class="card-content">
						<p>在线调查最快几秒钟出报告</p>
						<p>在线调查最快几秒钟出报告</p>
					</div>
					<ul class="tips">
						<li class="tip">在线一分钟</li>
						<li class="tip">线下一天</li>
						<li class="tip">法院</li>
					</ul>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	
</script>