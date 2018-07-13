import { ComponentFactoryResolverModule } from './component-factory-resolver.module';

describe('ComponentFactoryResolverModule', () => {
  let componentFactoryResolverModule: ComponentFactoryResolverModule;

  beforeEach(() => {
    componentFactoryResolverModule = new ComponentFactoryResolverModule();
  });

  it('should create an instance', () => {
    expect(componentFactoryResolverModule).toBeTruthy();
  });
});
