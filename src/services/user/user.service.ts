import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/models/user/create-user.dto';
import { Users } from 'src/models/user/users.model';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
    ) { }

    findAll(): Promise<Users[]> {
        return this.usersRepository.find();
    }


    async findOne(id: string): Promise<Users> {
        // Assuming id is a string, if it's a number, change the type accordingly
        return await this.usersRepository.findOneBy({ id: Number(id) });
    }

    create(createUserDto: CreateUserDto): Promise<Users> {
        const user = this.usersRepository.create(createUserDto);
        return this.usersRepository.save(user);
    }

    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }
}
