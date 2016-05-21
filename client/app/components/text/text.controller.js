class TextController {
    constructor($scope,$timeout) {
        "ngInject";
        console.log(this);

        this.$onInit=function () {
            $scope.num=1;
            this.name = 'text';
        };
        this.$onChanges=function (obj) {
            console.log(obj);
        };
        this.$onDestroy=function () {
            console.log("销毁 text");
        };
        this.$postLink=function () {
            console.log("post link");
        };
        
       

        $timeout(()=>{
            // this.create='wjjjj';
            this.create2='aaa';

            this.onDelete();
        },1000)
    }
}

export default TextController;
