import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShowdataComponent } from './employee/showdata/showdata.component';

import { AuthGuard } from './auth.guard';
import { InsertdataComponent } from './employee/insertdata/insertdata.component';
import { UpdateDataComponent } from './employee/update-data/update-data.component';
import { EmployeeModule } from './employee/employee.module';

const routes: Routes = [
  {
    path:'',redirectTo:'/home',  pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
 {
  path:'home',
  loadChildren:()=>import('./employee/employee.module').then(m=> m.EmployeeModule)
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
