import React from 'react';
import { createBoard } from '@wixc3/react-board';
import References from '../../../../components/sections/4_references/References';

export default createBoard({
    name: 'References',
    Board: () => <References />
});
