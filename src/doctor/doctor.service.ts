import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import * as bcrypt from 'bcrypt';
import { LoginDoctorDto } from './dto/login-doctor.dto';
import { JwtService } from '@nestjs/jwt';
import { ChangePasswordDto } from './dto/change-password.dto';

@Injectable()
export class DoctorService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async registerDoctor(dto: CreateDoctorDto) {
    const exists = await this.prisma.doctor.findUnique({
      where: { correo: dto.correo },
    });

    if (exists)
      throw new ConflictException('Ya existe un doctor con este correo');

    const hashedPassword = await bcrypt.hash(dto.contrasenia, 10);

    const data = {
      ...dto,
      contrasenia: hashedPassword,
    };

    const doctor = await this.prisma.doctor.create({ data });

    const { contrasenia, ...safeDoctor } = doctor;
    return safeDoctor;
  }

  async loginDoctor(dto: LoginDoctorDto) {
    const doctor = await this.prisma.doctor.findUnique({
      where: { correo: dto.correo },
    });

    if (!doctor) throw new UnauthorizedException('Credenciales inválidas');

    if (!doctor.activo) {
      throw new UnauthorizedException('Tu cuenta está inactiva');
    }

    const valid = await bcrypt.compare(dto.contrasenia, doctor.contrasenia);

    if (!valid) throw new UnauthorizedException('Credenciales inválidas');

    const payload = {
      sub: doctor.id,
      correo: doctor.correo,
      nombre: doctor.nombre,
    };

    const token = await this.jwtService.signAsync(payload);

    return {
      access_token: token,
    };
  }

  async getProfile(id: number) {
    const doctor = await this.prisma.doctor.findUnique({
      where: { id },
      select: {
        id: true,
        nombre: true,
        correo: true,
        especialidad: true,
        telefono: true,
        activo: true,
        createdAt: true,
      },
    });

    if (!doctor) throw new NotFoundException('Doctor no encontrado');

    return doctor;
  }

  async updateProfile(id: number, dto: UpdateDoctorDto) {
    if ('contrasenia' in dto) {
      throw new BadRequestException(
        'No puedes actualizar contraseña por este medio',
      );
    }

    return this.prisma.doctor.update({
      where: { id },
      data: dto,
      select: {
        id: true,
        nombre: true,
        correo: true,
        especialidad: true,
        telefono: true,
        activo: true,
        createdAt: true,
      },
    });
  }

  async changePassword(id: number, dto: ChangePasswordDto) {
    const doctor = await this.prisma.doctor.findUnique({ where: { id } });
    if (!doctor) throw new NotFoundException('Doctor no encontrado');

    const valid = await bcrypt.compare(dto.actual, doctor.contrasenia);
    if (!valid) throw new UnauthorizedException('Contraseña actual incorrecta');

    const hashed = await bcrypt.hash(dto.nueva, 10);

    return this.prisma.doctor.update({
      where: { id },
      data: {
        contrasenia: hashed,
      },
      select: {
        id: true,
        correo: true,
        nombre: true,
      },
    });
  }
}
