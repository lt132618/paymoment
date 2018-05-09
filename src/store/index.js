import Vue from 'vue'
import Vuex from 'vuex';
import mutations from './mutations';

Vue.use(Vuex)

const state = {//此处添加公共数据
	project:[],
	viewDirection: '',

}

export default new Vuex.Store({
	state,
	mutations,
})
