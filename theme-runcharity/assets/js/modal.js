// Sourced from: https://www.w3schools.com/howto/howto_css_modals.asp
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
// btn.onclick = function() {
//     modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}


addEventListener('click', function(e) {
     if(hasClass(e.target, 'member1')){
	 	modal.style.display = "block";
        member1.innerHTML = "<h3>'eS|Latté</h3><p>Our dearest clanleader, Latté. Isn't it much to tell about you? We had hoped you would leave us more space, but I guess Newton doesn't like astronomy. Well, you're a PARADISE of a boy! Hmm, where shall we start? I had hoped you would stand for all the thinking, genius, but you are just a lazy geek waiting to get compliments, aren't you? I guess Newton never went for a jogging trip out in the woods, maybe he thought that apples would hit him again. Well enough jokes for now.<br>Let us take a look at your nickname. Latté. It describes you perfectly. A 6-o'clock awakener but as delicious as a cup of good old Nescafe Latté. All these hearts flying from our screens every morning, and directly to our heart. Yes, we keep them, in the centre and in the brightest part, where you belong. You are our emoji-spamming leader, a fresh cup of refreshing hearts at 6 o'clock, a noob in insta LOL (You need alot of training in that from us), Plasma's psychologist, big brother & little brother, a tech geek, a office guy LOL, and an awesome effic player + 1000 more things. But that is not what makes you great!, It is your kindness and the most golden heart of us all which you use to make us play more Sauer. But don't ever duel this guy, he will make you never ever read science again. You would wonder, oh my, is there gravity on sauer, after seeing his moves? And you will just die of questions after dueling him.<br>The truth is, you are JUST lovely, and we love you so much, that we can't love you everyday, incase we can't love you tomorrow. Only a genius would get that. SO YOU better understand it! You certainly are a dreamer and a dream for us. We really don't need to dream anymore, we feel safe with an clanleader like you. For now, i just want you to know this: &#34;We ride together, we die together&#34;.... not in Sauer though, cause you always die first. We don't love you that much, only a cup of latté, thats how much <3</p>";
	 }
	  if(hasClass(e.target, 'member2')){
	 	modal.style.display = "block";
        member1.innerHTML = "<h3>'eS|Plasma</h3><p>Dear Plasma,<br>Well, it's been an amazing journey. Ever since Marta and Proze first met you and brought you into our family, you've been our heart and soul, the one who holds us together through. You held our hand through our first clanwar victories, and inspired us to reach to the next level as individuals and as a team. With you by our side, 'eS has achieved far more than our biggest dreams. All we have left to do is.. keep you from rushing to enemies in duels! ;)<br>What can I say.. the time we've spent with you has been the most wonderful and uplifting time of our lives. Words can't express how much you mean to us; your indescribable beauty, your heart of gold, your dedication and love, is the greatest of God's treasures on earth. We have a wonderful future together ahead of us! We love you Plasma!!! <3 <3 <3</p>";
	 }
	  if(hasClass(e.target, 'member3')){
	 	modal.style.display = "block";
        member1.innerHTML = "<h3>'eS|Proze*Comai</h3><p>Enter Proze*Comai, the best player in 'eS. 11 years old with the strongest machinegun aim and rockets doing more damage than the frying pans he flips in real life. Proze has long been a prodigy gamer, crushing opponents with far more age and experience than himself. His awesome personality, delicious chocolate cakes, and insane music skills have made him a treasure in our family since the start. When all else fails, when there is no hope for victory, Proze is there to save the world.</p>";
	 }
	  if(hasClass(e.target, 'member4')){
	 	modal.style.display = "block";
        member1.innerHTML = "<h3>'eS|Marta</h3><p>Marta is the most perfect clan founder anyone could have asked for. Her long term vision and dedication to our family has brought us to where we stand. Besides being the cutest sister in the world, her jokes will always brighten your day and her smile will take you to a new world. When not playing Sauer, Marta can be found reading books, baking sweets, playing violin, dancing to Trance music, writing Perl code, and hanging out with her little brothers and sisters. We love you so much Marta!! We wouldn't be here without you!! <3</p>";
	 }
	  if(hasClass(e.target, 'member5')){
	 	modal.style.display = "block";
        member1.innerHTML = "<h3>'eS|Sno</h3><p>Sno is simply the best 10 year old in the world, a cheerful, competitive player, with awesome aim and teamwork! Together with Proze, they're an unstoppable team. His kindness and awesome sense of humor fills a big part of our family, and all the children simply love him. Thank you Sno for being our sweet little brother! We love you!! <3</p>";
	 }
	  if(hasClass(e.target, 'member6')){
	 	modal.style.display = "block";
        member1.innerHTML = "<h3>'eS|Flynt</h3><p>Flynt: As our newest member, you have shown us your strength, your love, your potential, and there is nothing we can't love about you. In fact, you are a crazy LOTR fan like all of us, so you are pretty much like all of us. You are amazing in effic and ectf and we have all promised that you will get better by our training, and we all see the good results of that. You are far away from us, but still our love makes you so close to us. We see a bright future with you, and we know that you are one of us. You are funny, and make jokes always. You never even say &#34;no&#34; LOL! We love you!</p>";
	 }
	  if(hasClass(e.target, 'member7')){
	 	modal.style.display = "block";
        member1.innerHTML = "<h3>'eS|Chezirish</h3><p>When every shot counts, only one player will never fail you. Chezirish joined our family and within days of downloading Cube, was completely rifle-owning everyone! Maybe it's his long history in CS:GO and HL2DM, his deep tactical mindset, or low mouse sensitivity that makes gives him the amazing precision he has. Aside from being an insane player, Chezirish is a simply wonderful guy, always so nice and helpful in every way! We're so blessed to have him in our family!</p>";
	 }
	  if(hasClass(e.target, 'member8')){
	 	modal.style.display = "block";
        member1.innerHTML = "<h3>'eS|Vienna</h3><p>'eS|Vienna, an oldskool Cube player, is slowly making her comeback! Vienna has been a loyal member of 'eS ever since the beginning in 2011, where she dominated in instagib for two years. After going inactive for a while due to school, she's finally back with us again! When not practicing in Cube, Vienna enjoys playing piano, cooking, hanging out with friends, and 3D computer graphics artwork. Keep it up Vienna! We can't wait to have you back in clanwars with us! <3</p>";
	 }
	  if(hasClass(e.target, 'member9')){
	 	modal.style.display = "block";
        member1.innerHTML = "<h3>'eS|Little</h3><p>As Plasma's 7 year old brother, Little the most lovely member of the 'eS family! His kindness and heart of gold is such a blessing to us. Just a short chat with him will brighten your day in an instant! He loves painting, playing Roblox, and aspires to be an amazing Cube player.</p>";
	 }
});
