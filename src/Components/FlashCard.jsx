import { Card, Title, Button, Flex } from '@mantine/core';

export default function FlashCard({ word, onNext, isLastWord }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder w={400}>

      <Flex
        mih={300}
        gap="md"
        align="center"
        direction="column"
        wrap="wrap"
        justify="space-between">

        <Flex mih={200} align="center">
          <Title order={1} textWrap="balance" align="center">{word}</Title>
        </Flex>

        <Button color="blue" fullWidth mt="md" radius="md" onClick={onNext} disabled={isLastWord}>
          {isLastWord ? "Done" : "Next"}
        </Button>

      </Flex>
      
    </Card>
  );
};