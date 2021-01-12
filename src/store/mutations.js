import * as type from './type.js'
export default mutations = {
	[type.BANNER_VIDEO] (state, {bannerVideo}) {
		state.bannerVideo = bannerVideo
	},
	[type.BANNER_IMAGE] (state, {bannerImage}) {
		state.bannerImage = bannerImage
	},
	[type.SOLUTION] (state, {solution}) {
		state.solution = solution
	},
	[type.PRODUCT] (state, {product}) {
		state.product = product
	},
	[type.CASE] (state, {caseCont}) {
		state.case = caseCont
	},
	[type.NEWS] (state, {news}) {
		state.news = news
	},
	[type.DISCOVERY] (state, {discover}) {
		state.discover = discover
	},
	[type.SHARE] (state, {share}) {
		state.share = share
	},
	[type.ABOUT] (state, {about}) {
		state.about = about
	}
}