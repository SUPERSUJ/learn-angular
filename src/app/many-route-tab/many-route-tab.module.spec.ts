import { ManyRouteTabModule } from './many-route-tab.module';

describe('ManyRouteTabModule', () => {
  let manyRouteTabModule: ManyRouteTabModule;

  beforeEach(() => {
    manyRouteTabModule = new ManyRouteTabModule();
  });

  it('should create an instance', () => {
    expect(manyRouteTabModule).toBeTruthy();
  });
});
