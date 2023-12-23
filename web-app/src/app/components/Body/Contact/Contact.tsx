"use client";

import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  Container,
  Text,
  Divider,
} from "@mantine/core";
import { useForm } from "@mantine/form";

export function GetInTouchSimple() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <Container size="md">
      <form onSubmit={form.onSubmit(() => {})}>
        <Divider
          my="xs"
          label={
            <>
              <Title
                order={2}
                size="h1"
                style={{
                  fontFamily: "Greycliff CF, var(--mantine-font-family)",
                }}
                fw={700}
              >
                Got a burning question?
              </Title>
            </>
          }
          labelPosition="center"
        />
        <Text>
          If you've got a project or proposal in mind, I'd love to chat. Feel
          free to use the form to reach out. I'll try my best to get back to you
          as soon as possible!
        </Text>

        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
          <TextInput
            label="Name"
            placeholder="Elon Musk"
            name="name"
            variant="filled"
            {...form.getInputProps("name")}
          />
          <TextInput
            required
            label="Email"
            placeholder="e@x.com"
            name="email"
            variant="filled"
            {...form.getInputProps("email")}
          />
        </SimpleGrid>

        <TextInput
          label="Subject"
          placeholder="Possibility to work together?"
          mt="md"
          name="subject"
          variant="filled"
          {...form.getInputProps("subject")}
        />
        <Textarea
          required
          mt="md"
          label="Message"
          placeholder="I have another great idea for Twitter... 🐦"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          variant="filled"
          {...form.getInputProps("message")}
        />

        <Group justify="center" mt="xl">
          <Button type="submit" size="md">
            Send message
          </Button>
        </Group>
      </form>
    </Container>
  );
}
