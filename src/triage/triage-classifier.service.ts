import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

export class TriageClassifierService {
  constructor(private httpService: HttpService) {}

  async classify(dto: any): Promise<string> {
    const url = 'http://127.0.0.1:8000/predict';
    try {
      const response = await firstValueFrom(this.httpService.post(url, dto));
      return response.data;
    } catch (err) {
      console.error('Error clasificando triage:', err);
      return 'No urgente';
    }
  }
}
