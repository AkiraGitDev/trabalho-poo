import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

export default function Avaliacao() {
  const [ratings, setRatings] = useState({
    atendimento: 3,
    equipeMedica: 5,
    tempoEspera: 0,
    ambiente: 5,
  });
  const [sugestao, setSugestao] = useState('');

  const renderStars = (category: keyof typeof ratings, value: number) => {
    return (
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity
            key={star}
            onPress={() => setRatings({ ...ratings, [category]: star })}
          >
            <AntDesign
              name={star <= value ? "star" : "staro"}
              size={24}
              color="#FFD700"
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const handleSubmit = () => {
    // Handle submission logic here
    router.push('/finalizacao');
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>NomeApp</Text>
        <Text style={styles.subtitle}>Avalie Sua Consulta</Text>

        <View style={styles.ratingItem}>
          <Text style={styles.ratingText}>Como foi o atendimento?</Text>
          <Text style={styles.ratingSubtext}>Recepção</Text>
          {renderStars('atendimento', ratings.atendimento)}
        </View>

        <View style={styles.ratingItem}>
          <Text style={styles.ratingText}>Equipe Médica</Text>
          {renderStars('equipeMedica', ratings.equipeMedica)}
        </View>

        <View style={styles.ratingItem}>
          <Text style={styles.ratingText}>Avalie o tempo de espera</Text>
          {renderStars('tempoEspera', ratings.tempoEspera)}
        </View>

        <View style={styles.ratingItem}>
          <Text style={styles.ratingText}>O ambiente era confortável?</Text>
          {renderStars('ambiente', ratings.ambiente)}
        </View>

        <Text style={styles.suggestionText}>
          Você possui alguma sugestão para melhoria dos nossos serviços?
        </Text>
        <TextInput
          style={styles.input}
          multiline
          numberOfLines={4}
          value={sugestao}
          onChangeText={setSugestao}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Avaliar</Text>
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
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  ratingItem: {
    marginBottom: 20,
  },
  ratingText: {
    fontSize: 16,
    marginBottom: 5,
  },
  ratingSubtext: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  starsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  suggestionText: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    height: 100,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#E6E6FA',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
});