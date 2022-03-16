import React from "react"
import styles from "./filtros.module.scss";
import { CgSearch } from 'react-icons/cg';
import filtros from './filtros.json';
import { TypeOfTag } from "typescript";
import classNames from 'classnames';

type IOpcao = typeof filtros[0];

// interface Opcao{
//     id: number,
//     label: string
// }

interface Props{
    filtro: number | null,
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtros({filtro,setFiltro}:Props){

    function selecionarFiltro(opcao:IOpcao){
        if(filtro===opcao.id){
            return setFiltro(null);
        }else{
            return setFiltro(opcao.id);
        }
    }

    return(
        <div className={styles.filtros}>
            {filtros.map((opcao) => (
                <button 
                    className={classNames(
                        {
                            [styles.filtros__filtro]: true, 
                            [styles["filtros__filtro--ativo"]]: filtro === opcao.id
                        }
                    )} 
                    key={opcao.id} 
                    onClick={()=>selecionarFiltro(opcao)}
                >
                    {opcao.label}
                </button>
            ))}
        </div>
    )
}