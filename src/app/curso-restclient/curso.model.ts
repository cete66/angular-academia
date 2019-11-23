import { Profesor } from '../profesor-restclient/profesor.model';
import { Nivel } from '../nivel-restclient/nivel.model';

/**
 * Esto mapea el json que recibo para cargar el catalogo de cursos
 */
export class Curso {

    id: number;
    activo: boolean;
    profesor: Profesor;
    titulo: string;
    horas: number;
    nivel: Nivel;
    temario: BinaryType;

}
