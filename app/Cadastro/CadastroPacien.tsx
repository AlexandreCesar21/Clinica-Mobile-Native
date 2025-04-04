import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView, Alert } from 'react-native';
import Layout from '@/components/layout_Cadastpacien';

const Paciente = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [cns, setCns] = useState('');
  const [sangue, setSangue] = useState('');
  const [nacionalidade, setNacionalidade] = useState('');
  const [data, setData] = useState('');
  const [telefone, setTelefone] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [cep, setCep] = useState('');

  const handleSubmit = () => {
    Alert.alert('Sucesso', 'Cadastro concluído com sucesso!');
    console.log('Cadastro concluído');
  };

  const handleCancel = () => {
    Alert.alert('Cancelado', 'Cadastro cancelado');
    console.log('Cadastro cancelado');
  };

  return (
    <Layout>
        <View style={styles.container}>
          <ScrollView>
                  {/* Seção Profissional */}
                  <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Paciente</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Nome Completo"
                      value={nome}
                      onChangeText={setNome}
                    />
                  </View>

                    <Text style={styles.label}>CPF</Text>
                  <View>
                  <TextInput
                      style={styles.input}
                      placeholder="CPF"
                      value={cpf}
                      onChangeText={setCpf}
                    />
                  </View>
                  
                    <Text style={styles.label}>RG</Text>
                  <View>
                  <TextInput
                      style={styles.input}
                      placeholder="RG"
                      value={rg}
                      onChangeText={setRg}
                    />
                  </View>
                    <Text style={styles.label}>CNS</Text>
                  <View>
                  <TextInput
                      style={styles.input}
                      placeholder="CNS"
                      value={cns}
                      onChangeText={setCns}
                    />
                  </View>
                    <Text style={styles.label}>Tipo sanguineo</Text>
                  <View>
                  <TextInput
                      style={styles.input}
                      placeholder="Tipo de sangue"
                      value={sangue}
                      onChangeText={setSangue}
                    />
                  </View>
                    <Text style={styles.label}>Nacionalidade</Text>
                  <View>
                  <TextInput
                      style={styles.input}
                      placeholder="Nacionalidade"
                      value={nacionalidade}
                      onChangeText={setNacionalidade}
                    />
                  </View>
                    <Text style={styles.label}>Data de nascimento</Text>
                  <View>
                  <TextInput
                      style={styles.input}
                      placeholder="data de nascimento"
                      value={data}
                      onChangeText={setData}
                    />
                  </View>

                  {/* Seção Contatos */}
                  <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Contatos</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Telefone ou Celular"
                      value={telefone}
                      onChangeText={setTelefone}
                    />
                  </View>

                  {/* Seção Endereço Profissional */}
                  <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Endereço</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Logradouro"
                      value={logradouro}
                      onChangeText={setLogradouro}
                    />
                    <View style={styles.row}>
                      <TextInput
                        style={[styles.input, styles.halfWidth]}
                        placeholder="Número"
                        value={numero}
                        onChangeText={setNumero}
                      />
                      <TextInput
                        style={[styles.input, styles.halfWidth]}
                        placeholder="Complemento"
                        value={complemento}
                        onChangeText={setComplemento}
                      />
                    </View>
                    <TextInput
                      style={styles.input}
                      placeholder="Logradouro"
                      value={logradouro}
                      onChangeText={setLogradouro}
                    />
                    <View style={styles.row}>
                      <TextInput
                        style={[styles.input, styles.halfWidth]}
                        placeholder="Número"
                        value={numero}
                        onChangeText={setNumero}
                      />
                      <TextInput
                        style={[styles.input, styles.halfWidth]}
                        placeholder="Complemento"
                        value={complemento}
                        onChangeText={setComplemento}
                      />
                    </View>
                    <TextInput
                      style={styles.input}
                      placeholder="Cidade"
                      value={cidade}
                      onChangeText={setCidade}
                    />
                    <View style={styles.row}>
                      <TextInput
                        style={[styles.input, styles.halfWidth]}
                        placeholder="UF"
                        value={uf}
                        onChangeText={setUf}
                      />
                      <TextInput
                        style={[styles.input, styles.halfWidth]}
                        placeholder="CEP"
                        value={cep}
                        onChangeText={setCep}
                      />
                    </View>
                  </View>
          </ScrollView>
                </View>
        
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,  // Aumentando a margem entre as seções
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,  // Aumentando o espaço entre o título e os campos
    color: "#0B3B60",
  },
  input: {
    height: 40,  // Aumentando um pouco a altura dos campos de input
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,  // Aumentando o espaço entre os campos
    paddingLeft: 10,
    fontSize: 16,  // Aumentando o tamanho da fonte para maior legibilidade
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidth: {
    width: '48%',
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: 12,  // Aumentando o espaço entre o picker e o próximo campo
  },
  label: {
    fontSize: 16,  // Aumentando o tamanho da fonte da label
    marginBottom: 5,
    color: '#0B3B60',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    marginTop: 30,  // Aumentando o espaço entre a área de input e os botões
    gap: 10,
    width: "100%",
    marginBottom: 20,  // Maior espaço no fundo
  },
  button: {
    width: '100%', // Ajustando a largura dos botões para ocupar toda a largura disponível"
    padding: 10,   // Adicionando algum padding para aumentar a altura do botão
  },
});

export default Paciente;
