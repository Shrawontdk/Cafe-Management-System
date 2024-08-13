import {Component, inject, OnInit} from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule} from "@angular/material/dialog";
import {MatButton, MatButtonModule, MatIconButton} from "@angular/material/button";
import {MatToolbar, MatToolbarModule, MatToolbarRow} from "@angular/material/toolbar";
import {MatError, MatFormField, MatHint, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {UserService} from "../services/user.service";
import {Toast} from "ngx-toastr";
import {ToastService} from "../services/ToastService";
import {Alert, AlertType} from "../services/Alert";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {response} from "express";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    MatDialogClose,
    MatIconButton,
    MatToolbar,
    MatToolbarRow,
    MatButton,
    MatDialogActions,
    MatDialogContent,
    MatError,
    MatFormField,
    MatHint,
    MatInput,
    MatLabel,
    MatSuffix,
    NgIf,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule


  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  selectedFileName: string = '';
  // uploadedFileUrl: SafeUrl = '';
  uploadedFileUrl: SafeUrl = '';
  userService= inject(UserService);
  toastService= inject(ToastService);
  sanitizer= inject(DomSanitizer);

  ngOnInit() {
    this.loadProfilePicture();
  }

  onFileSelected(event: Event) {
    const input = (event.target as HTMLInputElement);
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (file) {
        this.selectedFileName = file.name;
        this.uploadFile(file);
      }
    }
  }

  uploadFile(file: File): void {
    this.userService.uploadFile(file).subscribe(
      response => {
        this.toastService.showToastMessage(new Alert(AlertType.SUCCESS), "Uploaded file successfully");
        this.loadProfilePicture();
      },
      error => {
        console.error('Error uploading file', error);
        if(error.error.message){
          this.toastService.showToastMessage(new Alert(AlertType.ERROR), "Error");
        }
      }
    );
  }


  loadProfilePicture(): void {
    this.userService.getProfilePictureUrl().subscribe(
      (response: any) => {
        if (response && typeof response === 'string') {
          this.uploadedFileUrl = this.sanitizer.bypassSecurityTrustUrl(response);
        } else {
          console.error('Invalid response:', response);
        }
      },
      error => {
        console.error('Error loading profile picture', error);
      }
    );
  }

}
