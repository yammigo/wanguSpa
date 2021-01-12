<style lang="less" scoped>
	.one {
		width: 100%;
		height: 24rem;
		overflow: hidden;
		text-align: center;
		position: relative;
		background: rgba(0,0,0,0.5);
		color: #fff;
		.banner {
			position: absolute;
			top: 0; bottom: 0;
			left: 0; right: 0;
			margin: auto;
			height: 88px;
			width:80%;
		}
		.img {
			position: absolute;
			top: 0; left: 0;
			z-index: -1;
			width: 100%;
			height: 100%;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center center;
		}
		.one-title {
			font-size: 44px;
		}
		.one-sub-title {
			font-size: 24px;
		}
		p {
			padding-top: 2rem;
			font-size: 22px;
			line-height:1.9rem;
		}
	}
@media screen and (max-width:768px) {
	.one {
		.banner {
			width: 24.1rem;
			.one-title {
				font-size: 2rem;
			}
			.one-sub-title {
				display: block;
				padding-top: 1rem;
				font-size: 1rem;
				.phone-fade {
					display: none;
				}
			}
			p {
				font-size: 1rem;
				line-height: 1.2rem;
			}
		}
		.img {
			background-size: auto 100%;
		}
	}
}
</style>

<template>
	<div class="one">
		<div class="img" :style="{ 'background-image' : 'url('+ options.src +')' }"></div>
		<div class="banner">
			<span class="one-title" v-show='!lang'>
				{{options.title}}
			</span>
			<span class="one-sub-title">
				<span class="phone-fade" v-show='!lang'>/ </span>{{options.subTitle}}
			</span>
			<p>
				{{options.intro}}
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['options'],
		data(){
			return{
				lang: parseInt(localStorage['lang'])
			}
		}
	}
</script>
