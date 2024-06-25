import { Controller, Get, Post,Put, Body, Param, Delete } from '@nestjs/common';
import { CreateUserDto } from 'src/models/user/create-user.dto';
import { Users } from 'src/models/user/users.model';
import { UserService } from 'src/services/user/user.service';

@Controller('api/users')
export class UserController {
  constructor(private readonly usersService: UserService) { }

  @Get()
  findAll(): Promise<Users[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Users> {
    return this.usersService.findOne(id);
  }

  @Get(':username/:password')
  login(@Param('username') username: string, @Param('password') password: string): Promise<Users> {
    return this.usersService.login(username, password);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<Users> {
    return this.usersService.create(createUserDto);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() updateData: Partial<any>): Promise<any> {
    return this.usersService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }
}
