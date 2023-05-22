import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from '../interface/customer.interface';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel('Customer') private readonly customerModel: Model<Customer>,
  ) {}

  public async listCustomer(): Promise<Customer[]> {
    const customers = await this.customerModel.find({});
    return customers;
  }

  public async getCustomer(id: string): Promise<Customer> {
    const customer = await this.customerModel.findById(id);
    return customer;
  }
}
