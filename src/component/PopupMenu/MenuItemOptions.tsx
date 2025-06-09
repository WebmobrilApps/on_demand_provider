import React, { FC, memo } from 'react';
import { Platform } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import Divider from '../Divider';
import { VectoreIcons } from '..';
import { Colors, SF } from '../../utils';



type ItemsProps = {
  title: string;
  onPress: () => void;
};

type Props = {
  id: string;
  idMenu: string;
  options: ItemsProps[];
  setIdMenu: (id: string) => void;
};

const ItemOptions: FC<Props> = ({ id, idMenu, options, setIdMenu }) => {
  const handleOnPress = (id: string) => {
    if (id === idMenu) {
      setIdMenu('');
      return;
    }
    setIdMenu(id);
  };

  return (
    <Menu onClose={() => setIdMenu('')}>
      <MenuTrigger
        onPress={() => handleOnPress(id)}
        customStyles={{
          triggerWrapper: {
            top: 25,
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          },
          triggerTouchable: {
            underlayColor: '#ffffff',
          },
        }}
      >
          <VectoreIcons icon='MaterialCommunityIcons' name="dots-vertical" size={SF(26)} color={Colors.themeColor} />
      </MenuTrigger>

      <MenuOptions
        customStyles={{
          optionsWrapper: {
            position: 'absolute',
            bottom: Platform.OS === 'ios' ? -60 : -68,
            left: 50,
            height: 100,
            backgroundColor: '#ffffff',
            borderRadius: 8,
            padding: 8,
            width: 150,
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 5,
          },
        }}
      >
        {options?.map((option, index) => (
          <>
            <MenuOption key={option.title} onSelect={option.onPress} text={option.title} />
            {options.length > index + 1 && (
              <Divider width={1} color={'gray'} />
            )}
          </>
        ))}
      </MenuOptions>
    </Menu>
  );
};

export default memo(ItemOptions);