import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Contact from '../../../../components/sections/3_contact/Contact';

export default createBoard({
    name: 'Contact',
    Board: () => <Contact />
});
