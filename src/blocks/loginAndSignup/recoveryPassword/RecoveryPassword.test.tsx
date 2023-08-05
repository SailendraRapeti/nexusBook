import {render, screen, fireEvent} from '@testing-library/react-native';
import RecoveryPassword from './RecoveryPassword';
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
    render(<RecoveryPassword />);
    const email = screen.getByTestId('RecoveryFild_id');
    fireEvent.changeText(email, 'sai@gmail.com');
    expect(email.props.value).toBe('sai@gmail.com');
  });
  test("validation",()=>{
    render(<RecoveryPassword/>);
    const email = screen.getByTestId('RecoveryFild_id');
    const nameErr = screen.getByTestId("recoveryError");
    const btn = screen.getByTestId("RecoveryBtn");
    fireEvent.changeText(email, '');
    fireEvent.press(btn)
    expect(nameErr.children.toString()).toBe("*Email is required")

  });
  test("validation",()=>{
    render(<RecoveryPassword/>);
    const email = screen.getByTestId('RecoveryFild_id');
    const nameErr = screen.getByTestId("recoveryError");
    const btn = screen.getByTestId("RecoveryBtn");
    fireEvent.changeText(email, 'sai');
    fireEvent.press(btn)
    expect(nameErr.children.toString()).toBe("*Invalid email format")

  });
  test("validation", async ()=>{
    render(<RecoveryPassword/>);
    const email = screen.getByTestId('RecoveryFild_id');
    const nameErr = screen.getByTestId("recoveryError");
    const btn = screen.getByTestId("RecoveryBtn");
    fireEvent.changeText(email, 'sai@gmail.com');
    await fireEvent.press(btn)
    expect(homeScreenProps.navigation.navigate).toHaveBeenCalledWith('Verify');

  });
test("on navigate to signup page",async()=>{
    render(<RecoveryPassword/>);
    const btn = screen.getByTestId("signUp_id");
    await fireEvent.press(btn)
    expect(homeScreenProps.navigation.navigate).toHaveBeenCalledWith('SignUp');
})