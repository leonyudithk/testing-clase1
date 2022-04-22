import { shallow } from 'enzyme';
import React from 'react';
import { GifExpertApp } from '../GifExpertApp';

describe('Prueba en Componente GifExpertApp', () => {
        test('mostrarme categoria correctamente', () => {
            //preparacion area de trabajo
               const wrapper = shallow(<GifExpertApp/>)
           
               // actuar en la prueba
            expect(wrapper).toMatchSnapshot()
        })
  
        //---------Prueba de categorias---//
        test('debe mostrar una lista de categorias', () => {
            //prepar la mesa de trabajo -  Arregla
             const categories = ['Dragon Ball', 'Ponys', 'animales', 'plantas', '123ssss']
             const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>)
         
             // Actuar - hacer la prueba
             //realice la captura foto 
             expect(wrapper).toMatchSnapshot()

             //voy a probar que las categorias de la busqueda si existen dentro del elemento
            expect(wrapper.find('GifGrid').length).toBe(categories.length)

      })

})