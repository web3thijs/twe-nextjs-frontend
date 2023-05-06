import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Services from '../../../../components/sections/2_services/Services';

export default createBoard({
    name: 'Services',
    Board: () => <Services />
});
