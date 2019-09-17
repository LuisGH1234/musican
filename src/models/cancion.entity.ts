import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Estadistica } from "./estadistica.entity";
import { Letra } from "./letra.entity";

@Entity('cancion')
export class Cancion {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    nombre: string;

    @Column()
    reproducciones: number;

    @Column()
    autor: string;

    @Column()
    dificultad: number;

    @Column()
    valor: number;

    @Column()
    urlStorage: string;

    @OneToMany(type => Estadistica, estadistica => estadistica.cancion)
    estadisticas: Estadistica[];

    @OneToMany(type => Letra, letra => letra.cancion)
    letras: Letra[];
}
