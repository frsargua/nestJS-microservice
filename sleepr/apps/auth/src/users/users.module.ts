import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDocument, UserSchema } from './models/users.schema';
import { DatabaseModule } from '@app/common';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: UserDocument.name, schema: UserSchema },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService],
})
export class UsersModule {}
