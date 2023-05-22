import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Customer } from '../interface/customer.interface';
import { CustomerService } from '../service/customer.service';
import { CreateCustomerDto, DeleteCustomerDto } from '../dto';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  async getAllCustomers(): Promise<Customer[]> {
    return await this.customerService.listCustomer();
  }

  @Get(':id')
  async getCustomerById(@Param('id') id: DeleteCustomerDto): Promise<Customer> {
    return await this.customerService.getCustomer(id);
  }

  @Delete(':id')
  async deleteCustomerById(@Param('id') id: string): Promise<Customer> {
    return await this.customerService.deleteCustomer(id);
  }

  @Put(':id')
  async updateCustomerById(
    @Param('id') id: string,
    @Body() body: any,
  ): Promise<Customer> {
    return await this.customerService.updateCustomer(id, body);
  }

  @Post()
  async createCustomer(@Body() body: CreateCustomerDto) {
    return await this.customerService.createCustomer(body);
  }
}
