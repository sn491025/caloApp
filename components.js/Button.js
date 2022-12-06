import { Text,View,TouchableOpacity,StyleSheet } from "react-native";

export default function CustomButton(){
    return(
        <View style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#4457DE',
        borderWidth:1,
        borderRadius:10,
        borderColor:'#4457DE'

    },
    buttonText: {
        fontSize:20,
        textAlign:'center',
        color:'#FFFFFF',
        padding:10,
    }

})