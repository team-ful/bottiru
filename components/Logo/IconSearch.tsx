import {Box, Center, VStack, Tooltip} from '@chakra-ui/react';
import {RiSearchLine} from 'react-icons/ri';

const IconSearch = ({
  size,
  label,
  iName,
}: {
  size: string;
  label?: string;
  iName?: string;
}) => {
  return (
    <Tooltip label={label}>
      <VStack width={size} spacing={0}>
        <RiSearchLine size="35px" />
        <Center>
          <Box fontSize=".5rem" color="gray">
            {iName}
          </Box>
        </Center>
      </VStack>
    </Tooltip>
  );
};
export default IconSearch;
