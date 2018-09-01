'use strict';

/**
 * Base command class
 */
class Command {
	/**
   * Invoke command
   *
   * @param {Client} client Client
   */
	// invoke(client) {
	invoke() {
		throw new Error('Command must define its own send method');
	}
}

module.exports = Command;
