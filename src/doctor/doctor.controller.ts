import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Req,
  UseGuards,
} from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { LoginDoctorDto } from './dto/login-doctor.dto';
import { AuthGuard } from '@nestjs/passport';
import { ChangePasswordDto } from './dto/change-password.dto';

@Controller('doctor')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Post('register')
  async registerDoctor(@Body() dto: CreateDoctorDto) {
    return await this.doctorService.registerDoctor(dto);
  }

  @Post('login')
  async loginDoctor(@Body() dto: LoginDoctorDto) {
    return this.doctorService.loginDoctor(dto);
  }

  @Get('me')
  @UseGuards(AuthGuard('jwt'))
  async getProfile(@Req() req) {
    const userId = Number(req.user.id);
    return this.doctorService.getProfile(userId);
  }

  @Put('me')
  @UseGuards(AuthGuard('jwt'))
  async updateMyProfile(@Body() dto: UpdateDoctorDto, @Req() req) {
    const userId = Number(req.user.id);
    return this.doctorService.updateProfile(userId, dto);
  }

  @Put('me/password')
  @UseGuards(AuthGuard('jwt'))
  async changePassword(@Req() req, @Body() dto: ChangePasswordDto) {
    const userId = Number(req.user.id);
    return this.doctorService.changePassword(userId, dto);
  }
}
