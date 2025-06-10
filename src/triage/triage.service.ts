import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateTriageDto } from './dto/update-triage.dto';
import { CreateTriageDto } from './dto/create-triage.dto';

@Injectable()
export class TriageService {
  constructor(private prisma: PrismaService) {}

  async getAllTriages() {
    return this.prisma.triage.findMany();
  }

  async getTriageById(id: number) {
    const result = await this.prisma.triage.findUnique({ where: { id } });

    if (!result)
      throw new NotFoundException(`Triage con id ${id} no encontrado`);

    return result;
  }

  async createTriage(dto: CreateTriageDto) {
    return this.prisma.triage.create({ data: dto });
  }

  async update(id: number, dto: UpdateTriageDto) {
    const exists = await this.prisma.triage.findUnique({ where: { id } });

    if (!exists)
      throw new NotFoundException(`Triage con id ${id} no encontrado`);

    return this.prisma.triage.update({ where: { id }, data: dto });
  }

  async delete(id: number) {
    const exists = await this.prisma.triage.findUnique({ where: { id } });
    if (!exists)
      throw new NotFoundException(`Triage con id ${id} no encontrado`);

    return this.prisma.triage.delete({ where: { id } });
  }
}
