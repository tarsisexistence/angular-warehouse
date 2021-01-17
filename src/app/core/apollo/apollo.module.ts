import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ApolloBoostModule, APOLLO_BOOST_CONFIG } from 'apollo-angular-boost';

@NgModule({
  imports: [CommonModule, HttpClientModule, ApolloBoostModule],
  providers: [
    {
      provide: APOLLO_BOOST_CONFIG,
      useValue: {
        uri: 'http://localhost:4201/graphql'
      }
    }
  ]
})
export class MyApolloModule {}
