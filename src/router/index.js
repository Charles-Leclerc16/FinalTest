import { createRouter, createWebHashHistory } from 'vue-router'
import ContainerComp from '../components/ContainerComp'
//import StudentCl from '../components/StudentCl'
import HomePage from '../components/HomePage'
import CourseComp from '../components/CourseComp'
import ScoreComp from '../components/ScoreComp'

const routes = [ {
    path: "/",
    name: "main",
    component: ContainerComp,
    children:[
        {
            path: "student",
            name: "student",
            component: HomePage,
        },
         {
             path: "course",
             name: "course",
             component: CourseComp,
         },
         {
            path: "score",
            name: "score",
            component: ScoreComp,
        },
    ]
    }
]

const router = createRouter({
    history : createWebHashHistory(),
    routes : routes
})

export default router;