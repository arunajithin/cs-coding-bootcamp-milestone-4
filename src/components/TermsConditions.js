import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function TermsConditions() {
    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <Typography variant="h2" gutterBottom>Terms & Conditions</Typography>
            <ul>
                <li><Typography variant="h6" gutterBottom>Introduction</Typography></li>
                <ul>
                    <li><Typography variant="subtitle1" gutterBottom>These Terms of Sale set out the terms and conditions on which products are supplied to you as a buyer on Urban Fresh or on our mobile application (together defined as the “Site”). The owner and operator of the Site is Urban Fresh E Commerce Owned By Urban Fresh AD Holdings One Person Company LLC, a limited liability company registered in the United Arab Emirates (“UAE”) under license number 764928, with its office located in Dubai in the UAE (“we”, “our” or “us”).
                    </Typography></li>
                    <li><Typography variant="subtitle1" gutterBottom>Please read these terms carefully before you submit your order via the Site. By placing an order on the Site, you are agreeing to be bound by these Terms of Sale with immediate effect.
                    </Typography></li>
                </ul>
            </ul>
            <ul>
                <li><Typography variant="h6" gutterBottom>Order Acceptance</Typography></li>
                <ul>
                    <li><Typography variant="subtitle1" gutterBottom>Supplier. Each product in your order is sold either by us or by the local or international seller that is specified on the Site.
                    </Typography></li>
                    <li><Typography variant="subtitle1" gutterBottom>Order Acceptance. Our acceptance of your order will take place when we notify you of our acceptance in writing (e.g. by email or mobile messaging). If we are unable to accept your order, we will inform you of this in writing or through a call and will not charge you for the product.
                    </Typography></li>
                    <li><Typography variant="subtitle1" gutterBottom>Payment. By placing an order, you authorise us or our third-party payment processer to process your credit/debit card details for the amount of your order. We accept payment by, credit/debit card; via your wallet; or cash on delivery (an amount not exceeding AED 6,500).
                    </Typography></li>
                    <li><Typography variant="subtitle1" gutterBottom>In order to authorise credit/debit card payments, we may be required to create an account for you with our third-party payment processors, including accepting their standard terms and conditions and submitting your details to them on your behalf. You hereby authorise us to do so and we shall not be liable to you for any damage or loss you may incur as a result.
                    </Typography></li>
                    <li><Typography variant="subtitle1" gutterBottom>We may remove or add cards or other payment methods that we accept at any time without prior notice to you.
                    </Typography></li>
                    <li><Typography variant="subtitle1" gutterBottom>Cancelling Order. You may cancel your order immediately prior to shipping for any reason.
                    </Typography></li>
                    <li><Typography variant="subtitle1" gutterBottom>Our Cancellation. We may cancel your order(s) if you do not make any payment to us when it is due; you do not, within a reasonable time of us asking for it provide us with information that is necessary for us to provide the products; or you do not, within a reasonable time, allow us to deliver the products to you or collect them from us; or you attempt to bulk or multi-order purchase in accordance with clause 2.8, below. order(s) not being capable of fulfilled due to product(s) not being available.
                    </Typography></li>
                    <li><Typography variant="subtitle1" gutterBottom>Bulk/Multiple Purchasing. We reserve the right to reject any orders, at our sole discretion, where we detect bulk purchasing or multiple units of similar products being purchased.
                    </Typography></li>
                </ul>
            </ul>
            <ul>
                <li><Typography variant="h6" gutterBottom>Delivery of your Order</Typography></li>
                <ul>
                    <li><Typography variant="subtitle1" gutterBottom>Delivery Costs. The costs of delivery will be as displayed to you on our Site.
                    </Typography></li>
                    <li><Typography variant="subtitle1" gutterBottom>Delivery Date. This information will be displayed to you on our Site.
                    </Typography></li>
                    <li><Typography variant="subtitle1" gutterBottom>ID Requirement Upon Delivery. We may, at our sole discretion, make any inquiry we deem necessary to verify your identity and/or ownership of your financial instruments by requesting that you provide us with further information or documentation, including, but not limited to requesting a form of identification and/or credit card. If we are unable to verify or authenticate any information you provide, we have the right to refuse delivery and cancel the order.
                    </Typography></li>
                </ul>
            </ul>
        </Container>
    );
}

export default TermsConditions;