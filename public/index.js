import {Router} from 'director/build/director';
import Main from './main';

//to do: create a second page that takes dynamic segment i.e. user/:ID
const routes = {
    '/': Main
}
const router = new Router (routes);
router.init('#/');

