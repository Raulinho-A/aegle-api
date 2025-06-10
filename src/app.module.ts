import { Module } from '@nestjs/common';
import { TriageModule } from './triage/triage.module';

@Module({
  imports: [TriageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
