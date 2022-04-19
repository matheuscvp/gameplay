import React from "react";
import { ScrollView, Text } from 'react-native';
import { styles } from './styles';
import { categories } from "../../utils/categories";
import { Category } from "../Category";

export function CategorySelect() {
    return (
        <ScrollView 
            horizontal 
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingRight: 40}}
        >
            {
                categories.map(category => {
                    <Category 
                        title={category.title}
                        icon={category.icon}                        
                    />
                })
            }
        </ScrollView>
    )
}