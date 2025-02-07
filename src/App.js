import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MonitoramentoMedidasCorporais from './components/MonitoramentoMedidasCorporais/MonitoramentoMedidasCorporais';
import FormularioMedidas from './components/FormularioMedidas/FormularioMedidas';
import ObjetivosPessoais from './components/ObjetivosPessoais/ObjetivosPessoais';
import Grafico from './components/Grafico/Grafico';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MonitoramentoMedidasCorporais />} />
          <Route path="/grafico" element={<Grafico />} />
          <Route path="/objetivos" element={<ObjetivosPessoais />} />
          <Route path="/formulario" element={<FormularioMedidas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
