
const defaultDate = new Date().toISOString().split('T')[0];
const LinhaTabela = ({ index }) => (
  <tr>
    <td data-label="Data"><input className="inputForm" type="date" name={`data${index}`} defaultValue={`${defaultDate}`} placeholder="" /></td>
    <td data-label="Peitoral (cm)"><input className="inputForm" type="number" name={`peitoral${index}`} placeholder="" /></td>
    <td data-label="Abdômen (cm)"><input className="inputForm" type="number" name={`abdomen${index}`} placeholder="" /></td>
    <td data-label="Cintura (cm)"><input className="inputForm" type="number" name={`cintura${index}`} placeholder="" /></td>
    <td data-label="Quadril (cm)"><input className="inputForm" type="number" name={`quadril${index}`} placeholder="" /></td>
    <td data-label="Coxa (cm)"><input className="inputForm" type="number" name={`coxa${index}`} placeholder="" /></td>
    <td data-label="Braço (cm)"><input className="inputForm" type="number" name={`braco${index}`} placeholder="" /></td>
  </tr>
);

export default LinhaTabela;
