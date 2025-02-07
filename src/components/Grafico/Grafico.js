import React, { useState } from 'react';
import Modal from 'react-modal';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Grafico = ({ dados }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Ver Gráfico</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Gráfico de Medidas"
      >
        <h2>Gráfico de Medidas</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={dados} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="data" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="peitoral" stroke="#8884d8" />
            <Line type="monotone" dataKey="abdomen" stroke="#82ca9d" />
            <Line type="monotone" dataKey="cintura" stroke="#ffc658" />
            <Line type="monotone" dataKey="quadril" stroke="#ff7300" />
            <Line type="monotone" dataKey="coxa" stroke="#387908" />
            <Line type="monotone" dataKey="braco" stroke="#ff0000" />
          </LineChart>
        </ResponsiveContainer>
        <button onClick={() => setModalIsOpen(false)}>Fechar</button>
      </Modal>
    </div>
  );
};

export default Grafico;
