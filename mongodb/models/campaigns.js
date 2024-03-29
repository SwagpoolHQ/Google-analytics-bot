import mongodb from 'mongoose';

const Campaign = mongodb.models.Campaign || mongodb.model("Campaign",
new mongodb.Schema(
	{
		name: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: false
		},
		code: {
			type: String,
			required: true,
			unique: true,
		},
		auth: {
			type: Boolean,
			default: false,
			required: false,
		},
		guild: {
			type: mongodb.Schema.Types.ObjectId,
			ref: 'Guild',
			required: true
		},
		mainInvite: {
			type: String,
			required: false,
			unique: true,
		},
		creator: {
			type: mongodb.Schema.Types.ObjectId,
			ref: 'User',
			required: false
		},
		channel: {
			type: mongodb.Schema.Types.ObjectId,
			ref: 'Channel',
			required: false
		},
	}
));

export default Campaign;