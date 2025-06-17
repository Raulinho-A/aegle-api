import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { CreateTriageDto } from './dto/create-triage.dto';
import { mapToModelInput } from './mapper/triage-model.mapper';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TriageClassifierService {
  constructor(
    private httpService: HttpService,
    private config: ConfigService,
  ) {}

  async classify(dto: CreateTriageDto): Promise<string> {
    const mapped = mapToModelInput(dto);
    const url = String(this.config.get('TRIAGE_MODEL_URL'));
    try {
      const response = await firstValueFrom(this.httpService.post(url, mapped));
      console.log(response);
      return response.data.message ?? 'No emergencia';
    } catch (err) {
      console.error('Error clasificando triage:', err?.message || err);
      return 'Clasificación no disponible';
    }
  }
}
