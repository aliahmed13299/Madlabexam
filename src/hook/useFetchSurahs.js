import { useEffect, useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useFetchSurahs = () => {
    const [surahs, setSurahs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSurahs = async () => {
            try {
                const storedSurahs = await AsyncStorage.getItem('surahs');
                if (storedSurahs) {
                    setSurahs(JSON.parse(storedSurahs));
                } else {
                    const response = await axios.get('https://api.alquran.cloud/v1/surah');
                    setSurahs(response.data.data);
                    await AsyncStorage.setItem('surahs', JSON.stringify(response.data.data));
                }
            } catch (error) {
                console.error('Error fetching surahs:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchSurahs();
    }, []);

    return { surahs, loading };
};

export default useFetchSurahs;
