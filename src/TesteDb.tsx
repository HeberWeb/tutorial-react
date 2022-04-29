import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import PessoaService from "./service/PessoaService";
import { IPessoa } from './model/IPessoa';

const TesteDb = () => {
    const [dataList, setDataList] = useState([] as IPessoa[]);
    const [form, setForm] = useState({} as IPessoa);

    useEffect(()=>{
        listData();
    },[]);

    const handleChangeInput = (e : any) => {
        e.persist();
        setForm(values => ({
            ...values,
            [e.target.name] : e.target.value
        }));
    };

    const handleSave = async (e : any) => {
        await PessoaService.create(form).then(x => {
            listData();
            setForm({email:"", name:""} as IPessoa);
        })
    };
    
    const handleDelete = async (e : any) => {
        await PessoaService.delete(e.target.value).then(x => {
            listData();
        });
    };

    const listData : any  = async () => {
        await PessoaService.getAll<IPessoa>().then((e)=>{
            setDataList(e.Data)
        });
    };

    const lista = (
        <ul>
            {dataList.map((e : any) =>
                <li>
                    <span>{e.id}</span> - 
                    <span>{e.name}</span> - 
                    <span>{e.email}</span>
                    <button onClick={handleDelete} value={e.id}>Remove</button>
                </li>
            )}
        </ul>
    );

    return (
        <div className="App">
            <input type="text" name='name' onChange={handleChangeInput} defaultValue={form.name} value={form.name} />
            <input type="text" name='email' onChange={handleChangeInput} defaultValue={form.email} value={form.email} />
            <button type='submit' onClick={handleSave}>Save</button>
            <div>{lista}</div>
        </div>
    );
}

export default TesteDb;
