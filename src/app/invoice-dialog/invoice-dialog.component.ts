/**
 * Title: invoice-dialog.component.ts
 * Author: Sarah Massie
 * Date: 25 February 2021
 * Description: Service component to calculate price
 */

import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { formatDate } from "@angular/common";

@Component({
  selector: 'app-invoice-dialog',
  templateUrl: './invoice-dialog.component.html',
  styleUrls: ['./invoice-dialog.component.css']
})
export class InvoiceDialogComponent implements OnInit {

  @Input() selectedServices;
  @Input() total: number;
  @Input() partsCost: number;
  @Input() laborCost: number;

  orderDate: number = Date.now();

  constructor(private dialogRef: MatDialogRef<InvoiceDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.laborCost = data.laborCost * 50,
    this.total = data.total,
    this.partsCost = data.partsCost,
    this.selectedServices = data.selectedServices
  }

  ngOnInit(): void {
  }

}
