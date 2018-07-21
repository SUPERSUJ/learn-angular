import { ComponentStyleModule } from './component-style.module';

describe('ComponentStyleModule', () => {
  let componentStyleModule: ComponentStyleModule;

  beforeEach(() => {
    componentStyleModule = new ComponentStyleModule();
  });

  it('should create an instance', () => {
    expect(componentStyleModule).toBeTruthy();
  });
});
