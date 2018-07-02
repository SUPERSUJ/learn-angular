import { CommunicateModule } from './communicate.module';

describe('CommunicateModule', () => {
  let communicateModule: CommunicateModule;

  beforeEach(() => {
    communicateModule = new CommunicateModule();
  });

  it('should create an instance', () => {
    expect(communicateModule).toBeTruthy();
  });
});
