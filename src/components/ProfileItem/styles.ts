import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181A1B',
    borderWidth: 1,
    // borderColor: '#e6e6f0',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },

  profile: {
    paddingVertical: 24,
    paddingHorizontal: 18,
  },
  profileInfo: {
    marginLeft: 0,
  },

  name: {
    fontFamily: 'ArchivoB',
    color: '#eee',
    fontSize: 20,
  },

  subject: {
    fontFamily: 'PoppinsR',
    color: '#2DCFE1',
    fontSize: 12,
    marginTop: 4
  },

  statsSection: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 16,
    width: "100%",
    justifyContent: "space-around"
    
  },
  stat: {
    minWidth: 84,
    marginVertical: 4,
    borderRadius: 1,
    borderWidth: 2,
    backgroundColor: "#222",
    borderColor: "#222",
    paddingLeft: 4,
  },
  statTitle: {
    fontFamily: 'ArchivoR',
    fontSize: 10,
    color: "#FFF"
  },
  statValue: {
    fontFamily: 'PoppinsR',
    fontSize: 16,
    color: "#2DCFE1"
  },
  
  footer: {
    fontFamily: 'PoppinsR',
    backgroundColor: '#fafafc',
    padding: 24,
    alignItems: 'center',
    marginTop: 24
  },
  
  price: {
    fontFamily: 'PoppinsR',
    color: '#6a6180',
    fontSize: 14
  },
  
  priceValue: {
    fontFamily: 'ArchivoB',
    color: '#8257e5',
    fontSize: 16,
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16
  },

  favoriteButton: {
    backgroundColor: '#8257e5',
    width: 56,
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8
  },

  favorited: {
    backgroundColor: '#e33d3d',
  },

  contactButton: {
    backgroundColor: '#04d361',
    flex: 1,
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8
  },
  
  contactButtonText: {
    color: '#fff',
    fontFamily: 'ArchivoB',
    fontSize: 16,
    marginLeft: 16
  }
  
});

export default styles;