import React, { Fragment } from "react";
import { SlotMachine } from "../Components/Labos/Slots/Slots";

export const SlotsPage = () => {
    return(
        <>
        <h1>Slots</h1>
        <SlotMachine slots={3} ></SlotMachine>
        </>
    )
    
}