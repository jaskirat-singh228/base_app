import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import { BottomTabStack } from 'types/navigation_type';

type ProfileScreenProps = NativeStackScreenProps<BottomTabStack, 'ProfileScreen'>;

const ProfileScreen: React.FC<ProfileScreenProps> = (props) => {
	return <Text>Welcome to the Profile Screen</Text>;
};

export default ProfileScreen;
