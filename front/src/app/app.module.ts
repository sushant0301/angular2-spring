import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {PersonComponent} from './person/person.component';
import {PersonListComponent} from './person-list/person-list.component';
import {TableElementsCountComponent} from './table-elements-count/table-elements-count.component';
import {TablePaginationComponent} from './table-pagination/table-pagination.component';
import {TableSortComponent} from './table-sort/table-sort.component';
import {PersonService} from './person.service'
import {LoginComponent} from './login/login.component';
import {AuthenticationService} from './auth/authentication.service';

const appRoutes: Routes = [
    {path: 'personlist', component: PersonListComponent},
    {path: 'person/:id', component: PersonComponent}
   , {path: '',  component: LoginComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        PersonComponent,
        PersonListComponent,
        TableElementsCountComponent,
        TablePaginationComponent,
        TableSortComponent
      ,        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [PersonService, AuthenticationService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
