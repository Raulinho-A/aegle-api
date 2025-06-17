import { Sex } from 'src/shared/enums/sex.enum';
import { CreateTriageDto } from '../dto/create-triage.dto';

export function mapToModelInput(dto: CreateTriageDto): Record<string, any> {
  return {
    Group: dto.group ?? 2,
    Sex: dto.sex === Sex.Femenino ? 1 : 2,
    Age: dto.age,
    'Arrival mode': mapArrivalMode(dto.arrivalMode),
    Injury: dto.injury,
    Mental: dto.mental,
    NRS_pain: dto.nrsPain,
    SBP: dto.sbp,
    HR: dto.hr,
    RR: dto.rr,
    BT: dto.bt,
  };
}

function mapArrivalMode(mode: string): number {
  switch (mode) {
    case 'Caminando':
      return 1;
    case 'Ambulancia pública':
      return 2;
    case 'Vehículo privado':
      return 3;
    case 'Ambulancia privada':
      return 4;
    case 'Otro':
      return 5;
    default:
      return 7;
  }
}
