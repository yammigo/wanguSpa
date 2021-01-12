import Vue from 'vue'
import Vuex from 'vuex'
/*import state from './state.js'
import mutations from './mutations.js'
import getters from './getters.js'
import actions from './actions.js'*/

Vue.use(Vuex)

export default new Vuex.Store({
	state : {
		bannerVideo:{},
		bannerImage:{},
		showVideo : true,
		bannerCn:{},
		videoBg:{},
		poster:{},
		bannerEn:{},
		bannerLoop:{},
		solution:{},
		product:{},
		case:{},
		news:{},
		weFound:{},
		share:{},
		about:{}
	},
	getters : {
		bannerVideo : state => {
			return state.bannerVideo
		},
		bannerImage : state => {
			return state.bannerImage
		},
		showVideo : state => {
			return state.showVideo
		},
		bannerCn: state => {
			return state.bannerCn
		},
		videoBg : state => {
			return state.videoBg
		},
		poster : state => {
			return state.poster
		},
		bannerEn : state => {
			return bannerEn
		},
		bannerLoop : state => {
			return bannerLoop
		},
		solution : state => {
			return state.solution
		},
		product : state => {
			return state.product
		},
		case : state => {
			return state.case
		},
		case : state => {
			return state.case
		},
		weFound : state => {
			return state.weFound
		},
		share : state => {
			return state.share
		},
		about : state => {
			return state.about
		}	
	},
	mutations : {
		getBannerVideo(state,bannerVideo){
			state.bannerVideo = bannerVideo;
		},
		getBannerStatus(state,showVideo){
			state.showVideo = showVideo;
		},
		getBannerCn(state,abc){
			state.bannerCn = abc;
		},
		getVideoBg(state,abc){
			state.videoBg = abc;
		},
		getPoster(state,abc){
			state.poster = abc;
		},
		getBannerEn(state,abc){
			state.bannerEn = abc;
		},
		getBannerLoop(state,abc){
			state.bannerLoop = abc;
		}
	},
	actions : {

	}
})