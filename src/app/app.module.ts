import { DummyComponent } from './admin/dummy-component/dummy-component.component';
import { AdminMainComponent } from './admin/admin-main/admin-main.component';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './shared/components/top-menu/top-menu.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WebService } from './services/web-service.service';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    SpinnerComponent,
    AdminMainComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,   
    RouterModule.forRoot([
      { path: '', component: AdminMainComponent },
    ]),
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
