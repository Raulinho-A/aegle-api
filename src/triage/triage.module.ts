import { Module } from '@nestjs/common';
import { TriageController } from './triage.controller';
import { TriageService } from './triage.service';
import { PrismaModule } from 'src/database/prisma.module';
import { TriageClassifierService } from './triage-classifier.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [TriageController],
  providers: [TriageService, TriageClassifierService],
  imports: [PrismaModule, HttpModule],
})
export class TriageModule {}
