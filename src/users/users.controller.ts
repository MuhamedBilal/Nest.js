import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Param,
  Query,
  Body,
  ParseIntPipe,
  DefaultValuePipe,
  ValidationPipe
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUserParamsDto } from './dtos/get-user-params.dto';
import { PatchUserDto } from './dtos/patch-use.dto';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit?: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page?: number,
  ) {
    console.log(limit);
    console.log(page);
    return 'This action returns all users';
  }

  @Get(':id')
  getUserById(@Param() getUserParamsDto: GetUserParamsDto) {
    return `This action returns a user by id: ${getUserParamsDto.id}`;
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return 'This action creates a new user';
  }
  @Patch()
  updateUser(@Body() patchUserDto: PatchUserDto) {
    console.log(patchUserDto);
    return 'This action updates a user';
  }
}
