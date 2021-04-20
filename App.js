import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
const [A, setInputA] = useState('');
const [B, setInputB] = useState('');
const [C, setInputC] = useState('');
const [D, setInputD] = useState('');
const [E, setInputE] = useState('');
const [result, setInputResult] = useState('');
const [resultOne, setInputResultOne] = useState('');
const [resultTwo, setInputResultTwo] = useState('');


    const pressHandlerOne = () =>{
        let a = Number.parseInt(A);

        if (A != '') {
        let y1 = -3*Math.pow(a,2);
        let y2 = -2*Math.pow(a,2);
        let y3 = -1*Math.pow(a,2);
        let y4 = 0*Math.pow(a,2);
        let y5 = 1*Math.pow(a,2);
        let y6 = 2*Math.pow(a,2);
        let y7 = 3*Math.pow(a,2);
        setInputResult('y1='+y1 + ', y2='+y2+', y3='+y3+', y4='+y4+', y5='+y5+', y6='+y6+', y7='+y7);
        }
        else {
            Alert.alert("Поле не должно быть пустым!");
        }

    }

     const pressHandlerTwo = () =>{
        let b = Number.parseInt(B);
        let c = Number.parseInt(C);

         if (B !='' && C != '') {
              let y8 = (-3*Math.pow(b,2))+c;
        let y9 = (-2*Math.pow(b,2))+c;
        let y10 = (-1*Math.pow(b,2))+c;
        let y11 = (0*Math.pow(b,2))+c;
        let y12 = (1*Math.pow(b,2))+c;
        let y13 = (2*Math.pow(b,2))+c;
        let y14 = (3*Math.pow(b,2))+c;
        setInputResultOne('y1='+y8 + ', y2='+y9+', y3='+y10+', y4='+y11+', y5='+y12+', y6='+y13+', y7='+y14);
         }

    }

      const pressHandlerThree = () =>{
        let d = Number.parseInt(D);
          let e = Number.parseInt(E);

          if (D != '' && E != '') {
              let y15 = (-3*Math.pow(d,2))-e;
            let y16 = (-2*Math.pow(d,2))-e;
            let y17 = (-1*Math.pow(d,2))-e;
            let y18 = (0*Math.pow(d,2))-e;
            let y19 = (1*Math.pow(d,2))-e;
            let y20 = (2*Math.pow(d,2))-e;
            let y21 = (3*Math.pow(d,2))-e;
            setInputResultTwo('y1='+y15 + ', y2='+y16+', y3='+y17+', y4='+y18+', y5='+y19+', y6='+y20+', y7='+y21);
          }
           else {
            Alert.alert("Поля не должны быть пустыми!");
        }
    }


return (
<View style = {{backgroundColor: '#fff', width: '100%', height: '100%'}}>
<View style ={styles.header}>
<Text style={styles.headerText}>Функция параболы</Text>
</View>

<Text style = {{paddingTop:10, paddingBottom:10,color: '#78AF2C',fontWeight: 'bold', fontSize: 17, textAlign:'center'}}
paddingTop>Введите данные:</Text>




<View style = {styles.block}>
    <Text style = {styles.text}>y= </Text>

<TextInput style = {styles.input} keyboardType='numeric' placeholder= 'a' placeholderTextColor='#78AF2C'
value = {A} onChangeText={text => setInputA(text)+setInputResult('')}/>

<Text style = {styles.text}>x^2</Text>

<View style = {{alignItems: 'center',borderRadius: '17%', margin: 10, borderWidth: 2, borderColor: '#78AF2C', width: '35%', marginLeft: 120}}>
<Button title = "Вычислить" onPress = {pressHandlerOne} color = '#78AF2C' />
</View>

</View>

<Text style = {{color:'#78AF2C', paddingTop: 10, fontSize: 20, paddingLeft: 15, fontWeight: 'bold'}}>Ответ:</Text>
<Text style = {styles.res}>{result}</Text>






<View style = {styles.block}>
    <Text style = {styles.text}>y= </Text>

<TextInput style = {styles.input} keyboardType='numeric' placeholder= 'a' placeholderTextColor='#78AF2C'
value = {B} onChangeText={text => setInputB(text)+setInputResultOne('')}/>

<Text style = {styles.text}>x^2+</Text>

<TextInput style = {styles.input} keyboardType='numeric' placeholder= 'b' placeholderTextColor='#78AF2C'
value = {C} onChangeText={text => setInputC(text)+setInputResultOne('')}/>
    <Text style = {styles.text}>x</Text>

<View style = {{alignItems: 'center',borderRadius: '17%', margin: 10, borderWidth: 2, borderColor: '#78AF2C', width: '35%', marginLeft: 55}}>
<Button title = "Вычислить" onPress = {pressHandlerTwo} color = '#78AF2C' />
</View>


</View>

<Text style = {{color:'#78AF2C', paddingTop: 10, fontSize: 20, paddingLeft: 15, fontWeight: 'bold'}}>Ответ:</Text>
<Text style = {styles.res}>{resultOne}</Text>




<View style = {styles.block}>
    <Text style = {styles.text}>y= </Text>

<TextInput style = {styles.input} keyboardType='numeric' placeholder= 'a' placeholderTextColor='#78AF2C'
value = {D} onChangeText={text => setInputD(text)+setInputResultTwo('')}/>

<Text style = {styles.text}>x^2-</Text>

<TextInput style = {styles.input} keyboardType='numeric' placeholder= 'b' placeholderTextColor='#78AF2C'
value = {E} onChangeText={text => setInputE(text)+setInputResultTwo('')}/>
    <Text style = {styles.text}>x</Text>
<View style = {{alignItems: 'center',borderRadius: '17%', margin: 10, borderWidth: 2, borderColor: '#78AF2C', width: '35%', marginLeft: 57}}>
<Button title = "Вычислить" onPress = {pressHandlerThree} color = '#78AF2C' />
</View>

</View>


<Text style = {{color:'#78AF2C', paddingTop: 10, fontSize: 20, paddingLeft: 15, fontWeight: 'bold'}}>Ответ:</Text>
<Text style = {styles.res}>{resultTwo}</Text>


</View>
);
}
const styles = StyleSheet.create({
block: {
flexDirection: 'row',
//justifyContent: 'center',
marginLeft: 25,
alignItems: 'center',
marginBottom: 15,
marginTop: 10
},
input: {
color: '#000',
width: '13%',
textAlign: 'center',
borderBottomWidth: 1,
borderBottomColor: '#78AF2C',
},
text: {
color: '#78AF2C',
fontWeight: 'bold'
},
res: {
color: '#000',
marginTop: 5,
marginLeft: 15,
fontSize: 17
},
header: {
height: '12%',
backgroundColor: '#78AF2C',
},
headerText: {
color: '#fff',
fontWeight: 'bold',
fontSize: 22,
textAlign:'center',
paddingTop: 55,
paddingBottom: 20
}
});

