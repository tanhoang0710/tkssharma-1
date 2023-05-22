import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
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

  @Delete(':id')
  async deleteCustomerById(@Param('id') id: string): Promise<Customer> {
    return await this.customerService.deleteCustomer(id);
  }

  @Patch(':id')
  async updateCustomerById(
    @Param('id') id: string,
    @Body() body: any,
  ): Promise<Customer> {
    return await this.customerService.updateCustomer(id, body);
  }
}
