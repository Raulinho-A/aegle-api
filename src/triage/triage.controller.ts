import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { TriageService } from './triage.service';
import { CreateTriageDto } from './dto/create-triage.dto';
import { UpdateTriageDto } from './dto/update-triage.dto';

@Controller('triage')
export class TriageController {
  constructor(private readonly triageService: TriageService) {}

  @Get()
  async getAllTriages() {
    return await this.triageService.getAllTriages();
  }

  @Get(':id')
  async getTriage(@Param('id') id: string) {
    return await this.triageService.getTriageById(Number(id));
  }

  @Post()
  async createTriage(@Body() dto: CreateTriageDto) {
    return await this.triageService.createTriage(dto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateTriageDto) {
    return await this.triageService.update(Number(id), dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.triageService.delete(Number(id));
  }
}
