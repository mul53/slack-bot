const name = 'setup-guild'

const view = {
	type: 'modal',
	callback_id: name,
	title: {
		type: 'plain_text',
		text: 'Setup Guild'
	},
	blocks: [
		{
			block_id: "client_id_block",
			type: "input",
			label: {
				type: "plain_text",
				text: "What is your Client ID?"
			},
			element: {
				action_id: "client_id",
				type: "plain_text_input"
			}
		},
		{
			block_id: "client_token_block",
			type: "input",
			label: {
				type: "plain_text",
				text: "What is your Client Token?"
			},
			element: {
				action_id: "client_token",
				type: "plain_text_input"
			}
		}
	],
	submit: {
		type: 'plain_text',
		text: 'Submit'
	}
}

const listener = async ({ ack, body, view, client }: any) => {
	try {
		await ack();
	
		console.log(body, view)
	} catch (error) {
		console.error(error)
	}
}

export default {
	name,
	view,
	listener
}
