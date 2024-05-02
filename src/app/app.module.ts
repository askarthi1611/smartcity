import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DialogModule } from 'primeng/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select'
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { SharedComponent } from './shared/shared.component';
import { CoreComponent } from './core/core.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { MapviewComponent } from './core/mapview/mapview.component';
import { LayoutComponent } from './shared/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SharedComponent,
    CoreComponent,
    SidebarComponent,
    HeaderComponent,
    MapviewComponent,
    LayoutComponent,    
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,MatSelectModule ,TableModule,DialogModule,ConfirmDialogModule,
    DropdownModule,HttpClientModule,
    ButtonModule,
    MatInputModule, FormsModule, ReactiveFormsModule,
    MatFormFieldModule,
    AppRoutingModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
