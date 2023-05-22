import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from '../interface/customer.interface';
import { CreateCustomerDto, DeleteCustomerDto } from '../dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel('Customer') private readonly customerModel: Model<Customer>,
  ) {}

  public async listCustomer(): Promise<Customer[]> {
    const customers = await this.customerModel.find({});
    return customers;
  }

  public async createCustomer(customer: CreateCustomerDto): Promise<Customer> {
    return await this.customerModel.create(customer);
  }

  public async updateCustomer(
    id: string,
    customer: CreateCustomerDto,
  ): Promise<Customer> {
    const customerDoc = await this.customerModel.findByIdAndUpdate(
      id,
      customer,
      {
        new: true,
      },
    );

    return customerDoc;
  }

  public async deleteCustomer(id: string): Promise<Customer> {
    return await this.customerModel.findByIdAndRemove(id);
  }

  public async getCustomer(id: DeleteCustomerDto): Promise<Customer> {
    try {
      const customer = await this.customerModel.findById(id);
      if (!customer) throw new NotFoundException('Customer not found!');
      return customer;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
