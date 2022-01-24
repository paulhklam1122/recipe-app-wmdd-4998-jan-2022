import { Box, Button, Center, Divider, Heading, Image, Text, VStack } from 'native-base'
import React from 'react'

const RecipeCard = props => {
  const { image, label, navigation, source, url } = props

  return (
    <Box borderWidth={1} borderRadius='md' pb={5} mb={10}>
      <VStack space={4} divider={<Divider />}>
        <Center>
          <Heading size='xs'>{label}</Heading>
          <Text>{source}</Text>
        </Center>
        <Box>
          <Image alt={label} source={{ uri: image }} size={'2xl'} />
        </Box>
        <Box px={4} pb={4}>
          <Button
            variant='ghost'
            onPress={() =>
              navigation.navigate('Show', {
                label,
                url
              })
            }
          >
            View
          </Button>
        </Box>
      </VStack>
    </Box>
  )
}

export default RecipeCard
