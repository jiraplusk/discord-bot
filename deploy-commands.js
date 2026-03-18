const { REST, Routes, SlashCommandBuilder } = require('discord.js');

const commands = [
  new SlashCommandBuilder()
    .setName('button')
    .setDescription('แสดงปุ่มลิงก์')
].map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    await rest.put(
      Routes.applicationCommands('1483317265146450041'),
      { body: commands }
    );
    console.log('ลงคำสั่งเรียบร้อย');
  } catch (error) {
    console.error(error);
  }
})();