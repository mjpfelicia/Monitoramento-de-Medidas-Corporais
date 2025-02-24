import React, { useState } from 'react';
import './ComposicaoCorporal.css';  // Importando o CSS específico

const ComposicaoCorporal = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [cintura, setCintura] = useState('');
    const [resultado, setResultado] = useState(null);
    const [imc, setImc] = useState(null);
    const [gorduraCorporal, setGorduraCorporal] = useState(null);
    const [erro, setErro] = useState('');

    // Função para calcular o IMC
    const calcularIMC = () => {
        if (peso && altura) {
            const imcValue = (peso / (altura * altura)).toFixed(2);
            return imcValue;
        }
        return null;
    };

    // Função para calcular a porcentagem de gordura corporal
    const calcularComposicaoCorporal = () => {
        if (!peso || !altura || !cintura) {
            setErro("Todos os campos devem ser preenchidos corretamente!");
            return;
        }

        const imcValue = calcularIMC();
        
        if (imcValue) {
            const gorduraCorporalValue = (cintura / peso) * 100;  // Fórmula simplificada (podemos aprimorar depois)
            setImc(imcValue);
            setGorduraCorporal(gorduraCorporalValue);
            setResultado(`IMC: ${imcValue}, Gordura Corporal Estimada: ${gorduraCorporalValue.toFixed(2)}%`);
            setErro('');
        } else {
            setErro("Houve um erro nos cálculos. Verifique os dados.");
        }
    };

    // Função para determinar o ícone do IMC com base no valor
    const getIMCIcon = () => {
        if (imc) {
            if (imc < 18.5) return <i className="fas fa-exclamation-circle" style={{ color: 'orange' }}></i>; // Abaixo do peso
            if (imc >= 18.5 && imc < 24.9) return <i className="fas fa-smile" style={{ color: 'green' }}></i>; // Peso saudável
            if (imc >= 25 && imc < 29.9) return <i className="fas fa-exclamation-triangle" style={{ color: 'yellow' }}></i>; // Sobrepeso
            return <i className="fas fa-heart-broken" style={{ color: 'red' }}></i>; // Obesidade
        }
        return null;
    };

    // Função para determinar o ícone da gordura corporal com base no valor
    const getGorduraIcon = () => {
        if (gorduraCorporal) {
            if (gorduraCorporal < 20) return <i className="fas fa-check-circle" style={{ color: 'green' }}></i>; // Percentual saudável
            if (gorduraCorporal >= 20 && gorduraCorporal < 30) return <i className="fas fa-exclamation-circle" style={{ color: 'orange' }}></i>; // Moderado
            return <i className="fas fa-times-circle" style={{ color: 'red' }}></i>; // Alto
        }
        return null;
    };

    return (
        <div className="composicaoCorporal-container">
            <h2 className="composicaoCorporal-title">Análise de Composição Corporal</h2>

            <form className="composicaoCorporal-form">
                <label className="composicaoCorporal-label">Peso (kg):</label>
                <input
                    className="composicaoCorporal-input"
                    type="number"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    min="0"
                    required
                />

                <label className="composicaoCorporal-label">Altura (m):</label>
                <input
                    className="composicaoCorporal-input"
                    type="number"
                    step="0.01"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    min="0"
                    required
                />

                <label className="composicaoCorporal-label">Cintura (cm):</label>
                <input
                    className="composicaoCorporal-input"
                    type="number"
                    value={cintura}
                    onChange={(e) => setCintura(e.target.value)}
                    min="0"
                    required
                />
            </form>

            <button
                className="composicaoCorporal-button"
                onClick={() => calcularComposicaoCorporal()}
            >
                Calcular Composição Corporal
            </button>

            {erro && <p className="composicaoCorporal-erro">{erro}</p>}

            {resultado && (
                <p className="composicaoCorporal-result">
                    {getIMCIcon()} IMC: {imc}, {getGorduraIcon()} Gordura Corporal Estimada: {gorduraCorporal.toFixed(2)}%
                </p>
            )}
        </div>
    );
};

export default ComposicaoCorporal;
