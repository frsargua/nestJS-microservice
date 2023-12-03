import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @Post()
  // async create(@Body() createReservationDto: CreateReservationDto) {
  //   return this.authService.create(createReservationDto);
  // }

  // @Get()
  // async findAll() {
  //   return this.authService.findAll();
  // }

  // @Get(':id')
  // async findOne(@Param('id') id: string) {
  //   console.log('id: ' + id);
  //   return this.authService.findOne(id);
  // }

  // @Patch(':id')
  // async update(
  //   @Param('id') id: string,
  //   @Body() updateReservationDto: UpdateReservationDto,
  // ) {
  //   return this.authService.update(id, updateReservationDto);
  // }

  // @Delete(':id')
  // async remove(@Param('id') id: string) {
  //   return this.authService.remove(id);
  // }
}
