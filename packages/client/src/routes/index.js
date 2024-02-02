import IndexPage from "../pages/IndexPage";
import Vk from "../pages/Vk";


const routes = [
    {
        path: '/',
        component: <IndexPage/>,
    },
    {
        path: '/vk',
        component: <Vk/>,
    },
]

export default routes;