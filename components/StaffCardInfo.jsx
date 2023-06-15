import React, { useState } from 'react';
import '@styles/StaffCardInfo.scss';

const StaffCard = ({ cargo, responsabilidad, temas, responsable }) => {
  const [cardHeight, setCardHeight] = useState(150);

  const handleClick = () => {
    if (cardHeight === 150) {
      setCardHeight(400);
    } else {
      setCardHeight(150);
    }
  };

  return (
    <div 
      className="cards-staff"
      style={{ height: `${cardHeight}px` }}
      onClick={handleClick}
    >
      <div className='main-info'>
        <h3>{cargo}</h3>
        <p>{responsabilidad}</p>
      </div>
      <div className='secondary-info'>
        <p dangerouslySetInnerHTML={{ __html: responsable }}></p>
      </div>
      <div className='third-info'>
        <h4>Asuntos</h4>
        <ul>
          {temas.map((tema, index) => (
            <li key={index}>{tema}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

const InfoStaff = () => {
  const datos = [
    {
      Cargo: 'Administrador',
      Responsabilidad: 'Persona a cargo del personal, coordinador de impulsos y actividades',
      Temas: 'Programar impulsos',
      Responsable: 'Armando Robles | Fontibon 100<br>Nidia Rodriguez | Fontibon 99<br>Ivan Segura | Kennedy<br>Chely Rojas | Modelia',
    },
    {
      Cargo: 'Jefe de operación',
      Responsabilidad: 'Persona a cargo de la mercancia',
      Temas: 'Productos con mayor rotación\nAgotados en lineal\nProductos cortos de fecha\nSolicitud presentacion lineal',
      Responsable: 'Cristian Gerena | Fontibon 100<br>Jeiner Montero | Fontibon 99<br>Miguel Ardila | Kennedy<br>Juan Campo | Modelia',
    },
    {
      Cargo: 'Jefe de bodega',
      Responsabilidad: 'Persona a cargo de la trastienda',
      Temas: 'Averias\nSurtido en el almacen',
      Responsable: 'Preguntar en recepción',
    },
    {
      Cargo: 'Auxiliar de Inventario',
      Responsabilidad: 'Persona a cargo del inventario',
      Temas: 'Arqueo max y min',
      Responsable: 'Trinidad Ferro | Fontibon 100<br>Alexandra Obando | Fontibon 99<br>Claudia Hueso | Kennedy<br>Yuleni Giraldo | Modelia',
    },
  ];

  return (
    <div className="place-cards">
      {datos.map((fila, index) => (
        <StaffCard
          key={index}
          cargo={fila.Cargo}
          responsabilidad={fila.Responsabilidad}
          temas={fila.Temas.split('\n')}
          responsable={fila.Responsable}
        />
      ))}
    </div>
  );
};

export default InfoStaff;