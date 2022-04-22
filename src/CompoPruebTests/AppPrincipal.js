import React from 'react';

const AppPrincipal = ({saludo, subtitulo}) => {
    return (
        <div>
        <h1>{saludo}</h1>
        <h3>{subtitulo}</h3>
        <p>La informacion es correcta</p>
            
        </div>
    );
};

export default AppPrincipal;
