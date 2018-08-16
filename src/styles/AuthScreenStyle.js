import { Platform } from 'react-native';

const styles = {
  Back: {
    height: '100%',
    backgroundColor: '#F5F5F5',
    zIndex: 0,
  },
  TopBack: {
    backgroundColor: '#FF5F35',
    flex: 2,
    borderWidth: 0,
    zIndex: 1,
  },
  BackImage: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.4,
    zIndex: 2,
  },
  MiddleBack: {
    backgroundColor: '#F5F5F5',
    borderRadius: 50,
    width: '11%',
    height: 50,
    transform: [{ scaleX: 10 }],
    alignSelf: 'center',
    zIndex: 1,
    top: -20,
  },
  BottomBack: {
    backgroundColor: '#F5F5F5',
    flex: 2,
    zIndex: 1,
  },
  Front: {
    height: '100%',
    zIndex: 3,
    top: '-100%',
  },
  AppIcon: {
    marginTop: 50,
    height: '12%',
    alignSelf: 'center',
  },
  Headings: {
    marginTop: 50,
    flexDirection: 'row',
  },
  LoginSelection: {
    marginLeft: 30,
    flex: 1,
  },
  SignupSelection: {
    marginRight: 30,
    flex: 1,
  },
  LoginSelectionText: {
    fontFamily: 'poppins-bold',
    fontSize: 20,
    color: '#FFFFFF',
  },
  SignupSelectionText: {
    fontFamily: 'poppins-bold',
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'right',
  },
  AuthCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 0,
    height: 370,
    borderRadius: 5,
    shadowRadius: 0,
    shadowOpacity: 0,
    zIndex: 5,
  },
  SocialButtons: {
    marginTop: -90,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  FacebookButton: {
    width: '15%',
  },
  GoogleButton: {
    marginLeft: '12%',
    width: '15%',
  },
  LoginDivider: {
    marginTop: -85,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  LoginDividerLine: {
    fontFamily: 'poppins-light',
    fontSize: 17,
    textAlign: 'center',
    color: '#979797',
  },
  LoginDividerText: {
    fontFamily: 'poppins-light',
    fontSize: 17,
    textAlign: 'center',
    color: '#000000',
  },
  EmailForm: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#D3D4E5',
  },
  EmailFormIcon: {
    height: 20,
    width: 20,
  },
  EmailFormInput: {
    flex: 10,
    marginTop: Platform.OS === 'android' ? 5 : 0,
    marginLeft: 15,
    height: 20,
    fontFamily: 'poppins-light',
    fontSize: 15,
  },
  PasswordForm: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#D3D4E5',
  },
  PasswordFormIcon: {
    height: 20,
    width: 20,
  },
  PasswordFormInput: {
    flex: 10,
    marginLeft: 15,
    marginTop: Platform.OS === 'android' ? 5 : 0,
    height: 20,
    fontFamily: 'poppins-light',
    fontSize: 15,
  },
  LoginButton: {
    marginTop: 20,
    marginLeft: 60,
    marginRight: 60,
    borderRadius: 5,
    borderWidth: 0,
    padding: 10,
    backgroundColor: '#FF5F35',
  },
  LoginButtonText: {
    fontFamily: 'poppins-light',
    fontSize: 17,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  ForgotPass: {
    marginTop: 20,
  },
  ForgotPassText: {
    fontFamily: 'poppins-extralight',
    fontSize: 15,
    textAlign: 'center',
    color: '#000000',
  },
  ForgotPasswordCardText: {
    marginTop: 30,
    fontFamily: 'poppins-regular',
    fontSize: 14,
    textAlign: 'center',
    color: '#979797',
  },
};

export default styles;