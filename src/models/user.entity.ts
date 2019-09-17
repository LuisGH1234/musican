import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Pago } from './pago.entity';
import { TipoMembresia } from './tipo-membresia.entity';
import { Estadistica } from './estadistica.entity';

@Entity('usuario')
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    name: string;

    @Column()
    apellido: string;

    @Column({ nullable: true })
    telefono?: string;
    
    @Column({ nullable: true })
    genero?: boolean;

    @Column({ select: false })
    password: string;

    @OneToMany(type => Pago, pago => pago.usuario)
    pagos: Pago[];

    @ManyToOne(type => TipoMembresia, tMembresia => tMembresia.usuarios)
    tipoMembresia: TipoMembresia;

    @OneToMany(type => Estadistica, estadistica => estadistica.usuario)
    estadistica: Estadistica[];

    @Column({ select: false })
    passwordToken: string;

    @Column({ select: false })
    passwordTokenExpiration: Date;
}
