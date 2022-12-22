import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function PrivacyPolicy() {
    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <Typography variant="h2" gutterBottom>Privacy Policy</Typography>
            <ul>
                <li><Typography variant="h6" gutterBottom>Welcome to Urban Fresh</Typography></li>
                <ul>
                    <li><Typography variant="subtitle1" gutterBottom>This Privacy Policy sets out the basis on which any personal data, including but not limited to payment details and other information we collect from you or other sources or that you provide to us ("Information") will be handled by us in connection with your access and use of Urban Fresh, and/or the Urban Fresh mobile application (collectively, the "Platform"), services and applications (collectively, the "Services"). We understand the importance you place on the Information, and we are committed to protecting and respecting your privacy. Please read the following carefully to understand our practices regarding your Information. By using our Services, you agree to the handling of your Information in accordance with this Privacy Policy.
                    </Typography></li>
                    <li><Typography variant="subtitle1" gutterBottom>References in this Privacy Policy to "we", "our" or "us" (or similar) are references to Urban Fresh E Commerce Owned By Urban Fresh AD Holdings One Person Company LLC. References to "user" or "you" (or similar) are references to you as an individual or legal entity as the case may be.
                    </Typography></li>
                </ul>
            </ul>
            <ul>
                <li><Typography variant="h6" gutterBottom>Data We May Collect</Typography></li>
                <ul>
                    <li><Typography variant="subtitle1" gutterBottom>We may collect and process the following Information about you:
                    </Typography>
                        <ul>
                            <li><Typography variant="body2" gutterBottom>Information that you provide by filling in forms on our Platform, including information provided at the time of registering to use our Platform and other co- registrations (e.g. social media logins), subscribing to our Services, posting material or requesting further services.</Typography></li>
                            <li><Typography variant="body2" gutterBottom>the Information you provide when you enter a competition or promotion via our Platform, provide reviews, testimonials or feedback on our Platform.
                            </Typography></li>
                            <li><Typography variant="body2" gutterBottom>Information you provide us, or that we may collect from you, when you report a problem with our Platform.
                            </Typography></li>
                            <li><Typography variant="body2" gutterBottom>A record of correspondence if you contact us.
                            </Typography></li>
                            <li><Typography variant="body2" gutterBottom>General, aggregated, demographic and non-personal Information.
                            </Typography></li>
                            <li><Typography variant="body2" gutterBottom>If you download or use our mobile application, we may have access to details about your location and your mobile device, including a unique identifier for your device.
                            </Typography></li>
                            <li><Typography variant="body2" gutterBottom>Details of transactions you carry out through our Platform and of the fulfilment of your orders.
                            </Typography></li>
                            <li><Typography variant="body2" gutterBottom>Details about your computer, including but not limited to your IP address, operating system and browser type, as well as information about your general internet usage (e.g. by using technology that stores information on or gains access to your device, such as cookies, tracking pixels, web beacons, etc., (together, "Cookies"));
                            </Typography></li>
                            <li><Typography variant="body2" gutterBottom>Your email address and/or mobile number from a third party if you indicate that you have consented to that third party sharing your Information with us.
                            </Typography></li>
                            <li><Typography variant="body2" gutterBottom>Any other Information we consider necessary to enhance your experience on the Platform.

                            </Typography></li>
                        </ul>
                    </li>
                </ul>
            </ul>
            <ul>
                <li><Typography variant="h6" gutterBottom>How We Store Data</Typography></li>
                <ul>
                    <li><Typography variant="subtitle1" gutterBottom>The Information that we collect from you may be transferred to, stored processed by staff who work for us or for one of our suppliers. Such staff may be engaged in, among other things, the fulfilment of your order, the processing of your payment details and the provision of support services. We will store your Information for as long as necessary to fulfil the purposes indicated in this Privacy Policy or as otherwise permitted or required by law. Your Information may be transferred, stored, processed and used by our affiliated companies and/or non-affiliated service providers in one or more countries. Your payment details may be transferred to and stored with our affiliated companies in order to, among other things, process your payment details and provide support services to you.
                    </Typography></li>
                </ul>
            </ul>
        </Container>
    );

}

export default PrivacyPolicy;