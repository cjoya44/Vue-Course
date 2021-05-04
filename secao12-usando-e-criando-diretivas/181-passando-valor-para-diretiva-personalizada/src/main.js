import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
	bind(el, binding, vnode){
		//não precisa manter o binding e o vnode como parâmetros se não for usar
		//el.style.backgroundColor = "magenta"
		el.style.backgroundColor = binding.value
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
