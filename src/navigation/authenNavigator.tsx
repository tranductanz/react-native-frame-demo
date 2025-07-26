import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen, SignUpScreen } from "../containers/Authen";

const AuthStack = () => {
    const AuthenStack = createNativeStackNavigator();
    return (
        <AuthenStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthenStack.Screen name="SignIn" component={LoginScreen} />
            <AuthenStack.Screen name="SignUp" component={SignUpScreen} />
        </AuthenStack.Navigator>
    );
}

export default AuthStack;