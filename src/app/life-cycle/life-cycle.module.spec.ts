import { LifeCycleModule } from './life-cycle.module';

describe('LifeCycleModule', () => {
  let lifeCycleModule: LifeCycleModule;

  beforeEach(() => {
    lifeCycleModule = new LifeCycleModule();
  });

  it('should create an instance', () => {
    expect(lifeCycleModule).toBeTruthy();
  });
});
