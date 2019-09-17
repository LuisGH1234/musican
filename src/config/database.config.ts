import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export class DatabaseConfig {
    static get get(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'musican',
            entities: [
                __dirname + '/../models/*.entity{.ts,.js}',
            ],
            synchronize: false,
            charset: 'utf8mb4',
            logging: false,
        }
    }
}