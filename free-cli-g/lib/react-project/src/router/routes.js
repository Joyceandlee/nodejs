import Home from '../containers/Home';
import My from '../containers/My'

export const routes = [{
    path: '/home',
    component: Home
}, {
    path: '/my',
    component: My
}, {
    path: '/',
    redirect: '/my'
}]