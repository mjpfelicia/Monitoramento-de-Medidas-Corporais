import React, { useState } from 'react';
import Modal from 'react-modal';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';

Chart.register(...registerables);

const Grafico = ({ dados }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const data = {
    labels: dados ? dados.map(dado => dado.data) : [],
    datasets: [
      {
        label: 'Peitoral (cm)',
        data: dados ? dados.map(dado => dado.peitoral) : [],
        borderColor: '#8884d8',
        backgroundColor: 'rgba(136, 132, 216, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Abdômen (cm)',
        data: dados ? dados.map(dado => dado.abdomem) : [],
        borderColor: '#82ca9d',
        backgroundColor: 'rgba(130, 202, 157, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Cintura (cm)',
        data: dados ? dados.map(dado => dado.cintura) : [],
        borderColor: '#ffc658',
        backgroundColor: 'rgba(255, 198, 88, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Quadril (cm)',
        data: dados ? dados.map(dado => dado.quadril) : [],
        borderColor: '#ff7300',
        backgroundColor: 'rgba(255, 115, 0, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Coxa (cm)',
        data: dados ? dados.map(dado => dado.coxa) : [],
        borderColor: '#387908',
        backgroundColor: 'rgba(56, 121, 8, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Braço (cm)',
        data: dados ? dados.map(dado => dado.braco) : [],
        borderColor: '#ff0000',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
        },
        title: {
          display: true,
          text: 'Data',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Medidas (cm)',
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
  };

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Ver Gráfico</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} contentLabel="Gráfico de Medidas">
        <h2>Gráfico de Medidas</h2>
        <Line data={data} options={options} />
        <button onClick={() => setModalIsOpen(false)}>Fechar</button>
      </Modal>
    </div>
  );
};

export default Grafico;
