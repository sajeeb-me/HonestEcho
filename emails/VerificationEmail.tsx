import {
    Html,
    Head,
    Font,
    Preview,
    Heading,
    Row,
    Section,
    Text,
    Button,
} from '@react-email/components';

interface VerificationEmailProps {
    username: string;
    otp: string;
}

export default function VerificationEmail({ username, otp }: VerificationEmailProps) {
    return (
        <Html lang="en" dir="ltr">
            <Head>
                <title>Verification Code</title>
                <Font
                    fontFamily="Roboto"
                    fallbackFontFamily="Verdana"
                    webFont={{
                        url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
                        format: 'woff2',
                    }}
                    fontWeight={400}
                    fontStyle="normal"
                />
            </Head>
            <Preview>Here&apos;s your verification code: {otp}</Preview>
            <Section>
                <Row>
                    <Heading as="h2">Hello {username},</Heading>
                </Row>
                <Row>
                    <Text>
                        Thank you for registering with <strong>HonestEcho</strong>. Please use the following verification
                        code to complete your registration:
                    </Text>
                </Row>
                <Row>
                    <Text>
                        <h3
                            style={{ color: '#008000', fontSize: '24px' }}
                        >
                            {otp}
                        </h3>
                    </Text>
                </Row>
                <Row>
                    <Text style={{ color: '#dc143c' }}>
                        If you did not request this code, please ignore this email.
                    </Text>
                </Row>
                <Row>
                    <Button
                        // href={`http://localhost:3000/verify/${username}`}
                        href={`https://honestecho.vercel.app/verify/${username}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{ backgroundColor: '#1a202c', color: '#ffffff', padding: '10px 20px', borderRadius: '5px' }}
                    >
                        Verify here
                    </Button>
                </Row>
            </Section>
        </Html>
    );
}