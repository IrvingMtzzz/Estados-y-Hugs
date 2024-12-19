import React, { useEffect, useState } from "react";

interface Usuario {
    id: number;
    name: string; 
    email: string;
}

const ListaUsuarios: React.FC = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [cargando, setCargando] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error('Error al obtener los usuarios');
                }
                const data: Usuario[] = await response.json();
                setUsuarios(data);
            } catch (error: unknown) {
                setError(error instanceof Error ? error.message : 'Error desconocido');
            } finally {
                setCargando(false);
            }
        };

        fetchUsuarios();
    }, []);

    if(error) {
        return <div>{error}</div>;
    }


    if(cargando) {
        return <div>Cargando...</div>;
    }   


    return (
        <div>
            <h2>Lista de usuarios</h2>
            {cargando && <p>Cargando...</p>}
           
            <ul>
                {usuarios.map((u) => (
                    <li key={u.id}>
                      <strong>  {u.name} </strong>- {u.email}
                    </li>
                ))} 
            </ul>
        </div>
    );
};

export default ListaUsuarios;
