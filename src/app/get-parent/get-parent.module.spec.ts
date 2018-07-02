import { GetParentModule } from './get-parent.module';

describe('GetParentModule', () => {
  let getParentModule: GetParentModule;

  beforeEach(() => {
    getParentModule = new GetParentModule();
  });

  it('should create an instance', () => {
    expect(getParentModule).toBeTruthy();
  });
});
