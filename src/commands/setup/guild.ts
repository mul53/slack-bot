import setupGuildView from "../../views/setupGuild"

const setupGuildCommand = {
  name: '/setup-guild',
  async listener({ ack, body, command, client }: any) {
    await ack()

    try {
      const { channel_id, user_id } = command
      
      const response = await client.users.info({ user: user_id})
      console.log(response)
      
      await client.views.open({
        trigger_id: body.trigger_id,
        view: {
          ...setupGuildView.view,
          private_metadata: channel_id
        },
      })
    } catch (error) {
      console.error(error)
    }
  } 
}

export default setupGuildCommand
