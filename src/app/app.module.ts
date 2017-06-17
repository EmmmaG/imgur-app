import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { displayComponent } from './display/display.component';
import { uploadComponent } from './upload/upload.component';

import { DisplayService } from './display/display.service';
import { UploadService } from './upload/upload.service';

@NgModule({
  declarations: [
    AppComponent,
    displayComponent,
    uploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DisplayService, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
