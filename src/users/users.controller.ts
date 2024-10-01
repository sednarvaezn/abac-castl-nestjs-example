import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() user: User, @Request() req) {
    const role = req.body.role; // Suponiendo que el rol del usuario está en la solicitud
    return this.usersService.create(req.body, role);
  }

  @Get()
  findAll(@Request() req) {
    const role = req.body.role; // Suponiendo que el rol del usuario está en la solicitud
    return this.usersService.findAll(role);
  }
}
