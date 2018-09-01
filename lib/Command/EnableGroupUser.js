'use strict';

let Command = require('./Command');
let Group   = require('../Group');
let User    = require('../User');

/**
 * Enable group user command
 */
class EnableGroupUser extends Command {
	/**
   * Constructor for command
   *
   * @param {User}  user  User
   * @param {Group} group Group
   */
	constructor(user, group) {
		super();

		User.validateUser(user);
		Group.validateGroup(group);

		this.user  = user;
		this.group = group;
	}

	/**
   * Invoke command
   *
   * @param {Client} client Client
   *
   * @return {Promise} Promise for chaining
   */
	invoke(client) {
		let options = {
			method : 'POST',
			path   : `groups/${this.group.id}/enable_user.json`,
			query  : {
				'token' : client.apiToken,
				'user'  : this.user.id,
			},
		};

		return client.getTransport().sendRequest(options)
			// .then(result => {
			.then(() => {
				return true;
			});
	}
}

module.exports = EnableGroupUser;
