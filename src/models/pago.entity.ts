import { PrimaryGeneratedColumn, Column, ManyToOne, Entity } from "typeorm";
import { Usuario } from "./user.entity";

@Entity('pago')
export class Pago {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    monto: number;

    @Column()
    fecha: Date;

    @Column()
    tipoTarjeta: number;

    @ManyToOne(type => Usuario, usuario => usuario.pagos)
    usuario: Usuario;
}