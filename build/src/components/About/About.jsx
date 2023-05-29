import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import introVideo from '../../assets/videos/video.mp4';
import { RiSecurePaymentFill } from 'react-icons/ri';
import termsAndConditions from '../../assets/docs/termsAndConditions.js'

// const Founder = () =< {
//         <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
//         <VStack>
//           <Avatar boxSize={['40', '48']} />
//           <Text children="Co-Founder " opacity={0.7} />
//         </VStack>

//         <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
//           <Heading children="Akash Dash" size={['md', 'xl']} />
//           <Text
//             children={`Hi, I am a full stack or mern stack developer, This is a dummpy Course Project`}
//             textAlign={['center', 'left']}
//           />
//         </VStack>
//       </Stack>
// }

// const videoPlayer = () => {
//         <Box>
//           <video
//             loop
//             autoPlay
//             controls
//             controlsList="nodownload nofullscreen noremoteplayback"
//             disablePictureInPicture
//             disableRemotePlayback
//             src={introVideo}
//           ></video>
//         </Box>;
// }

// const TandC = ({terms&Conditions}) => {
    
// }

const About = () => {
  return (
    <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />

      {/* Founder variable Starts Here */}
      <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
        <VStack>
          <Avatar
            boxSize={['40', '48']}
            src="https://cdn.pixabay.com/photo/2023/04/06/09/39/camera-7903435_960_720.jpg"
          />
          <Text children="Co-Founder " opacity={0.7} />
        </VStack>

        <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
          <Heading children="Akash Dash" size={['md', 'xl']} />
          <Text
            children={`Hi, I am a full stack or mern stack developer, This is a dummpy Course Project`}
            textAlign={['center', 'left']}
          />
        </VStack>
      </Stack>
      {/* Founder variable Ends Here */}

      <Stack m={'8'} direction={['column', 'row']} alignItems={'center'}>
        <Text fontFamily={'cursive'} m={'8'}>
          We are a video streaming platform with some premium courses available
          only for premium users
        </Text>

        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>

      {/* videoPlayer variable Starts Here */}
      <Box>
        <video
          loop
          autoPlay
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
      </Box>
      {/* videoPlayer variable Ends Here */}

      {/* Terms and Conditions variable starts here */}
      <Box h={'sm'} p="4" overflow={'scroll'}>
        <Heading
          size={'md'}
          children="Terms & Conditions"
          textAlign={['center', 'left']}
          my={'4'}
        />

        <Box h={'sm'} p={'4'}>
          <Text
            fontFamily={'heading'}
            letterSpacing={'widest'}
            textAlign={['center', 'left']}
          >
            {' '}
            {termsAndConditions}
          </Text>
          <Heading
            my={'4'}
            size={'xs'}
            children="Refund Policy only applicable for cancellation within 7 days"
          />
        </Box>
      </Box>
      {/* Terms and Conditions variable ends here */}

      <HStack my={'4'} p={'4'}>
        <RiSecurePaymentFill />
        <Heading
          children="Payment is secured by Razorpay"
          size={'xs'}
          fontFamily={'sans-serif'}
          textTransform={'uppercase'}
        />
      </HStack>
    </Container>
  );
};

export default About;
