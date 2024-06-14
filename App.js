
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text,
         TextInput, View, Button,ScrollView} from 'react-native';
import {supabase} from './conexao'


export default function App() {
  const [produtodigitado, setproduDigitada] = useState("");
  const [quantidadeDigitada, setquantDigitado] = useState("");
  const [modeloDigitado, setModeloDigitado] = useState("");
  const [dados, setDados] = useState([]);

  //Função para consultar os comprar
  const consultarcomprar = async() => {
      const {data, error} = await supabase.from("tb_lista_compras")
      .select("*")
      if(error){ alert("Falha ao consultar! "+error.message)}
      else{
        setDados(data)
      }
  }
  useEffect(()=>{
    consultarcomprar()
  },[])

  //Função para cadastrar comprar
  const cadastrarcomprar = async() =>{
      const {error} = await supabase.from("tb_veiculos")
      .insert({coluna_produto: produtodigitado, 
               coluna_valor: modeloDigitado,
               coluna_quantidade: quantidadeDigitada})
      if(error){
          alert("Falha ao cadastrar!"+error.message)
      }else{
          alert("Cadastrado com sucesso!")
          consultarcomprar() 
      }
  }

  return (
    <View style={estilos.container}>
      <Text style={{fontSize: 20}}>Cadastro de compras</Text>
      <TextInput
          onChangeText={(texto)=>setproduDigitada(texto)}
          placeholder='digite o produto'
          style={estilos.caixaTexto} />
      <TextInput
          onChangeText={(texto)=>setModeloDigitado(texto)}
          placeholder='Digite o valor'
          style={estilos.caixaTexto} />
      <TextInput
          onChangeText={(texto)=>setquantDigitado(texto)}
          placeholder='Digite o quantidade'
          style={estilos.caixaTexto} />
      <Button
      title="Cadastrar"
      onPress={()=>cadastrarcomprar()} />

      <ScrollView>
        {dados.map((item)=>(
            <View style={estilos.cxcompra}>
                <Text> produto: {item.coluna_produto}   </Text>
                <Text> valor: {item.coluna_valor} </Text>
                <Text> quantidade: {item.coluna_quantidade}  </Text>
            </View>
         )      
        )}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
const estilos = StyleSheet.create({
  cxcompra:{
    borderWidth: 1,
    borderRadius: 8,
    minWidth: 300,
    padding: 10
  },
  caixaTexto:{
    borderWidth: 1,
    borderColor: "#c5c5c56",
    padding: 4,
    borderRadius: 4,
    marginBottom: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});