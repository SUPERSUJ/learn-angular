import { ContentChildModule } from './content-child.module';

describe('ContentChildModule', () => {
  let contentChildModule: ContentChildModule;

  beforeEach(() => {
    contentChildModule = new ContentChildModule();
  });

  it('should create an instance', () => {
    expect(contentChildModule).toBeTruthy();
  });
});
