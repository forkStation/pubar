class CrisisCenterDetailController {
    constructor(crisisService, dialogService) {
        "ngInject";
        var ctrl = this;
        this.$routerOnActivate = function (next) {
            // Get the crisis identified by the route parameter
            var id = next.params.id;
            crisisService.getCrisis(id).then(function (crisis) {
                if (crisis) {
                    ctrl.editName = crisis.name;
                    ctrl.crisis = crisis;
                } else { // id not found
                    ctrl.gotoCrises();
                }
            });
        };

        this.$routerCanDeactivate = function () {
            // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged.
            if (!this.crisis || this.crisis.name === this.editName) {
                return true;
            }
            // Otherwise ask the user with the dialog service and return its
            // promise which resolves to true or false when the user decides
            return dialogService.confirm('Discard changes?');
        };

        this.cancel = function () {
            ctrl.editName = ctrl.crisis.name;
            ctrl.gotoCrises();
        };

        this.save = function () {
            ctrl.crisis.name = ctrl.editName;
            ctrl.gotoCrises();
        };

        this.gotoCrises = function () {
            var crisisId = ctrl.crisis && ctrl.crisis.id;
            // Pass along the hero id if available
            // so that the CrisisCenterListComponent can select that hero.
            this.$router.navigate(['CrisisCenterList', {id: crisisId}]);
        };
    }

    $onInit() {
        //此函数用于初始化数据
        this.name = 'crisisCenterDetail';
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

export default CrisisCenterDetailController;
