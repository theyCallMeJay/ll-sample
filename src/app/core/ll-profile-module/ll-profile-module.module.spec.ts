import { LlProfileModuleModule } from './ll-profile-module.module';

describe('LlProfileModuleModule', () => {
  let llProfileModuleModule: LlProfileModuleModule;

  beforeEach(() => {
    llProfileModuleModule = new LlProfileModuleModule();
  });

  it('should create an instance', () => {
    expect(llProfileModuleModule).toBeTruthy();
  });
});
