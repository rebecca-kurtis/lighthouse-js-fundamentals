let facebookProfile = {
    name: "Rebecca",
    friends: 450,
    messages: ["let\'s have fun!", "go to sleep", "look an owl!", "I love plants"],
    postMessage: function(message) {
        facebookProfile.messages.push(message);
    }, 
    deleteMessage: function(index) {
            facebookProfile.messages.splice(index, 1);
    },
     addFriend: function () {
             facebookProfile.friends = facebookProfile.friends + 1;
     }  ,
     removeFriend: function () {
     
             facebookProfile.friends = facebookProfile.friends - 1;
         
     }
};

console.log(facebookProfile);