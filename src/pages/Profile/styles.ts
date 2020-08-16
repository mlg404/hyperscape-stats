import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e8e6e3',
    flex: 1,
    paddingBottom: 0,
  },
  
  header: {
    padding: 8,
    paddingTop: 24,
    minHeight: 240,
    backgroundColor: "#FF621A",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  teacherList: {
    marginTop: -118
  },
  headerTop: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerButton: {
    paddingVertical: 8,
    paddingHorizontal: 12
  },
  headerButtons: {
    color: "#FFF",
    fontFamily: "ArchivoR"
  },
  headerText: {
    fontFamily: "OrbitronR",
    color: "#FFF",
    fontSize: 28,
    width: "100%",
    textAlign: "center"
  }

});

export default styles;
