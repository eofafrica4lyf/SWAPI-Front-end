import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Characters from './views/Characters.vue';
import CharacterDetail from './views/CharacterDetail.vue';
import Starships from './views/Starships.vue';
import StarshipDetail from './views/StarshipDetail.vue';
import Planets from "./views/Planets.vue"

Vue.use(Router);

export default new Router({
	mode: 'history',
	linkExactActiveClass: 'isActive',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/people',
			name: 'characters',
			component: Characters
		},
		{
			path: '/people/:id',
			name: 'characterdetail',
			component: CharacterDetail
		},
		{
			path: '/starships',
			name: 'starships',
			component: Starships
		},
		{
			path: '/starships/:id',
			name: 'starshipdetail',
			component: StarshipDetail
		},
		{
			path: '/planets',
			name: 'planets',
			component: Planets
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () =>
				import(/* webpackChunkName: "about" */ './views/About.vue')
		}
	]
});
