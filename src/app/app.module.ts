import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeModule} from './pages/home/home.module';
import {NotFoundModule} from './pages/not-found/not-found.module';
import {SnackbarModule} from './components/snackbar/snackbar.module';
import {AuthModule} from './pages/auth/auth.module';
import {ProfileModule} from './pages/profile/profile.module';
import {SearchModule} from './pages/search/search.module';
import {SpinnerModule} from './components/spinner/spinner.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeModule,
        NotFoundModule,
        SnackbarModule,
        AuthModule,
        ProfileModule,
        SearchModule,
        SpinnerModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
