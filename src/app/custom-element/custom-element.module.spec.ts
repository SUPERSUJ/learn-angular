import { CustomElementModule } from './custom-element.module';

describe('CustomElementModule', () => {
  let customElementModule: CustomElementModule;

  beforeEach(() => {
    customElementModule = new CustomElementModule();
  });

  it('should create an instance', () => {
    expect(customElementModule).toBeTruthy();
  });
});
