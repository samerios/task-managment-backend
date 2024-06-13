import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormService } from './services/typeorm/typeorm.service';
import { Users } from './models/user/users.model';
import { UserService } from './services/user/user.service';
import { UserController } from './controller/user.controller';

@Module({
  controllers: [AppController,UserController],
  imports: [TypeOrmModule.forRootAsync({ useClass: TypeormService }), TypeOrmModule.forFeature([Users])],
  providers: [AppService, TypeormService, UserService],
})
export class AppModule { }
