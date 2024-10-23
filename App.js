import React from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import useFetchSurahs from '../hooks/useFetchSurahs';

const QuranAppScreen = () => {
    const { surahs, loading } = useFetchSurahs();

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>QuranApp</Text>

            {/* FlatList to display the surahs */}
            <FlatList
                data={surahs}
                keyExtractor={item => item.number.toString()}
                renderItem={({ item }) => (
                    <View style={styles.surahCard}>
                        <Text style={styles.surahName}>{item.englishName}</Text>
                        <Text style={styles.surahDetails}>{item.englishNameTranslation}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
    header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
    surahCard: { padding: 20, marginVertical: 10, backgroundColor: '#fff', borderRadius: 8, elevation: 3 },
    surahName: { fontSize: 18, fontWeight: 'bold' },
    surahDetails: { fontSize: 14, color: '#666' },
});

export default QuranAppScreen;
