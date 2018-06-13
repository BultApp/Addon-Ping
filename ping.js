exports.commands = ["ping"];

let api;
let helper; 
let messageNumber;

exports.constructor = (api, helper) => {
    this.messageNumber = 0;
    this.api = api;
    this.helper = helper;
};

exports.onChatMessage = {
    execute: (data, IChatMessage) => {
        this.messageNumber++;
    }
}

exports.ping = {
    description: "Ping!",
    execute: (command, parameters, message) => {
        if(this.messageNumber >= 5) {
            this.api.say("Pong!");
            this.messageNumber = 0;
        }
    }
};
