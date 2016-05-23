class CrisisCenterListController {
    constructor(crisisService) {
        "ngInject";
        var selectedId = null;
        var ctrl = this;

        this.$routerOnActivate = function(next) {
            console.log('$routerOnActivate', this, arguments);
            // Load up the crises for this view
            crisisService.getCrises().then(function(crises) {
                ctrl.crises = crises;
                selectedId = next.params.id;
            });
        };

        this.isSelected = function(crisis) {
            return (crisis.id == selectedId);
        };

        this.onSelect = function(crisis) {
            this.$router.navigate(['CrisisCenterDetail', { id: crisis.id }]);
        };
    }

    $onInit() {
        //此函数用于初始化数据
        this.name = 'crisisCenterList';

    }

    isSelected(crisis) {
        return (crisis.id == selectedId);
    }

    onSelect(crisis) {
        //this.$router.navigate(['CrisisDetail', { id: crisis.id }]);
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

export default CrisisCenterListController;
