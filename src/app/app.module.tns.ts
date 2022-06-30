import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';


import { QueryModule } from './query/query.module.tns';
import { AppRoutingModule } from './app-routing.module.tns';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule,
    QueryModule
  ],
  // HttpClientInMemoryWebApiModule.forRoot (
  //   InMemoryDataService, { dataEncapsulation:false}
  // )
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
