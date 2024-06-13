import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Users } from 'src/models/user/users.model';

@Injectable()
export class TypeormService implements TypeOrmOptionsFactory {
    createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
        return {
            type: 'mssql',
            host: 'DESKTOP-4J0LEJH',
            username: 'samerios',
            password:'rr',
            port: 1433,  // Default port for MSSQL
            database: 'myTasks',
            entities: [Users],
            options: {
                encrypt: true, // Use encryption
                trustServerCertificate: true, // Trust self-signed certificate
            },
 /*            synchronize: true,
            logging: true */
        }
    }
}
