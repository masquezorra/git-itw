define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        activate: function () {
            router.map([
                { route: '', title:'Welcome', moduleId: 'viewmodels/welcome', nav: true, menu : '<i class="fa fa-home"></i>' },
                { route: 'livros', moduleId: 'viewmodels/livros', nav: true, menu: '<i class="fa fa-book">Livros</i>' },
                { route: 'autores', moduleId: 'viewmodels/autores', nav: true, menu: '<i class="fa fa-user-secret">Autores</i>' },
                { route: 'top', moduleId: 'viewmodels/top', nav: true, menu: '<i class="fa fa-arrow-up">Top10</i>' }
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});