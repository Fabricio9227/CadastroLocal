import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import React from 'react';
 import ProdutoForm from '/Users/1fabricio/Estacio_02/CadastroLocal/ProdutoForm.js';
 import ProdutoLista from '/Users/1fabricio/Estacio_02/CadastroLocal/ProdutoLista.js';

 const Stack = createStackNavigator();

 export default function App() {
     return (
         <Stack.Navigator initialRouteName='ListaProd'>
         <Stack.Screen name='ListaProd'
             options={{title: 'Listagem de Produtos'}}
             component={ProdutoLista} />
         <Stack.Screen name='NovoProd'
             options={{title: 'Novo Produto'}}
             component={ProdutoForm} />
         </Stack.Navigator>
     );
 }