import React from 'react'
import {  View, Text, StyleSheet  } from 'react-native'

import {gray} from './../../../utils/colors'

const Question = ({specificCard}) => {
    if('question' in specificCard){
        return(<View><Text style={styles.question}>{specificCard.question}</Text></View>)
    }else{
        return(null)
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