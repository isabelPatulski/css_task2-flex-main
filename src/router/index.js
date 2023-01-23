import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../views/SignIn.vue'
import EditAccount from '../views/EditAccount.vue'
import ViewProfile from '../views/ViewProfile.vue'
import SignUp from '../views/SignUp.vue'
import HomeScreen from '../views/HomeScreen.vue'
import CreateEvent from '../views/CreateEvent.vue'
import allEvents from '../views/allEvents.vue'


const routes = [
    {
        path: '/',
        name: 'SignIn',
        component: SignIn
    },

    {
        path: '/home',
        name: 'home',
        component: HomeScreen,
    },
    {
        path: '/createevent',
        name: 'createEvent',
        component: CreateEvent,
    },
      

    {
        path: '/editaccount',
        name: 'editAccount',
        component: EditAccount,
    },
    {
        path: '/viewprofile',
        name: 'viewProfile',
        component: ViewProfile,
    },

    {
        path: '/signup',
        name: 'signUp',
        component: SignUp,
    },
    
    {
        path: '/allEvents',
        name: 'allEvents',
        component: allEvents,
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router