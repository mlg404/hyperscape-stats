import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181A1B',
    flex: 1,
    padding: 26
  },
  crown: {
    alignItems:"center",
    justifyContent: "center",
    flex: 1
  },
  welcome: {
    
  },
  welcomeText: {
    fontFamily: 'ArchivoR',
    fontSize: 20,
    color: "#FFF"
    
  },
  welcomeComplete: {
    fontFamily: 'ArchivoB',
    fontSize: 20,
    color: "#FFF",
    maxWidth: 200
    
  },
  label: {
    color: '#eee',
    fontFamily: 'ArchivoR',
  },

  input: {
    height: 54,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
  
  welcomeForm: {
    marginTop: 68,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  inputName: {
    flex: 1,
    marginRight: 12
  },
  inputPlatform: {
    minWidth: 90
  },
  

  inputBlock: {
    width: '48%'
  },

  submitButton: {
    backgroundColor: '#FF621A',
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 92
  },
  submitText: {
    color: "#FFF",
    fontFamily: "ArchivoR",
    fontSize: 16
  },

  submitButtonText: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
  }
});

export default styles;
