import { v4 as uuidv4 } from 'uuid';


export class Client {
    id: number;
    nomeCompleto: string;
    endereco: string;
    telefone: number;
    renda: number;

    constructor(id:number,nomeCompleto:string,endereco:string,telefone:number,renda:number){
        this.id = uuidv4(),
        this.nomeCompleto = nomeCompleto,
        this.endereco = endereco,
        this.telefone = telefone,
        this.renda = renda
    }
        
}