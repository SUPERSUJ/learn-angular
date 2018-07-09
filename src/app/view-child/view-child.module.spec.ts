import { ViewChildModule } from './view-child.module';

describe('ViewChildModule', () => {
  let viewChildModule: ViewChildModule;

  beforeEach(() => {
    viewChildModule = new ViewChildModule();
  });

  it('should create an instance', () => {
    expect(viewChildModule).toBeTruthy();
  });
});
