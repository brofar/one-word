import { Button, Group, Stack, Text } from '@mantine/core';
import { IconUpload, IconFileTypeTxt, IconX } from '@tabler/icons-react';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import '@mantine/dropzone/styles.css';

// Import all premade files dynamically
const premadeFiles = import.meta.glob('/src/assets/premades/*.txt', { as: 'raw', import: 'default' });


export default function Upload({ onFileUpload }) {

  const handleFileUpload = (files) => {
    const file = files[0];
    handleList(file);
  };

  const handlePremade = (fileName) => {
    try {
      premadeFiles[`/src/assets/premades/${fileName}`]().then((fileContent) => {
        const lines = processText(fileContent);
        onFileUpload(lines);
      });

    } catch (error) {
      console.error('Error loading premade file:', error);
      // Handle the error appropriately (e.g., show a message to the user)
    }
  }

  const handleList = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const lines = processText(text);

      onFileUpload(lines);
    };
    reader.readAsText(file);
  }

  const processText = (text) => {
    return text
      .replace(/[\t\u00A0\uFEFF]/g, '') // Remove tabs and other whitespace
      .split(/\r\n|\r|\n/) // Split by new line
      .map((line) => line.trim()) // Remove excess whitespace
      .filter(line => line !== ''); // Remove empty lines
  }

  return (
    <>
      <Stack gap="lg">
        <Dropzone
          onDrop={(files) => handleFileUpload(files)}
          onReject={(files) => console.log('rejected files', files)}
          maxSize={5 * 1024 ** 2}
          accept={[
            'text/plain'
          ]}
        >
          <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
            <Dropzone.Accept>
              <IconUpload size={52} color="var(--mantine-color-blue-6)" stroke={1.5} />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX size={52} color="var(--mantine-color-red-6)" stroke={1.5} />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconFileTypeTxt size={52} color="var(--mantine-color-dimmed)" stroke={1.5} />
            </Dropzone.Idle>

            <div>
              <Text size="xl" inline>
                Drag your list of words here or click to select files
              </Text>
              <Text size="sm" c="dimmed" inline mt={7}>
                Make sure it is a .txt file, and has one word per line. 5MB max.
              </Text>
            </div>
          </Group>
        </Dropzone>
        or use a premade list:
        <Button color="blue" variant="outline" size="xl" onClick={() => handlePremade('ab_8_cells_systems.txt')}>
          AB Grade 8 - Cells & Systems
        </Button>
      </Stack>
    </>
  );
};