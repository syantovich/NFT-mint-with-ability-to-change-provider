import React, { useState } from 'react';
import { Box, Button, Flex, Image, Link, Spacer } from '@chakra-ui/react';
// import Facebook from "@social/facebook_32x32.png";
// import Facebook from "../../../public/social-media-icons/facebook_32x32.png";
// import Facebook from '../../../public/social-media-icons/facebook_32x32.png';
// import Twitter from '../../assets/social-media-icons/twitter_32x32.png';
// import Email from '../../assets/social-media-icons/email_32x32.png';
import { NavBarProps } from './types';
import { activeProvider } from '../../services/WorkingProvider';

const NavBar = ({ account, setAccount, balance, setBalance }: NavBarProps) => {
  const isConnected = Boolean(account);
  const [activeName, setActiveName] = useState(activeProvider.provider.name);

  async function connectAccount() {
    if (window.ethereum) {
      const { account: newAccount, balance } = await activeProvider.provider.current.connect();
      if (balance) {
        setBalance(balance);
      }
      if (newAccount) {
        setAccount(newAccount);
      }
    }
  }
  const handlePickProvider = (name: string) => () => {
    if (activeProvider.provider.name !== name) {
      const isOk = activeProvider.setProvider(name);
      if (isOk) {
        setActiveName(name);
      }
    }
  };

  return (
    <Flex justify="space-between" align="center" padding="30px">
      {/*Left Side - Social Media Icons*/}
      <Flex justify="space-around" width="40%" padding="75px">
        {activeProvider.getNames().map((name) => (
          <Button
            className={activeName === name ? 'activeProvider' : ''}
            key={name}
            backgroundColor={activeName !== name ? '#008fd4' : '#025073'}
            borderRadius="15px"
            boxShadow="0px 2px 2px 1px #0F0F0F"
            color="white"
            cursor="pointer"
            fontFamily="inherit"
            padding="15px"
            margin="0 15px"
            onClick={handlePickProvider(name)}
          >
            {name}
          </Button>
        ))}
      </Flex>

      {/*Right Side - Sections and Connect*/}
      <Flex justify="space-between" align="center" padding="30px">
        <Box margin="0 15px">About</Box>
        <Spacer />
        <Box margin="0 15px">Mint</Box>
        <Spacer />
        <Box margin="0 15px">Team</Box>
        <Spacer />

        {/*Connect*/}
        {isConnected ? (
          <Box margin="0 15px">{balance}</Box>
        ) : (
          <Button
            backgroundColor="#008fd4"
            borderRadius="15px"
            boxShadow="0px 2px 2px 1px #0F0F0F"
            color="white"
            cursor="pointer"
            fontFamily="inherit"
            padding="15px"
            margin="0 15px"
            onClick={connectAccount}
          >
            Connect
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default NavBar;
