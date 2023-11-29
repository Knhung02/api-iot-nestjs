import { Module } from '@nestjs/common';
import { IrrigationController } from './irrigation.controller';
import { IrrigationService } from './irrigation.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [IrrigationController],
  providers: [IrrigationService, PrismaService],
})
export class IrrigationModule {}
