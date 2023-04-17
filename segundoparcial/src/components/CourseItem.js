import React from 'react';
import Button from 'react-bootstrap/esm/Button';

const CourseItem = ({element, setDataToEdit, deleteStudent}) =>{
    let {id}= element;
    return(
      <>
        <tr>
            <td>{element.id}</td>
            <td>{element.name}</td>
            <td>{element.semestre}</td>
            <td>
                <Button variant="primary" onClick={()=> setDataToEdit(element)} >Editar</Button>{' '}
                <Button variant="danger" onClick={()=> deleteStudent(id)} >Borrar</Button>{' '}   
            </td>
            
        </tr>
      </>
    )
}

export default CourseItem
