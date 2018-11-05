import { LlLoginModuleModule } from './ll-login-module.module';

describe('LlLoginModuleModule', () => {
  let llLoginModuleModule: LlLoginModuleModule;

  beforeEach(() => {
    llLoginModuleModule = new LlLoginModuleModule();
  });

  it('should create an instance', () => {
    expect(llLoginModuleModule).toBeTruthy();
  });
});
