export default {
    path : '/buy',
    component : () => import ('@/views/Select_Buy'),
    children : [
        {
            name : 'routerBuy',
            path : '/buy',
            redirect : '/buy/select'
        },
        {
            name : 'routerSelect',
            path : 'select',
            component : () => import('@/components/Buy/Select')
        },
        {
            name : 'routerPay',
            path : 'pay',
            component : () => import('@/components/Buy/Pay')
        },
        {
            name : 'routerQrCode',
            path : 'qrcode',
            component : () => import('@/components/Buy/QrCode')
        },
    ]
}