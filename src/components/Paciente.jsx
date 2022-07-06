const Paciente = ({paciente,setPaciente, eliminarPaciente}) => {
    const {nombre, propietario,email,fecha,sintomas,id}=paciente
    //console.log(paciente)
    const handleEliminar = () =>{
        const eliminar = confirm('¿Estas seguro de que deseas eliminar el paciente?')
        if(eliminar){
            eliminarPaciente(id)
        }
    }
    
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase"> Nombre: {' '}
            <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase"> Propietario: {' '}
            <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase"> Email: {' '}
            <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase"> Fecha Alta: {' '}
            <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase"> Síntomas: {' '}
            <span className="font-normal normal-case">
                {sintomas}
            </span>
        </p>
        <div className="flex justify-between mt-10">
            <button 
                type="button"
                className="py-2 px-10 hover: bg-indigo-900 text-white font-bold uppercase rounded-lg"
                onClick={()=>setPaciente(paciente)}
                >
                    Editar</button>
            <button 
                type="button"
                className="py-2 px-10 hover: bg-red-800 text-white font-bold uppercase rounded-lg"
                onClick={handleEliminar}
                >
                    Eliminar</button>
        </div>
  </div>
  )
}

export default Paciente