import { MyApolloModule } from './apollo.module';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';

describe('ApolloModule', () => {
  let apolloModule: MyApolloModule;
  let apollo: Apollo;
  let httpLink: HttpLink;

  // beforeEach(() => {
  //   apolloModule = new MyApolloModule(apollo, httpLink);
  // });
  //
  // it('should create an instance', () => {
  //   expect(apolloModule).toBeTruthy();
  // });
});
