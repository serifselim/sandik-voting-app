import React, { useState } from 'react';
import { Box, Button, Divider, FormControl, Flex, Select, Text, Textarea, VStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const CommentAdd = ({ changeSelector, handleSubmit, voteArray }) => {

    const [commentText, setcomment] = useState('');
    const { t } = useTranslation();

    return (
        <Box>
            <VStack>
                <Text textAlign={'left'} float='left' fontSize='4xl'> <b> {t('sendCommentTitle')} </b></Text>
                <Divider boxShadow='red-lg' p='1' spacing='8' rounded='xl' bg='red' />
                <Flex>
                    <FormControl>
                        <Select
                            variant='filled' mt={7}
                            backgroundColor='gray.700'
                            _hover={{ background: 'gray.700' }}
                            placeholder={t('choosePollText')}
                            onChange={changeSelector}>
                            {voteArray.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.head}
                                </option>
                            ))}

                        </Select>
                        <Textarea
                            type='text'
                            value={commentText}
                            onChange={e => setcomment(e.target.value)}
                            mt={5}
                            h={20}
                            size='md'
                            required
                            variant='filled'
                            backgroundColor='gray.700'
                            _focus={{ background: 'gray.700' }}
                            _hover={{ background: 'gray.700' }} placeholder={t('typeCommentText')}/>
                        <Button type='submit' onClick={(e) => handleSubmit(e, commentText)} mt={3} colorScheme='red' background={'red.600 !important'} width={'100%'} float='right' color='white'>{t('sendCommentButton')}</Button>
                    </FormControl>
                </Flex>
            </VStack>

        </Box >
    )
}

export default CommentAdd