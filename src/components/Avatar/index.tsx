import React from "react";
import { Image } from "react-native";
import { styles } from './styles';
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";

type Props = {
    urlImage: string
}

export function Avatar(props: Props) {
    const { secondary50, secondary100 } = theme.colors;

    return (
        <LinearGradient
            style={styles.container}
            colors={[secondary50, secondary100]}
        >
            <Image 
                source={{uri: props.urlImage}}
                style={styles.avatar}
            />
        </LinearGradient>
    )
}