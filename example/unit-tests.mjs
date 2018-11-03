mocha.setup('bdd');

import '../test/test';

mocha.checkLeaks();
mocha.run();