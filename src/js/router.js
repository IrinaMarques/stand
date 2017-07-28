export default [
    {
        path       : '/dashboard',
        component  : 'dashboard/Dashboard', 
        routes     : [
            {
                path       : '/new-article',
                component  : 'dashboard/newArticle/NewArticle', 
                routes     : [
                    {
                        path       : '/basic-information',
                        async: false,
                        component  : require('./views/dashboard/newArticle/NewArticleBasicData'), 
                        routes     : []
                    }, 
                    {
                        path       : '/more-details',
                        async: false,
                        component  : require('./views/dashboard/newArticle/NewArticleMoreDetails'), 
                        routes     : []
                    }, 
                    {
                        path       : '/images',
                        component  : require('./views/dashboard/newArticle/NewArticleImages'), 
                        routes     : []
                    }
                ]
            }, {
                path       : '/entry',
                component  : 'dashboard/landingPage/LandingPage', 
                routes     : [
                    {
                        path       : '/last-messages',
                        component  : require('./views/dashboard/landingPage/LastMessages'), 
                        routes     : []
                    },
                    {
                        path       : '/general-statistics',
                        component  : require('./views/dashboard/landingPage/GeneralStatistics'), 
                        routes     : []
                    },
                    {
                        path       : '/articles-statistics',
                        component  : require('./views/dashboard/landingPage/ArticlesStatistics'), 
                        routes     : []
                    }
                ]
            }
        ]
    },
    {
        path       : '/components',
        component  : 'guidelines/Guidelines', 
        routes     : []
    }
];