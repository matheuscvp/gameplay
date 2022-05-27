import React from "react";
import { Image, Text } from 'react-native';
import { styles } from './styles';

export function GuildIcon() {
    const uri = '../../assets/discord.png';

    return (
        <Image
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
        />
    )
}