import React, { useState } from 'react';
import './ObjetivosPessoais.css';

const ObjetivosPessoais = ({ adicionarObjetivo }) => {
    const [objetivo, setObjetivo] = useState({
        peitoral: '',
        abdomen: '',
        cintura: '',
        quadril: '',
        coxa: '',
        braco: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setObjetivo({ ...objetivo, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        adicionarObjetivo(objetivo);
        setObjetivo({
            peitoral: '',
            abdomen: '',
            cintura: '',
            quadril: '',
            coxa: '',
            braco: ''
        });
    };

    return (
        <div>
            <form id="formulario-objetivos" onSubmit={handleSubmit}>
                {['peitoral', 'abdomen', 'cintura', 'quadril', 'coxa', 'braco'].map((field) => (
                    <div key={field} className="campo-objetivo">
                        <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)} (cm):</label>
                        <input type="number" name={field} id={field} value={objetivo[field]} onChange={handleChange} />
                    </div>
                ))}
                <button type="submit">Salvar Objetivos</button>
            </form>
        </div>
    );
};

export default ObjetivosPessoais;
