const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "*";

client.login('NTE3NDU1NzY5NTMzMTUzMjgw.DuGptw.pS2hGw53h7aaJ5TjQt74-9_2Tjg');

client.on('message' , message =>{
    if(message.content === "salut"){
        message.reply('salut à toi BG ! :heart:');
        console.log('répond à salut');
    }
});



client.on('guildMemberAdd', member =>{
    let embed = new Discord.RichEmbed()
    .setDescription(':tada: **' + member.user.username + '** a rejoint ' + member.guild.name)
    .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('458657511482851338').send(embed)
    member.addRole('458683681909899274')

});

    client.on('guildMemberRemove', member =>{
        let embed = new Discord.RichEmbed()
        .setDescription(':cry: **' + member.user.username + '** a quitté ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
        member.guild.channels.get('458657511482851338').send(embed)

    });

    client.on('message' ,message =>{
        if (!message.guild) return 
        let args = message.content.trim().split(/ +/g)

        if (args[0].toLocaleLowerCase() === prefix + 'kick'){
            if (!message.member.hasPermission('KICK_MEMBERS')) return message.channem.send(" Vous n'avez pas la permission d'utiliser cette commande ;(")
            let member = message.mentions.members.first()
            if (member) return message.channel.send(" Veuillez mentionner un utilisateur :X:")
            if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur")
            if (!member.kickable) return message.channel.send(" Je ne peux pas kick cet utilisateur :sunglass:")
            member.kick()
            message.channel.send(member.user.username + ' a été exclu :white_check_mark:')

        }
    })


    client.on('message' ,message =>{
        if (!message.guild) return 
        let args = message.content.trim().split(/ +/g)

        if (args[0].toLocaleLowerCase() === prefix + 'ban'){
            if (!message.member.hasPermission('BAN_MEMBERS')) return message.channem.send(" Vous n'avez pas la permission d'utiliser cette commande ;(")
            let member = message.mentions.members.first()
            if (member) return message.channel.send(" Veuillez mentionner un utilisateur :X:")
            if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur")
            if (!member.bannable) return message.channel.send(" Je ne peux pas bannir cet utilisateur :sunglass:")
            member.guild.ban(member, {days: 7})
            message.channel.send(member.user.username + ' a été banni :white_check_mark:')

        }
    })

    client.on('message' ,message =>{
        if (!message.guild) return 
        let args = message.content.trim().split(/ +/g)
    
    if (args[0].toLowerCase() === prefix + "clear") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(" Vous n'avez pas la permission d'utiliser cette commande")
        let count = args[1]
        if (!count) return message.channel.send(" Veuillez indiquer un nombre de messages à supprimer")
        if (isNaN(count)) return message.channel.send(" Veuillez indiquer un nombre valide")
        message.channel.bulkDelete(parseInt(count) + 1)
    }
    })

    client.on('message' , message =>{
        if(message.content === "Tu vas bien ?"){
            message.reply('Je vais bien et toi BG ? :heart:');
            console.log('répond à Ca va ?');
        }
    });
    

    client.on('message' , message =>{
        if(message.content === "Tu fais quoi ?"){
            message.reply('Je joue à Fortnite et toi BG ? :heart:');
            console.log('répond à TFQ');
        }
    });
    
