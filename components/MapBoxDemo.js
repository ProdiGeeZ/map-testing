import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapboxGL from '@rnmapbox/maps';

Mapbox.setAccessToken('pk.eyJ1IjoicHJvZGR5YmFieSIsImEiOiJjbHFkcnZ4OWowZWk4Mml0a3lzMzlpZGdvIn0.EydGOig4BK8fZYQlGB6qZQ');

const App = () => {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <MapboxGL.MapView style={styles.map} />
            </View>
        </View>
    );
}

export default App;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        height: 300,
        width: 300,
    },
    map: {
        flex: 1
    }
});