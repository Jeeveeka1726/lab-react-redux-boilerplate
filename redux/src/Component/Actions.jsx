import React from "react";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export default function IncrementNumber(){
    return{
        type: INCREMENT,
    }
}

export function DecrementNumber(){
    return{
        type: DECREMENT,
    }
}

