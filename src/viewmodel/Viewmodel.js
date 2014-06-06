import clearCache from 'viewmodel/prototype/clearCache';
import get from 'viewmodel/prototype/get';
import register from 'viewmodel/prototype/register';
import set from 'viewmodel/prototype/set';
import unregister from 'viewmodel/prototype/unregister';

var Viewmodel = function ( ractive ) {
	this.ractive = ractive;
};

Viewmodel.prototype = {
	clearCache: clearCache,
	get: get,
	register: register,
	set: set,
	unregister: unregister
};

export default Viewmodel;
