import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native"

export const Box = () => {
    const [count, setCount] = useState(0);
    return (
        <View style={{
            alignItems: "center",
        }}>
            <TouchableOpacity
                onPress={() => {
                    setCount((prev) => prev + 1)
                }}
                onLongPress={()=>{
                    setCount((prev)=> prev -10)
                }}

                onPressOut={()=>{
                    setCount((prev)=> prev*2)
                }}

                /*onPressIn={()=>{
                    setCount((prev)=> prev +7)
                }}*/
                
                >
                <View style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "orange",
                    borderRadius: 15,
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>PRESS</Text>
                </View>

            </TouchableOpacity>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>{count}</Text>
        </View>


    );
};