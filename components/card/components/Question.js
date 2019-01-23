import React from 'react'
import {  View, Text, StyleSheet  } from 'react-native'

import {gray} from './../../../utils/colors'

const Question = ({specificCard}) => {
    if(specificCard.question){
        return(<View><Text style={styles.question}>{specificCard.question}</Text></View>)
    }
}
const styles = StyleSheet.create({
    question:{
        marginTop:20,
        fontSize:30,
        color:gray,
        textAlign:'center',
    },
})

export default Question