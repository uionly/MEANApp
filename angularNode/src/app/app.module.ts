import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RecordService } from './Services/record.service';
import { AppComponent } from './app.component';
import {DataTableModule} from "angular-6-datatable";
 import { BsModalModule } from 'ng2-bs3-modal';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DataTableModule,
BsModalModule
  ],
  providers: [RecordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
