const messages = {
   weTheUrban: ["You will bloom if you take the time to water yourself", "The grass is greener where you water it", "It's time to stop waiting for your life to be perfect to enjoy it", "Be as accomodating and gracious with yourself as you are with others", "When you really start valuing your time and space, you naturally become less accesible to certain people. Your energy isn't for everyone", "Be proud of how you've been handling these last few months. The silent battles you've fought. The moment you had to humble yourself. The times you've wiped your on tears. Celebrate your strength", "Still love yourself while you are becoming the person you want to be"],
   heartOfTheWorld: ["Balancing not balance", "There is no such thing as a perfect state of balance... because life is always changing with intensities going up and down", "There's really only balancing", "Life is a process of making continuous little ajustments", "It's figuring out where you're over extended on one side and under supported on another. And then fine tuning as best as you can", "This act of balancing is a natural and beautiful part of what it means to be alive"],
   roadToBlow : ["Try dey reason your guys. One person no dey do convoy", "This life no hard like that. Na you dey wan make mama proud", "Dem no dey fake niceness. If you get am you get am", "Blow easy die for person wey don already blow", "Custard don blow no mean say pap no go sell again", "Na people wey don blow i an dey friend now", "Person we never sit well no dey lap person", "Person wristwatch cost no mean say your own time no correct", "Dey try calm down. award no dey for who blow first"],

};
for (let key in messages) {
    switch (key) {
        case 'weTheUrban': 
            console.log(messages.weTheUrban[Math.floor(Math.random() * messages.weTheUrban.length)]);
            break;
        case 'heartOfTheWorld':
            console.log(messages.heartOfTheWorld[Math.floor(Math.random() * messages.heartOfTheWorld.length)]);
            break;
        case 'roadToBlow': 
            console.log(messages.roadToBlow[Math.floor(Math.random() * messages.roadToBlow.length)]);
            break;
        default : 
            console.log("Hii!!!");
    }
}
