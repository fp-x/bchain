import { BChain } from './index';

const bchain = new BChain({ username: 'multichainrpc', password: '6FvcobcXbS2UPXEmkVBof32B15fNMR9UPhVtUzvq6CCP' });
bchain.undefinedFunctions.forEach(x => console.log('\t'+x));

