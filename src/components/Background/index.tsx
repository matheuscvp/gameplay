import React, { ReactNode } from "react";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from './../../global/styles/theme';

type Props = {
    children: ReactNode;
}

export function Background(props: Props) {
    const {secondary80, secondary100} = theme.colors;

    return (
        <LinearGradient 
            style={styles.container}
            colors={[secondary80, secondary100]}
        >
            {props.children}
        </LinearGradient>
    )
}