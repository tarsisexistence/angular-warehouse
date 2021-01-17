import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Order } from 'core/shared/interfaces/order.interface';

type Subtotal = number;

@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<PaymentComponent>,
    @Inject(MAT_DIALOG_DATA) public subtotal: Subtotal
  ) {}

  public ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(15)]],
      address: ['', [Validators.required]]
    });
  }

  public payment(form: FormGroup): void {
    if (form.invalid) {
      return;
    }

    const contact: Order = form.value;
    this.dialogRef.close(contact);
  }
}
