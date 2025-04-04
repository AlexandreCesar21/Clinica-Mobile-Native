import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Layout from '@/components/layout_Agenconsult';

const CadastroConsult = () => {
  const [paciente, setPaciente] = useState('');
  const [medico, setMedico] = useState('');
  const [dataConsulta, setDataConsulta] = useState('');
  const [horaConsulta, setHoraConsulta] = useState('');

  const handleSubmit = () => {
    Alert.alert('Cadastro', `Consulta marcada com ${medico} para ${dataConsulta} às ${horaConsulta}.`);
  };

  return (
    <Layout>



      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Envolvidos</Text>
          
          <Text style={styles.label}>Nome do paciente</Text>
          <TextInput
            style={styles.input}
            value={paciente}
            onChangeText={setPaciente}
            placeholder="Digite o nome do paciente"
          />
          
          <Text style={styles.label}>Nome do médico</Text>
          <View style={styles.medicoInputWrapper}>
            <Picker
              selectedValue={medico}
              onValueChange={setMedico}
              style={styles.medicoInput}
            >
              <Picker.Item label="Selecione o médico" value="" />
              <Picker.Item label="Dr. Adriano Moreira Sales" value="Dr. Adriano Moreira Sales" />
              <Picker.Item label="Dr. Bernardo Oliveira" value="Dr. Bernardo Oliveira" />
              <Picker.Item label="Dra. Amanda Siqueira" value="Dra. Amanda Siqueira" />
            </Picker>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data e Horário</Text>

          <Text style={styles.label}>Data da consulta</Text>
          <TextInput
            style={styles.input}
            value={dataConsulta}
            onChangeText={setDataConsulta}
            placeholder="Digite a data"
          />
          
          <Text style={styles.label}>Horário de consulta</Text>
          <TextInput
            style={styles.input}
            value={horaConsulta}
            onChangeText={setHoraConsulta}
            placeholder="Digite o horário"
          />
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "#0B3B60",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#0B3B60',
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingLeft: 10,
    fontSize: 16,
  },
  medicoInputWrapper: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: 12,
  },
  medicoInput: {
    height: 50,
    fontSize: 16,
    paddingLeft: 10,
    color: '#0B3B60',
  },
  buttonsContainer: {
    marginTop: 30,
    width: '100%',
    marginBottom: 20,
  },
});

export default CadastroConsult;
