import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteComponent } from './autocomplete.component';
import { BoldPrefix } from './boldprefix.pipe';
import { AutoCompleteService } from './auto-complete.service';
import { FormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';

export * from './autocomplete.component';
export * from './boldprefix.pipe';
export * from './auto-complete.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    AutoCompleteComponent,
    BoldPrefix
  ],
  exports: [
    AutoCompleteComponent,
    BoldPrefix
  ]
})
export class AutoCompleteModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AutoCompleteModule,
      providers: []
    };
  }
}
