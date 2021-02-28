/**
 * name: service.component.ts
 * Author: Sarah Massie
 * Date: 25 February 2021
 * Description: Service component to calculate price
 */

import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { InvoiceDialogComponent } from '../invoice-dialog/invoice-dialog.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent implements OnInit {

   //arrays initialization
   selectedServices = [];
   checkedIDs = [];
   checkedPrices = [];

   //var initialization
   total: number;
   partsCost = 0;
   laborCost = 0;


   constructor(private dialog: MatDialog) {}

   //function to open dialog and passing prices
   onSubmit() {
     const dialogRef = this.dialog.open(InvoiceDialogComponent, {
       width: '40%',
       data: {
         selectedServices: this.selectedServices,
         total: this.total,
         partsCost: this.partsCost,
         laborCost: this.laborCost}
     });
   }

   //checkbox array
   services = [
      {
         name: "Password Reset",
         price: 39.99,
         id: 'passwordReset',
         isChecked: false
       },
       {
         name: "Spyware Removal",
         price: 99.99,
         id: 'spywareRemoval',
         isChecked: false
       },
       {
         name: "Ram Upgrade",
         price: 129.99,
         id: 'ramUpgrade',
         isChecked: false
       },
       {
         name: "Spyware Installation",
         price: 49.99,
         id: 'spywareInstallation',
         isChecked: false
       },
       {
         name: "Tune Up",
         price: 89.99,
         id: 'tuneUp',
         isChecked: false
       },
       {
         name: "Keyboard Cleaning",
         price: 45.00,
         id: 'keyboardCleaning',
         isChecked: false
       },
       {
         name: "Disk Clean Up",
         price: 149.99,
         id: 'diskCleanUp',
         isChecked: false
       }
   ]

   ngOnInit(): void {
     this.total = 0;
     this.addServices()
     this.addPrice()
   }

   //function to reset total on change an call others to get new total as well as checkedIDs
   changeSelection() {
     this.total = 0;
     this.addServices()
     this.addPrice()
   }

   addServices() {
     this.selectedServices = this.services.filter((price, index) => {
       return price.isChecked
     });
   }

   // pushes checkedIDs to array and grabs price from that item to add to total
   addPrice() {
     this.checkedIDs = []
     this.services.forEach((price, index) => {

       if (price.isChecked) {
         this.checkedIDs.push(price.id);
         this.total += price.price;
       }
     });

   }
}
