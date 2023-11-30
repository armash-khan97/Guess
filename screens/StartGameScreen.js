import { Button, StyleSheet, Text, TextInput, Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'

const StartGameScreen = (props) => {

    const [enterValue, setEnterValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()

    // decimal number replace fun
    const numberInputHandler = inputText => {
        setEnterValue(inputText.replace(/[^0-9]/g, ''))
    }

    // reset number fun
    const resetInputHandler = () => {
        setEnterValue('')
        setConfirmed(false)
    }

    // confirm Num fun
    const confirmInputHandler = () => {

        const ChosenNumber = parseInt(enterValue);
        if (ChosenNumber == NaN || ChosenNumber <= 0 || ChosenNumber > 99) {
            return;
        }
        setConfirmed(true)
        setEnterValue('')
        setSelectedNumber(ChosenNumber)
    }

    // display on secreen in number
    let confirmedOutput;
    if (confirmed) {
        confirmedOutput = <Text>Chosen Number :{selectedNumber}</Text>
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>

            <View style={styles.screen}>
                <Text style={styles.title}>StartGameScreen</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input style={styles.input}
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enterValue} />
                    <View style={styles.btnContainer}>
                        <View style={styles.button}><Button title='Reset' onPress={resetInputHandler} color={Colors.accent} /></View>
                        <View style={styles.button}><Button title='Confirm' onPress={confirmInputHandler} color={Colors.primary} /></View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>

    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding:10,
        alignItems: 'center',
        // justifyContent:'flex-start'
    },

    title: {
        fontSize: 20,
        marginVertical: 10,
    },

    inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
    },

    btnContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    button: {
        width: 90
    },

    input: {
        width: 50,
        textAlign: 'center',
    }
})