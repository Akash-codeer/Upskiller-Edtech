import { Button, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  RiAddCircleFill,
  RiDashboardFill,
  RiEyeFill,
  RiUser3Fill,
} from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const active = location.pathname === '/admin/dashboard';
  const active1 = location.pathname === '/admin/users';
  const active2 = location.pathname === '/admin/createcourse';
  const active3 = location.pathname === '/admin/courses';
  const colorScheme = active ? 'purple' : '';
  const colorScheme1 = active1 ? 'purple' : '';
  const colorScheme2 = active2 ? 'purple' : '';
  const colorScheme3 = active3 ? 'purple' : '';

  return (
    <VStack
      spacing={'8'}
      p={'16'}
      boxShadow={'-2px 0 10px rgba(107, 70, 193, 0.5)'}
    >
      <Link to="/admin/dashboard">
        <Button
          fontSize={'larger'}
          variant={'ghost'}
          colorScheme={colorScheme}
          active={active}
        >
          <RiDashboardFill style={{ margin: '4px' }} />
          Dashboard
        </Button>
      </Link>

      <Link to="/admin/users">
        <Button
          fontSize={'larger'}
          variant={'ghost'}
          colorScheme={colorScheme1}
          active={active1}
        >
          <RiUser3Fill style={{ margin: '4px' }} />
          Users
        </Button>
      </Link>

      <Link to="/admin/createcourse">
        <Button
          fontSize={'larger'}
          variant={'ghost'}
          colorScheme={colorScheme2}
          active={active2}
        >
          <RiAddCircleFill style={{ margin: '4px' }} />
          Create Course
        </Button>
      </Link>

      <Link to="/admin/courses">
        <Button
          fontSize={'larger'}
          variant={'ghost'}
          colorScheme={colorScheme3}
          active={active3}
        >
          <RiEyeFill style={{ margin: '4px' }} />
          Courses
        </Button>
      </Link>
    </VStack>
  );
};

export default Sidebar;
