import { View, Text } from 'react-native'
import React from 'react'

export default function LoginForm(props) {
    //Bundle, parametros entre pantallas
    
    console.log(props);
    const { name, surname, age} = props
    return (
    <View>
      <Text>Hola {name} {surname} {age}</Text>

    </View>
  )
}
