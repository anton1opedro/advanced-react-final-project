import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Card = ({ title, description, imageSrc }) => {
  return (
    <HStack spacing={2} backgroundColor="white" borderRadius="lg">
      <VStack alignItems="flex-start" spacing={4}>
        <Image src={imageSrc} alt={title} w="100%" h="400px" objectFit="cover" />
        <VStack align="flex-start" spacing={2} p={4}>
          <Text fontWeight="bold" fontSize="md" color="black">
            {title}
          </Text>
          <Text color="gray.600">{description}</Text>
          <a style={{ color: 'teal', fontWeight: 'bold' }}>
            See more <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '4px' }} />
          </a>
        </VStack>
      </VStack>
    </HStack>
  );
};

export default Card;
