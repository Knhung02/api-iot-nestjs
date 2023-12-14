import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { Irrigation } from '@prisma/client';
import { addDataDto, updateDataDto } from './dto/irrigation.dto';
import { IrrigationService } from './irrigation.service';

@Controller('irrigation')
export class IrrigationController {
  constructor(private irrigationService: IrrigationService) {}
  @Post()
  async addNewData(@Body() body: addDataDto): Promise<Irrigation> {
    return this.irrigationService.addData(body);
  }

  @Get('')
  async findDataById() {
    return await this.irrigationService.findDataById();
  }
  @Patch('')
  async updateTestById(@Body() body: updateDataDto) {
    return await this.irrigationService.updateTestById(body);
  }
}
