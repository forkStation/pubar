class HeroesListController {
    constructor(heroService) {
        "ngInject";
        this.heroService = heroService;

    }

    $routerOnActivate(next) {
        this.heroService.getHeroes().then((heroes)=>{
            this.heroes = heroes;
            this.selectedId = null;
        });
    }

    isSelected(hero) {
        return (hero.id == this.selectedId);
    }

    $onInit() {
        //此函数用于初始化数据
        this.name = 'heroesList';
        this.selectedId = null;
        this.heroes = [];
    }

    $onChanges(obj) {
        //此函数会在this上绑定的值发生改变时调用

    }

    $onDestory() {
        //当前控制器的scope被销毁时调用

    }

    $postLink() {
        //非常重要的函数，所有对dom的操作都应该放在这里
    }


}

export default HeroesListController;
