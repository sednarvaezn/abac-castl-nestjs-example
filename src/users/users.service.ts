import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { Role, RoleDocument } from '../roles/roles.schema'; // Asegúrate de importar tu esquema de Role
import { defineAbilitiesFor } from './ability';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Role.name) private roleModel: Model<RoleDocument>, // Inyectar el modelo de Role
  ) {}
  async create(user: User, role: string) {
    const roleDocument = await this.roleModel.findOne({ role }).exec();

    if (!roleDocument) {
      throw new ForbiddenException('Rol no encontrado');
    }
    const ability = defineAbilitiesFor(roleDocument.access_control);

    if (ability.cannot('create', 'User')) {
      throw new ForbiddenException('No tienes permiso para crear un usuario');
    }
    return this.userModel.create(user);
  }

  async findAll(role: string) {
    const roleDocument = await this.roleModel.findOne({ role }).exec();

    if (!roleDocument) {
      throw new ForbiddenException('Rol no encontrado');
    }
    const ability = defineAbilitiesFor(roleDocument.access_control);

    if (ability.cannot('read', 'User')) {
      throw new ForbiddenException('No tienes permiso para leer usuarios');
    }
    return this.userModel.find().exec();
  }

  // Otras funciones...
}
