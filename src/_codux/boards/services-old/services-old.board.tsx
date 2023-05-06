import React from 'react';
import { createBoard } from '@wixc3/react-board';
import ServicesOld from '../../../../components/sections/2_services/Services_old';

export default createBoard({
    name: 'ServicesOld',
    Board: () => <ServicesOld />
});
