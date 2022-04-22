import '@testing-library/jest-dom';
import React from 'react';
import { shallow} from "enzyme"
import AppPrincipal from "../../CompoPruebTests/AppPrincipal"

describe('Prueba al componente AppPrincipal',()=>{
    test('validar que renderiza AppPrincipal', ()=>{
        //Arreglar- preparar la mesa trabajo 
         const saludoPrueba = 'Hola Frontend-9'
         const subtituloPrueba = 'Hoy es su ultimo dia de clases pero el primero de carrera profesional'

         const wrapper = shallow(<AppPrincipal saludo={saludoPrueba} subtitulo={subtituloPrueba}/>) 

        // actuar hacer prueba al componte
        expect(wrapper).toMatchSnapshot()

    })

})