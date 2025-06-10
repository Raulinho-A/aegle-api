import { Module } from '@nestjs/common';
import { TriageController } from './triage.controller';
import { TriageService } from './triage.service';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  controllers: [TriageController],
  providers: [TriageService],
  imports: [PrismaModule],
})
export class TriageModule {}
