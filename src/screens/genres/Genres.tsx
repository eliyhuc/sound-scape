import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const Genres = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Genres</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'#00cc99'},
    title:{color:'#ffffff', fontSize:50, fontFamily:'Lobster-Regular'},
})

export default Genres;