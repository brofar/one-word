import { useState } from 'react'
import { Center, Container, Flex } from '@mantine/core';
import Upload from './Components/upload'
import FlashCards from './Components/FlashCards'


function App() {
  const [hasFile, setHasFile] = useState(false)
  const [words, setWords] = useState([])

  const handleFileUpload = (lines) => {
    setWords(lines);
    setHasFile(true);
  }

  return (
    <Flex h='100vh'
      justify="center"
      align="center"
      bg="var(--mantine-color-blue-light)">
      <Center>
        {!hasFile && <Upload onFileUpload={handleFileUpload} />}
        {words.length > 0 && <FlashCards items={words} />}
      </Center>
    </Flex>
  )
}

export default App
