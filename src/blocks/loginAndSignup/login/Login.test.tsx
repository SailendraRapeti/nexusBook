import {render, screen, fireEvent} from '@testing-library/react-native';
import Login from './Login';
import React from 'react';

jest.mock('@react-navigation/native', () => {
  const actualNavigation = jest.requireActual('@react-navigation/native');
  const {View: MockView} = require("react-native")
  return {
    ...actualNavigation,
    NavigationContainer:()=><MockView/>
  };
});
const mockFn = jest.fn()
const homeScreenProps = {
    navigation: {
        navigate: mockFn
    },
  }
test('Check for Login Text', () => {
  render(<Login />);
  const loginTitle = screen.getByTestId('login_id');
  expect(loginTitle).toBeTruthy();
});
test('TextInput working', () => {
  render(<Login />);
  const email = screen.getByTestId('Email');
  fireEvent.changeText(email, 'sai');
  expect(email.props.value).toBe('sai');
});
test('Conditional rendering errorMsg', () => {
  render(<Login />);
  const button = screen.getByTestId('button_id');
  const email = screen.getByTestId('Email');
  const errMsg = screen.getByTestId('errorMsg');
  fireEvent.changeText(email, '');
  fireEvent.press(button);
  expect(errMsg.props.children.toString()).toBe('*Email is required');
});
test('Conditional rendering errorMsg', () => {
  render(<Login />);
  const button = screen.getByTestId('button_id');
  const email = screen.getByTestId('Email');
  const errMsg = screen.getByTestId('errorMsg');
  fireEvent.changeText(email, 'sai');
  fireEvent.press(button);
  expect(errMsg.props.children.toString()).toBe('*Invalid email format');
});
test('conditional rendering onNextPage', async() => {
  render(<Login {...homeScreenProps} />);
  const button = screen.getByTestId('button_id');
  const email = screen.getByTestId('Email');
  const errMsg = screen.getByTestId('errorMsg');
  fireEvent.changeText(email, 'sai@gmail.com');
 await fireEvent.press(button);
//  expect(errMsg.props.children.toString()).toBe('*Email is required');
  expect(homeScreenProps.navigation.navigate).toHaveBeenCalledWith('Password');
});
test("navigation to signUp page", async()=>{
    render(<Login{...homeScreenProps}/>)
    const SignUpButton = screen.getByTestId("SignUp")
    await fireEvent.press(SignUpButton)
    expect(homeScreenProps.navigation.navigate).toHaveBeenCalledWith('SignUp');
})