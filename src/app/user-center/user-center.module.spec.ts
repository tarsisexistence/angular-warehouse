import { UserCenterModule } from '@user-center/user-center.module';

describe('UserCenterModule', () => {
  let userCenterModule: UserCenterModule;

  beforeEach(() => {
    userCenterModule = new UserCenterModule();
  });

  it('should create an instance', () => {
    expect(userCenterModule).toBeTruthy();
  });
});
