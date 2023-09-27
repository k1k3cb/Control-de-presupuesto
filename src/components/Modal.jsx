import { useState } from 'react';
import CerrarBtn from '../img/cerrar.svg';

const [nombre, setNombre] = useState('');
const [cantidad, setCantidad] = useState('');
const [categoria, setCategoria] = useState('');

const Modal = ({ setModal, animarModal, setAnimarModal }) => {
	const ocultarModal = () => {
		setAnimarModal(false);

		setTimeout(() => {
			setModal(false);
		}, 500);
	};

	return (
		<div className='modal'>
			<div className='cerrar-modal'>
				<img src={CerrarBtn} alt='cerrar modal' onClick={ocultarModal} />
			</div>
			<form
				action=''
				className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
			>
				<legend>Nuevo Gasto</legend>
				<div className='campo'>
					<label htmlFor='nombre'>Nombre gasto</label>
					<input
						id='nombre'
						type='text'
						placeholder='Añade el nombre del gasto'
						value={nombre}
						onChange={e => setNombre(e.target.value)}
					/>
				</div>

				<div className='campo'>
					<label htmlFor='cantidad'>Cantidad</label>
					<input
						id='cantidad'
						type='number'
						placeholder='Añade la cantidad el gasto: ej. 300'
						value={cantidad}
						onChange={e => setCantidad(Number(e.target.value))}
					/>
				</div>

				<div className='campo'>
					<label htmlFor='categoria'>Categoría</label>
					<select
						id='categoria'
						value={categoria}
						onChange={e => setCategoria(e.target.value)}
					>
						<option value=''>-- Seleccione --</option>
						<option value='comida'>Comida</option>
						<option value='casa'>Casa</option>
						<option value='gastos'>Gastos varios</option>
						<option value='ocio'>Ocio</option>
						<option value='salud'>Salud</option>
						<option value='suscripciones'>Suscripciones</option>
					</select>
				</div>
				<input type='submit' value='Añadir gasto' />
			</form>
		</div>
	);
};

export default Modal;
