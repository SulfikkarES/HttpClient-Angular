import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  providers:[CustomerServiceService]
})
export class CustomerListComponent implements OnInit {

  customerlist:any[]=[];
  constructor(private serviceobj:CustomerServiceService) { }

  ngOnInit(): void {
  //this.customerlist=this.serviceobj.getcustomer();
  this.serviceobj.getcustomerlist().subscribe(data=>{
    this.customerlist=data;
  })
  }

}
