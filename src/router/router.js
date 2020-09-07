import Vue from "vue";
import Router from "vue-router"
import ContactList from "../components/ContactList";
import Info from "../components/Info";

Vue.use(Router);

let router = new Router({
    routes:[
        {
            path: '/',
            name: 'list',
            component: ContactList,
            props: true
        },
        {
            path: '/info/:contactId',
            name: 'info',
            component: Info,
            props: true
        }
    ]
})

export default router;
