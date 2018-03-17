import {Router} from 'director/build/director';
import css from '~/assets/styles/global.css';
import Main from './main';


//to do: create a second page that takes dynamic segment i.e. user/:ID
const routes = {
    '/': Main
}
const router = new Router (routes);
router.init('#/');

