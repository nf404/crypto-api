mocha.setup('bdd');

require('../test/test');

mocha.checkLeaks();
mocha.run();