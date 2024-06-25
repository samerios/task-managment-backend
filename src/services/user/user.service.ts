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

    async findAll(): Promise<Users[]> {
        return this.usersRepository.find();
    }

    async login(username: string, password: string) {
        return await this.usersRepository.findOneBy({ username: username, password: password });
    }

    async findOne(id: string): Promise<Users> {
        // Assuming id is a string, if it's a number, change the type accordingly
        return await this.usersRepository.findOneBy({ id: Number(id) });
    }

    async create(createUserDto: CreateUserDto): Promise<Users> {
        const user = this.usersRepository.create(createUserDto);
        return this.usersRepository.save(user);
    }

    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }

    async update(id: string, updateData: any): Promise<any> {
      return  await this.usersRepository.update(id, updateData);
    }
}
