import { Curso } from '../curso-restclient/curso.model';

export class Profesor {
   
    id: number;
    nombre: String;
    apellidos: String;
    //cursos: Array<Curso> = [];
    cursos: Curso[] = [];
}