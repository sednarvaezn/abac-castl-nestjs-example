import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Role, RoleSchema } from './roles.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema }]),
  ],
  exports: [MongooseModule], // Asegúrate de exportar el MongooseModule para usarlo en otros módulos
})
export class RolesModule {}
