import { PartialType } from '@nestjs/mapped-types';
import { CreateReservationDto } from './create-reservation.dto copy';

export class UpdateReservationDto extends PartialType(CreateReservationDto) {}
