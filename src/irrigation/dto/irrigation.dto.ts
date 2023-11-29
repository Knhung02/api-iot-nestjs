import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class addDataDto {
  @IsBoolean()
  @IsOptional()
  pumpStatus?: boolean = false;

  @IsNumber()
  temperature: number;

  @IsNumber()
  fahrenheit: number;

  @IsNumber()
  humidity: number;

  @IsNumber()
  soilHumidity: number;
}
export class updateDataDto {
  @IsBoolean()
  @IsOptional()
  setPump?: boolean = false;

  @IsNumber()
  setMode: number;
}
