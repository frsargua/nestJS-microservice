import { Injectable } from '@nestjs/common';
import { ReservationsRepository } from './reservations.repository';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { CreateReservationDto } from './dto/create-reservation.dto';

@Injectable()
export class ReservationsService {
  constructor(private reservationService: ReservationsRepository) {}

  create(createReservationDto: CreateReservationDto, userId: string) {
    return this.reservationService.create({
      ...createReservationDto,
      timestamp: new Date(),
      userId: userId,
    });
  }

  findAll() {
    return this.reservationService.find({});
  }

  findOne(_id: string) {
    return this.reservationService.findOne({ _id: _id });
  }

  update(_id: string, updateReservationsDto: UpdateReservationDto) {
    return this.reservationService.findOneAndUpdate(
      { _id },
      { $set: updateReservationsDto },
    );
  }

  remove(_id: string) {
    return this.reservationService;
  }
}
//
