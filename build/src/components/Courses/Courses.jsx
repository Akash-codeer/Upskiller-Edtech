import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize={'60'} objectFit={'content'} />
      <Heading
        textAlign={['center', 'left']}
        maxW={'200px'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
        size={'sm'}
      />
      <Text noOfLines={2} children={description} />

      <HStack>
        <Text
          fontWeight={'bold'}
          textTransform={'uppercase'}
          noOfLines={2}
          children={'creator'}
        />
        <Text
          fontFamily={'bold'}
          textTransform={'uppercase'}
          noOfLines={2}
          children={creator}
        />
      </HStack>

      <Heading
        textAlign={'center'}
        size={'xs'}
        children={`Lectues - ${lectureCount}`}
        textTransform={'uppercase'}
      />
      <Heading
        size={'xs'}
        children={`Views - ${views}`}
        textTransform={'uppercase'}
      />

      <Stack direction={['column', 'row']} alignItems={'center'}>
    <Link to={`/course/${id}`}>
        <Button colorScheme='yellow'>Watch Now</Button>
    </Link>
        <Button variant={'ghost'} colorScheme='yellow' onClick={()=>addToPlaylistHandler(id)}>Add to Playlist</Button>
      </Stack>
    </VStack>
  );
};

const addToPlaylistHandler = () => {
    console.log('Adding to Playlist');
}
const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const categories = [
    'Web development',
    'Data Science',
    'Data Analyst',
    'Data Engineer',
    'Data Strcture and Algorithm',
    'App Development',
  ];
  return (
    <div>
      <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
        <Heading children="All Courses" margin={'8'} />

        <Input
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          placeholder="Search a course..."
          type="text"
          focusBorderColor="yellow.500"
        />

        <HStack overflowX={'auto'} paddingY={'8'}>
          {categories.map((item, index) => (
            <Button key={index} onClick={() => setCategory(item)} minW={60}>
              <Text children={item}></Text>
            </Button>
          ))}
        </HStack>

        <Stack
          direction={['column', 'row']}
          flexWrap={'wrap'}
          justifyContent={['flex-start', 'space-evenly']}
          alignItems={['center', 'flex-start']}
        >
          <Course
            title={'Sample1'}
            description={'Sample1'}
            views={23}
            imageSrc={
              'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_960_720.jpg'
            }
            id={'Sample1'}
            creator={'Sample1'}
            lectureCount={2}
            addToPlaylistHandler={addToPlaylistHandler}
          />
        </Stack>
      </Container>
    </div>
  );
};

export default Courses;
