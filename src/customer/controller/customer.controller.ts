import { Controller, Get, Param } from '@nestjs/common';
import { Customer } from '../interface/customer.interface';
import { CustomerService } from '../service/customer.service';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  async getAllCustomers(): Promise<Customer[]> {
    return await this.customerService.listCustomer();
  }

  @Get(':id')
  async getCustomerById(@Param('id') id: string): Promise<Customer> {
    return await this.customerService.getCustomer(id);
  }
}
