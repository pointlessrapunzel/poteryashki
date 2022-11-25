import {
  Body,
  Param,
  Controller,
  Post,
  Put,
  Delete,
  ParseIntPipe,
  Get,
  ClassSerializerInterceptor,
  UseInterceptors,
} from '@nestjs/common';

import { UserService } from './user.service';
import { UserCreateDto } from './dto/user-create.dto';
import { UserUpdateDto } from './dto/user-update.dto';

@Controller('users')
export class UserController {
  constructor(readonly userService: UserService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  async getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUser(id);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  async createUser(@Body() data: UserCreateDto) {
    return this.userService.createUser(data);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Put(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UserUpdateDto,
  ) {
    return this.userService.updateUser(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    this.userService.removeUser(id);
  }
}
