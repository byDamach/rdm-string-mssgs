import React, { useState} from 'react';
import '@styles/ContactInfo.scss';

const ContactInfo = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    let information = null;

    if (selectedOption === 'option1') {
        information = <p>Información para la opción 1</p>;
    } else if (selectedOption === 'option2') {
        information = (
            <table class="contact-table">
                <thead>
                    <tr>
                        <th>Cargo</th>
                        <th>Responsable</th>
                        <th>Correo</th>
                        <th>Contacto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Encargado Cartera</td>
                        <td>Milena Rivera</td>
                        <td>cartera.mercafam@gmail.com</td>
                        <td>6017463452 ext111</td>
                    </tr>
                </tbody>
            </table>
        );
    } else if (selectedOption === 'option3') {
        information = <p>Información para la opción 3</p>;
    } else if (selectedOption === 'option4') {
        information = <p>Información para la opción 4</p>;
    } else if (selectedOption === 'option5') {
        information = <p>Información para la opción 5</p>;
    } else if (selectedOption === 'option6') {
        information = <p>Información para la opción 6</p>;
    } else if (selectedOption === 'option7') {
        information = <p>Información para la opción 7</p>;
    }
    
	return (
		<div className='select-box'>
            <select className='select-box-input' value={selectedOption} onChange={handleOptionChange}>
                <option value="">Selecciona un Area</option>
                <option value="option1">Gerente Administrativo</option>
                <option value="option2">Cartera</option>
                <option value="option3">Asistente Contabilidad</option>
                <option value="option4">Gerente Comercial</option>
                <option value="option5">Gerente Comercial</option>
                <option value="option6">Comercial / Publicidad</option>
                <option value="option7">Factura Electronica</option>
            </select>
            {information && <div>{information}</div>}
        </div>
	);
}

export default ContactInfo;

<table class="demTable">
		<thead>
			<tr>
				<th>Header s</th>
				<th>Header 2</th>
				<th>Header 3</th>
				<th>Header 4</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>sad</td>
				<td>asdasd</td>
				<td>&nbsp</td>
				<td>&nbsp</td>
			</tr>
		</tbody>
	</table>