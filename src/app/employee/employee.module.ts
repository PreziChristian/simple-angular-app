import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowdataComponent } from './showdata/showdata.component';
import { RouterModule, Routes } from '@angular/router';
import { UpdateDataComponent } from './update-data/update-data.component';
import { InsertdataComponent } from './insertdata/insertdata.component';
import { AuthGuard } from '../auth.guard';
import {MatTableModule} from '@angular/material/table'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponentComponent } from './home-component/home-component.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';

const routes: Routes = [
  { path: 'update/:id', component: UpdateDataComponent ,canActivate: [AuthGuard]},
  {
    path: 'insert',
    component: InsertdataComponent,canActivate: [AuthGuard]
  },
  {
    path: 'view',
    component: ShowdataComponent, canActivate: [AuthGuard]
  },
  {
    path:'',component:HomeComponentComponent,canActivate: [AuthGuard]
  }
 
];

@NgModule({
  declarations: [
   HomeComponentComponent, InsertdataComponent,ShowdataComponent,UpdateDataComponent
  ],
  imports: [RouterModule.forChild(routes),FormsModule,MatButtonModule,ReactiveFormsModule,CommonModule,MatTableModule,MatTooltipModule,MatPaginatorModule],  
  exports: [RouterModule,HomeComponentComponent]  
})
export class EmployeeModule {}
