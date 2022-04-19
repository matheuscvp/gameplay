import React from "react";
import { RectButton } from 'react-native-gesture-handler'
import { Text, Image, View } from "react-native";
import DiscordImg from '../../assets/discord.png';
import { styles } from "./styles";

type Props = {
    title: string;
    onPress: () => void
}

export function ButtonIcon(props: Props) {
    return (
        <RectButton style={styles.container} onPress={props.onPress}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon} />
            </View>

            <Text style={styles.title}>
                {props.title}
            </Text>
        </RectButton>
    )
} 