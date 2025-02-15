import React, { useState } from 'react';
import Modal from 'react-modal';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';

Chart.register(...registerables);

Modal.setAppElement('#root');

const Grafico = ({ dados }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Garantir que os dados são válidos
  if (!Array.isArray(dados) || dados.length === 0) {
    return <p>Carregando dados para o gráfico...</p>;
  }

  // Certificando-se de que os dados estão no formato correto para o gráfico
  const data = {
    labels: dados.map(dado => new Date(dado.data)), // Converter a data para o formato correto
    datasets: [
      {
        label: 'Peitoral (cm)',
        data: dados.map(dado => dado.peitoral),
        borderColor: '#8884d8',
        backgroundColor: 'rgba(136, 132, 216, 0.2)',
        pointRadius: 5,
        fill: false,
        tension: 0.4,
        pointBorderColor: '#8884d8',
        pointBackgroundColor: '#fff',
        pointHoverBackgroundColor: '#8884d8',
        pointHoverBorderColor: '#8884d8',
      },
      {
        label: 'Abdômen (cm)',
        data: dados.map(dado => dado.abdomem),
        borderColor: '#82ca9d',
        backgroundColor: 'rgba(130, 202, 157, 0.2)',
        pointRadius: 5,
        fill: false,
        tension: 0.4,
        pointBorderColor: '#82ca9d',
        pointBackgroundColor: '#fff',
        pointHoverBackgroundColor: '#82ca9d',
        pointHoverBorderColor: '#82ca9d',
      },
      {
        label: 'Cintura (cm)',
        data: dados.map(dado => dado.cintura),
        borderColor: '#ffc658',
        backgroundColor: 'rgba(255, 198, 88, 0.2)',
        pointRadius: 5,
        fill: false,
        tension: 0.4,
        pointBorderColor: '#ffc658',
        pointBackgroundColor: '#fff',
        pointHoverBackgroundColor: '#ffc658',
        pointHoverBorderColor: '#ffc658',
      },
      {
        label: 'Quadril (cm)',
        data: dados.map(dado => dado.quadril),
        borderColor: '#ff7300',
        backgroundColor: 'rgba(255, 115, 0, 0.2)',
        pointRadius: 5,
        fill: false,
        tension: 0.4,
        pointBorderColor: '#ff7300',
        pointBackgroundColor: '#fff',
        pointHoverBackgroundColor: '#ff7300',
        pointHoverBorderColor: '#ff7300',
      },
      {
        label: 'Coxa (cm)',
        data: dados.map(dado => dado.coxa),
        borderColor: '#387908',
        backgroundColor: 'rgba(56, 121, 8, 0.2)',
        pointRadius: 5,
        fill: false,
        tension: 0.4,
        pointBorderColor: '#387908',
        pointBackgroundColor: '#fff',
        pointHoverBackgroundColor: '#387908',
        pointHoverBorderColor: '#387908',
      },
      {
        label: 'Braço (cm)',
        data: dados.map(dado => dado.braco),
        borderColor: '#ff0000',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        pointRadius: 5,
        fill: false,
        tension: 0.4,
        pointBorderColor: '#ff0000',
        pointBackgroundColor: '#fff',
        pointHoverBackgroundColor: '#ff0000',
        pointHoverBorderColor: '#ff0000',
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
        ticks: {
          source: 'auto',
        },
      },
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: 'Medidas (cm)',
        },
        ticks: {
          stepSize: 5,
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw} cm`;
          },
        },
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
