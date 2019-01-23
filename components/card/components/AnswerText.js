import React from 'react'
import {  View, Text, StyleSheet } from 'react-native'

import {red} from './../../../utils/colors'

const AnswerText = ({showAnswer}) => {
       if(showAnswer) {
           return( <View>
                <Text style={styles.answerTxt}>
                    Click here to show the answer
                </Text>
            </View>)
        }
        return null
}

const styles = StyleSheet.create({
    answerTxt:{
        marginTop:20,
        fontSize:30,
        color:red,
        textAlign:'center',
    },
})

export default AnswerText