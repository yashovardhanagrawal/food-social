import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  Back: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  Main: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    marginTop: Platform.OS === 'android' ? 20 : null,
  },
  HeaderText: {
    fontFamily: 'poppins-regular',
    color: '#000000',
    fontSize: 22,
  },
  Card: {
    margin: 15,
    borderWidth: 0,
    borderRadius: 15,
    shadowOpacity: 0,
    elevation: 0,
    backgroundColor: '#212451',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
  CardIcon: {
    width: 40,
    height: 40,
    zIndex: 2,
  },
  CardIconContainer: {
    flex: 1,
    zIndex: 2,
  },
  CardContent: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  RestaurantNameText: {
    fontFamily: 'poppins-medium',
    color: '#FFFFFF',
    fontSize: 22,
    marginLeft: 10,
    textAlign: 'left',
    zIndex: 2,
  },
  CardPoints: {
    marginLeft: 50,
    borderWidth: 1,
    borderRadius: 15,
    height: 50,
    paddingRight: 5,
    paddingLeft: 5,
    borderStyle: 'dotted',
    borderColor: '#F8E71C',
    zIndex: 2,
  },
  Oval: {
    borderRadius: 15,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 60,
    borderWidth: 0,
    backgroundColor: '#32355E',
    width: 100,
    zIndex: 1,
    position: 'absolute',
    left: -15,
    right: -15,
    top: -15,
    bottom: -15,
  },
  CardPointsText: {
    textAlign: 'center',
    fontFamily: 'poppins-regular',
    fontSize: 22,
    color: '#FFBB0D',
    flex: 1,
    zIndex: 2,
  },
});

export default styles;
