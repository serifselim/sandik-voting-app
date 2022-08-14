import React from 'react'
import { Box, Divider, List, ListItem, Text } from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'


const CommentsList = ({ comments }) => {
    return (
        <Box w={600} h={600}>
            <Text fontSize='4xl'>
                <ChatIcon color='red.500' />
                <b> Yorumlar </b>
            </Text>
            <Divider mt={2} boxShadow='red-lg' p='1' spacing='8' rounded='xl' bg='red' />
            <List mt={7} spacing={3}>
                <ListItem>
                    {comments && comments.map((item, index) => (
                        <Box key={index} w={250} borderRadius={5} mt={3} bg='gray.500'>
                            <Text ml={2}>{item.text}</Text>
                        </Box>
                    ))}
                </ListItem>
            </List>
        </Box>
    )
}

export default CommentsList