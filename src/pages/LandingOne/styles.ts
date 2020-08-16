import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181A1B',
    flex: 1,
  },
  landingTop: {
    alignItems:"center",
    justifyContent: "center",
    height: "40%",
    backgroundColor: "#FF621A"
  },
  userImg: {
    width: 90,
    height: 90
  },
  landingBottom: {
    marginTop: 24,
    padding: 32,
    flex: 1
  },
  bottomNumber: {
    
  },
  numberText: {
    fontFamily: "ArchivoM",
    color: "#FF621A",
    fontSize: 40
  },
  bottomText: {
    marginTop: 24,
    maxWidth: 240,
    flex: 1
  },
  infoText: {
    color: "#eee",
    fontFamily: "PoppinsM",
    fontSize: 24,
    lineHeight: 34
  },
  bottomControls: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 36
  },
  bottomIndicators: {
    flex: 1,
    flexDirection: "row"
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: "#fff",
    borderRadius: 2,
    marginRight: 4  
  },
  orangeDot: {
    backgroundColor: "#FF621A"
    
  }
});

export default styles;
