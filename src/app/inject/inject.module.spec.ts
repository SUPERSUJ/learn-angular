import { InjectModule } from './inject.module';

describe('InjectModule', () => {
  let injectModule: InjectModule;

  beforeEach(() => {
    injectModule = new InjectModule();
  });

  it('should create an instance', () => {
    expect(injectModule).toBeTruthy();
  });
});
