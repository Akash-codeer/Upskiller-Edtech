import {
  Box,
  Grid,
  HStack,
  Heading,
  Progress,
  Stack,
  Text
} from '@chakra-ui/react';
import React from 'react';
import cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import { DoughnutChart, LineChart } from './Chart';


const Dashboard = () => {
    const profit = true;
    const profit1 = false;
    const value = 10;
    const value2 = 78;
    const value3 = 20;
//  const bar = ({title, value, profit}) => {
//     <Box py={'4'} px={['0', '20']}>
//       <Heading size={'sm'} children={title} mb={'2'} />
//       <HStack w={'full'} alignItems={'center'}>
//         <Text children={profit?'0%':value} />
//         <Progress w="full" value={profit ? value : 0} colorScheme="purple" />
//         <Text children={`${value > 100 ? value: 100}%`} />
//       </HStack>
//     </Box>;
//  }

  return (
    <Grid
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
      css={{
        cursor: `url(${cursor}), default`,
      }}
    >
      <Box boxSizing="border-box" py={'16'} px={['4', '0']}>
        <Text
          textAlign={'center'}
          opacity={0.5}
          children={`Last change was on ${String(new Date()).split('G')[0]}`}
        />
        <Heading
          children="Dashboard"
          ml={['0', '16']}
          mb={'16'}
          textAlign={['center', 'left']}
        />
        <Stack
          direction={['column', 'row']}
          minH={'24'}
          justifyContent={'space-evenly'}
        >
          {/* Databox variable starts from here */}

          {/* Views Starts Here */}
          <Box
            w={['full', '20%']}
            boxShadow={`-2px 0 10px rgba(107, 70, 193, 0.5)`}
            p={'8'}
            borderRadius={'lg'}
          >
            <Text children="Views" />
            <HStack spacing={'6'}>
              <Text fontSize={'2xl'} fontWeight={'bold'} children="123" />
              <HStack>
                <Text children={`30%`} />
                {profit ? (
                  <RiArrowUpLine color="green" />
                ) : (
                  <RiArrowDownLine color="red" />
                )}
              </HStack>
            </HStack>
            <Text children={'Since Last Month'} opacity={0.6} />
          </Box>
          {/* Views Ends Here */}

          {/* Users Starts Here  */}
          <Box
            w={['full', '20%']}
            boxShadow={`-2px 0 10px rgba(107, 70, 193, 0.5)`}
            p={'8'}
            borderRadius={'lg'}
          >
            <Text children="Users" />
            <HStack spacing={'6'}>
              <Text fontSize={'2xl'} fontWeight={'bold'} children="23" />
              <HStack>
                <Text children={`78%`} />
                {profit ? (
                  <RiArrowUpLine color="green" />
                ) : (
                  <RiArrowDownLine color="red" />
                )}
              </HStack>
            </HStack>
            <Text children={'Since Last Month'} opacity={0.6} />
          </Box>
          {/* Users Ends Here */}

          {/* Subcription Starts Here */}
          <Box
            w={['full', '20%']}
            boxShadow={`-2px 0 10px rgba(107, 70, 193, 0.5)`}
            p={'8'}
            borderRadius={'lg'}
          >
            <Text children="Subscription" />
            <HStack spacing={'6'}>
              <Text fontSize={'2xl'} fontWeight={'bold'} children="12" />
              <HStack>
                <Text children={`20%`} />
                {profit1 ? (
                  <RiArrowUpLine color="green" />
                ) : (
                  <RiArrowDownLine color="red" />
                )}
              </HStack>
            </HStack>
            <Text children={'Since Last Month'} opacity={0.6} />
          </Box>
          {/* Subscription Ends Here */}

          {/* Databox variable ends from here */}
        </Stack>

        <Box
          m={['0', '16']}
          borderRadius={'lg'}
          p={['0', '16']}
          mt={['4', '16']}
          boxShadow={`-2px 0 10px rgba(107, 70, 193, 0.5)`}
        >
          <Heading
            textAlign={['center', 'left']}
            size={'md'}
            children={'Views Graph'}
            pt={['8', '0']}
            ml={['0', '16']}
          />
          {/* Line Graph Here */}
          <LineChart/>
        </Box>

        <Grid templateColumns={['1fr', '2fr 1fr']}>
          <Box p="4">
            <Heading
              textAlign={['center', 'left']}
              size={'md'}
              children={'Progress Bar'}
              my={'8'}
              ml={['0', '16']}
            />
            <Box>
              {/* Bar component Starts from Here */}

              {/* Views Starts Here */}
              <Box py={'4'} px={['0', '20']}>
                <Heading size={'sm'} children={'Views'} mb={'2'} />
                <HStack w={'full'} alignItems={'center'}>
                  <Text children={profit ? '0%' : `-${value}%`} />
                  <Progress w="full" value={'30'} colorScheme="purple" />
                  <Text children={`${value > 100 ? value : 100}%`} />
                </HStack>
              </Box>
              {/* Views Ends Here */}

              {/* Users Starts Here */}
              <Box py={'4'} px={['0', '20']}>
                <Heading size={'sm'} children={'Users'} mb={'2'} />
                <HStack w={'full'} alignItems={'center'}>
                  <Text children={profit ? '0%' : `-${value2}%`} />
                  <Progress w="full" value={'78'} colorScheme="purple" />
                  <Text children={`${value2 > 100 ? value2 : 100}%`} />
                </HStack>
              </Box>
              {/* Users Ends Here */}

              {/* Subscription Starts Here */}
              <Box py={'4'} px={['0', '20']}>
                <Heading size={'sm'} children={'Views'} mb={'2'} />
                <HStack w={'full'} alignItems={'center'}>
                  <Text children={profit1 ? '0%' : `-${value3}%`} />
                  <Progress w="full" value={'0'} colorScheme="purple" />
                  <Text children={`${value3 > 100 ? value3 : 100}%`} />
                </HStack>
              </Box>
              {/* Subscription Ends Here */}

              {/* Bar component Ends  Here */}
            </Box>
          </Box>

          <Box p={['0', '16']} boxSizing='border-box'>
            <Heading textAlign={'center'} size={'md'} mb={'4'} children={'Users'}/>
            {/* Donought graph  */}
            <DoughnutChart/>
          </Box>
        </Grid>
      </Box>

      <Sidebar />
    </Grid>
  );
};

export default Dashboard;
