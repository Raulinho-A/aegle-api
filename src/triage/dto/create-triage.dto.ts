import {
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export enum Sex {
  Masculino = 'M',
  Femenino = 'F',
}

export enum ArrivalMode {
  Caminando = 'Caminando',
  AmbulanciaPublica = 'Ambulancia pública',
  VehiculoPrivado = 'Vehículo privado',
  AmbulanciaPrivada = 'Ambulancia privada',
  Otro = 'Otro',
}

export enum MentalStatus {
  Alerta = 1,
  Verbal = 2,
  Dolor = 3,
  SinRespuesta = 4,
}

export class CreateTriageDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(2)
  group?: number = 2; // Por defecto: Regional

  @IsInt()
  @Min(0)
  @Max(120)
  age: number;

  @IsEnum(Sex)
  sex: Sex;

  @IsEnum(ArrivalMode)
  arrivalMode: ArrivalMode;

  @IsInt()
  injury: number;

  @IsEnum(MentalStatus)
  mental: MentalStatus;

  @IsInt()
  nrsPain: number;

  @IsNumber()
  sbp: number;

  @IsNumber()
  hr: number;

  @IsNumber()
  rr: number;

  @IsNumber()
  bt: number;

  @IsString()
  symptoms: string;

  @IsOptional()
  @IsString()
  description?: string;
}
