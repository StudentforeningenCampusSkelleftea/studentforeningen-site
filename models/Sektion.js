var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Sektion Model
 * =============
 */

var Sektion = new keystone.List('Sektion', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Sektion.add({
	name: { type: String, required: true },
	description: { type: Types.Textarea, require: true },
	contact: { type: Types.Textarea, require: true }
});

Sektion.register();
