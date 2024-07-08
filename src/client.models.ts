import { v4 as uuidv4 } from 'uuid';


export class Client {
    id: string;
    nomeCompleto: string;
    endereco: string;
    telefone: string;
    renda: number;

    constructor(id:string,nomeCompleto:string,endereco:string,telefone:string,renda:number){
        this.id = uuidv4(),
        this.nomeCompleto = nomeCompleto,
        this.endereco = endereco,
        this.telefone = telefone,
        this.renda = renda
    }
        
}