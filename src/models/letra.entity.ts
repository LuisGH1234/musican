import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Cancion } from "./cancion.entity";

@Entity('letra')
export class Letra {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idioma: number;

    @Column()
    urlStorage: string;

    @ManyToOne(type => Cancion, cancion => cancion.letras)
    cancion: Cancion;
}