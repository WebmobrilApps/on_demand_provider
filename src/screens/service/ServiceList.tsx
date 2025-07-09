import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Colors,SW, SF, serviceArr} from '../../utils';
import imagePaths from '../../assets/images';
import { AppHeader, Container, ServiceItem } from '../../component';
import { useNavigation } from '@react-navigation/native';

 

const seperatorComponent = () => <View style={{ marginHorizontal: 10 ,marginVertical:7}} />;
const ServiceList: React.FC = () => {
    const navigation = useNavigation<any>();
    return (
        <Container>
            <AppHeader
                headerTitle='Service Management'
                onPress={navigation.goBack}
                Iconname='arrowleft'
                rightIcon={'AntDesign'}
                headerStyle={styles.headerStyle}
                titleStyle={styles.headerTitleStyle}
            />
            <FlatList
                data={serviceArr}
                renderItem={({ item, index }) => {
                    return <ServiceItem
                        name={item.name}
                        withEditButton
                        id={item.id.toString() + item.name}
                        image={item.image}
                        price={20}
                    />
                }}
                numColumns={2}
                ItemSeparatorComponent={seperatorComponent}
                columnWrapperStyle={{ justifyContent: "space-between", paddingHorizontal: SW(25) }}
                keyExtractor={item => item.id.toString() + item.name}
            />

        </Container>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: Colors.bgwhite,
        marginHorizontal: 10,
        marginBottom: 10
    },
    headerTitleStyle: {
        color: Colors.textHeader,
        fontSize: SF(18),
    },
});

export default ServiceList;