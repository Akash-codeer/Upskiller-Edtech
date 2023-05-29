import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const isAuthenticated = true;
  const user = {
    role: 'admin',
  };

  const LogoutHandler = () => {
    console.log('Logout');
    onClose();
  };
  return (
    <>
      <ColorModeSwitcher />

      <Button
        onClick={onOpen}
        colorScheme={'yellow'}
        width="12"
        height={'12'}
        zIndex={'overlay'}
        rounded="full"
        position={'fixed'}
        top="6"
        left="6"
      >
        <RiMenu5Fill />
      </Button>

      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay backdropFilter={'blur(3px)'} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'}>
            COURSES AVAILABLE
          </DrawerHeader>

          <DrawerBody>
            <VStack spacing={'4'} alignItems="flex-start">
              <Link to="/">
                <Button onClick={onClose} variant={'ghost'}>
                  Home
                </Button>
              </Link>

              <Link to="/courses">
                <Button onClick={onClose} variant={'ghost'}>
                  Browse All Courses
                </Button>
              </Link>

              <Link to="/request">
                <Button onClick={onClose} variant={'ghost'}>
                  Request a Course
                </Button>
              </Link>

              <Link to="/contact">
                <Button onClick={onClose} variant={'ghost'}>
                  Contact Us
                </Button>
              </Link>

              <Link to="/about">
                <Button onClick={onClose} variant={'ghost'}>
                  About
                </Button>
              </Link>

              <HStack
                justifyContent={'space-evenly'}
                position="absolute"
                bottom={'2rem'}
                width={'80%'}
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link onClick={onClose} to="/profile">
                          <Button variant={'ghost'} colorScheme="yellow">
                            Profile
                          </Button>
                        </Link>

                          <Button variant={'ghost'} onClick={LogoutHandler}>
                            <RiLogoutBoxLine />
                            Logout
                          </Button>
                        
                      </HStack>

                      {user && user.role === 'admin' && (
                        <Link to="/admin/dashboard">
                          <Button
                            onClick={onClose}
                            colorScheme="purple"
                            variant={'ghost'}
                          >
                            <RiDashboardFill style={{ margin: '4px' }} />
                            Dashboard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <Button onClick={onClose} colorScheme="yellow">
                        Login
                      </Button>
                    </Link>

                    <p>OR</p>

                    <Link to="/register">
                      <Button onClick={onClose} colorScheme="yellow">
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
