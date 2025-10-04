import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { Box, HStack } from '@chakra-ui/react';

const socials = [
  {
    icon: faEnvelope,
    url: 'mailto: hello@example.com',
  },
  {
    icon: faGithub,
    url: 'https://github.com',
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com',
  },
  {
    icon: faStackOverflow,
    url: 'https://stackoverflow.com',
  },
];

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const headerRef = useRef(null);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos) {
        headerRef.current.style.transform = 'translateY(0)';
      } else {
        headerRef.current.style.transform = 'translateY(-200px)';
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      backgroundColor="#18181b"
      transition="transform 0.3s ease-in-out"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
          <nav>
            <HStack>
              {socials.map((social) => (
                <a
                  style={{ paddingRight: 8 }}
                  key={social.url}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={social.icon} size={'2x'} />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a key={'projects'} onClick={handleClick('projects')} href={'#projects'}>
                Projects
              </a>
              <a key={'contactme'} onClick={handleClick('contactme')} href={'#contact-me'}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
