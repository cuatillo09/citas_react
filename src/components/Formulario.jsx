import {useState,useEffect} from 'react';
import Error from './Error';
import ErrorDos from './ErrorDos';
const Formulario = ({pacientes,setPacientes,paciente,setPaciente}) => {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [error, setError] = useState(false)
  const generateId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return random + fecha
  }
  useEffect(() => {
    console.log('El componente formulario esta listo, por useEffect')
  },[])
  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      console.log('Si hay algo')
      console.log(paciente)
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }else{
      console.log('No hay nada')
    }
  },[paciente])

  const handleSubmit = (e) =>{
    e.preventDefault()
    //Validacion formnulario
    if([nombre,propietario,email,fecha,sintomas].includes('')){
      console.log('Hay al menos un campo vacío')
      setError(true)
      return
    }
    setError(false)
    //objeto paicente
    const objetoPaciente ={
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }
    if(paciente.id){
      //Editando registro
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
      setPacientes(pacientesActualizados)
      setPaciente({})
    }else{
      //Nuevo registro
      objetoPaciente.id = generateId()
      setPacientes([...pacientes,objetoPaciente])
    }
    //console.log(objetoPaciente)
    //reiniciar el form
    setNombre('')
    setPropietario('')
    setEmail('')
    setSintomas('')
    setFecha('')

  }
  return (
    <div className="mx-5 md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text- mt-5 text-center mb-10">
        Añade pacientes y {' '}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        >
        {error && <Error mensaje='Todos los campos son obligatorios'/>
          /*error && <ErrorDos> 
            <h1>Titulo</h1>
            <p>Todo este contenido va a cgildren del componente</p>
          </ErrorDos>*/
        }
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre mascota
          </label>
          <input 
            id="mascota"
            type="text" 
            placeholder="Nombre de la mascota" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e)=>setNombre(e.target.value)}
            />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre Propietario
          </label>
          <input 
            id="propietario"
            type="text" 
            placeholder="Nombre del propietario" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e)=>setPropietario(e.target.value)}
            />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input 
            id="email"
            type="email" 
            placeholder="Email del propietario" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta
          </label>
          <input 
            id="alta"
            type="date" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e)=>setFecha(e.target.value)}
            />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea 
            id="sintomas"
            placeholder="Describe los sintomas" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={(e)=>setSintomas(e.target.value)}
            />
        </div>
        <input 
          type="submit" 
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md
          hover:bg-indigo-700 cursor-pointer transition-colors" 
          value={paciente.id ? "Editar paciente" : "Agregar paciente"}
        />
        
      </form>
    </div>
  )
}

export default Formulario