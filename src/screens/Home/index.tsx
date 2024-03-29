import React, { useState } from "react";
import { View, VirtualizedList, FlatList, Text } from "react-native";
import { Profile } from "../../components/Profile";
import { ButtonAdd } from '../../components/ButtonAdd';
import { styles } from './styles';
import { CategorySelect } from "../../components/CategorySelect";
import { useNavigation } from "@react-navigation/native";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from './../../components/Appointment/index';
import { ListDivider } from "../../components/ListDivider";

export function Home() {
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(true);
    //const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '3',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
    ]
    const navigation = useNavigation();

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }
    
    function handleAppointmentDetails() {
        navigation.navigate('AppointmentDetails');
    }

    return (
        <View>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>

            <View>
                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />

                <View>
                    <ListHeader
                        title="Partidas agendadas"
                        subtitle="Total 6"
                    />

                    <FlatList
                        data={appointments}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Appointment data={item} onPress={handleAppointmentDetails}/>
                        )}
                        ItemSeparatorComponent={() => <ListDivider />}
                        style={styles.matches}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </View>
    );
}