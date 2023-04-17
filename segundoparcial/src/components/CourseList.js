import React,{useState} from 'react';
import CourseTable from './CourseTable';
import CourseForm from './CourseForm';

const initialStudents =[
    { id:4580945, name:"Juan", semestre:"3" },
    { id:4780921, name:"Miguel", semestre:"2" },
    { id:1280921, name:"Mate", semestre:"1" }
  ];

const CourseList = () =>{
    const [dbCourses,setdbCourses] = useState(initialStudents);
    const [dataToEdit,setDataToEdit] = useState(null);

    const createStudent = (data) => {
        data.id =Date.now();
        console.log(initialStudents)
        setdbCourses([...dbCourses,data]);

    }
    const updateStudent = (data) => {
        let newData = dbCourses.map(element => element.id ===data.id ? data:element);
        setdbCourses(newData);

    }
    const deleteStudent = (id) => {
        let isDelete = window.confirm("Esta seguro de borrar el estudiante");
        console.log(isDelete);

        if (isDelete) {
            let newData =dbCourses.filter(element => element.id !== id);
            setdbCourses(newData);
        } else {
            return;            
        }
    }

    return(
        <>
        <h2>Lista de cursos</h2>
       { /* Componente formulario
        Propiedades que se le envian al formulario para saber si es Crear o Editar*/}
        <CourseForm createStudent = {createStudent} updateStudent ={updateStudent} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
        {/* Componente tabla*/}
        <CourseTable dbCourses={dbCourses} setDataToEdit={setDataToEdit} deleteStudent={deleteStudent}/>
   
        </>
    )
}

export default CourseList