import {Component, inject, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ToastService} from "../services/ToastService";
import {Router} from "@angular/router";
import {Alert, AlertType} from "../services/Alert";
import {
  MatCell,
  MatCellDef,
  MatColumnDef, MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef, MatRow, MatRowDef, MatTable,
  MatTableDataSource, MatTableModule
} from "@angular/material/table";
import {MatCard} from "@angular/material/card";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatTooltip} from "@angular/material/tooltip";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {HeaderRowOutlet} from "@angular/cdk/table";
import {NgStyle} from "@angular/common";
import {CategoryComponent} from "../category/category.component";
import {ProductComponent} from "../product/product.component";

@Component({
  selector: 'app-manage-product',
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
    MatHint,
    MatSlideToggle
  ],
  templateUrl: './manage-product.component.html',
  styleUrl: './manage-product.component.scss'
})
export class ManageProductComponent implements OnInit {
  displayColumns: string[] = ['sn', 'name', 'category', 'description', 'price', 'edit'];
  dataSource: any;
  length1: any;
  responseMessage: any;
  productService = inject(ProductService);
  ngxUiLoaderService = inject(NgxUiLoaderService);
  matDialog = inject(MatDialog);
  toastService = inject(ToastService);
  router = inject(Router);

  ngOnInit() {
    this.ngxUiLoaderService.start();
    this.tableData();
  }

  tableData() {
    this.productService.getProducts().subscribe({
      next: (response: any) => {
        this.dataSource = new MatTableDataSource(response);
        this.ngxUiLoaderService.stop();
      },
      error: (error: any) => {
        this.ngxUiLoaderService.stop();
        if (error.error.message) {
          this.responseMessage = error.error.message;
          this.toastService.showToastMessage(new Alert(AlertType.ERROR), this.responseMessage);
        }
      }
    });
  }

  applyFilter(event: Event){
    const filterValue  = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  handleAction() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action: 'Add'
    };
    dialogConfig.width = "850px";
    const dialogRef = this.matDialog.open(ProductComponent, dialogConfig);
    this.router.events.subscribe(() => {
      dialogRef.close();
    });
    dialogRef.componentInstance.onAddProduct.subscribe((res) => {
      this.tableData();
    });
  }

  handleEditAction(element: any) {

  }

  deleteCategory(id: any) {

  }

  onChange(checked: boolean, id: any) {

  }
}
