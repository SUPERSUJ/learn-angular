import { ViewChildrenModule } from './view-children.module';

describe('ViewChildrenModule', () => {
  let viewChildrenModule: ViewChildrenModule;

  beforeEach(() => {
    viewChildrenModule = new ViewChildrenModule();
  });

  it('should create an instance', () => {
    expect(viewChildrenModule).toBeTruthy();
  });
});
