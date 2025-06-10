import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export enum Sex {
  Masculino = 'M',
  Femenino = 'F',
}

export enum Disposition {
  Traslado = 'Traslado',
  Ingreso = 'Ingreso a sala',
  UCI = 'UCI',
  Alta = 'Alta',
  Muerte = 'Muerte',
  Cirugia = 'Cirugía',
}

export enum MentalStatus {
  Alerta = 'Alerta',
  Verbal = 'Verbal',
  Dolor = 'Dolor',
  SinRespuesta = 'Sin respuesta',
}

export enum ArrivalMode {
  Caminando = 'Caminando',
  AmbulanciaPublica = 'Ambulancia pública',
  VehiculoPrivado = 'Vehículo privado',
  AmbulanciaPrivada = 'Ambulancia privada',
  Otro = 'Otro',
}

export enum TriageCategory {
  Uno = '1',
  Dos = '2',
  Tres = '3',
  Cuatro = '4',
  Cinco = '5',
}

export class CreateTriageDto {
  @IsInt()
  @Min(0)
  @Max(120)
  age: number;

  @IsEnum(Sex)
  sex: Sex;

  @IsString()
  symptoms: string;

  @IsBoolean()
  pain: boolean;

  @IsBoolean()
  injury: boolean;

  @IsEnum(MentalStatus)
  mental: MentalStatus;

  @IsEnum(ArrivalMode)
  arrivalMode: ArrivalMode;

  @IsString()
  @IsEnum(Disposition)
  disposition: Disposition;

  @IsEnum(TriageCategory)
  triageCategory: TriageCategory;

  @IsOptional()
  @IsString()
  description?: string;
}
