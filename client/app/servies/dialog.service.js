/**
 * Created by wj on 2016/5/23.
 */
export default function DialogService($q) {
    this.confirm = function(message) {
        return $q.when(window.confirm(message || 'Is it OK?'));
    };
}