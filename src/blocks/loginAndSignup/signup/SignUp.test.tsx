import {render, screen, fireEvent} from '@testing-library/react-native';
import SignUp from './SignUp';
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
  test('name input working', () => {
    render(<SignUp />);
    const name = screen.getByTestId('NameFild');
    fireEvent.changeText(name, 'sai');
    expect(name.props.value).toBe('sai');
  });
  test('email input working', () => {
    render(<SignUp />);
    const email = screen.getByTestId('EmailFild');
    fireEvent.changeText(email, 'sai@gmail.com');
    expect(email.props.value).toBe('sai@gmail.com');
  });
  test('password input working', () => {
    render(<SignUp />);
    const password = screen.getByTestId("PasswordId");
    fireEvent.changeText(password, 'sai@gmail.com');
    expect(password.props.value).toBe('sai@gmail.com');
  });
  test("name Error",()=>{
    render(<SignUp/>);
   
    const name = screen.getByTestId('NameFild');
    // const nameErr = screen.getByTestId("nameError");
    const btn = screen.getByTestId("CreateBtn");
    fireEvent.changeText(name, '');
    fireEvent.press(btn)
    expect(name.props.value).toBe("");
    expect(screen.getByText("*Name is required")).toBeTruthy()

  })
  test("user no enter in email filed",()=>{
    render(<SignUp/>);
   
    const name = screen.getByTestId('NameFild');
    const email = screen.getByTestId('EmailFild');
 
    fireEvent.changeText(name, 'sai');
    fireEvent.changeText(email, '');
    const btn = screen.getByTestId("CreateBtn");
    fireEvent.press(btn)
    expect(screen.getByText("Email is required")).toBeTruthy()

  })
  test("email format",()=>{
    render(<SignUp/>);
   
    const name = screen.getByTestId('NameFild');
    const email = screen.getByTestId('EmailFild');
 
    fireEvent.changeText(name, 'sai');
    fireEvent.changeText(email, 'sai');
    const btn = screen.getByTestId("CreateBtn");
    fireEvent.press(btn)
    expect(screen.getByText("*Invalid email format")).toBeTruthy()

  })
  test("email format",()=>{
    render(<SignUp/>);
   
    const name = screen.getByTestId('NameFild');
    const email = screen.getByTestId('EmailFild');
    const password = screen.getByTestId("PasswordId");
 
    fireEvent.changeText(name, 'sai');
    fireEvent.changeText(email, 'sai@gmail.com');
    fireEvent.changeText(password, '');
    const btn = screen.getByTestId("CreateBtn");
    fireEvent.press(btn)
    expect(screen.getByText("*Password is required")).toBeTruthy()

  })
  test("onNavigation to login page ",()=>{
    render(<SignUp/>);
   
    const name = screen.getByTestId('NameFild');
    const email = screen.getByTestId('EmailFild');
    const password = screen.getByTestId("PasswordId");
 
    fireEvent.changeText(name, 'sai');
    fireEvent.changeText(email, 'sai@gmail.com');
    fireEvent.changeText(password, '12345678');
    const btn = screen.getByTestId("CreateBtn");
    fireEvent.press(btn)
    expect(homeScreenProps.navigation.navigate).toHaveBeenCalledWith('Login');

  })