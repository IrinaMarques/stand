export default [
    {
        path      : '/dashboard',
        component : 'dashboard/Dashboard', 
        indexRoute: 0,
        routes    : [
            {
                path      : '/entry',
                component : 'dashboard/landingPage/LandingPage', 
                indexRoute: 0,
                routes    : [
                    {
                        path     : '/last-messages',
                        async    : false,
                        component: 'dashboard/landingPage/LastMessages', 
                        routes   : []
                    },
                    {
                        path     : '/general-statistics',
                        async    : false,
                        component: 'dashboard/landingPage/GeneralStatistics', 
                        routes   : []
                    },
                    {
                        path     : '/articles-statistics',
                        async    : false,
                        component: 'dashboard/landingPage/ArticlesStatistics', 
                        routes   : []
                    }
                ]
            },
            {
                path      : '/new-article',
                component : 'dashboard/newArticle/NewArticle',
                indexRoute: 0,
                routes    : [
                    {
                        path     : '/basic-information',
                        async    : false,
                        component: 'dashboard/newArticle/NewArticleBasicData', 
                        routes   : []
                    }, 
                    {
                        path     : '/more-details',
                        async    : false,
                        component: 'dashboard/newArticle/NewArticleMoreDetails', 
                        routes   : []
                    }, 
                    {
                        path     : '/images',
                        async    : false,
                        component: 'dashboard/newArticle/NewArticleImages', 
                        routes   : []
                    }
                ]
            }
        ]
    },
    {
        path       : '/stand',
        component: 'stand/Stand', 
        indexRoute: 0,
        routes     : [
            {
                path: '/entry',
                component: 'stand/home/Home', 
                routes:[]
            },
            {
                path: '/new-products',
                component: 'stand/newProducts/NewProducts', 
                routes:[]
            },
            {
                path: '/opportunities',
                component: 'stand/opportunities/Opportunities', 
                routes:[]
            }
        ]
    },
    {
        path       : '/ui-style-guide',
        component  : 'uiStyleGuide/UIStyleGuide', 
        routes     : []
    }
];