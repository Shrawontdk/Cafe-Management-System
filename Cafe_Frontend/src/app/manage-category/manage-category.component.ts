import {Component, inject, OnInit} from '@angular/core';
import {CategoryService} from "../services/category.service";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {MatDialog} from "@angular/material/dialog";
import {ToastService} from "../services/ToastService";
import {Router} from "@angular/router";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatRow,
  MatTable,
  MatTableDataSource, MatTableModule
} from "@angular/material/table";
import {Alert, AlertType} from "../services/Alert";
import {MatCard} from "@angular/material/card";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {HeaderRowOutlet} from "@angular/cdk/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTooltip} from "@angular/material/tooltip";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-manage-category',
  standalone: true,
  imports: [
    MatLabel,
    MatCard,
    MatButton,
    MatFormField,
    MatInput,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    HeaderRowOutlet,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    MatIconButton,
    MatTooltip,
    MatHeaderRow,
    MatRow,
    MatTableModule,
    NgStyle,
    MatHint
  ],
  templateUrl: './manage-category.component.html',
  styleUrl: './manage-category.component.scss'
})
export class ManageCategoryComponent implements OnInit {
  displayColumns: string[] = ['name', 'edit'];
  dataSource: any;
  responseMessage: any;
  categoryService = inject(CategoryService);
  ngxUiLoaderService = inject(NgxUiLoaderService);
  dialog = inject(MatDialog);
  toastService = inject(ToastService);
  router = inject(Router);

  ngOnInit() {
    this.ngxUiLoaderService.start();
    this.tableData();
  }

  private tableData() {
    this.categoryService.getCategory().subscribe({
      next: (res: any) => {
        this.ngxUiLoaderService.stop();
        this.dataSource = new MatTableDataSource(res);

      }, error: (err: any) => {
        this.ngxUiLoaderService.stop();
        if (err.error.message) {
          this.toastService.showToastMessage(new Alert(AlertType.ERROR), err.error.message)
        }
      }
    })
  }

  applyFilter(event: any){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  handleAddAction() {

  }

  handleEditAction(element: any) {

  }
}
