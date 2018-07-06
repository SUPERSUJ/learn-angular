import { RecursiveModule } from './recursive.module';

describe('RecursiveModule', () => {
  let recursiveModule: RecursiveModule;

  beforeEach(() => {
    recursiveModule = new RecursiveModule();
  });

  it('should create an instance', () => {
    expect(recursiveModule).toBeTruthy();
  });
});
