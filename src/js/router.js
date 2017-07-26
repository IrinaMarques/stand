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
                        component  : 'dashboard/newArticle/NewArticleBasicData', 
                        routes     : []
                    }, 
                    {
                        path       : '/more-details',
                        component  : 'dashboard/newArticle/NewArticleMoreDetails', 
                        routes     : []
                    }, 
                    {
                        path       : '/images',
                        component  : 'dashboard/newArticle/NewArticleImages', 
                        routes     : []
                    }
                ]
            }, {
                path       : '/entry',
                component  : 'dashboard/landingPage/LandingPage', 
                routes     : [
                    {
                        path       : '/last-messages',
                        component  : 'dashboard/landingPage/LastMessages', 
                        routes     : []
                    },
                    {
                        path       : '/general-statistics',
                        component  : 'dashboard/landingPage/GeneralStatistics', 
                        routes     : []
                    },
                    {
                        path       : '/articles-statistics',
                        component  : 'dashboard/landingPage/ArticlesStatistics', 
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