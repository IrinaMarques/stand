export default [
    {
        path       : '/dashboard',
        component  : 'dashboard/Dashboard', 
        routes     : [
            {
                path     : '/new-article',
                component: 'dashboard/newArticle/NewArticle', 
                routes     : [
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
            }, {
                path       : '/entry',
                component  : 'dashboard/landingPage/LandingPage', 
                routes     : [
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
            }
        ]
    },
    {
        path       : '/ui-style-guide',
        component  : 'uiStyleGuide/UIStyleGuide', 
        routes     : []
    }
];