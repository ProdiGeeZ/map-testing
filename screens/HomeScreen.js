import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text styles={styles.content}>Welcome to Map's Spiking Results</Text>
            </View>
            <View style={styles.bottomNav}>
                <Button style={styles.button} 
                    title="Google Maps Using RN Maps"
                    onPress={() => navigation.navigate('ReactMapScreen')}
                />
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 30,
        gap: 10,
    },
    button: {
        width: 100,
    },
});

export default HomeScreen;
