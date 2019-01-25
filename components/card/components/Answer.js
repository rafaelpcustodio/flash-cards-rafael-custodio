import React from 'react'
import {  View, Text, StyleSheet } from 'react-native'

import {gray} from './../../../utils/colors'

const Answer = ({specificCard, showAnswer}) => {
    if('answer' in specificCard){
            return(showAnswer ? (
            <View><Text style={styles.answer}>{specificCard.answer}</Text></View>
            ) :(null)
        )
    }else{
        return (null)
    }
}

const styles = StyleSheet.create({
    answer:{
        marginTop:20,
        fontSize:30,
        color:gray,
        textAlign:'center',
    },
})

export default Answer