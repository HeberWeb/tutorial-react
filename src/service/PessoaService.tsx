import axios from 'axios';
import { IPessoa } from '../model/IPessoa';
import Response from '../model/Response';

export default class PessoaService {
    public static async getAll<T>() : Promise<Response> {
        let result = await axios.get('http://localhost:5000/customers').then((e)=>{
            return new Response(e.data as Array<T>)
        })
        return result;
    }

    public static async create(data : IPessoa) : Promise<boolean>{
        let result = await axios.post('http://localhost:5000/customers', data).then(x => {
            return true
        });

        return result;
    }

    public static async delete(id : number) : Promise<boolean>{
        let result = await axios.delete('http://localhost:5000/customers/'+id).then(x => {
            return true
        });

        return result;
    }
}