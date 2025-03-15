import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
  Button,
} from 'react-native';

function LoginScreen({ navigation }) {
  return (
    <ImageBackground source={require('../assets/login-background.png')} style={styles.container}>
      <Text style={styles.header}>Login</Text>

      <TextInput style={styles.input} placeholder="User Name" />
      <TextInput style={styles.input} placeholder="Password" />

      <TouchableOpacity style={styles.forgetPasswordContainer}>
        <Text style={styles.forgetPasswordText}>Forget Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
    color: '#007BFF',
  },
  button: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '80%',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
  },
  forgetPasswordContainer: {
    width: '80%',
    alignSelf: 'center',
    marginBottom: 10,
  },

  forgetPasswordText: {
    alignSelf: 'flex-end',
    color: '#007BFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
