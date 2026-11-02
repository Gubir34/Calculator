import { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const App = () => {

    const [sayi1, setSayi1] = useState('');
    const [sayi2, setSayi2] = useState('');
    const [sonuc, setSonuc] = useState('');

    const topla = ()=>{
        setSonuc(Number(sayi1) + Number(sayi2))
    }

    const cikar = ()=>{
        setSonuc(Number(sayi1) - Number(sayi2))
    }

    const carp = ()=>{
        setSonuc(Number(sayi1) * Number(sayi2))
    }


    const bol = ()=>{
        setSonuc(Number(sayi1) / Number(sayi2))
    }

    return (

        <View style={styles.container}>
            <Text>Calculator</Text>
            <TextInput styles={styles.input}
            placeholder='Birinci sayıyı gir: '
            keyboardType='numeric'
            value={sayi1}
            onChangeText={setSayi1}
            />

            <TextInput styles={styles.input}
            placeholder='İkinici sayıyı gir: '
            keyboardType='numeric'
            value={sayi2}
            onChangeText={setSayi2}
            />

            <View style={styles.buttons}>
            <Button title='Topla +' onPress={topla} />
            <Button title='Çikarma -' onPress={cikar} />
            <Button title='Çarp *' onPress={carp} />
            <Button title='Böblme /' onPress={bol} />
            </View>

            <Text style={styles.result}>SONUÇ: {sonuc} </Text>
        </View>
    )

}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },

    title: {
        fontSize:28,
        textAlign:'center',
        marginBottom:30,
    },

    input: {
        borderWidth:1,
        borderColor:'gray',
        padding:15,
        marginBottom:15,
        borderRadius:10
    }
    })
