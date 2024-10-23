import React from 'react';
import { SafeAreaView } from 'react-native';
import QuranAppScreen from './src/screens/QuranAppScreen';

export default function App() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <QuranAppScreen />
        </SafeAreaView>
    );
}

