import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Usuario } from "./user.entity";

@Entity('tipoMembresia')
export class TipoMembresia {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    costo: number;

    @Column({ type: 'nvarchar', length: 100 })
    descripcion: string;

    @Column({ nullable: true })
    permisos: number;

    @OneToMany(type => Usuario, usuario => usuario.tipoMembresia)
    usuarios: Usuario[];
}