export default {
    name : 'routerMovie',
    path : '/movie',
    component : () => import('@/views/Movie'),
    children : [
        {
            path : '/movie',
            redirect : '/movie/now',
        },
        {
            name : 'routerNow',
            path : 'now',
            component : () => import('@/components/Movie/Now'),
        },
        {
            name : 'routerFuture',
            path : 'future',
            component : () => import('@/components/Movie/Future')
        },
        {
            name : 'routerSearch',
            path : 'search',
            component : () => import('@/components/Movie/Search')
        },
    ]
}