import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = ()=> import('@/page/Login.vue')
const Register = ()=> import('@/page/Register.vue')
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
        path:'/login',
        name:'login',
        component:Login
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

    console.log("to.name is "+to.name);
    console.log("isAuthenticated is " + vue.isAuthenticated());
    if(to.name !== "login" && to.name !== "register" && !vue.isAuthenticated()) {
        console.log("not login, so forward to login page")
        next({name:'login'})
        return;
    }
    console.log("router beforeEach next")
    next()
})



export default router