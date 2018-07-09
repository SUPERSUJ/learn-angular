import { DiffDirectiveModule } from './diff-directive.module';

describe('DiffDirectiveModule', () => {
  let diffDirectiveModule: DiffDirectiveModule;

  beforeEach(() => {
    diffDirectiveModule = new DiffDirectiveModule();
  });

  it('should create an instance', () => {
    expect(diffDirectiveModule).toBeTruthy();
  });
});
