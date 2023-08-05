import {render, screen, fireEvent} from '@testing-library/react-native';
import SetPassword from './SetPassword';
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
  test('email input working', () => {
    render(<SetPassword />);
    const password = screen.getByTestId('password_id');
    fireEvent.changeText(password, 'sai@gmail.com');
    expect(password.props.value).toBe('sai@gmail.com');
  });
  test('email input working', () => {
    render(<SetPassword />);
    const password1 = screen.getByTestId('password_id1');
    fireEvent.changeText(password1, 'sai@gmail.com');
    expect(password1.props.value).toBe('sai@gmail.com');
  });
  test("password must be 8 characters or not",()=>{
    render(<SetPassword />);
    const password = screen.getByTestId('password_id');
    const password1 = screen.getByTestId('password_id1');
    const passwordError = screen.getByTestId("setErrorId")
    const btn = screen.getByTestId("setPassBtn")
    fireEvent.changeText(password, '');
    fireEvent.changeText(password1, '');
    fireEvent.press(btn)
    expect(passwordError.children.toString()).toBe("*Password must be at least 8 characters long")
  })
  test("password and password1 same or not",()=>{
    render(<SetPassword />);
    const password = screen.getByTestId('password_id');
    const password1 = screen.getByTestId('password_id1');
    const passwordError = screen.getByTestId("setErrorId")
    const btn = screen.getByTestId("setPassBtn")
    fireEvent.changeText(password, '12345678');
    fireEvent.changeText(password1, '123456789');
    fireEvent.press(btn)
    expect(passwordError.children.toString()).toBe("*Passwords do not match")
  })
  test("onNavigation of ",()=>{
    render(<SetPassword />);
    const password = screen.getByTestId('password_id');
    const password1 = screen.getByTestId('password_id1');
    const passwordError = screen.getByTestId("setErrorId")
    const btn = screen.getByTestId("setPassBtn")
    fireEvent.changeText(password, '12345678');
    fireEvent.changeText(password1, '12345678');
    fireEvent.press(btn)
    expect(homeScreenProps.navigation.navigate).toHaveBeenCalledWith('Login');
  })