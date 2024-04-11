import { Controller, Get, Delete, Param, Put, Body, Post } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller('api')
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get('getDataFromDatabase')
  async getData() {
    return this.databaseService.getDataFromDatabase();
  }

  @Delete('deleteDataById/:id')
  async deleteDataById(@Param('id') id: number) {
    await this.databaseService.deleteDataById(id);
    return { message: 'Data deleted successfully' };
  }

  @Put('updateDataById/:id')
  async updateDataById(@Param('id') id: number, @Body() updatedData: any) {
    await this.databaseService.updateDataById(id, updatedData);
    return { message: 'Data updated successfully' };
  }


  @Post('addData')
async addData(@Body() newData: any) {
    await this.databaseService.addData(newData);
    return { message: 'Data added successfully' };
}
}