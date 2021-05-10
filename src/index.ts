import { loadEnv } from './dotenv';
loadEnv();

import { App } from '@slack/bolt';
import { LogLevel } from '@slack/logger';
import * as customMiddleware from './customMiddleware';
import setupGuildView from './views/setupGuild';
import setupGuildCommand from './commands/setup/guild';

const processBeforeResponse = false;
const logLevel = process.env.SLACK_LOG_LEVEL as LogLevel || LogLevel.INFO;
const app = new App({
  logLevel,
  processBeforeResponse,
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

customMiddleware.enableAll(app);

app.command(setupGuildCommand.name, setupGuildCommand.listener);
app.view(setupGuildView.name, setupGuildView.listener);

(async () => {
  await app.start(Number(process.env.PORT) || 3000);
  console.log('⚡️ THX Bot is running!');
})();

