import React, { useState } from 'react';
import Modal from 'react-modal';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Grafico = ({ dados }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Ver Gráfico</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} contentLabel="Gráfico de Medidas">
        <h2>Gráfico de Medidas</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={dados} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="data" />
            <YAxis />
            <Tooltip />
            <Legend />
            {['peitoral', 'abdomen', 'cintura', 'quadril', 'coxa', 'braco'].map((key, index) => (
              <Line key={index} type="monotone" dataKey={key} stroke={getColor(index)} />
            ))}
          </LineChart>
        </ResponsiveContainer>
        <button onClick={() => setModalIsOpen(false)}>Fechar</button>
      </Modal>
    </div>
  );
};

const getColor = (index) => {
  const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#387908', '#ff0000'];
  return colors[index % colors.length];
};

export default Grafico;
