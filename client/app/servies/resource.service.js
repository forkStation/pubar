/**
 * Created by wj on 2016/5/24.
 */
export default class Resource {
    constructor($resource) {
        'ngInject';
        console.log($resource);
        this._resource = $resource;
    }

    /**
     *
     * @param url 一个参数化的url模板，带有前缀参数(如：/user/:userId/card/:cardId)
     * @param paramDefaults url参数的默认值，可以在actions当中重写{userId:123, cardId:'@id'}
     *        如果参数值是一个函数
     * @param actions 自行定义动词方法
     * {action1: {method:?, params:?, isArray:?, headers:?, ...},
     *  action2: {method:?, params:?, isArray:?, headers:?, ...},
     * @param options
     *
     *
     * example：
     *  var User = $resource('/user/:userId', {userId:'@id'});
        User.get({userId:123}, function(user) {
            user.abc = true;
            user.$save();
        });
     *
     */
    add(url, paramDefaults, actions, options) {
        console.log("添加");
        return this._resource(url, paramDefaults, actions, options)
    }
}