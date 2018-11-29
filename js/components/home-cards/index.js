import pz from '@plazarjs/core';
import tpl from './fixtures/card-deck.html';
import easyToUse from './easy-to-use';
import scalable from './scalable';
import flexible from './flexible';

const cardDeck = {
    type: 'card-deck',
    template: tpl,
    components: [
        easyToUse, 
        scalable, 
        flexible
    ]
};

export default pz.component.extend(cardDeck);
