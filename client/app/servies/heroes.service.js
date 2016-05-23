/**
 * Created by wj on 2016/5/23.
 */
export default function HeroService($q) {
    'ngInject';
    var heroesPromise = $q.when([
        { id: 11, name: 'Mr. Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' }
    ]);

    this.getHeroes = function() {
        return heroesPromise;
    };

    this.getHero = function(id) {
        return heroesPromise.then(function(heroes) {
            for(var i=0; i<heroes.length; i++) {
                if ( heroes[i].id == id) return heroes[i];
            }
        });
    };
}