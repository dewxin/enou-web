import Vue from 'vue'
import VueRouter from 'vue-router'

const Register = ()=> import('@/page/Register.vue')
const Main = ()=> import('@/page/Main.vue')
const Home = ()=> import('@/page/Home.vue')

Vue.use(VueRouter)

const routes =[
    {
        path:'',
        redirect: '/home'
    },
    {
        path:'/home',
        name:'home',
        component:Home
    },
    {
        path:'/main',
        name:'main',
        component:Main
    },
    {
        path:'/register',
        name:'register',
        component:Register
    },
]



const router = new VueRouter({
    routes: routes,
    mode: 'history',

})

let vue = new Vue();
router.beforeEach((to, from, next) =>{

    console.log("from.name is " + from.name);
    console.log("to.name is "+to.name);
    console.log("isAuthenticated is " + vue.isAuthenticated());
    if(to.name !== "login" && to.name !== "register" && to.name !== "home" && !vue.isAuthenticated()) {
        console.log("not login, so forward to login page")
        next({name:'login'})
        return;
    }

    if(to.name == "home" && from.name == null && vue.isAuthenticated()) {
        next({name:'main'})
        return;
    }

    next()
})



export default router