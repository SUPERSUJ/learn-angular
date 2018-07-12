import { RouteReuseModule } from './route-reuse.module';

describe('RouteReuseModule', () => {
  let routeReuseModule: RouteReuseModule;

  beforeEach(() => {
    routeReuseModule = new RouteReuseModule();
  });

  it('should create an instance', () => {
    expect(routeReuseModule).toBeTruthy();
  });
});
