import React from 'react';
import '@styles/SupplierInformation.scss';
import NavInfoSuppliers from "@components/NavInfoSuppliers.jsx";
import ContactInfo from "@components/ContactInfo.jsx";
import StaffCardInfo from "@components/StaffCardInfo.jsx";

const SupplierInformation = () => {
    return(
        <div className='supplier-information'>
            <NavInfoSuppliers />
            <div className='introduction'>
                <h1>Misión Proveedor</h1>
                <p>Maximizar y optimizar una venta rentable, conocer y manejar el respectivo portafolio de empresa y el portafolio autorizado, 
                    reconocer formas de pago, procedimientos y cargos dentro de la empresa, para generar una buena gestión cooperativa enfocada 
                    en mantener y propiciar sinergia entre funcionarios y proveedores.</p>
            </div>

            <section id="SupplierObjectives">
                <h2>Objetivos proveedor</h2>
                <div className='section-container'>
                    <h3>Optimizar inventario</h3>
                    <p>Si un producto cuenta con un inventario superior a 55 días, se considera que su aporte a cartera es negativo y por ende 
                        se suspenderá la compra de este, si por el contrario el inventario presenta una alta rotación y se agota, es prioridad 
                        del proveedor notificar para tomar acciones frente al caso.
                    </p>
                    <h3>Maximizar la venta rentable</h3>
                    <p>En Mercafam esperamos que todo producto venda un volumen competente en pesos, correspondiendo con un margen entre el 10% 
                        y el 15%, para poder seguir ocupando un espacio en estantería.</p>
                    <h3>Gestionar información</h3>
                    <p>Es de vital importancia que identifique en su empresa y en Mercafam las personas responsables del área de cartera, 
                        contabilidad y comercial, para remitir cualquier duda, solicitud y/o información, además, se solicita mantener 
                        únicamente los destinatarios relevantes en la conversación para poder realizar una pronta gestión frente al comunicado.</p>
                </div>
            </section>

            <section id="PointOfSaleStaff">
                <h2>Personal punto de venta</h2>
                <div className='section-staff-card'>
                    <StaffCardInfo />
                </div>
            </section>

            <section id="Procedures">
                <h2>Procedimientos</h2>
                <div className='section-container'>
                    <h3>1. Inventario</h3>
                    <h4>Malla de inventario</h4>
                    <p>Verificar constantemente que el inventario coincida con la malla de inventarios, si este no concuerda debe solicitar una 
                        reunión, únicamente con el auxiliar de inventario de cada sucursal, para realizar arqueo (ajuste de inventario), una vez 
                        hecho deberá verificar al día siguiente que el ajuste se haya actualizado correctamente en el archivo.</p>
                    <h3>2. Orden de compra</h3>
                    <p>Para generar la orden de compra el proveedor debe:
                        <ul>
                            <li>Estar al día con notas crédito de averías y faltantes.</li>
                            <li>Retirar toda avería presentada dentro del punto de venta.</li>
                        </ul>
                        Siempre y cuando se cumplan estas dos condiciones se generara la orden de compra en la fecha asignada dentro de su grupo.
                    </p>
                    <h3>3. Cambio de precios y codificaciones</h3>
                    <h4>Cambios de precios</h4>
                    <p>Solicitamos enviar la lista de precios actualizada al correo mercafam.asistcompras@gmail.com con copia dirigida a mercafam
                        .compras@gmail.com. El archivo debe cumplir obligatoriamente con las siguientes   especificaciones:
                        <ul>
                            <li>Formato Excel</li>
                            <li>Cod de barras EAN 13</li>
                            <li>Descripción completa y embalaje</li>
                            <li>Precios antes de IVA</li>
                            <li>Iva especificado</li>
                        </ul>
                    </p>
                    <h4>Nuevas codificaciones</h4>
                    <p>Para nuevas codificaciones es necesario enviar carta de presentación y Excel correspondiente del producto a codificar.
                        Las muestras deben ser entregadas directamente en la oficina de Fontibón 100.</p>
                    <h3>4. Entrega de pedidos Mosquera</h3>
                    <h4>Ingreso de vehículo</h4>
                    <p>Para validar el ingreso a bodega debe comunicarse al siguiente correo, mercafam.personalexterno@gmail.com y al WhatsApp 
                        314 3149815, adjuntando los siguientes datos:
                        <ul>
                            <li>Nombre del conductor</li>
                            <li>Numero de cedula</li>
                            <li>Numero de placa del vehículo</li>
                        </ul>
                    </p>
                    <h4>Dirección y horario</h4>
                    <p>La entrega de pedido se realiza en la siguiente dirección:
                        <ul>
                            <li>Avenida troncal occidente 18-76  Parque Industrial Santo Domingo Bodega C1, Mosquera, Cundinamarca.</li>
                            <li>Lunes a viernes de 7:00am a 3:00pm.</li>
                        </ul>
                    </p>
                    
                </div>
            </section>

            <section id="Contacts">
                <h2>Contactos</h2>
                <div className='section-container-contacts'>
                    <ContactInfo />
                </div>
            </section>

            <section id="Branches">
                <h2>Sucursales</h2>
                <div className='section-container'>
                    <p>
                        x
                    </p>
                </div>
            </section>

            <section id="FAQ">
                <h2>Preguntas frecuentes</h2>
                <div className='section-container'>
                    <p>x
                    </p>
                </div>
            </section>
        </div>
    );
}

export default SupplierInformation;