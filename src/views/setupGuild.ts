const name = 'setup_guild'

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

		const client_id = view.state.values.client_id_block.client_id.value
		const client_token = view.state.values.client_token_block.client_token.value
		const channel_id = view.private_metadata
		
		await client.chat.postMessage({
			channel: channel_id,
			text: 'Successfully set up guild'
		})
	} catch (error) {
		console.error(error)
	}
}

export default {
	name,
	view,
	listener
}
