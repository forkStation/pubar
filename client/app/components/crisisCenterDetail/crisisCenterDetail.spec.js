import CrisisCenterDetailModule from './crisisCenterDetail'
import CrisisCenterDetailController from './crisisCenterDetail.controller';
import CrisisCenterDetailComponent from './crisisCenterDetail.component';
import CrisisCenterDetailTemplate from './crisisCenterDetail.html';

describe('CrisisCenterDetail', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CrisisCenterDetailModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CrisisCenterDetailController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(CrisisCenterDetailTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CrisisCenterDetailComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CrisisCenterDetailTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CrisisCenterDetailController);
      });
  });
});
