import { DynaCreateComModule } from './dyna-create-com.module';

describe('DynaCreateComModule', () => {
  let dynaCreateComModule: DynaCreateComModule;

  beforeEach(() => {
    dynaCreateComModule = new DynaCreateComModule();
  });

  it('should create an instance', () => {
    expect(dynaCreateComModule).toBeTruthy();
  });
});
