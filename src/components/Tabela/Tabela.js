
const LinhaTabela = ({ index }) => (
  <tr>
    <td data-label="Data"><input type="text" name={`data${index}`} placeholder="" /></td>
    <td data-label="Peitoral (cm)"><input type="number" name={`peitoral${index}`} placeholder="" /></td>
    <td data-label="Abdômen (cm)"><input type="number" name={`abdomen${index}`} placeholder="" /></td>
    <td data-label="Cintura (cm)"><input type="number" name={`cintura${index}`} placeholder="" /></td>
    <td data-label="Quadril (cm)"><input type="number" name={`quadril${index}`} placeholder="" /></td>
    <td data-label="Coxa (cm)"><input type="number" name={`coxa${index}`} placeholder="" /></td>
    <td data-label="Braço (cm)"><input type="number" name={`braco${index}`} placeholder="" /></td>
  </tr>
);

export default LinhaTabela;
