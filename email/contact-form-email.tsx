import { Html, Body, Head, Hr, Container, Preview, Section, Text } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  senderMessage: string;
  senderEmail: string;
};

/**
 * ContactFormEmail component is used to display a new message received from a sender.
 * It takes two props: senderMessage and senderEmail.
 *
 * @param senderMessage - The message sent by the sender.
 * @param senderEmail - The email address of the sender.
 *
 * @returns A React component that displays the sender's message and email address.
 */
export default function ContactFormEmail({ senderMessage, senderEmail }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Message from {senderEmail}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Text className="text-2xl font-bold leading-tight">
                You received a new message from <span className="no-underline text-black/90">{senderEmail}</span>
              </Text>
              <Text>{senderMessage}</Text>
              <Hr />
              <Text>The sender's email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
