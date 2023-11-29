import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { addDataDto, updateDataDto } from './dto/irrigation.dto';
import { Irrigation } from '@prisma/client';
interface manage {
  pumpStatus: boolean;
  temperature: number;
  fahrenheit: number;
  humidity: number;
  setPump: boolean;
  setMode: number;
  soilHumidity: number;
}
@Injectable()
export class IrrigationService {
  constructor(private prismaService: PrismaService) {}
  manages: manage[] = [];
  manage: manage = {
    pumpStatus: false,
    temperature: 0,
    fahrenheit: 0,
    humidity: 0,
    soilHumidity: 0,
    setPump: false,
    setMode: 0,
  };

  async addData(addDataDto: addDataDto): Promise<any> {
    this.manage.pumpStatus = addDataDto.pumpStatus;
    this.manage.temperature = addDataDto.temperature;
    this.manage.fahrenheit = addDataDto.fahrenheit;
    this.manage.humidity = addDataDto.humidity;
    this.manage.soilHumidity = addDataDto.soilHumidity;
    return {
      statusCode: HttpStatus.CREATED,
      data: this.manage,
      message: 'Success',
      error: '',
    };
  }
  async findDataById(): Promise<any> {
    return {
      statusCode: HttpStatus.OK,
      data: this.manage,
      message: 'Success',
      error: '',
    };
  }
  async updateTestById(updateDataDto: updateDataDto): Promise<any> {
    this.manage.setPump = updateDataDto.setPump;
    this.manage.setMode = updateDataDto.setMode;
    return {
      statusCode: HttpStatus.OK,
      data: this.manage,
      message: 'Success',
      error: '',
    };
  }
}
