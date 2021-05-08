import setupGuildView from "../../views/setupGuild"

const setupGuildCommand = {
  name: '/setup-guild',
  async listener({ ack, body, client }: any) {
    await ack()

    try {
      const result = await client.views.open({
        trigger_id: body.trigger_id,
        view: setupGuildView.view
      })

      console.log(result)
    } catch (error) {
      console.error(error)
    }
  } 
}

export default setupGuildCommand
