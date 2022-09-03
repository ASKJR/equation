
import { NgModule } from '@angular/core';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button'

@NgModule({
  exports: [
    NzLayoutModule,
    NzProgressModule,
    NzGridModule,
    NzInputModule,
    NzButtonModule
  ]
})
export class NgZorroAntdModule {

}
