import { ApolloModule } from './apollo.module';

describe('ApolloModule', () => {
  let apolloModule: ApolloModule;

  beforeEach(() => {
    apolloModule = new ApolloModule();
  });

  it('should create an instance', () => {
    expect(apolloModule).toBeTruthy();
  });
});
