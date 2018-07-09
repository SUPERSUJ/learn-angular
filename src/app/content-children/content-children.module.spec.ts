import { ContentChildrenModule } from './content-children.module';

describe('ContentChildrenModule', () => {
  let contentChildrenModule: ContentChildrenModule;

  beforeEach(() => {
    contentChildrenModule = new ContentChildrenModule();
  });

  it('should create an instance', () => {
    expect(contentChildrenModule).toBeTruthy();
  });
});
