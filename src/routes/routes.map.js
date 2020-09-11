import Home from '@/pages/home/Home';
import Countries from '@/pages/countries/Countries';
import Country from '@/pages/countries/Country';

import PageNotFound from '@/pages/errors/PageNotFound'

const routes = [

    {
        path: '/',
        component: () => import('@/layouts/DefaultTemplate'),
        children: [   
            {
                path: '',
                component: Home,
                name: 'home'
            },

            {
                path: 'paises',
                component: Countries,
                name: 'countries'
            },

            {
                path: 'pais/:country_name/mais-info',
                component: Country,
                name: 'country',
                props: true
            }
        ]
    },

    {
        path: '*',
        component: PageNotFound
    }
]

export default routes