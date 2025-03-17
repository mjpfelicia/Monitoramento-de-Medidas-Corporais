import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MonitoramentoMedidasCorporais from './components/MonitoramentoMedidasCorporais/MonitoramentoMedidasCorporais';
import FormularioMedidas from './components/FormularioMedidas/FormularioMedidas';
import ObjetivosPessoais from './components/ObjetivosPessoais/ObjetivosPessoais';
import Grafico from './components/Grafico/Grafico';
import Login from './components/Login/Login';
import Registrar from './components/Registrar/Register';
import Ajuda from './components/Ajuda/Ajuda';
import IMCForm from './components/IMCForm/IMCForm';
import Dicas from './components/Dicas/Dicas';
import ComposicaoCorporal from './components/ComposicaoCorporal/ComposicaoCorporal';
import CalculoMacronutrientes from './components/CalculoMacronutrientes/CalculoMacronutrientes';
import NotFound from './components/NotFound/NotFound';
import Menu from './components/Menu/Menu'; // Adicionando o Menu

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
          <Route path="/login" element={<Login />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="/dicas" element={<Dicas />} />
          <Route path="/imc" element={<IMCForm />} />
          <Route path="/composicao-corporal" element={<ComposicaoCorporal />} />
          <Route path="/calculo-macronutrientes" element={<CalculoMacronutrientes />} />
          <Route path="*" element={<NotFound />} /> {/* Not Found sempre no final */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
