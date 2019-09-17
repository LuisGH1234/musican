import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Usuario } from "./user.entity";
import { Cancion } from "./cancion.entity";

@Entity('estadistica')
export class Estadistica {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    porcentajeAcierto: number;

    @Column()
    puntajeObtenido: number;

    @Column()
    fecha: Date;

    @ManyToOne(type => Usuario, usuario => usuario.estadistica)
    usuario: Usuario;

    @ManyToOne(type => Cancion, cancion => cancion.estadisticas)
    cancion: Cancion;
}
