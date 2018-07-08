import { ElementRefModule } from './element-ref.module';

describe('ElementRefModule', () => {
  let elementRefModule: ElementRefModule;

  beforeEach(() => {
    elementRefModule = new ElementRefModule();
  });

  it('should create an instance', () => {
    expect(elementRefModule).toBeTruthy();
  });
});
