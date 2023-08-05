import {render, screen, fireEvent} from '@testing-library/react-native'; 
import Password from './Password';
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

test("textfild",()=>{
    render(<Password/>)
    const password = screen.getByTestId("passwordId")
    fireEvent.changeText(password,"123")
    expect(password.props.value).toBe("123")
})
test('Conditional rendering errorMsg', () => {
    render(<Password/>);
    const button = screen.getByTestId('button');
    const email = screen.getByTestId('passwordId');
    const errMsg = screen.getByTestId('ErrorTextId');
    fireEvent.changeText(email, '');
    fireEvent.press(button);
    expect(errMsg.props.children.toString()).toBe("*please enter password");
  });
  test('conditional rendering onNextPage', async() => {
    render(<Password {...homeScreenProps} />);
    const button = screen.getByTestId('button');
    const email = screen.getByTestId('passwordId');
    const errMsg = screen.getByTestId('ErrorTextId');
    fireEvent.changeText(email, 'sai');
   await fireEvent.press(button);
    expect(errMsg.props.children).toBeNull;
    expect(homeScreenProps.navigation.navigate).toHaveBeenCalledWith('Geners');
  });
  test("navigation to signUp page", async()=>{
    render(<Password {...homeScreenProps}/>)
    const SignUpButton = screen.getByTestId("textButton")
    await fireEvent.press(SignUpButton)
    expect(homeScreenProps.navigation.navigate).toHaveBeenCalledWith('RecoveryPassword');
})