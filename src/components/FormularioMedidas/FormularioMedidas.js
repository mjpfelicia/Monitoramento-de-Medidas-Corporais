import React, { useState } from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import Grafico from '../Grafico/Grafico';
import Modal from 'react-modal';
import ObjetivosPessoais from '../ObjetivosPessoais/ObjetivosPessoais';
import './FormularioMedidas.css';

const FormularioMedidas = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      medidas: [{ data: '', peitoral: '', abdomen: '', cintura: '', quadril: '', coxa: '', braco: '' }]
    }
  });
  const { fields, append } = useFieldArray({
    control,
    name: 'medidas'
  });

  const [dados, setDados] = useState([]);
  const [objetivos, setObjetivos] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const adicionarLinha = () => {
    append({ data: '', peitoral: '', abdomen: '', cintura: '', quadril: '', coxa: '', braco: '' });
  };

  const adicionarObjetivo = (novoObjetivo) => {
    setObjetivos(novoObjetivo);
  };

  const onSubmit = (data) => {
    setDados(data.medidas);
    console.log(data);
  };

  return (
    <div>
      <form id="formulario-medidas" onSubmit={handleSubmit(onSubmit)}>
        <div className="tabela-container">
          <table id="tabela-medidas">
            <thead>
              <tr>
                <th>Data</th>
                <th>Peitoral (cm)</th>
                <th>Abdômen (cm)</th>
                <th>Cintura (cm)</th>
                <th>Quadril (cm)</th>
                <th>Coxa (cm)</th>
                <th>Braço (cm)</th>
              </tr>
            </thead>
            <tbody>
              {fields.map((item, index) => (
                <tr key={item.id}>
                  {['data', 'peitoral', 'abdomen', 'cintura', 'quadril', 'coxa', 'braco'].map((field) => (
                    <td key={field}>
                      <Controller
                        name={`medidas[${index}].${field}`}
                        control={control}
                        rules={{ required: `${field.charAt(0).toUpperCase() + field.slice(1)} é obrigatório` }}
                        render={({ field }) => (
                          <input
                            type={field === 'data' ? 'date' : 'number'}
                            {...field}
                          />
                        )}
                      />
                      {errors.medidas?.[index]?.[field] && <p>{errors.medidas[index][field].message}</p>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button type="submit">Enviar</button>
        <button type="button" onClick={adicionarLinha}>Adicionar Linha</button>
        <button type="button" onClick={() => setModalIsOpen(true)}>Definir Objetivos Pessoais</button>
       
      </form>
      <Grafico dados={dados} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Objetivos Pessoais"
      >
        <h2>Defina seus Objetivos Pessoais</h2>
        <ObjetivosPessoais adicionarObjetivo={adicionarObjetivo} />
        {objetivos && (
          <div className="objetivos-exibidos">
            <h2>Seus Objetivos</h2>
            <ul>
              {['peitoral', 'abdomen', 'cintura', 'quadril', 'coxa', 'braco'].map((field) => (
                <li key={field}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}: {objetivos[field]} cm
                </li>
              ))}
            </ul>
          </div>
        )}
        <button onClick={() => setModalIsOpen(false)}>Fechar</button>
      </Modal>
    </div>
  );
};

export default FormularioMedidas;
