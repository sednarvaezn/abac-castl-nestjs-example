import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI), // Cambia la URL si es necesario
    UsersModule,
    RolesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
