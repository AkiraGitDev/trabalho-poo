import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    nomeSocial: '',
    cpf: '',
    etniaCor: '',
    sexo: '',
    nascimento: '',
    telefone: '',
    email: '',
    carteiraSUS: '',
  });

  const handleCadastro = () => {
    // Handle form submission here
    router.push('/avaliacao');  // Changed from '/fimDeCadastro' to '/avaliacao'
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>NomeApp</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome Completo"
          value={formData.nomeCompleto}
          onChangeText={(text) => setFormData({...formData, nomeCompleto: text})}
        />

        <TextInput
          style={styles.input}
          placeholder="Nome Social"
          value={formData.nomeSocial}
          onChangeText={(text) => setFormData({...formData, nomeSocial: text})}
        />

        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.inputHalf]}
            placeholder="CPF (Opcional)"
            value={formData.cpf}
            onChangeText={(text) => setFormData({...formData, cpf: text})}
          />

          <TextInput
            style={[styles.input, styles.inputHalf]}
            placeholder="Etnia/Cor"
            value={formData.etniaCor}
            onChangeText={(text) => setFormData({...formData, etniaCor: text})}
          />
        </View>

        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.inputHalf]}
            placeholder="Sexo"
            value={formData.sexo}
            onChangeText={(text) => setFormData({...formData, sexo: text})}
          />

          <TextInput
            style={[styles.input, styles.inputHalf]}
            placeholder="Nascimento"
            value={formData.nascimento}
            onChangeText={(text) => setFormData({...formData, nascimento: text})}
          />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Telefone"
          value={formData.telefone}
          onChangeText={(text) => setFormData({...formData, telefone: text})}
        />

        <TextInput
          style={styles.input}
          placeholder="Email (Opcional)"
          value={formData.email}
          onChangeText={(text) => setFormData({...formData, email: text})}
        />

        <TextInput
          style={styles.input}
          placeholder="Número da Carteira do SUS"
          value={formData.carteiraSUS}
          onChangeText={(text) => setFormData({...formData, carteiraSUS: text})}
        />

        <TouchableOpacity style={styles.button} onPress={handleCadastro}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  inputHalf: {
    width: '48%',
  },
  button: {
    backgroundColor: '#E6E6FA',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
});