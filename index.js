const { 
  Client, 
  GatewayIntentBits, 
  ButtonBuilder, 
  ButtonStyle, 
  ActionRowBuilder,
  EmbedBuilder
} = require('discord.js');;

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

const TOKEN = process.env.TOKEN;

client.once('ready', () => {
  console.log(`บอทออนไลน์แล้ว`);
});

client.on('interactionCreate', async interaction => {

  // ✅ คำสั่ง /button
  if (interaction.isChatInputCommand()) {
    if (interaction.commandName === 'button') {

      // 🎨 Embed
      const embed = new EmbedBuilder()
        .setTitle('🔥 ยินดีต้อนรับครับ')
        .setDescription('เลือกกดปุ่มด้านล่างได้เลย')
        .setColor(0x00AEFF)
        .setImage('https://cdn.discordapp.com/attachments/1483362951766474943/1483363217941205022/serie.jpg?ex=69ba5126&is=69b8ffa6&hm=01c6035e426e7dcae69dd0251f308f79bb29d92697055de84db3f281b9289324&'); // เปลี่ยนรูปได้

      // 🔘 ปุ่มลิงก์
      const btn1 = new ButtonBuilder()
        .setLabel('📥 ดาวน์โหลด')
        .setStyle(ButtonStyle.Link)
        .setURL('https://google.com');

      const btn2 = new ButtonBuilder()
        .setLabel('📝 สมัคร')
        .setStyle(ButtonStyle.Link)
        .setURL('https://google.com');

      const btn3 = new ButtonBuilder()
        .setLabel('🎬 ดูคลิป')
        .setStyle(ButtonStyle.Link)
        .setURL('https://youtube.com');

      // 🎯 ปุ่มรับยศ
      const roleBtn = new ButtonBuilder()
        .setCustomId('get_role')
        .setLabel('🎯 รับยศ Member')
        .setStyle(ButtonStyle.Success);

      const row1 = new ActionRowBuilder().addComponents(btn1, btn2, btn3);
      const row2 = new ActionRowBuilder().addComponents(roleBtn);

      await interaction.reply({
        embeds: [embed],
        components: [row1, row2]
      });
    }
  }

  // 🎯 กดปุ่มรับยศ
  if (interaction.isButton()) {
    if (interaction.customId === 'get_role') {
      const member = interaction.member;

      await member.roles.add("1483328582838124615");

      await interaction.reply({
        content: '✅ คุณได้รับยศแล้ว!',
        ephemeral: true
      });
    }
  }
});

client.login(process.env.TOKEN);