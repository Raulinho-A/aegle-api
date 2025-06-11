import { Module } from '@nestjs/common';
import { TriageModule } from './triage/triage.module';
import { AuthModule } from './auth/auth.module';
import { DoctorModule } from './doctor/doctor.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TriageModule,
    AuthModule,
    DoctorModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
