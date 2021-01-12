<style>
	.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
		background-color: #1d2a33 !important;
	}
	.figure .swiper-pagination-bullet {
		float: left;
		margin-top: .1rem;
		width: .4rem;
		height: .4rem;
		background: @basic;
		border-radius: 50%;
		cursor: pointer;
		transition: all .4s;
	}
	@media screen and (min-width:768px){
		.figure .swiper-pagination-bullet:hover {
			margin-top: 0;
			width: .6rem;
			height: .6rem;
		}
	}
	.figure .swiper-pagination-bullet.swiper-pagination-bullet-active {
		margin-top: 0;
		width: .6rem;
		height: .6rem;
	}
	.figure .swiper-pagination-bullet+.swiper-pagination-bullet {
		margin-left: .9rem;
	}
	.figure .swiper-pagination-bullet+.swiper-pagination-bullet-active {
		margin-left: 1.1rem;
	}
</style>

<style lang="less" scoped>
	@basic: rgb(0,120,240);
	.text-more {
		white-space: inherit;
		width: 100%;
		line-height: 2rem;
		height: 100%;
		position:relative;
		overflow:hidden;
	}
	.text-more:after {
		content:"...";
		font-weight:bold;
		position:absolute;
		bottom:0;
		right:0;
		padding:0 20px 1px 45px;
		background:url('../../../static/img/text_more.png') repeat-y;
	}
	.two {
		position: relative;
		padding-top: 5rem;
		width: 100%;
		height: 36rem;

		// 首先设定一个容器
		.container {
			position: relative;
			width: 65rem;
			height: 26rem;
			margin: auto;

			// 左侧文字部分
			.main-left {
				float: left;
				width: 35.5rem;
				text-align: justify;

					.content {
					margin-top: 1.1rem;
					height: 22rem;
					padding-right: .2rem;
					overflow: auto;
					p {
						line-height: 1.5rem;
						font-size: 14px;
						color: #666;
						text-indent: 2em;
						text-align: justify;
						&.top {
							margin-top: 1.1rem;
						}
					}
				}
			}

			//右侧图片的相框
			.border {
				position: absolute;
				right: 2rem; bottom: 0;
				width: 23rem;
				height: 24rem;
				border: .5rem solid #ebeef1;
			}
			//右侧图片
			.pic {
				position: absolute;
				right: 0;
				width: 23rem;
				height: 24rem;
				overflow: hidden;

				img {
					height: 100%;
				}

				&:after {
					content: '';
					position: absolute;
					left: 0; bottom: 0;
					width: 3rem;
					height: 6rem;
					background: #fff;
				}
			}
		}
	}
	.three {
		position: relative;
		padding-top: 3rem;
		width: 100%;
		height: 38.5rem;
		background-image: linear-gradient(to right,rgba(92,161,229,.6), rgba(92,229,184,.6));
		-ms-background-image: rgba(92,195,206,.6);
		background-size: 100%;
		overflow: hidden;

		.background {
			width: 100%;
		    position: absolute;
		    top: 0;
		    bottom: 0;
		    margin: auto;
		    z-index: -10000;
		}
		.container {
			position: relative;
			margin: 4.9rem auto 0;
			width: 57rem;
			height: 11.5rem;
			overflow: hidden;

			.year {
				position: absolute;
				z-index: 99;
				font-size: 36px;
				color: #0078f0;

				.prev,
				.next {
					position: absolute;
					top: 5rem;
					width: 1.2rem;
					height: 1.2rem;
					background-image: url('../../../static/img/top_2.png');
					background-size: contain;
					cursor: pointer;
				}
				.prev {
					left: 0;
				}
				.next {
					transform: rotateZ(180deg);
					-ms-transform: rotate(180deg);

					left: 2.2rem;
				}
			}

			.main-rt {
				position: absolute;
				right: 0;
				width: 45rem;
				height: 100%;
				.loading {
					position: absolute;
					height:100%;
					margin-top:0;
				}
				.figure {
					height: 2.5rem;
					padding-top: 1rem;
				}

				// 轮播内容
				.content-group {
					position: relative;
					width: 45rem;
					height: 100%;
				}
				.content {
					width: 20.5rem;
					height: 6.4rem;
					position: absolute;
					transition: all .5s;
					.iconfont {
						position: absolute;
						left: 0;
						font-size: 32px;
						color: @basic;
					}
					.article {
						position: absolute;
						top: -.2rem;
						right: 0;
						width: 17rem;
						height: 6.4rem;
						line-height: 1.6rem;
						font-size: 16px;
						color: #333;
						// text-align: justify;
						display: -webkit-box;
					    display: -moz-box;
					    overflow: hidden;
					    text-overflow: ellipsis;
					    word-break: break-all;
					    -webkit-box-orient: vertical;
					    -webkit-line-clamp: 4;
					}
				}
			}
		}

		.timeline {
			position: absolute;
			z-index: 50;
			bottom: 0;
			width: 100%;
			height: 16rem;
			.swiper-container {
				z-index: -1;
			}
			//中心线
			.timeline-line {
				position: absolute;
				z-index: -2;
				bottom: 9rem;
				width: 100%;
				height: .15rem;
				background: @basic;
			}

			//时间段样式
			// .card-gorup {
			// 	height: 16rem;
			// 	overflow: hidden;
			// 	transition: all .5s;
			// }
			// .card {
			// 	float: left;
			// 	width: 7.2rem;
			// 	text-align: center;
			// 	transition: all .5s;
			// 	cursor: pointer;

			// 	.timeline-time {
			// 		padding-top: 4.7rem;
			// 		font-size: .7rem;
			// 		line-height: .7rem;
			// 		height: 5.4rem;
			// 		color: @basic;
			// 		transition: all .5s;
			// 		&:before {
			// 			content:'';
			// 			position: absolute;
			// 			top: 4.7rem;left:0; right: 0;
			// 			margin-top: auto;
			// 			transition: all .5s;
			// 			width: 0;
			// 			height: 0;
			// 			border-radius: 50%;
			// 		}
			// 		.timeline-time-line {
			// 			position: absolute;
			// 			top: 4.7rem; left:0; right: 0;
			// 			margin-top: auto;
			// 			transition: all .5s;
			// 			width: 0;
			// 			height: 0;
			// 			background: #fff;
			// 			&:before {
			// 				content: '';
			// 				position: absolute;
			// 				top: 0; left: 0; right: 0;
			// 				border: 0;
			// 				transition: all .5s;
			// 			}
			// 		}
			// 	}

			// 	.circle {
			// 		width: .8rem;
			// 		height: .8rem;
			// 		background: @basic;
			// 		border-radius: 50%;
			// 		margin: 1.15rem auto 0;
			// 	}

			// 	.time-intro {
			// 		margin-top: .7rem;
			// 		font-size: .8rem;
			// 		color: #333;
			// 		line-height: 1.4rem;
			// 		padding: 0 .8rem;
			// 		transition: all .5s;
			// 	}

			// 	&.active {
			// 		.timeline-time {
			// 			position: relative;
			// 			padding-top: 1.2rem;
			// 			&:before {
			// 				content: '';
			// 				z-index: -1;
			// 				top: 0;
			// 				margin: auto;
			// 				width: 3rem;
			// 				height: 3rem;
			// 				background: @basic;
			// 				box-shadow: 0 .5rem .5rem rgba(0,91,182,.3);

			// 			}
			// 			.timeline-time-line {
			// 				top: 2.5rem;
			// 				margin: auto;
			// 				width: 0.1rem;
			// 				height: 4.2rem;
			// 				background: @basic;
			// 				&:before {
			// 					left: -1rem;
			// 					border-top: 1.12rem solid #0078f0;
			// 					border-left: 1.12rem solid rgba(0,0,0,0);
			// 					border-right: 1.12rem solid rgba(0,0,0,0);
			// 				}
			// 			}
			// 			color: #fff;
			// 		}

			// 		.circle {
			// 			box-shadow: 0 .5rem .5rem rgba(0,91,182,.3);
			// 		}
			// 		.time-intro{
			// 			color: @basic;

			// 		}
			// 	}
			// }

			//swiper插件
			.card-gorup {
				height: 16rem;
			}
			.card {
				width: 7.2rem;
				height: 100%;
				text-align: center;
				cursor: pointer;

				.timeline-time {
					padding-top: 4.7rem;
					font-size: 14px;
					line-height: .7rem;
					height: 5.4rem;
					color: @basic;
					// transition: all .5s;
					&:before {
						content:'';
						position: absolute;
						top: 4.7rem;left:0; right: 0;
						margin-top: auto;
						// transition: all .5s;
						width: 0;
						height: 0;
						border-radius: 50%;
					}
					.timeline-time-line {
						position: absolute;
						z-index: -2;
						top: 4.7rem; left:0; right: 0;
						margin-top: auto;
						width: 0;
						height: 0;
						background: #fff;
					}
				}

				.circle {
					width: .8rem;
					height: .8rem;
					background: @basic;
					border-radius: 50%;
					margin: 1.15rem auto 0;
				}

				.time-intro {
					margin-top: .7rem;
					font-size: 16px;
					color: #333;
					line-height: 1.4rem;
					padding: 0 .8rem;
					// transition: all .5s;
				}

				&.active {
					.timeline-time {
						position: relative;
						padding-top: 1.2rem;
						transition: all .5s;

						&:before {
							content: '';
							z-index: -1;
							top: 0;
							left: -0.05rem;
							margin: auto;
							width: 3rem;
							height: 3.4rem;
							// background: url('../../../static/img/气泡大.png') no-repeat;
							background-size: 100% 100%;
							transition: all .5s;
						}
						.timeline-time-line {
							top: 2.5rem;
							margin: auto;
							width: 0.1rem;
							height: 4.2rem;
							background: @basic;
							transition: all .5s;
						}
						color: #fff;
					}

					.circle {
						box-shadow: 0 .5rem .5rem rgba(0,91,182,.3);
					}
					.time-intro{
						color: @basic;

					}
				}
			}

			//战争迷雾！！！
			.fog {
				position: absolute;
				bottom: 0;
				height: 38.5rem;
			}
			.fog-lt {
				left: 0;
				box-shadow: 0 0 10rem 7rem #9dc7ef;
			}
			.fog-rt {
				right: 0;
				box-shadow: 0 0 10rem 7rem #c4ddf5;
			}
		}
	}
	.four {
		width: 100%;
		padding-top: 5rem;

		.character {
			position: relative;
			width: 75rem;
			height: 21rem;
			margin: auto;
			overflow: hidden;
			.icon {
				position: absolute;
				top: 0; bottom:	0;
				width: 1.15rem;
				height: 2rem;
				margin: auto;
				background-image: url('../../../static/img/left.png');
				background-size: contain;
				cursor: pointer;

				&.icon-right {
					right: 0;
					transform: rotateZ(180deg);
					-ms-transform: rotate(180deg);

				}
				&.sure {
					background-image: url('../../../static/img/left_2.png');
				}
				&.not {
					cursor: default;
				}
			}
			.card-gorup {
				height: 100%;
				transition: all .5s;
			}
			.card {
				float: left;
				width: 17.5rem;
				height: 100%;

				.pic {
					width: 9rem;
					height: 9rem;
					border-radius: 50%;
					overflow: hidden;
					margin: 5rem auto 2rem;
					border: 1px solid #eee;
					transition: all .5s;
			         background-size: 100% 100%;
			         background-repeat: no-repeat;
					&.active {
						margin: 4.5rem auto 1.5rem;
						width: 10rem;
						height: 10rem;
						box-shadow: 0 1rem 1rem 0 #eee;
					}
				}

				.card-title {
					text-align: center;
					font-size: 18px;
					span{
						display: block;
					}
				}
				
				&.active {
					.pic {
						margin: 4.5rem auto 1.5rem;
						width: 10rem;
						height: 10rem;
						box-shadow: 0 1rem 1rem 0 #eee;
					}
					.card-title {
						color: @basic;
					}
				}
			}
		}
		.intro {
			position: relative;
			width: 100%;
			background: #f7f9fa;
			padding: 2.25rem 0;
			.container {
				position: relative;
				width: 58.4rem;
				margin: auto;
				font-size: 14px;
				line-height: 2rem;
				color: #333;
				text-align:justify;
				&:before,
				&:after {
					content: '';
					position: absolute;
					background-image: url('../../../static/img/yinhao2.png');
					width: 1.2rem;
					height: 1rem;
					background-size: contain;
				}
				&:before {
					top:0; left: -3.7rem;
				}
				&:after {
					bottom:0; right: -3.7rem;
					transform: rotatez(180deg);
					-ms-transform: rotate(180deg);
				}
			}
		}
	}
	.five {
		padding-top: 5rem;
		padding-bottom: 2rem;
		width: 100%;
		.container {
			width: 75rem;
			margin: 4rem auto 0;
			padding: 0 1.4rem;

			.card {
				width: 36.1rem;
				float: left;
				text-align: center;
				.card-img {
					position: relative;
					max-width: 100%;
					height: 34rem;
					img {
						position: absolute;
						width: 100%;
						left: 0;
						top: 0;
						bottom: 0;
						margin: auto;
					}
				}
				.card-title {
					margin-top: 4rem;
					font-size: 24px;
				}
			}
		}
	}
	.six {
		padding-top: 3.5rem;
		width: 100%;
		height: 50.9rem;
		background: #f7f9fa;
		.container {
			width: 75rem;
			margin: 5rem auto 0;
			img {
				width: 100%;
			}
		}
	}

	//除了two以外，其余标题样式一致
	.three,.four,.five,.six {
		.title { text-align: center; }
		.line { margin: auto; }
	}

	//common样式
	.title {
		font-size: 36px;
		padding-bottom: 1.1rem;
	}
	.line {
		width: 2.8rem;
		height: .15rem;
		background: @basic;
	}

	//导航样式
	.fixed {
		position: fixed;
    	display: none;
		z-index: 10000;
		right: 0; top: 50%;
		text-align: right;
		font-size: 12px;
		line-height: 2.5rem;
		color: #666;
		li {
			cursor: pointer;
			&:hover {
				color: @basic;
			}
			&.active {
				color: @basic;
			}
		}
		li:after {
			content: '';
			display: inline-block;
			border-top: 2px solid;
			width: 1.5rem;
			height: .05rem;
			background: #d9dadb;
			margin-left: .5rem;

			transform: translateY(-.1rem);
			-ms-transform: translate(0,-.1rem); 	/* IE 9 */
			-moz-transform: translateY(-.1rem); 	/* Firefox */
			-webkit-transform: translateY(-.1rem); /* Safari 和 Chrome */
			-o-transform: translateY(-.1rem); 	/* Opera */
		}
	}
	@media screen and (max-width:1300px) {
		.three .container .main-rt .content .article {
			font-size: 14px;
		}
	}
	@media screen and (max-width:1150px) {
		.three .container .main-rt .content .article {
			font-size: 12px;
		}
	}
	@media screen and (max-width:768px) {
		.fixed {
			display: none;
		}
		.two {
			padding-top: 2.5rem;
			padding-bottom: 3rem;
	    	height: auto;
			.container{
				width: 100%;
	      		height: auto;
				padding: 0 1.5rem;
				.main-left{
				  	float: none;
					width: 100%;
	        		padding-bottom: 28rem;
					.content{
					  height: auto;
						max-height: 30rem;
						p {
							font-size: .9rem;
						}
					}
				}
				.border{
					left: 2rem;
					right: auto;
				}
				.pic {
					left: 4rem;
					right: auto;
					bottom: 2rem;
				}
			}
		}
		.three {
			padding-top: 3rem;
			height: 40rem;
			.container {
				width: 100%;
				height: 19.7rem;
				margin: 0;
				padding: 0 3rem;
				.year {
					position: relative;
					font-size: 1.8rem;
					text-align: center;
					margin-top: 2.4rem;
					.prev,
					.next {
						position: static;
						display: inline-block;
					}
					.prev {
						transform: rotate(-90deg);
						-mz-transform: rotate(-90deg);
					}
					.next {
						transform: rotate(90deg);
						-mz-transform: rotate(90deg);
					}
				}
				.main-rt {
					position: relative;
					width: 100%;
					height: auto;
					.loading {
						margin-top: 5rem;
					}
					.content-group {
						width: 100%;
						height: auto;
					}
					.content{
						position: static;
						width: auto;
						height: 5.5rem;
						.article {
							position: relative;
							top: 0;
							font-size: .8rem;
							line-height: 1.2em;
							width: 100%;
							padding-left: 3.4rem;
							-webkit-line-clamp: 10;
						}
					}
				}
			}
			.timeline {
				height: 14.2rem;
				.timeline-line {
					bottom: 7.2rem;
				}
				.card {
					.time-intro {
						font-size: .8rem;
						padding: 0;
					}
				}
			}
			.fog {
				display: none;
			}
		}
		.four {
			padding-top: 3rem;
			.character {
				width: 100%;
				height: 18.5rem;
				.card {
					width: 50vw;
					&:nth-child(odd){
						padding-left: 1.5rem;
					}
					&:nth-child(even){
						padding-right: 1.5rem;
					}
					.pic {
						margin-top: 4rem;
					}
					&.active {
						.pic {
							margin-top: 3.5rem;
						}
					}
					.card-title {
						font-size: .9rem;
					}
				}
				.icon-left {
					margin-left: .8rem;
				}
				.icon-right {
					margin-right: .8rem;
				}
			}
			.intro {
				.container {
					font-size: .8rem;
					width: 25rem;
					&:before {
						left: -2rem;
					}
					&:after {
						right: -2rem;
					}
				}
			}
		}
		.five {
			height: auto;
			padding: 3rem 1.5rem;
			.container {
				width: 100%;
				padding: 0;
				margin: 0;
				.card {
					margin-top: 1.5rem;
					width: 100%;
					.card-img {
						height: auto;
						img {
							position: static;
						}
					}
					.card-title {
						margin-top: .5rem;
						font-size: 1.2rem;
					}
				}
			}
		}
		.six {
			padding: 2.5rem 1.5rem;
			height: auto;
			.card {
				margin-top: 1.5rem;
				padding: 1.5rem;
				width: 100%;
				border: 1px solid #d9dadb;
				background: #fff;
				.card-title {
					font-size: 1.1rem;
					color: @basic;
					line-height: 1.3rem;
					padding-bottom: .1rem;
				}
				.card-content {
					margin-top: 1.1rem;
					height: 1.3rem;
					font-size: .9rem;
					color: #333;
				}
				.card-btn {
					text-align: center;
					font-size: 1rem;
					color: @basic;
					.icon-down {
						display: inline-block;
						background-image: url('../../../static/img/down.png');
						width: .7rem;
						height: .4rem;
						background-size: contain;
						vertical-align: middle;
					}
					.icon-up {
						transform: rotate(180deg);
					}
				}
			}
		}
		.title {
			font-size: 1.8rem;
		}
	}
</style>
<template>
	<div>
		<nav class="fixed">
			<ul>
				<li :class="{ active: floor == 'two'}" @click="goAnchor('two')">公司简介</li>
				<li :class="{ active: floor == 'three' }" @click="goAnchor('three')">万古大事记</li>
				<li :class="{ active: floor == 'four' }" @click="goAnchor('four')">团队介绍</li>
				<li :class="{ active: floor == 'five' }" @click="goAnchor('five')">我们的客户</li>
				<li :class="{ active: floor == 'six'}" @click="goAnchor('six')">联系我们</li>
			</ul>
		</nav>
		<loading v-if="twoloading && threeloading && fourloading && sixloading"/>
		<template v-else>
			<banner :options="{ src:base_url+'public/'+bannerEN.BannerImage, title: bannerCN.ModuleName, subTitle: bannerEN.ModuleName, intro: lang==0?bannerCN.ModuleNamePlus:bannerEN.ModuleNamePlus}" />
			<div class="two" v-if="!twoloading">
				<div class="container">
					<div class="main-left">
						<div class="title">
						{{lang==0?'公司简介':'Company Profile'}}
						</div>
						<div class="line"></div>
						<div class="content">
	            			<p v-html="two.CompanyIntro"></p>
						</div>
					</div>
					<div class="border"></div>
					<div class="pic">
						<img :src="base_url+'public/'+two.CompanyIntroThumb" alt="">
					</div>
				</div>
			</div>
			<div class="three" v-if="!threeloading">
				<img class="background" src="../../../static/img/three_bg.jpg">
				<div class="title">
					{{lang==0?'万古大事记':'Vanguard Memorabilia'}}
				</div>
				<div class="line"></div>
				<div class="container">
					<div class="year">
						<i class="prev swiper-button-prev" slot="button-prev"></i>
						{{ lang==0?now[0] +'年':now[0] +'' }}
						<i class="next swiper-button-next" slot="button-next"></i>
					</div>
					<div class="main-rt">
						<loading style="loading" v-show="detailloading"/>
						<div class="figure">
		       				<div class="swiper-pagination" slot="pagination"></div>
						</div>
						<swiper class="content-group" :options="swiperOption2" v-if="!detailloading">
							<swiper-slide v-for="(i,index) in threedetail" :key="i">
								<div class="content">
									<i class="iconfont icon-dashiji2"></i>
									<div class="article" :title="i.Event">
										{{ i.subEvent }}
									</div>
								</div>
								<div class="content"
								:style="{ right : 0 }"
								v-if="i.Honor">
									<i class="iconfont icon-dashiji1"></i>
									<div class="article" :title="i.Honor">
										{{ i.subHonor }}
									</div>
								</div>
							</swiper-slide>
						</swiper>
					</div>
				</div>
				<div class="timeline">
					<div class="timeline-line"></div>
					<swiper class="card-group" :options="swiperOption">
						<swiper-slide class="card">
							<div class="timeline-time">START</div>
							<div class="circle"></div>
						</swiper-slide>
	          <swiper-slide class="card"
	              :class="{ active: now[0] == i.TimelineTypeTitle }"
	    					v-for="(i,index) in threes"
	    					key = "index">
				        	<div class="timeline-time">
				        		{{i.TimelineTypeTitle}}
								<span class="timeline-time-line">
									<span class="triangle"></span>
								</span>
							</div>
							<div class="circle"></div>
							<div class="time-intro">{{ i.TimelineTypeDesc }}</div>
				    </swiper-slide>
				    <swiper-slide class="card">
				       		<div class="timeline-time">END</div>
							<div class="circle"></div>
				    </swiper-slide>
				  </swiper>

					<div class="fog fog-lt"></div>
					<div class="fog fog-rt"></div>
				</div>
			</div>
			<div class="four" v-if="!fourloading">
				<div class="title">
					{{ lang==0?'团队介绍':'Team Presentation'}}
				</div>
				<div class="line"></div>
				<div class="character">
					<template v-if="state">
						<div class="card-gorup"
						:style="{
							width : Math.ceil(four.length/4)*100 + '%',
							marginLeft :  - fourNumb*100 + '%'
							}">
							<div class="card"
							:class="{ active: fourChange == index }"
							:style="{
								marginLeft : 	index==0 ? '2.5rem':
												index%4 == 0 ? '5rem':''
								}"
							v-for="(i,index) in four"
							@mouseenter="fourChange = index">
								<div class="pic" :style="{ backgroundImage: 'url('+i.pic+')' }"></div>
								<div class="card-title">
									<span style="font-weight: bold">{{i.name}}</span>
									<span>{{i.project}}</span>
								</div>
							</div>
						</div>

						<div class="icon icon-left"
						:class="fourNumb > 0 ? 'sure':'not'"
						@click="fourNumb > 0 ? fourNumb--:null;fourChange=fourNumb*4"></div>
						<div class="icon icon-right"
						:class="fourNumb < Math.floor((four.length-1)/4) ? 'sure':'not'"
						@click="fourNumb < Math.floor((four.length-1)/4) ? fourNumb++:null;fourChange=fourNumb*4"></div>
					</template>

					<template v-else>
						<div class="card-gorup"
						:style="{
							width : Math.ceil(four.length/2)*100 + 'vw',
							marginLeft :  - fourNumb*100 + 'vw',
							}">
							<div class="card"
							:class="{ active: fourChange == index }"
							v-for="(i,index) in four"
							@touchstart="fourChange = index"
							@click="fourChange = index">
								<div class="pic" :style="{ backgroundImage: 'url('+i.pic+')' }"></div>
								<div class="card-title">
									<span style="font-weight: bold">{{i.name}}</span>
									<span>{{i.project}}</span>
								</div>
							</div>
						</div>

						<div class="icon icon-left"
						:class="fourNumb > 0 ? 'sure':'not'"
						@click="fourNumb > 0 ? fourNumb--:null;fourChange=fourNumb*2"></div>
						<div class="icon icon-right"
						:class="fourNumb < Math.ceil(four.length/2)-1 ? 'sure':'not'"
						@click="fourNumb < Math.ceil(four.length/2)-1 ? fourNumb++ : null;fourChange=fourNumb*2"></div>
					</template>

				</div>
				<div class="intro">
					<div class="container">
						{{ four[fourChange].intro }}
					</div>
				</div>
			</div>
			<div class="five" v-if="!fiveloading">
				<div class="title">{{lang==0?'我们的客户':'Our Clients'}}</div>
				<div class="line"></div>
				<div class="container clear">
					<div class="card" v-for="(i,index) in five" :key="index">
						<div class="card-img">
							<img :src="base_url+'public/'+i.CustomerinfoImage">
						</div>
						<div class="card-title" :style="{color: index%2?'#0078f0':'#17b3ab'}">{{i.CustomerinfoTitle}}</div>
					</div>
				</div>
			</div>
			<div class="six" v-if="!sixloading">
				<div class="title">{{lang==0?'联系我们':'Contact Us'}}</div>
				<div class="line"></div>
				<div v-if="state" class="container">
					<img src="../../../static/img/ditu.png" alt="">
				</div>
				<div v-else>
					<div class="card"
					v-for="(i,index) in six"
					v-show="index<4 || sixShow">
						<div class="card-title">{{ i.city }}</div>
						<div class="card-content">电话： {{ i.tel }}</div>
						<div class="card-content">地址： {{ i.add }}</div>
					</div>
					<div class="card" v-if="six.length>=4" v-show="!sixShow"
					@click="sixShow = true">
						<div class="card-btn">
							展开全部
							<i class="icon-down"></i>
						</div>
					</div>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
import 'jquery-mousewheel'
import '../../../static/css/iconfont.css'
import '../../../static/js/scrollbar/jquery.mCustomScrollbar.min.css'
import '../../../static/js/scrollbar/jquery.mCustomScrollbar.js'
export default {
  data() {
    return {
      lang: lang,
      base_url: baseUrl,
      bannerEN: {},
      bannerCN: {},
      oneloading: true,
      twoloading: true,
      threeloading: true,
      detailloading: true,
      fourloading: true,
      sixloading: true,
      dark: false,
      floor: 'two',
      one: {},
      two: null,
      threes: {},
      threedetail: [],
      TimelineTypeId: 1,
      now: null,
      four: [],
      five: [],
      fiveloading: true,
      six: [],
      sixShow: false,
      fourChange: 0,
      fourNumb: 0,
      //用于通过页面宽度修改展示页面
      state: 1,
      //swiper设置
      swiperOption: {
        // pagination: '.swiper-pagination',
        //点击控制切换
        slideToClickedSlide: true,
        centeredSlides: true,
        //视图中显示几个
        slidesPerView: 9,
        //间距
        spaceBetween: 10,
        grabCursor: true,
        //设定按钮控制
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        breakpoints: {
          768: {
            slidesPerView: 5,
            spaceBetween: 5
          }
        },
        onSlideChangeEnd: swiper => {
          if (swiper.realIndex < 1) {
            return;
          } else if (swiper.realIndex > this.threes.length) {
            return;
          }
          //回调函数，用来修改数据
          this.now = [this.threes[swiper.realIndex - 1].TimelineTypeTitle, this.threes[swiper.realIndex - 1].TimelineTypeId]
          this.getThreeDetail(this.threes[swiper.realIndex - 1].TimelineTypeId)
        }
      },
      swiperOption2: {
        pagination: '.swiper-pagination',
        slideToClickedSlide: true,
        centeredSlides: true,
        slidesPerView: 1
      }
    }
  },
  methods: {
    getThreeDetail(tid) {
      let that = this;
      that.detailloading = true;
      if (that.threedetail[tid]) {
        that.detailloading = false;
        return that.threedetail[tid];
      }
	  var time1,time2;
	  //console.log(time1=new Date())
	  	let file = '';
			if(localStorage['lang'] == 0){
				file = "about.json";
			}else{
				file = "about_en.json";
			}
      this.$http.get(baseUrl+'public/json/'+file+'?time='+Date.parse(new Date())).then((response) => {
        //console.log(response.body.content)
				//console.log(time2=new Date(),time2-time1)
				let event = response.body.body.timetype;
				let showEvent = {};
				for(let i = 0; i< event.length; i++){
					if(event[i].TimelineTypeId == tid){
						showEvent = event[i].time;
					}
				}
				
        for (let i = 0, len = showEvent.length; i < len; i++) {
          showEvent[i].subEvent = showEvent[i].Event.substr(0, 40)
          if (showEvent[i].Event.length >= 40) {
            showEvent[i].subEvent += '...'
          }
          showEvent[i].subHonor = showEvent[i].Honor.substr(0, 40)
          if (showEvent[i].Honor.length >= 40) {
            showEvent[i].subHonor += '...'
          }
        }
        that.threedetail = showEvent;
        that.detailloading = false;
        
      });
    },
    goAnchor(selector) {
      $("html,body").stop(true);
      $("html,body").animate({
        scrollTop: $("." + selector).offset().top - $(".header").height()
      }, 500);
    },
    nowAnchor() {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if ($('.three').offset() && $('.four').offset() && $('.five').offset() && $('.six').offset()) {
        if (scrollTop < $('.three').offset().top - $(".header").height() - 1) {
          return this.floor = 'two';
        } else if (scrollTop < $('.four').offset().top - $(".header").height() - 1) {
          return this.floor = 'three';
        } else if (scrollTop < $('.five').offset().top - $(".header").height() - 1) {
          return this.floor = 'four';
        } else if (scrollTop < $('.six').offset().top - $(".header").height() - 1) {
          return this.floor = 'five';
        } else {
          return this.floor = 'six';
        }
      }
    },
    show: function() { //当浏览器大小变化时
      if ($(window).width() <= 768) { //浏览器时下窗口文档的宽度
        this.state = 0;
      } else if ($(window).width() > 768) {
        this.state = 1;
      }
    },
    getData() {
      // 获取banner中文数据
      this.$http.get(baseUrl+'public/json/about_header.json?time='+Date.parse(new Date())).then((response) => {
        this.bannerCN = response.body.content;
      });
      //获取banner英文数据
      this.$http.get(baseUrl+'public/json/about_header_en.json?time='+Date.parse(new Date())).then((response) => {
        this.bannerEN = response.body.content;
      });
      let file = '';
			if(localStorage['lang'] == 0){
				file = "about.json";
			}else{
				file = "about_en.json";
			}
      //获取公司简介信息
      let that = this;
      this.$http.get(baseUrl+'public/json/'+file+'?time='+Date.parse(new Date())).then((response) => {
      	//公司简介信息
        that.two = response.body.body.company;
        that.twoloading = false;
        //公司大事记
        that.threes = response.body.body.timetype;
        that.now = [that.threes[0].TimelineTypeTitle, that.threes[0].TimelineTypeId];
        that.threeloading = false;
        //获取单个事件的详情数据
        let event = response.body.body.timetype[0].time;
        for (let i = 0, len = event.length; i < len; i++) {
          event[i].subEvent = event[i].Event.substr(0, 40)
          if (event[i].Event.length >= 40) {
            event[i].subEvent += '...'
          }
          event[i].subHonor = event[i].Honor.substr(0, 40)
          if (event[i].Honor.length >= 40) {
            event[i].subHonor += '...'
          }
        }
        that.threedetail = event;
        that.detailloading = false;
        //团队介绍
        let staffs = response.body.body.staff;
        for (let i = 0, len = staffs.length; i < len; i++) {
          //将获取的到的数据，转换成我定义的名称
          let git = {
            pic: that.base_url + 'public/' + staffs[i].HeadPic,
            intro: staffs[i].StaffIntro,
            name: staffs[i].StaffName,
            project: staffs[i].StaffPosition
          }
          //将转义后的数据传入数组中
          that.four.push(git);
        }
        that.fourloading = false;
        //我们的客户
        that.five = response.body.body.customer;
        that.fiveloading = false;
        //联系我们
        let contactUs = response.body.body.contact;
        for (let i = 0, len = contactUs.length; i < len; i++) {
          let git = {
            add: contactUs[i].BranchAddress,
            city: contactUs[i].BranchCity,
            tel: contactUs[i].BranchTel,
          };
          this.six.push(git);
        }
        this.sixloading = false;
      });
      //获取万古大事记信息
      //时间轴信息
     /* this.$http.jsonp(baseUrl + 'system_admin/saas_company/Timeline_Interface_GetContent.html?pid=1&method=t&sort=0&size=100&lang=' + lang).then((response) => {
      	console.log('time');
      	console.log(response.body.content);
        this.threes = response.body.content;
        this.now = [this.threes[0].TimelineTypeTitle, this.threes[0].TimelineTypeId];
        this.threeloading = false;
      });*/
      // 获取单个事件的详情数据
      /*this.$http.jsonp(baseUrl + 'system_admin/saas_company/Timeline_Interface_GetContent.html?field=70-71&pid=1&method=m&type=1&lang=' + lang).then((response) => {
      	console.log('单个事件信息：');
      	console.log(response);
        let git = response.body.content;
        for (let i = 0, len = git.length; i < len; i++) {
          git[i].subEvent = git[i].Event.substr(0, 40)
          if (git[i].Event.length >= 40) {
            git[i].subEvent += '...'
          }
          git[i].subHonor = git[i].Honor.substr(0, 40)
          if (git[i].Honor.length >= 40) {
            git[i].subHonor += '...'
          }
        }
        this.threedetail = git;
        this.detailloading = false;
      });*/
      //团队介绍
      /*this.$http.jsonp(baseUrl + 'system_admin/saas_company/Staff_Interface_GetContent.html?field=64-65-66-67&pid=1&method=m&lang=' + lang).then((response) => {
        for (let i = 0, len = response.body.content.length; i < len; i++) {
          //将获取的到的数据，转换成我定义的名称
          let git = {
            pic: this.base_url + 'public/' + response.body.content[i].HeadPic,
            intro: response.body.content[i].StaffIntro,
            name: response.body.content[i].StaffName,
            project: response.body.content[i].StaffPosition
          }
          //将转义后的数据传入数组中
          this.four.push(git);
        }
        this.fourloading = false;
      });*/
      //我们的客户
      /*this.$http.jsonp(baseUrl + 'system_admin/saas_company/Customerinfo_Interface_GetContent.html?field=78-79&pid=1&method=m&lang=' + lang).then((response) => {
        this.five = response.body.content;
        this.fiveloading = false;
      });*/
      //联系我们
      /*this.$http.jsonp(baseUrl + 'system_admin/saas_company/Branch_Interface_GetContent.html?field=82-83-84&pid=1&method=m&lang=' + lang).then((response) => {
        for (let i = 0, len = response.body.content.length; i < len; i++) {
          let git = {
            add: response.body.content[i].BranchAddress,
            city: response.body.content[i].BranchCity,
            tel: response.body.content[i].BranchTel,
          };
          this.six.push(git);
        }
        this.sixloading = false;
      }).catch(e => {
        console.log(e);
      });*/
    }
  },
  created() {
    this.show();
    this.getData();
  },
  mounted() {
    window.addEventListener('scroll', this.nowAnchor);
    window.addEventListener('resize', this.show);
    $(".two .container .main-left .content").mCustomScrollbar({
      axis: "y", //滚动条位置
    });
	let timer = setInterval(()=>{
		if(this.twoloading || this.threeloading || this.fourloading || this.sixloading){
			return;
		}else {
			clearInterval(timer)
			this.goAnchor(this.$route.params.id)
		}
	},50)
  },
  watch: {
    two: function() {
      setTimeout(function() {
        // 使用滚动条的元素
        $(".two .content").mCustomScrollbar({
          axis: "y", //滚动条位置
        });
      }, 100)
  	},
  	"$route": function(){
  		if(this.$route.name == 'about'){
  			this.goAnchor(this.$route.params.id)
  		}
		
	}
  },
  destroyed() {
    window.removeEventListener('scroll', this.nowAnchor);
    window.removeEventListener('resize', this.show);
  },
  beforeCreate() {
    //将产品详情写入localStorage
    localStorage['solu'] = 0;
    localStorage['pro'] = 0;
  }
}
</script>
