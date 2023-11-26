import React from 'react';
import { Row } from 'react-bootstrap';

import { ReactComponent as Facebook } from '../assets/facebook.svg';
import { ReactComponent as Youtube } from '../assets/youtube.svg';
import { ReactComponent as LinkedIn } from '../assets/linkedin.svg';
import { ReactComponent as Twitter } from '../assets/twitter.svg';

function Footer() {
    return (
        <footer>
            <Row>
                <div className='grid g-4 text-center'>
                    <Facebook className='me-3 icon' />
                    <Twitter className='me-3 icon' />
                    <LinkedIn className='me-3 icon' />
                    <Youtube className='me-3 icon' />
                </div>
                <div className='pt-20 pb-15'>Example@email.com</div>
                <div>Copyright © 2020 Name. All rights reserved.</div>
            </Row>
        </footer>
    );
}

export default Footer;