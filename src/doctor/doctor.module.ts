import { Module } from '@nestjs/common';
import { DoctorController } from './doctor.controller';
import { DoctorService } from './doctor.service';
import { PrismaModule } from 'src/database/prisma.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [DoctorController],
  providers: [DoctorService],
  imports: [PrismaModule, AuthModule],
})
export class DoctorModule {}
