import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
  ApolloBoostModule,
  APOLLO_BOOST_CONFIG
} from 'apollo-angular-boost';

const uri = 'http://localhost:4000/graphql';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ApolloBoostModule
  ],
  providers: [
    {
      provide: APOLLO_BOOST_CONFIG,
      useValue: {
        uri
      }
    }
  ]
})
export class MyApolloModule {
}
