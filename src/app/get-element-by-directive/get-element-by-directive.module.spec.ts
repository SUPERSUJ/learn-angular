import { GetElementByDirectiveModule } from './get-element-by-directive.module';

describe('GetElementByDirectiveModule', () => {
  let getElementByDirectiveModule: GetElementByDirectiveModule;

  beforeEach(() => {
    getElementByDirectiveModule = new GetElementByDirectiveModule();
  });

  it('should create an instance', () => {
    expect(getElementByDirectiveModule).toBeTruthy();
  });
});
