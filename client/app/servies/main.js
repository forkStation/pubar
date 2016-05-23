/**
 * Created by wj on 2016/5/23.
 */
import angular from 'angular';
import CrisisService from './crisis.service';
import HeroService from './heroes.service';
import dialogService from './dialog.service'

export default angular.module('app.service', [])
    .service('crisisService', CrisisService)
    .service('heroService', HeroService)
    .service('dialogService', dialogService)