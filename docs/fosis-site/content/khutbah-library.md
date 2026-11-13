---
url: https://fosis.org.uk/khutbah-library/
type: page
title: "FOSIS Khutbah Library"
meta_description: MISSING
og_image: MISSING
canonical: MISSING
---

# FOSIS Khutbah Library

> NOTE FOR IMPLEMENTERS: this page is a standalone single-file HTML app. It has its own
> inline CSS and no WordPress header, footer, nav, or theme CSS. The library content lives in a
> `const APP = {...}` JSON blob inside the page and is rendered client side. Everything below is
> the exact text from that blob, plus the static chrome (top bar, hero, search, chips, reader
> footer). The Arabic opening/closing/dua passages are embedded base64 PNG images, not text;
> they are listed by position and their data URIs are not reproduced here.

## Static chrome

Top bar title (home screen): `Khutbah Library` / subtitle `FOSIS • Further Education`

Top bar title (reader screen): `Reading` / subtitle `Pack {pid} • Khutbah {n}`

Buttons: `A−` (title "Smaller text"), `A+` (title "Larger text"), `‹ Library` (back)

Hero:

### Khutbah Library

36 ready-to-deliver Friday khutbahs with standardised Arabic openings and full English. Built for schools, colleges & campuses.

Search input placeholder: `Search khutbahs… (e.g. patience, Qur'an, charity)`

Chips (generated): `All packs`, then for each pack `Pack {pid} • {theme}`:
- `Pack I • Foundations & Character`
- `Pack II • Worship & Ramadan`
- `Pack III • Faith & The Qur’an`
- `Pack IV • The Believer’s Heart`

Empty search state: `No khutbahs match “{query}”.`

Reader footer:

> Federation of Student Islamic Societies • **FOSIS**
>
> Handle khutbah text with care — it contains the Names of Allah and Qur'anic Ayat.

Reader section labels: `Opening • First Khutbah`, `First Khutbah • English`,
`Closing of the first part (Arabic)`, `Opening • Second Khutbah`, `Second Khutbah • English`,
`Closing Du'as`.

Collapse buttons: `Standardised Arabic opening`, `Closing of the first part (Arabic)`,
`Standardised Arabic (second part)`.

Pause banner: `⏸ Pause — the Khateeb sits briefly` with `A short sitting separates the two
khutbahs. The Khateeb then stands for the second part.`

Reader nav buttons: `‹ Previous`, `Next ›`. Empty search copy as above.

List card sub-line (every item): `Two parts • standardised Arabic + English`

## Shared Arabic passages (APP.std)

These are identical for every khutbah.

- `open`: 5 images (first khutbah opening, Arabic)
- `close1`: 1 image (closing of first part)
- `open2`: 1 image (second khutbah opening)
- `duaImg`: 1 image (closing dua header)
- `dua`: 5 Arabic dua strings, shown as text:
  - اللّٰهُمَّ رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً، وَفِي الآخِرَةِ حَسَنَةً، وَقِنَا عَذَابَ النَّار
  - اللّٰهُمَّ إِنَّا نَسْأَلُكَ الْجَنَّةَ وَنَعُوذُ بِكَ مِنَ النَّار
  - اللّٰهُمَّ أَعِزَّ الْإِسْلَامَ وَالْمُسْلِمِين، وَأَذِلَّ الشِّرْكَ وَالْمُشْرِكِين
  - اللّٰهُمَّ انْصُرْ دِينَكَ وَكِتَابَكَ وَسُنَّةَ نَبِيِّكَ وَعِبَادَكَ الْمُؤْمِنِين
  - اللّٰهُمَّ انْصُرْ إِخْوَانَنَا الْمُسْتَضْعَفِينَ فِي كُلِّ مَكَان

## Khutbahs

### Pack I — Foundations & Character

#### Pack I / Khutbah 1 — The Covenant – A Promise to Allah

First khutbah (English):

We praise Allah the one who has created us from nothing, brought us to existence even though He does not need us. We also praise Him because He has made us Muslims, even though majority of the people living on earth are not. According to google, the population of the Muslims on earth right now is 22.32%, that is 1.7 billion. Around 1 out of 5 people is a Muslim, but the other 4 do not believe in Islam.

We are on a journey, this journey started off with a conversation and it will continue forever. What type of conversation was it? Who was it with? How many people were present?

Before we all came to the Earth, Allah gathered all of our souls in one place. Allah spoke to us and this conversation is recorded in the Quran; Allah asked us,

> وَإِذْ أَخَذَ رَبُّكَ مِن بَنِي آدَمَ مِن ظُهُورِهِمْ ذُرِّيَّتَهُمْ وَأَشْهَدَهُمْ عَلَىٰ أَنفُسِهِمْ أَلَسْتُ بِرَبِّكُمْ ۖ قَالُوا بَلَىٰ ۛ شَهِدْنَا ۛ أَن تَقُولُوا يَوْمَ الْقِيَامَةِ إِنَّا كُنَّا عَنْ هَـٰذَا غَافِلِينَ

"And [mention] when your Lord took from the children of Adam - from their loins - their descendants and made them testify of themselves, [saying to them], "Am I not your Lord?" They said, "Yes, we have testified." [This] - lest you should say on the day of Resurrection, "Indeed, we were of this unaware". [7:172]

When Allah asked us, “Am I not your Lord”, we all replied, “Yes”.

It is true that every now-and-then we forget about this conversation and covenant we made with Allah. That is why Allah has ordained many ways to remember Him and the covenant; Allah told us to pray five times a day, recite Quran as much as possible, fast in the month of Ramadan and be around good people. Now, you need to find more ways to remember this covenant and find more ways to live up to the covenant. Remember, Allah has chosen us to be Muslims, he has handpicked us. Out of the billions of people living today, Allah has chosen us to be Muslims. Majority of the people are not blessed to say La ilaha illalla.

A question to myself and you brothers is, what would you like to achieve in your religion by the end of this year? What kind of goals and targets have you set up that will help you live up to the covenant with Allah. What small actions can you do on a to attend the Jumu’ah prayers and pray all the other prayers. If you’re consistent with consistent basis that will help you be a better Muslims. Maybe your target should be prayer, then maybe your target should be to recite the Quran and read the meaning every day for 5 minutes only. If you do that then maybe you need to read other Islamic books on various topics. As you progress, you might want to study other aspects of Islam.

If you have a plan, then you will move forward in your religion. Otherwise you’ll be like those who, unfortunately, allow years to pass by and all they do is make money, have a family and then eventually die. They don’t do anything significant and serious with their religion and therefore they don’t progress and as a result they are just another number in the crowd and just come and go and the world doesn’t even notice their presence or absence.

Second khutbah (English):

As Muslims, we should also plan our academic part of our life. Some of you might want to become doctors, engineers, lawyers, architects. Maybe some of you did not plan or actively think about the upcoming year and beyond. The question we should ask is, what skills and grades shall I aim for that will help me support my religion, my family and those around me. What grades do I need to work for to become a doctor so then I can help cure people so then people will associate my contribution to my religion. What grades do I need to get so then I can be an accountant and later on help people with their finance and in between remind them about Zakah, which is a pillar of Islam. What grades do I need to get to become a lawyer and help defend all those who are victims of racism, Islamophobia and all the other ills of society. Let this year be unique as a result of your ambitious plans and let us work together to improve the situation of Muslims in our locality and the Ummah at large.

There are three types of people in this world; those that make things happen, those that watch things happen and those that don’t know what happened. Do you want to be among those who make things happen in 2018, or just watch things happen in 2018? And it would be utterly disappointing if we end up being among those who don’t even know what is happening as a result of not learning, progressing and contributing to our society.

We ask Allah to give us the Tawfeeq to increase in worship and to live an ambitious and contributing life.

#### Pack I / Khutbah 2 — Success – How Does Islam Define It?

First khutbah (English):

Everything we do in life is shaped by our definition of success. For some people, having a lot of money is what makes them successful. For others, if you are famous and know people of status then you are successful. For many, the more expensive your car is and the more houses you own, the more successful you are. As Mumineen, believers in Allah, and as obedient slaves of Allah, we need to know how Allah defines the word success. We need to know how Allah describes the path of success.

> Allah tells us in the Qur’an;
وَمَن يُطِعِ اللَّهَ وَرَسُولَهُ يُدْخِلْهُ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا وَذَٰلِكَ الْفَوْزُ الْعَظِيمُ

“And whosoever obeys Allah and His Messenger (Muhammad ﷺ) will be admitted to Gardens under which rivers flow (in Paradise), to abide therein, and that will be the great success”. [4:13]

> In another verse Allah describes success by saying, 

وَعَدَ اللَّهُ الْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا وَمَسَاكِنَ طَيِّبَةً فِي جَنَّاتِ عَدْنٍ وَرِضْوَانٌ مِّنَ اللَّهِ أَكْبَرُ ذَٰلِكَ هُوَ الْفَوْزُ الْعَظِيمُ
“Allah has promised the believing men and believing women gardens beneath which rivers flow, wherein they abide eternally, and pleasant dwellings in gardens of perpetual residence. But the greatest bliss is the Pleasure of Allah. That is the supreme success”. [9:72]

Allah repeatedly tells us that real success is;

Attaining Paradise / The Pleasure of Allah

Avoiding the fire of Hell / Punishment of Allah

A question to myself and you brothers is, does our definition of success match Allah’s definition of success? Does the definition of success from the one who created the Heavens and the Earth match our definition of success? If the answer is yes, then we need to carry on worshipping Allah. We need to continue worshipping Allah by doing some of the best of good deeds and avoiding evil. However, if the answer is no, then we need to change today in order to be successful tomorrow. We should start with the basics; do our daily prayers, spend some time with the Quran, even if it is two or three minutes. We should give Salam to each other, help each other and remind each other of Allah and all His bounties.

Second khutbah (English):

When pleasing Allah becomes part of our definition of success, when aspiring for Paradise becomes part of our definition of success, then we will truly look for opportunities to be successful.

A young orphan was building a wall in his property. But there was a tree in the way which belonged to a companion named Abu Lubabah. The only way to continue the construction was to either cut down the tree or include it in his land. So the orphan went to Abu Lubabah and asked if he could have the tree. Abu Lubabah said, “No”. So the orphan asked to buy the tree but Abu Lubabah once again declined. The orphan then went to the Prophet (ﷺ) and complained. The Prophet (ﷺ) then asked Abu Lubabah to give the boy the tree. He replied, “No, Oh Prophet of Allah, it is my right”. The Prophet (ﷺ) then asked him to sell the tree to the orphan. He replied, “No, Oh Prophet of Allah, it is mine”. The Prophet (ﷺ) then said, “O Abu Lubabah. Give him this tree and Allah will give you a tree in Jannah”. Abu Lubabah still refused and he left. A person called Abu Dahdah, who had witnessed all of this, went to the Prophet (ﷺ) and asked, “If I buy the tree, will I also get a tree in Jannah?”. The Prophet (ﷺ) replied, “Yes”. So Abu Dahdah ran after Abu Lubabah and said, “My orchard has 400 trees. It is yours if you give me your tree”. Abu Lubabah agreed to this deal and Abu Dahdah gave the tree to the orphan. So Abu Dahdah earned himself Paradise; he became successful as he attained Paradise, even though he had to sacrifice his beautiful garden. What a successful deal this was for Abu Dahdah as he realised that true success was in attaining Jannah and not accumulating wealth in the life.

If you ask the richest person on earth if he wants to make more money, then I am sure he or she will reply yes. Similarly, even if I ask you brothers, once you have mastered a game, would you want to move on to another game. You will reply yes. The point is that even if you have what you want, and consequently consider yourself as being successful, will you be happy with it? The answer is no. You will always want more.

You will truly be successful and therefore happy, when you enter Paradise, as everything in Paradise gets better and better, in terms of quantity and quality. Therefore my brothers, redefine the word success and work towards the true and everlasting success which one can attain by worshipping Allah in any and every situation. Do your prayers, spend some time reciting the Quran, read something about the life of the greatest creation of Allah, the Prophet Muhammad (ﷺ).

I’ll end the Khutbah by repeating one of the verses of Allah I mentioned earlier,

> وَعَدَ اللَّهُ الْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا وَمَسَاكِنَ طَيِّبَةً فِي جَنَّاتِ عَدْنٍ وَرِضْوَانٌ مِّنَ اللَّهِ أَكْبَرُ ذَٰلِكَ هُوَ الْفَوْزُ الْعَظِيمُ
“Allah has promised the believing men and believing women gardens beneath which rivers flow, wherein they abide eternally, and pleasant dwellings in gardens of perpetual residence. But the greatest bliss is the Pleasure of Allah. That is the supreme success”. [9:72]

May Allah give us the Tawfeeq to carry on worshipping Him and may Allah give us the best in this Dunya and in the Akhira.

#### Pack I / Khutbah 3 — Brotherhood – The Unlimited Bond

First khutbah (English):

There are many ways to enter Paradise. Some may say that performing the prayers will lead you to Paradise. And we say yes to this. Some may say that reciting the Quran will lead you to Paradise. We also say yes to that. Some may say that fasting in the month of Ramadan and obeying your parents are two means of gaining Paradise, and we say of course and yes to both. Another reason why large number of people will enter Paradise is due to a true, strong sense of brotherhood, known in Arabic as Ukhuwwa.

Allah created all of the believers as brothers. He tells us in the Quran,

> إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ ۚ وَاتَّقُوا اللَّـهَ لَعَلَّكُمْ تُرْحَمُونَ
“The believers are but brothers, so make settlement between your brothers. And fear Allah that you may receive mercy”. [49:10]

What is brotherhood? Is it the same as normal friendship? Ukhuwwah, brotherhood, is actually friendship that is established for the sake of Allah. It is stronger than a mere friendship and to be honest, it is the strongest bond that anyone can imagine.

The Messenger of Allah (ﷺ) actually told us what true brotherhood is, "The connection between Muslims is like that of a strong building, one part strengthens another. The Prophet then showed this by interlocking the fingers of one hand with those of the other”. [Bukhari]

Our brotherhood should be like that of the different parts of a building, one part supporting all the other parts. If you imagine a building with five floors. The building will have pillars to keep it stable, each floor will take the pressure from the above floors. Moreover, the material the building is made out of has to resist pressure coming from all directions. If we took out some of the pillars or if we remove one of the middle floors or if the building was made out of the wrong material, then the whole building will collapse. Likewise, my brothers, our brotherhood should be at a level where we are helping each other. Our brotherhood should be at a level that we support each other to do good, whenever we slip, we should remind each other in a polite manner. We should strengthen and complement one another by supporting each other. We are all brothers and therefore we shouldn’t lie or cheat one another.

We need to have the type of brotherhood by which Allah will be pleased with. We need to have the type of brotherhood by which angels will witness and say to Allah, yes, they met each other for Your sake and did good deeds to please You. We need to have the type of brotherhood by which when we enter Paradise, we will brag about the days on earth and how we used to do good deeds.

Second khutbah (English):

What are some of the ways we can strengthen brotherhood?

1) Dua- brothers should make Dua for each other. In a hadith the Prophet (ﷺ) said, “The supplication of a Muslim for his brother in his absence will certainly be answered. Every time he makes a supplication for good for his brother, the angel appointed for this particular task says: `Ameen! May it be for you, too”. [Muslim]

The reward of you making Dua for your brother is that the angels will make the same Dua for you. SubhanAllah, imagine that, the angels making Dua for you.

2) Should you love a brother, tell him so. The Prophet (ﷺ) advised us by saying, “If one of you loves his brother, let him tell him”. [Tirmidhi]

3) When you meet one of your brothers, hasten to smile and shake hands with him. Spread the Salam.

The Prophet (ﷺ) said, “I swear by the one in whose hand lies my soul that you will not enter Paradise until you believe. And you shall not believe until you love one another. Shall I tell you something, that if you practice it you will love another? Spread the (Salam) Islamic greeting amongst yourselves”. [Muslim]

4) Visit your brothers regularly.

5) Eat together in groups, for this is a sunnah and source of blessings.

6) Buy each other gifts. No gift is too small or too big.

I’ll leave you all with the quote of one of the righteous predecessors who said, "Stick to brotherhood, for it is of great help in this world and the next". (Ali Ibn Abi-Talib)

We ask Allah to strengthen our ties of brotherhood, and to help us fulfil our rights on another. We ask Allah to give us the Tawfeeq to internalise Ukhuwwa and make it a means to enter Jannah.

#### Pack I / Khutbah 4 — Seeing Allah - The Best Gift Of Life

First khutbah (English):

What is the reward of those who worship Allah? What is the reward of the believers who went through the hardship of waking up early in the morning to pray to Allah? What is the reward for students who try their best to worship Allah during times of ease and hardship? Allah will reward his obedient slaves with Jannah - Paradise.

Allah says in the Quran,

> إِنَّ الْمُتَّقِينَ فِي جَنَّاتٍ وَعُيُونٍ . ادْخُلُوهَا بِسَلَامٍ آمِنِينَ

“Indeed, the righteous will be within gardens and springs. [It will be said to them], "Enter it in peace and security". [15: 45-46]

What is Jannah and what does it contain? There are many description of Jannah; you may know about the food in Jannah, the drinks, the social gatherings, the palaces and so on. Regarding the food, every bite gets better and tastier. The second bite is better than the first and the third is better than the second. Regarding social gatherings, you will be able to meet all of the Prophets and Messengers of Allah. You will be able to meet the first man of earth, Prophet Adam. You will be able to meet Prophet Ibrahim, Musa, Isa and the greatest of all creations, Prophet Muhammed (ﷺ). You will also have the opportunity to meet your friends and family members. In terms of the palaces in Jannah, Subhanallah, it will be made out of gold, pearls and other precious and glamorous materials. In a hadith regarding the description of the palaces, the Prophet (ﷺ) said that from the outside you can see the inside and from the inside you can see the outside [Tirmidhi] – meaning that it will have a see-through design to it. Moreover, under the palaces there will be rivers flowing.  

And the best reward in Paradise will be to see Allah. The Prophet (ﷺ) said, “When the people of Paradise enter Paradise, Allah will say, ‘Do you want anything more?’ They will say, ‘Have You not brightened our faces, admitted us to Paradise and saved us from Hell?’ Then the veil will be lifted and they will not have seen anything dearer to them than looking upon their Lord, may He be glorified and exalted. [Muslim]

When the veils will be lifted we will all see Allah for the first time. And that will be the biggest gift and reward for the believers in Jannah. And there will be nothing compared to the enjoyment and happiness the believers will go through when they see Allah. When we see something beautiful or gorgeous, such as a cute animal or the incredible sky, we become amazed. In Paradise we will see the creator of beauty. We will see the maker of the heavens and the earth. We will see the one who created you, me, your parents and the whole of humanity.

Now the question is, do you want to be amongst those who see Allah? You want to earn the pleasure of Allah? Well, start today. Start praying 5 times a day; start doing good to those around you. Whenever you have the opportunity to do good, be it a small or big one, take it. The senior students should look after the young ones. The older students should display good behaviour and manners so then the younger ones can pick it up and display it themselves.  The older students should help reduce tension, should give valuable advice so then those around them can benefit. If you want to see Allah, then continuously attempt to reduce and then eliminate bad habits.

Second khutbah (English):

One of the rules of life is that, whatever you do for Allah and whatever you give up for Allah, Allah will give you something better in return. The Prophet (ﷺ) said, “Verily, you will never leave anything for the sake of Allah Almighty but that Allah will replace it with something better”. [Ahmed]

We have been created in this world, not so we can achieve whatever we want and we desire in this world, but that we follow the plan of Allah in such a way that when we arrive in Paradise, we will then be able to achieve whatever we desire. You left your food for the sake of Allah, Allah will reward you with the food of Jannah. You left your drinks for the sake of Allah, Allah will give you rivers of drinks in Jannah. We need to start decorating our Jannah with good deeds. If you pray 2 or 3 times a day, go to the next level and pray 4 and 5 times a day. Decorate your Paradise with prayer, charity and all the other good actions.  Moreover, consistently make Dua to Allah to allow us to enter Paradise and see Him. The Prophet (ﷺ) narrated a Dua

> اللَّهُمَّ إِنِّي أَسْأَلُكَ لَذَّةَ النَّظَرِ إِلَى وَجْهِكَ وَالشَّوْقَ إِلَى لِقَائِكَ

“Oh Allah, I ask You for the delight of gazing at Your Face and the eagerness of meeting You”. [Nasaa’i]

We ask Allah to accept our good deeds and give us the Tawfeeq to do more and to enter Jannatul Firdaws.

#### Pack I / Khutbah 5 — Tawakkul - Relying On Allah

First khutbah (English):

Tawakkul is one of the secret ingredients of living a successful life as a believer. So, what does it mean? And how should we embody this concept in our lives. In simple terms, Tawakkul is the total reliance and trust in Allah. Tawakkul is when someone has full faith and trust in Allah’s decisions, regardless if something is perceived to be good or bad.

Allah said in the Quran,

> وَمَن يَتَوَكَّلْ عَلَى اللَّـهِ فَهُوَ حَسْبُهُ ۚ إِنَّ اللَّـهَ بَالِغُ أَمْرِهِ ۚ قَدْ جَعَلَ اللَّـهُ لِكُلِّ شَيْءٍ قَدْرًا

“And whoever relies upon Allah - then Allah is sufficient for him. Indeed, Allah will accomplish His purpose. Allah has already set for everything a [decreed] extent”. [65:3]

If we analyse the lives of the Prophets, we will see numerous examples of Tawakkul, the total reliance in Allah. During the time of Firawn (pharaoh), he ordered his soldiers to kill all the male babies. As a result, when Prophet Musa was born, his life was at risk. Allah instructed Musa’s mother to put the baby in a casket and throw it in the river. When the mother of Musa threw the casket into the river, her heart almost reached her throat because many things could have gone wrong and as a result Musa would have died. For example, the soldiers could’ve got hold of the casket and killed Musa. A flesh-eating marine animal could’ve ate him. Or maybe the casket could’ve flipped. So many things could have gone wrong. But Allah gave the mother of Musa the ability to overcome the state of fear and anxiety and made a way out for her. What can we learn from this example? If we have true Tawakkul and take the means, then Allah will intervene and give you and me the ability to overcome the trial. If we rely on Allah and fulfil our duties then Allah will help us. If we pray and do all the other acts of worship, put or maximum effort into our studies, then Allah will make a way for us.

Another example is that of our Prophet (ﷺ). When Allah gave the permission for our Prophet (ﷺ) to migrate to Madeena, the Messenger of Allah had Tawakkul and took the means, even though the whole journey was very risky. The Prophet planned the journey in detail; when to leave, what animal to ride on, who to take with him, a guide for the journey and so on. The Prophet (ﷺ) did everything possible and had trust in Allah. We all know the famous incident when the Prophet (ﷺ) and Abu Bakr were hiding in the cave. Allah told us in the Quran what happened,

> …. إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّـهَ مَعَنَا ۖ فَأَنزَلَ اللَّـهُ سَكِينَتَهُ عَلَيْهِ….

“And he (Prophet Muhammad) said to his companion (Abu Bakr),"Be not sad (or afraid), surely God is with us.”  Then God sent down His Sakînah (calmness, tranquillity, peace) upon him…...”. [9:40]

Eventually Allah made a safe way out for the Prophet and Abu Bakr.

We sometimes find people on either end of the spectrum; people either don’t rely on Allah at all and think that their brain, health and wealth and so on will lead them to success. On the other hand, you have people who sit down and do nothing and claim that they rely on Allah and they expect good results. A believer is in the middle. He takes the means necessary to be successful and simultaneously relies on Allah. One day, a Bedouin came to the Prophet (ﷺ) and asked about Tawakkul. He inquired, “Should I tie my camel and rely upon Allah, or should I leave her untied and rely upon Allah?” The Messenger (ﷺ) replied, “Tie her and rely upon Allah”. [Tirmidhi]

A student who has Tawakkul will try his best with work and revision, he will also make time for prayer and all his other duties. He won’t be too afraid or too scared in the exam and after the exam. He won’t be terrified and anxious to the point that it paralyses him and consequently he stops worshipping Allah. A student who has Tawakkul will carry on worshipping Allah, whether he does good or bad in the exam. A student who has Tawakkul will thank Allah and ask Allah to give him the Tawfeeq (ability) to do more.

Second khutbah (English):

The Prophet (ﷺ) gave an example or parable to explain the concept of Tawakkul.  ‘Umar bin al-Khattāb heard the Messenger of Allah (ﷺ) saying, “If you trusted Allah with due Tawakkul, He would provide you sustenance as He provides for the birds; they go out in the morning with empty stomachs and come back in the evening with full stomachs”. [Tirmidhi]

A bird sitting in its nest and praising Allah will not have a full stomach. The birds have to go out every single day and work hard to find food from morning to evening. The one who goes out and expends effort while knowing that Allah provides, will obtain what he desires. If you embed this concept of Tawakul in your student life now, then you will see that later on, as you grow older and as the challenges of life become more difficult, you will be able to remain calm under difficult situations and you will be able to respond in the best possible manner. Why? Because you know Allah has planned all of this for you and therefore, after trying your best, you will be content with the outcome.

If you really want to change and be a good student, even though you had a bad start, say Bismillah and make the change and rely on Allah. If you want to stop ingesting toxic chemicals, take the necessary steps and make Dua and rely on Allah. If you want to enjoy family life, be the one who helps everyone and have Tawakkul in Allah and watch how Allah changes your family situations. Once we truly grasp the concept of Tawakkul and put it into our lives then we will be successful people in this world and in the hereafter.

May Allah give us the Tawfeeq to increase our level of Tawakkul and may Allah grant us the best in this world and the next.

#### Pack I / Khutbah 6 — Good Akhlaq – The Noblest Of All Possessions

First khutbah (English):

The Prophet (ﷺ) was sent to help us to worship Allah in the best possible way. But he (ﷺ) himself emphasised certain acts of worship because they have more weight in the site of Allah. One of those actions is to do with character, also known as Akhlaaq.

The Prophet (ﷺ) said: “The heaviest thing on the scale of good deeds is good manners”. [Tirmidhi]

Moreover, in another hadith, the Prophet (ﷺ) said, “The most beloved of you to me and the closest of you to me on the day of judgement will be those with the best manner”. [Tirmidhi]

In both of these Ahadith, the Prophet (ﷺ) is signifying the value and importance of having good manners. The Prophet is also guaranteeing that a person with good manners and good character will be with him in Paradise. We always say that we wished to have lived with the Prophet, we wished we were there so then we could’ve struggled with him and therefore enter Paradise with him. Well, here is your chance to be with the Prophet Muhammad (ﷺ) in Paradise. Why is that believers with good manners will be with the Prophet (ﷺ) in Paradise? It is because it makes sense that people of similar character and manners be together.

Allah Himself described the character of the Prophet by saying,

> وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ

“And Verily. for you (Muhammad ﷺ) are on an exalted (standard of) character”. [68:4]

My dear respected brothers and sisters, do we want to be with the Prophet (ﷺ) in Paradise? If yes, then how can we enter Paradise when we have a bad habit of swearing every few sentences. How can we be with the Prophet (ﷺ) when we lie, mock, cheat, belittle others and deal with each other harshly? Gossiping, backbiting, spread rumours, slandering, these are not actions that would lead one to Paradise. Arrogance, pride, boastfulness are qualities that were displayed by the worst of creation, Iblees and his followers such as Firawn and Nimrood.

Our behaviour can be a means for someone to accept or reject Islam. Our behaviour can also be a means for someone to either love or hate Islam. Our behaviour can also be a means for someone to either study more about Islam or totally disregard it. There was a man named Thumamah ibn Uthal who was the chief of his tribe. He hated Islam and even wanted to harm and kill the Prophet (ﷺ). One day when the Prophet (ﷺ) saw Thumamah in a desperate situation, the Prophet gave him the best of food and drink, spoke to him gently, and treated him well, even though the Prophet knew that Thumamah came to harm him. Thumamah couldn’t stop thinking about the amazing manners and character of the Prophet (ﷺ) and as a result accepted Islam. So the moral of the story is that your manners and the way you conduct yourself has an impact on those around you.

Second khutbah (English):

I would like to focus on one of the aspects of our character and that is the way we speak with one another. The Prophet (ﷺ) guaranteed Paradise to those who can control two organs, one of them being the tongue. With the tongue, we can give Salam and spread good words. It is with the tongue and voice we recite the Quran and praise Allah. However, with the same tongue we can speak in a disrespectful and rude manner.

The scholars said something amazing about the tongue. Allah gave the tongue as a gift. He has also protected it with 32 guards that are very sharp, meaning the teeth If Allah is protecting your tongue, then so should you. The tongue has no bones, but is strong enough to break a heart. So be careful with your words.

When you swear, backbite and slander, some of your good deeds are actually being transferred to the victim. It is like saying you are giving your hard-earned good deeds away for free.  If someone speaks bad about you, smile because he has just given you some of his good deeds. To summarise, we must improve our character, especially the way we use our tongue.

We ask Allah to allow us to purify our speech and beauty our character. And we ask Allah to unite us in Paradise with those who display good character.

#### Pack I / Khutbah 7 — Compete with The Competitors

First khutbah (English):

When we wake up from sleep we praise Allah.

> الحَمْدُ لِلهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ

All praise is for Allah, the one Who gave us life after causing us to die, and unto Him is the resurrection.

We start our day by praising Allah for giving us life. Today we were all dead, but then Allah gave us life and so we should ask the question, why did Allah give our lives back? Why did Allah give us life after he gave us death? Did Allah give us life this morning because he wants us to watch TV, play games, make money so we can buy a house and then afterwards buy a bigger house and then a big car and live life however we want? Or did Allah give us life so then we can worship him and compete with each other for good deeds and that which pleases Him. We need to ask ourselves, especially in the morning when we wake up, why did Allah give me back my soul. What is it that Allah wants from me? Oh Allah, why are you giving me life and then giving me death, and then giving me life and then giving me death and then one day will come it will be just death.

To help you answer this question, Allah said in the Quran,

> وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ

“And I did not create the jinn and mankind except to worship Me”. [51:56]

Allah has created us to worship him and He advises the believers to compete with each other in worshipping Him. He uses words like rush forth (Sa ree’o) and race (Sabiqoo) to encourage this mind-set and attitude of competition. Such strong approach will help you and me go far in life and attain high positions in Paradise and even in this world.

One day the Prophet (ﷺ) was telling the Sahabahs about a group of people who will enter Paradise without any form of accountability. They won’t be asked any questions and nor will they go through any punishment. One of the Sahabahs by the name of Ukasha immediately jumped up and said, “Oh Messenger of Allah, make Dua that I am one of them”. So the Prophet said, “you are one of them”. Another sahabah jumped up and said, me to (make Dua for me as well). The Prophet (ﷺ) replied “Ukasha has beaten you to it”. [Bukhari]

One of the Sahabahs, from Ta-if, visited Makkah in the very early days of the Prophet (ﷺ) message or as soon as the Prophet (ﷺ) started preaching Islam. He saw a man come out from a tent, move in a strange way and was followed by a woman and another young man. They were all doing the same actions. So this man asked Abbas, the uncle of the Prophet, “who are these people and what are they doing?”. Abbas said, that man, the first one, is my nephew Muhammad and he claims to be a Prophet sent by Allah. The women is his wife and the young boy is Ali, and they are his followers.  The narrator said, “I left, I didn’t pay much attention to the incident”. This man never became a Muslim until Ta-if was opened. Probably 15 years later. After he became a Muslim, he thought to himself, if only I became a Muslim then, I would have been the fourth Muslim on the face of the earth. Now where am I, there are thousands of people who became Muslim before me. I missed that golden opportunity.

From these stories, and many other ones, we can see that the Sahabahs always competed with each other for good deeds. Likewise, we should also have a similar mind set. We should compete for salah, who can come first. Who can bring their friends to prayer. If every person brings just one person, just one, then the number of people praying Jumuah will double and imagine how much reward and benefit everyone would receive.

Second khutbah (English):

Allah made us Muslims and this is one of the greatest blessings one can be gifted with. We need to thank Allah for this blessing and all the other blessings. One of the ways we can thank Allah and show gratitude is by worshipping him with every single part of our body. Allah gave you two eyes, use it to read the Quran; Allah gave you a tongue use it to utter good words; Allah gave your hands and legs so then you can physically help people.

There was a time in which we did not exist. So around 60 years ago, none of us existed and then He brought us to existence. And then bestowed his favour upon us by making us Muslims. Therefore, we need to thank him and worship him. Imagine if someone needed a kidney and you donated one of your kidneys to him but then after the operation he doesn’t say thank you or does not show any appreciation for it. Well, Allah gave us eyes, ears, nose, tongue, kidney, heart, everything else and so not worshipping Him is just like that man who doesn’t appreciate the people who helped him.

We are living in a time whereby people like to compete for bad things or things that are of no benefit. People compete for money, cars, houses, albums; but, they don’t compete for Jannah and they have no time for Allah. We shouldn’t be of those who don’t have time to worship Allah, but rather we should be from those who actively find time and energy to worship the Creator of the heaven and the earth. We should actively compete with each other for good, such as coming to prayer, memorising Quran, going to talks and other noble activities.

We ask Allah to give us the Tawfeeq to compete with each other to do good deeds and to make us amongst those who worship Him, day and night, in secret and in public.

#### Pack I / Khutbah 8 — Dua – The Secret to Changing One’s Destiny

First khutbah (English):

The Quran and Sunnah are full of Duas, supplications. The Quran mentions how the Messengers, Prophets and other righteous people were always fully engaged in making Dua to Allah on a continuous basis? One of the most famous supplication which we have learnt from young age is,

> وَمِنْهُم مَّن يَقُولُ رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ

“But among them is he who says, "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire". [2:201]

There is a Hadith that shows the power of making Dua. The Prophet (ﷺ) narrated a story about three men from Bani Israel. The three men were on a journey; it suddenly began to rain and so they took shelter in a cave. A big rock fell from the top of a mountain and blocked the entrance of the cave. The three men tried to push the rock but they could not move it. The three men were in a difficult situation whereby no one can hear them and no one can respond to them. It was pitch black and the mountains were shaking. In this difficult situation one of them said, we should ask Allah with the best deed we have done and as a result maybe this rock will move.

One of them raised his hands and said, Oh Allah, every night before my parents go to sleep, I would give them milk and then they would go sleep. After giving milk to my parents I would give it to my wife and children. One day I had to do extra work and therefore I arrived home late. When I came home I found my parents sleeping and my children were hungry and thirsty and they wanted to drink the milk. I told my wife to put them to sleep even though they were hungry and thirsty. I stood with the milk in my hands the whole night, I didn’t want to disturb and wake my parents up. When they woke up from sleep, I gave them the milk and they drank it. Oh Allah, if you know that I did this for Your sake, seeking Your pleasure, then please remove the rock. The rock moved, but not enough for them to come out.

Then the second one stood up and said, Oh Allah I loved this beautiful woman, more than any man can love a woman, and we were about to have a relationship with each other, but when she said “fear Allah”, I let go of the relationship. Oh Allah, if you know that I have done this action solely for your sake, then remove the rock. So the rock moved again, but once again the gap was too small for them to pass through.

The third one got up and said, oh Allah I hired some labourers. One day one of workers came late to work. When it came to giving people’s salary, everyone said to pay him less and consequently he got offended and left. I used his wages to invest in a business (it was to do with agriculture and livestock) and the business prospered greatly. After a long time, that same labourer came back and was desperate for his wages. I took him to the valley and said, “everything here belongs to you - camels, cattle, goats and slaves”. The servant replied, “are you mocking me, are you laughing at me”. I replied, “not really, all of this is for you because I invested your wages and this is the result of the investment”. So, the labourer took everything and he did not leave anything behind. Oh Allah, if you know that I have done this action solely for your sake, then remove the rock. And the rock moved and they all safely came out.

Second khutbah (English):

If we take a step back and just ponder on the fact that Allah brought these three men inside a cave to show us the power of Dua and good deeds. The incident took place, Allah then preserved this story by revealing it to the Prophet (ﷺ), who then narrated it to his companions and this story has been passed down generations after generations and now we are listening to it. One should ask the question, what lessons and benefits could we derive from this ancient but powerful story. Obviously, Allah did not preserve this story and reveal it to this Ummah just to listen to it and feel good about it. But rather Allah has revealed it to us for us to take lessons from it and share it with others.

Your decision can change the course of history. If the three men did not advise each other to make Dua, then they probably would have died in the cave. In a different context, imagine if your teachers decided not to take education seriously, then they would not have been teaching you. So decide the type of person you want to be, decide the types of deeds you want to do and decide who your intimate friends should be. Because these three factors will affect your life and your contribution towards humanity.

Make Dua to Allah. Exams are few months away. You should start making Dua from now. Don’t wait for the night before the exam, start making Dua now.

Learn Duas related to memory and Duas pertaining to protection from laziness

Ask your parents to make Dua for you

Give some charity with the intention of over-coming hardship one might face in exam,

Just like the 3 men, do special deeds and mention them in your Duas.

Make Dua for your fellow brothers and friends. Abu reported: I heard the Messenger of Allah (ﷺ) saying, "Whenever a Muslim supplicates for his (Muslim) brother in his absence, the angels say: 'May the same be for you too'. [Muslim]

Get into the habit of making Dua, especially when you are free and not under a lot of pressure.

The third benefit one may take from this story is to have a positive mind set and not to give up. The men in the cave could’ve said, that is it, we are going to die, no one can save us, we might as well do nothing and just cry until death over takes us. But no! They tried to find a way out. As students, you should always have a positive mind set. Set some goals, if you’re a level 4 or 5 grade student, aim for the grade above and aim for level 7 and 8 every now and then. When you have a challenging question front of you, don’t give up. Attempt it. If you get it wrong, go home and read on the topic. Become an expert on that very topic you couldn’t answer. There is a saying, “tough times never last, but tough people do”. So be someone who is academically, mentally and emotionally tough.

May Allah give us the Tawfeeq to make Dua to him on a regular basis. May Allah give us the Tawfeeq to have a positive mind set and contribute to humanity with our intentions and actions.

#### Pack I / Khutbah 9 — Charity - Make A Difference

First khutbah (English):

Each and everyone one of us, we are a valuable creation of Allah. Why? Because Allah has created us. You have not been created by another human being, nor have you been created by a robot, nor an angel. But you have been created by Allah and therefore automatically you are someone of value.

Allah says in the Quran,

> وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ وَحَمَلْنَاهُمْ فِي الْبَرِّ وَالْبَحْرِ وَرَزَقْنَاهُم مِّنَ الطَّيِّبَاتِ وَفَضَّلْنَاهُمْ عَلَىٰ كَثِيرٍ مِّمَّنْ خَلَقْنَا تَفْضِيلًا

“And We have certainly honoured the children of Adam and carried them on the land and sea and provided for them of the good things and preferred them over much of what We have created, with [definite] preference”. [17:70]

You are so valuable that Allah has created your Paradise already, you just need to decorate it with your deeds. And so Allah gives you opportunities to do good deeds. The more good deeds you do, the more valuable you become in the sight of Allah. Moreover, the more valuable you are to people, the more valuable you become in the sight of Allah.

One of the best ways one can increase their own value is by giving charity and being involved in providing support to others. Allah said,

> الَّذِينَ يُنفِقُونَ أَمْوَالَهُم بِاللَّيْلِ وَالنَّهَارِ سِرًّا وَعَلَانِيَةً فَلَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ

“Those who spend their wealth [in Allah 's way] by night and by day, secretly and publicly, they will have their reward with their Lord. And no fear will there be concerning them, nor will they grieve”. [2:274]

The Prophet (ﷺ) had a sheep which was slaughtered and all the meat, apart from the shoulder, was given away to charity. The Prophet (ﷺ) asked, “What is left of it”? His wife Aishah replied, “Nothing is left except the shoulder.” He (ﷺ) said, “All of it will remain except the shoulder”. [Tirmidhi]

This means that whatever a person uses up is gone and will no longer remain. But whatever he gives to charity, will remain with Allah and he will benefit from it on the Day of Judgement.

Now, I know you are all young and not working and so spending and giving charity can be extremely difficult. And that is fine. As long as you make the intention and maybe give a pound or two to start off with, and for those who are slightly more well off, give £5 or a bit more. However, there is something which you can do that will help you earn mountains of good deeds. What is that?

In a hadith the Prophet (ﷺ) said, “The one who guides to something good has a reward similar to that of its doer”. [Muslim]

Meaning, if you raise lets says £10 or £20 then it is as if you gave £10-20 from your own pocket. But really, you didn’t pay from your own pocket, you just made a WhatsApp call or you sent few messages.

Just a quick tip on raising money. I am sure we know a lot of people outside this school, you may have lots of friends and relatives. All you have to do is either call them or message them or put a post on your social media, ‘I am collecting money for our Muslim brothers and sisters in Rohinga. Please donate even if it is a pound’. After messaging few times, you might need to go around to their house and pick up the money.

Imagine if you collect £20-£30, Allah will reward you as if you paid £30 from your own pocket. It doesn’t stop there. Most likely, with the £20-£30 many lives will be saved. With that £20-£30 children, children your age, your age, will have at least one or two meal a day for few weeks. Subhanallah, sometimes we think that the a few quid we give and the money we raise have no effect. Wallahi, Wallahi brothers, the money you give will save lives. The money you give will put a smile on those children’s faces. The money you give will put a smile on all those mothers who will see their children live for another day, due to the food or medicine bought with the money you raise. And most importantly, Allah will be happy with you and your effort. And Allah has promised that he will reward you immensely.

Second khutbah (English):

It was narrated in a Hadith Al-Qudsi that Allah will converse with us. He will say, ‘Son of Adam, I needed food but you did not feed Me.’ ‘My Lord, How could I feed You when You are the Lord of the Worlds?’ ‘Did you not know that one of My servants was hungry but you did not feed him? If you had fed him you would have found its reward with Me.’ ‘Son of Adam, I was thirsty, but you did not give Me something to drink.’ ‘My Lord, How could I give a drink when You are the Lord of the Worlds?’ ‘Did you not know that one of My servants was thirsty but you did not give him a drink? If you had given him a drink, you would have found its reward with Me”. (Bukhari)

One of the main messages behind this Hadith is that when we help others, Allah will be pleased with us. Helping the refugees and pleasing the victims of injustice, will directly please Allah.

I will end this Khutbah with the words I started with, which is that we need to be people of value. We need to be people who make a difference. Do not be another number, or another figure in the crowd. Be someone who will make a difference. We need to put our faith into action. And it all starts off with taking small steps. Whether you are 11, 12, 13, 14, and all the way up to 18 or beyond, start by doing something as easy as collecting money from your friends and relatives. So I want all of us in this room, to at least make the intention to give £2 from our own pocket and to raise at least another £10. Let’s raise the bar and collect more money than the previous years. Remember, every penny you raise you will get the reward for it. And on the day of Judgement, they will help you enter Paradise.

I ask Allah to accept our intention and good deeds and to give us the Tawfeeq to raise a huge sum of money in order to assist our Muslims brothers and sisters. I ask Allah to alleviate the suffering of the Muslims around the world.

#### Pack I / Khutbah 10 — You Will Be with Those Whom You Love

First khutbah (English):

Allah has created the Human being, the Jinn and even the animals with many strong emotional feelings and one of them is called love. Love is so powerful that it can override pain, stress and even make us perform miracles at times. We probably heard of stories, whether it is true or not, of people walking through fire and walking on water just to go across and meet their beloved ones. Love is so weighty but cannot be measured in grams, nor measure its length in metres etc. You can only measure it through words and actions. If someone dress likes someone and talks like someone, then most likely he likes that person and wants to be like him.

At the time of the Prophet (ﷺ) there was a slave named Thawbaan. The Prophet (ﷺ) actually freed him and Thawbaan was extremely elated and happy. Whenever he would see the Prophet (ﷺ) he used to get very happy and his Iman would increase. Due to these reasons, Thawbaan would try to see the Prophet (ﷺ) few times every day. Just by looking at the Prophet (ﷺ) he would spiritually reach a higher level and he would forget all the struggles and difficulties he was going through. There was a particular day when Thawbaan did not see the Prophet (ﷺ) and so when he met the Prophet (ﷺ) later on, the Prophet (ﷺ) noticed that Thawbaan was actually sad and upset. The Prophet (ﷺ) asked him, “Oh Thawbaan, you look worried. How are you feeling today? Why are you looking unhappy today?”. Thawbaan replied, “oh messenger of Allah, do you know that I love you so much and I need to look at you on a daily basis. When I look at you, it makes me happy. It rejuvenates me and it revives my soul. But the day I did not see you, I told myself, that in the Akhira, you will be taken to Allah, you will be taken to the highest place in Paradise, you will be with the Prophets and messengers, and I don’t think I will ever see you again. Even if I enter Jannah, I will be in another rank. Therefore, what will happen to me as I won’t see you like I do here every day? As soon as the comment was made, Angel Jibreel came down and revealed the verses,

> وَمَن يُطِعِ اللَّـهَ وَالرَّسُولَ فَأُولَـٰئِكَ مَعَ الَّذِينَ أَنْعَمَ اللَّـهُ عَلَيْهِم مِّنَ النَّبِيِّينَ وَالصِّدِّيقِينَ وَالشُّهَدَاءِ وَالصَّالِحِينَ ۚ وَحَسُنَ أُولَـٰئِكَ رَفِيقًا

“And whoever obeys Allah and the Messenger - those will be with the ones upon whom Allah has bestowed favour of the Prophets, the steadfast affirmers of truth, the martyrs and the righteous. And excellent are those as companions. [4:69]

So here Allah is promising that whoever follows Allah and Muhammed they will be granted the companionship of Muhammad (ﷺ) in the Akhira. In Jannah. And will be with the other Prophets and pious people. At hearing this, Thawbaan began to smile and celebrate.

If we want to be with the Prophet (ﷺ), all that we have to do is do as much good as possible and avoid as much as we can from the things he has forbidden us. All that is required is to become better Muslims.

Second khutbah (English):

One day one of the Sahabahs asked the Prophet (ﷺ), “What if someone loves a person but he cannot be with them”. The Prophet (ﷺ) said, “On the day of judgement, you will be amongst those whom you love”. [Bukhari]

So, if you want to be in the company of all the Prophets, starting with Adam and all the way to the Prophet (ﷺ) then we have to love them and follow their footsteps.

When you love the Prophet (ﷺ), even death becomes a joyful event. When Bilal (r) was on his death bed, his wife said, “what a sad day for us. What a day of grief for us”. Bilal replied, “no, say what a day of Joy and happiness. Tomorrow I get to meet by beloved ones, the Prophet (ﷺ) and his companions”.

Abu Bakr, when he was dying, he asked Aisha, “what day is it today”? She replied, “Monday”. He asked, “What day did the Prophet (ﷺ) die”? She replied, “Monday”. Abu Bakr said, “if I am dying do not try to resuscitate me and do not burry me tomorrow. I want to go today”.

To conclude, we need to actively talk about the different ways we can show love for our Prophet (ﷺ) and we need to start off with the small actions. Spend 5 minutes every day either reading about the Prophet (ﷺ) life. We should spend few minutes every day thinking about our connection with the Prophet (ﷺ) and how much we obey and follow him.

May Allah unite us with our Prophet (ﷺ) and the righteous pious slaves.

### Pack II — Worship & Ramadan

#### Pack II / Khutbah 1 — Worship - The Test of Life

First khutbah (English):

Allah created life as a test and the test is to worship Allah. Allah says,

> وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ

“And I did not create the jinn and mankind except to worship Me”. [51:56]

In a verse from Surah Mulk, Allah gives more information about the test by saying,

> الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا

“[He] who created death and life to test you [as to] which of you is best in deed - and He is the Exalted in Might, the Forgiving”. [67:2]

So the test of life is to worship Allah and do some of the best deeds, so that we can present something to Allah on the day of Judgement. Did Allah specify what the best deeds are? No, Allah did not do that. The scholars say the reason behind this is that sometimes a deed can be more valuable depending on the situation; for example, we know that charity is a noble deed. But it increases in value when one gives charity during difficult times. Moreover, prayer is also a very righteous deed. It increases in value when one prays in a difficult situation. I ask Allah to reward you young brothers and sisters as you pray even though you are in a challenging environment. You pray even though lunch is very short. You pray even though it is difficult to do Wudu. You brothers and sisters pray even though majority of the people in this school do not pray.

Going through difficulty is also part of the test of life and is also part of worshipping Allah. Allah tells us in the Qur’an that you will go through various forms of difficulty,

Allah says,

> وَلَنَبْلُوَنَّكُم بِشَيْءٍ مِّنَ الْخَوْفِ وَالْجُوعِ وَنَقْصٍ مِّنَ الْأَمْوَالِ وَالْأَنفُسِ وَالثَّمَرَاتِ

> وَبَشِّرِ الصَّابِرِينَ

“And We will surely test you with something of fear and hunger and a loss of wealth and lives and fruits, but give good tidings to the patient”. [2:155]

Just to help you understand this verse I will give you an analogy.  We all know that we have to work very hard to do well in any test, whether the test is for Math, Science, English or any other subject. In preparing for the test we go through difficult times learning all the topics, including certain topics which are very challenging. Similarly, to achieve Jannah we have to go through tests and difficulties, some which might take us to our limits.

What are some of the ways Allah tests us in life?

Finding it enormously difficult to do well in your studies because of learning difficulties

Having illnesses, which limits your ability to do things, including disability

Parents separating

Death in the family (e.g. sibling or a parent)

Natural disaster, e.g. earthquake

Other tests may revolve around fear; fear of not fitting into a group of friends, fear of failing or fear of the future. Also, tests may relate to hunger whereby one delays his lunch for prayer and one fasts in the month of Ramadan.

So how do we deal with the tests and trials of life? Number one, know that Allah tests those who He loves. “When Allah loves a people, He tests them”. [Tirmidhi]

If Allah tests you a lot, it doesn’t mean that He dislikes us, in fact it means Allah loves you. This is why the Messengers and Prophets of Allah went through the most tests. Allah made the Prophet Muhammed (ﷺ) go through a lot of tests and very difficult ones as well. The Prophet (ﷺ) lost both parents by the age of six, he was poor, he was physically, verbally and mentally harmed, he was driven out of his hometown, he went through hunger and much more. Why did Allah put the Prophet (ﷺ) through so much difficulty? Because Allah loves the Prophet (ﷺ) and wanted to bring him closer and this is only possible by passing all the trails of life. One cannot get closer to Allah by being lazy and not doing anything. One gets closer to Allah by worshipping Him in whatever situation he finds himself in.

Second way one can deal with the tests and trials of life is to know that the test is temporary and therefor will not last forever. As a consequence of it being temporary know that the solution to your problem and comfort is coming. Allah gives us hope by saying,

> إِنَّ مَعَ الْعُسْرِ يُسْرًا

“Indeed, with every hardship will come ease”. [94:6]

So whilst we experience hardships we should never lose hope in Allah as the situation will get better.

Second khutbah (English):

As we mentioned in the first part of the Khutbah, the purpose of our creation is to worship Allah. Those who go through difficulty to worship Allah will be rewarded immensely in Jannah. Knowing that Allah test those who He loves and that with every difficulty will come ease, should help us go through the trials of life with a positive mindset.

Another way that can help us deal with the tests and trials of life is to know that Allah gives you specific trials because He knows you can pass them. For example, some people go through the trial of health because Allah knows they can handle it. Some people go through the trial of not having different body parts? Why because Allah knows they can handle it. Some people go through the trials of hunger because Allah knows they can handle it. Allah tests people according to their level of Imaan (faith). If a person’s Imaan is very strong, he will go through a difficult test, but if a person’s Imaan is weak he will go through a less difficult test. We should know that Allah does not place a burden on us that we cannot handle

Allah says,

> لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا

“Allah does not charge a soul except [with that within] its capacity”. [2:286]

In this verse Allah is guaranteeing you that He won’t put you through a difficulty that you cannot face. He has given you everything you need to pass the difficulty.

Other ways that will help us deal with tests include:

Staying close to Allah, by doing Salah

Being patient

Reading and listening to the Qur’an more often

Go through the verses about the tests people before us went through. These verses will make you realise that others have passed the trials of life and so can you.

Staying with good people who will help you with your situation

To conclude, we should remind each other that the purpose of life is to worship Allah and that going through difficulties is part of worshipping Allah and getting close to Him. Paradise has been prepared and is being decorated for those who are patient when facing difficulties.

May Allah give us all the ability to be patient and remain obedient when going through tests.

#### Pack II / Khutbah 2 — Tawbah – Clean the Dirt

First khutbah (English):

It was reported by Abdullah Ibn Mas’ud, that the Messenger of Allah (ﷺ) drew a line with his hand and he said, “This is the straight path of Allah.” Then the Prophet drew lines to the right and left, and he said, “These are other paths, and there is no path among them but that a devil is upon it calling to its way.” Then the Prophet recited the verse, “Verily, this is the straight path, so follow it and do not follow other paths” [6:153]. [Musnad Ahmad]

The Prophet (ﷺ) is telling us that the religion Islam is the straight path, and once you accept the religion, you should know the direction you should be moving. The fact that the prophet drew lines on the left and right and said shaytan is at the end of each line indicates that there are paths out there ready to take us away from the religion. Now, although the scholars have said these paths are referring to innovation, one can expand on the concept and mention that there will be many forms of distraction when one is on a path of success. So when it comes to the religion, you might sometimes find your friends taking you away from this straight path. You might find the types of things you are listening to taking you away from this straight path. You might find the types of things you are watching, speaking about and sometimes ingesting are taking you away from this straight path. If you are serious about being a successful Muslim and staying on the straight path then you will have to be strong and overcome these distractions of life.

However, human beings have been created weak and this is why we all commit sins. We commit sins knowingly and sometime unknowingly. One may ask, does Allah want us to be a sinless creation? The Prophet (ﷺ) answered this question by saying, “If you did not sin, Allah would replace you with people who would sin and they would seek forgiveness from Allah and He would forgive them”. [Muslim]

So the answer is no, we are not expected to be sinless. However, the Prophet (ﷺ) did advise us on how to deal with sins. He (ﷺ) said, every son of Adam is a sinner and the best sinners are those who do Tawbah - ask Allah for forgiveness.

Therefore, one of the ways to get rid of sins and stay on the straight path is to do Tawbah - ask sincerely to Allah for forgiveness. We must sincerely think about the major sins we commit and ask Allah to help us overcome them. We also have to make a good effort to stay away from the evil. Let us say that we have a problem with music, start listening to good Nasheeds. If you have a problem with smoking and other bad habits, seek advice and have good friends who will have a positive effect on you. You will naturally, actively and passively learn from them and follow them.

One thing that must be emphasised, and one has to be careful with the following message, is that even if we do a lot of sins, no matter how big or small they are, we should never give up in the Mercy of Allah and think that Allah will not forgive us. In a Hadithul Qudsi, “Allah said, oh son of Adam, if you have sins piling up to the clouds and then ask for my forgiveness, I will forgive you”. [Tirmidhi]

If you sincerely Tawbah then all your sins will be wiped out. Regardless of the nature of the sin, once you do Tawbah, ask sincerely to Allah to forgive you, then it will be as if you did not commit the sins, meaning that Allah will forgive you.

The Prophet (ﷺ) had a habit of asking for forgiveness 100 times a day, so what about us? We make mistakes and sin every day, and therefore it should also be part of our daily habits to seek forgiveness from Allah.

Ill end the first part of the Khutbah by sharing an advice given by Allah to the Muslims,

> وَتُوبُوا إِلَى اللَّـهِ جَمِيعًا أَيُّهَ الْمُؤْمِنُونَ لَعَلَّكُمْ تُفْلِحُونَ

“…turn all together to Allah in repentance, oh you believers, so that you may be successful”. [24:31]

Second khutbah (English):

Tawbah, asking for forgiveness, allows one to connect to Allah. It is so beloved to Allah that He said,

> إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ

"Verily, Allah loves those who repent and those who purify themselves". [2:222]

We have mentioned that it is impossible to not commit sins, however, is it impossible to do good deeds? Can we really believe a person who says that it is impossible to do righteous good deeds? Of course not. In fact, it is another way to get rid of our sins.

The Prophet (ﷺ) said, “follow a bad deed with a good deed and it will erase it”. [Tirmidhi]

The advice is as simple as, do as much good deeds as possible with the hope that it will wipe out the bad ones. So if you have a habit of swearing, replace them with good words. Instead of using foul language, try to imbed good words or Islamic terminologies; for example, say Subhanallah instead of the S word. Replace the F word and B word with words that can help you express yourself in a good way. You might think that it is ‘minor’ and not a big deal to use bad and vulgar words; but, the words will shape your future. If you make it a habit of using bad words then they will become part and parcel of your actions. The saying goes, watch your actions, they will become your habits; watch your habits, they will become your character; watch your character, for it will become your destiny.

Those who do not stop bad habits and engage themselves in Tawbah will have huge stacks of bad deeds. And we all know, if one’s bad deeds outweigh the good then that person will enter Jahannam, hell. One can describe the Jahannam at length, but if we just talk about the fire of hell, it should help us reduce our bad habits. The Prophet (ﷺ) said, “Your fire (in this world) is a part of the seventy parts of the fire of Hell”. [Bukhari & Muslim]

So the hottest blue flame is nothing compared to the fire of Hell. Imagine the hottest fire in this world, multiply it by 69, then that is the intensity of the fire of hell. To be honest, one cannot even imagine the pain the fire of hell will cause. May Allah protect us all from the fire of Jahannam. So let go of those bad words just so then the fire of hell does not touch your tongues. Let go of watching those bad things so then the fire of hell does not have to touch eyes.

Another issue that needs to be raised is to do with social media. At the end of the day most of us have two or more social media accounts. If you do something incorrect, like sharing a bad video or making negative comments, then try to stop yourself as soon as possible. Imagine if you share a bad video, and then your friends share it and then their friends share it. Can you imagine the amount of sins you will be accumulating? On the other hand, if you share Islamic videos and then others share it, imagine how much good deeds you will earn. So let us make it a habit to share at least one good thing every day on our social media and perhaps the good deeds will override the many bad deeds we have done.

I conclude by asking Allah to give us the ability to do Tawbah on a regular basis, to forgive us for our shortcomings and to give us the strength and sincerity to do good deeds which will erase our bad deeds.

#### Pack II / Khutbah 3 — Prayer - A Conversation with Allah

First khutbah (English):

Only once did the Prophet (ﷺ) go up to Allah whilst being alive. Only once. Angel Jibreel took the Prophet (ﷺ) from Makkah to Jerusalem and from Masjidul Aqsa all the way to Allah.

Allah says,

> سُبْحَانَ الَّذِي أَسْرَى بِعَبْدِهِ لَيْلًا مِنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى

“Exalted is He who took His Servant by night from al-Masjid al-Haram to al-Masjid al-Aqsa”. [17:1]

From Masjidul Aqsa, Palestine, the Prophet (ﷺ) ascended the sky, surpassed the universe, went beyond the different levels of Paradise and then went as close as he can to Allah. What happened when the greatest man to be created came close to Allah? Allah the Almighty revealed the 5 daily prayers.

If Allah wanted to, He could have told the Prophet (ﷺ), you must pray 5 times a day whilst being on the Earth. While the Prophet was in Makkah, Allah could have instructed to pray 5 times a day. Instead, Allah made it more special; Allah took the Prophet (ﷺ) above everyone and everything. The Prophet (ﷺ) went beyond the earth, stars, galaxies, universe and when he was close to His Lord Allah revealed the obligation to pray 5 times a day.

One may question the reason behind this journey. Some of the scholars said that the one who prays to Allah 5 times a day, his rank in the sight of Allah is much higher than every other creation. He is better than all the other creation Allah has created. Another wisdom the scholars have shared is that when one prays to Allah 5 times a day, he will slowly slowly reach a level whereby he feels he is very close to Allah. When one feels spiritually connected to Allah then one day he will be physically close to Allah in Jannah.

What is the reward of those who worship Allah and pray 5 times a day? What is the reward of the believers who went through the hardship of waking up early in the morning to pray Fajr? What is the reward of those who do Wudu in the cold. Allah will reward such people with Paradise. And the best reward in Paradise will be to see Allah. The Prophet (ﷺ) described this future moment by saying, “When the people of Paradise enter Paradise, Allah will say, ‘Do you want anything more?’ They will say, ‘Have You not brightened our faces, admitted us to Paradise and saved us from Hell?’ Then the veil will be lifted and they will not have seen anything more dear to them than looking upon their Lord, may He be glorified and exalted”. [Muslim]

If one decides to not pray to Allah, at least a minimum five times a day, what will happen to him? Allah answers that question by quoting the people of hellfire,

> (43) قَالُوا لَمْ نَكُ مِنَ الْمُصَلِّينَ (42) مَا سَلَكَكُمْ فِي سَقَرَ

“(when the people of Jahannam will be asked), what has caused you to enter Hell? (42). They will say: we were not of those who used to pray” (43). [74:42-43]

So the first reason provided by those who entered Jahannam is that they did not pray, they did not make the effort to pray. It takes roughly 5-10 minutes to pray each prayer and there are only 5 prayers. If you do the maths then you will realise that all of the prayers should only take 50 minutes of your day. You have the other 23 hours to do whatever you want. If one cannot give up one hour out of 24 hours to pray to Allah, the Creator and Sustainer, then how can this person enter Paradise? Allah is not telling us to spend hours and hours in prayer, just a small portion of your day is enough. We need to remember the reward and punishment next time we are deciding whether or not to pray.

Second khutbah (English):

Paradise has been made for those who pray and do other good actions. One can really never fully describe Paradise. The Messenger of Allah (ﷺ) said regarding Paradise, “Allah has said: I have prepared for My righteous servants what no eye has seen, what no ear has heard, and what no heart has conceived”. [Tirmidhi]

When we see something beautiful, such as a cute animal or the incredible sky, we become amazed. In Paradise we will see the maker of the heavens and the earth. We will see the one who created you me, your parents and the whole of humanity. We will see Allah.

Now the question is, do you want to be amongst those who see Allah? Well, next time it is time to pray, make some effort to pray. Do you want to be amongst those who see Allah? We’ll next time you have an opportunity to do something good, try to do it. Do you want to be amongst those who see Allah? Well next time there is something that will lead to a sin, try to avoid it and distant yourself from it. In Paradise, nothing will be Haram, everything is halal. Because you tried your best to stay away from the Haram in this world, in the next, the word Haram would cease to exist.

Anything we want at the end of the day, it comes from the earth. Whether it is food, it probably grew on a plant or a tree, if its material such as gold and silver and diamond and pearls, it still came from the earth. So no one can give you anything from beyond the earth. Car, watch, phone, everything, they are made from materials found in the earth. Even us; me, you, and your friends, we are all from the earth. You want Paradise? There it is. It is front of you. All you have to do is carry on worshipping Allah and very soon you will see Him.

You want to earn the pleasure of Allah, start today. Start praying 5 times a day, start doing good to those around you. Reduce and then eliminate the bad habits.

I ask Allah to give us the Tawfeeq to pray five times a day and enter Paradise through His Mercy.

#### Pack II / Khutbah 4 — Qur’an - In Ramadan

First khutbah (English):

If someone was to ask you, why is Ramadan an important month, how would you respond? Some of us might respond by saying, it is a month in which Muslims fast from dawn to sunset. Some might say, Muslims pray for longer than usual, throughout the night. Others might say, it is a month in which the bad Muslims stop doing bad things. All of these points are good and are secondary reasons why Ramadan is a special month. Allah actually answers this question by saying,

> شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ

“Ramadan is the month in which the Qur’an has been revealed”. [2:185]

The month of Ramadan existed even before Islam. The name Ramadan was there, but it was not that special. The name and the month became special because the Qur’an was revealed in that month. Allah has honoured and made this month so special that it is the only month, out of the 12 months, mentioned directly by name in the Qur’an. Moreover, not only is the month of Ramadan made special, but also the night the Qur’an was revealed was made special. In the famous Surah, Surah Qadr, Allah says,

> إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ

“Verily We have revealed it (the Qur’an) in the night of Qadr”. [97:1]

The very night the Qur’an was revealed became blessed. Allah blessed it by giving it a name, the Night of Qadr, and by giving it the status of being better than a thousand months. So my question to myself and to you brothers and sisters is, what would my status and what would your status be if we recite the Qur’an? What would my status and what would your status be if we memorise the Qur’an and understand its meaning? What would my status and yours be if we practice the Qur’an? What would my status and what would your status be if we teach something related to the Qur’an, even if it is just one verse. If the month and the day the Qur’an was revealed in are elevated, then what sort of elevation will we get?

In a Hadith, the Prophet (ﷺ) said, "The best among you (Muslims) are those who learn the Qur'an and teach it." [Bukhari]

Yes, that is right, if you spend time learning the Qur’an, even if you struggle, you are automatically amongst the best Muslims. Allah will raise your status, just for learning the Qur’an. Do not worry about teaching the Qur’an, just by learning it Allah will raise your rank. So next time you recite, learn or even teach the Qur’an, remind yourself of this Hadith and feel proud that you are reciting the words of Allah. You are not reading a normal book, you are not reciting the words of a human, you are reciting the words of Allah.

If someone decides to not care about the Qur’an and not spend time with it, what will happen to this individual? If one does not want to even spend a minute or two per day with the Qur’an, whether it is reciting it, or reading the meaning, or listening to someone recite it, what will happen to this individual on the day of judgment? It is enough to know that our Prophet, Muhammad (ﷺ) will complain to Allah about those who did not engage with the Qur’an.

> وَقَالَ الرَّسُولُ يَا رَبِّ إِنَّ قَوْمِي اتَّخَذُوا هَٰذَا الْقُرْآنَ مَهْجُورًا

“And the Messenger has said, "O my Lord, indeed my people have abandoned this Qur'an”. [25:30]

We all want to meet our Prophet (ﷺ), we all want our Prophet to be happy with us (ﷺ). It is almost impossible to imagine a scenario whereby the Prophet will say something against us. So let us do ourselves a favour by reciting and implementing the Qur’an.

Second khutbah (English):

As we mentioned before, by you reciting and learning the Qur’an, you become amongst the best Muslims. So that is the reward in this world. However, you might ask the question, what is the reward in the hereafter? The Prophet (ﷺ) told us that on the Day of Judgement, Allah will say to the one who memorised the Qur’an, “Recite, and rise up, recite (melodiously) as you would recite in the world. For indeed your rank shall be at the last Ayah you recited.” [Tirmidhi]

Subhanallah, is that not a great reward? For every verse you recite, your rank in paradise increases. For every ayah you learn and practice, you will ascend higher and higher in Jannah.

I would like to share a few practical points on studying the Qur’an. We are all different here and have different capabilities. If I was to ask, who is the best Qur’an reciter? One will say this Imam, another one will say so and so. It just shows that when it comes to the Qur’an, we all have a different taste and a different approach to others. For those who rarely touch the Qur’an, recite only two or three lines a day. Do not worry about reciting the whole Qur’an. Just try your best to recite only two or three lines and get into the habit of doing it every day. For those who recite the Qur’an regularly, maybe read a page or two per day. Once again, make the amount you select a habit. There is no point in reciting a huge portion on day and none for the next three or four days.

When it comes to memorising the Qur’an, it is a challenge from me to all of you brothers and sisters to only memorise four or five lines this Ramadan. Maybe pick one of the small Surahs from the back. Spend few days memorising one line, and then few more days memorising another line. Do this until you have completed memorising 5 lines. Do not worry about memorising a large portion, just stick to five. Once you have memorised them, see if you can recite them in your prayer. See if you can recite them when you walk to the masjid. Once you know how to recite the five verses and have memorised them, study the meaning. Read the meaning of the five lines and then tell others about it.

In conclusion, if you spend time with the Qur’an, Allah will raise your rank in this Dunya and in Jannah. We should make time to study the Qur’an. A good start for this Ramadan might be to recite a small portion, like three or four lines every day. Make an attempt to memorise at least few lines and understand its meaning.  There are 30 days of this month, let us make them count InshaAllah.

May Allah give us the Tawfeeq to study the Qur’an and make this Ramadan better than the previous ones.

#### Pack II / Khutbah 5 — After Ramadan - Look Forward and Upward

First khutbah (English):

We praise Allah who has given us the ability to fast in the month of Ramadan. We praise Allah for giving us the ability to pray in Ramadan. We praise Allah for giving us the ability to recite Qur’an in Ramadan. We praise Allah for giving us the ability to give charity in Ramadan. We praise Allah for keeping us alive in and after Ramadan so that we can do more good deeds and therefore increase our status in Paradise. We praise Allah in any and every situation we find ourselves in, whether our stomach is empty or full, whether we are tired or energetic, whether we are in a school or outside.

The honest truth is that we can praise Allah day and night and every second of our lives. But Allah does not want us to do that. Allah does not want the human kind to spend all of their time saying Alhamdulillah, Subhana’Allah Allahu-Akbar. Allah does not expect us to pray continuously for 24 hours. Allah does not expect us to recite Qur’an for 24 hours. But Allah wants us to spend some time doing good actions, whether it is Tasbeeh, reciting the Qur’an, praying, giving charity or enjoining good and forbidding evil. Moreover, Allah wants us to worship him with our tongues, limbs, hearts and mind.

Allah said,

> اعْمَلُوا آلَ دَاوُودَ شُكْرًا

“Do good deeds, oh family of Dawood, in gratitude”. [34:13]

Here Allah is commanding Prophet Dawood and his family to do more good actions, as a means to show their gratitude to Allah. Allah wants us to do the same. Worship Him in whatever situation we find ourselves in. Sometimes that might mean that we spend only few minutes during our lunch break to pray the Dhur prayer. Sometimes it might mean that we spend at least 5 minutes every day reciting and studying the meaning of the Qur’an. Sometimes it might mean that we attend a small class in our local mosque so that we increase our knowledge and love for Islam. I am sure we are amazed at the fact that Muslims spend a huge amount of their time and energy praying Taraweeh and Tahajjud during the night. Only a wise Muslim will tell himself that during Ramadan if he can spend an hour or two every night praying the voluntary prayers then, it makes sense for him to spend a few minutes for the obligatory prayers outside of Ramadan. It makes sense for him to spend 5-10 minutes for Fajr, Dhur, Asr, Maghrib and Esha prayers.

Second khutbah (English):

We spent the whole month reciting the Qur’an, and that is very good. For every letter Allah, gave us one reward. Imagine the billions and trillions of reward we have earned; May Allah accept from us. My question to myself and to you brothers and sisters is this: imagine if we stood in Tarawih and understood the meaning of at least Surah Al Fatiha. And now imagine if when we stood in Tarawih and we understood more parts of the Qur’an.

I am sure it felt nice during the last few days of Ramadan because the Imams recite the last 16 Surahs which we know and have memorized from a young age. Imagine if we understood few more Surahs like that. Imagine if you understood the meaning of Surah Al Fatiha. So, when the imam recited,

Alhamdulillahi rabbil aalamin. Imagine if you knew the meaning.

Arrahmanir raheem. Imagine if you knew the meaning.

Moreover, imagine if we one day we were able to recite the Qur’an like our favourite Imam. Subhanallah, we would be in love with our prayer and we would love the Qur’an.

Now imagine the opposite; of you praying Tarawih year in and year out and not knowing what is being recited, not understanding the meaning of anything and not being able to recite the Qur’an. I am sure we don’t want to be in those situations. The truth is my brothers and sisters, we can all make a difference in our lives by spending few minutes every day studying the Qur’an. Have a suitable plan. Maybe spend 2-3 minutes reciting, another 2-3 minutes reading the meaning, another 2-3 minutes trying to recite like your favourite reciter and another 2-3 minutes memorizing. I promise you all, that if you make the intention and start today, by next Ramadan and for the rest of your life, you will be enjoying Tarawih, Tahajjud and generally you will love and enjoy spending time with the Qur’an. Spend few minutes every day and persevere and you will see the results. The Arab saying goes ‘a river cuts through a rock, not because of its strength but because of its persistence’. Make the intention today and be persistent. They say intention turns dust into gold, so make the intention to start studying the Qur’an and earn your golden prize in the hereafter, Al Jannah.

I would end this Khutbah by reminding all of us of the Hadith about how for every verse we memorise and practice, our status in Paradise will increase. The Prophet (ﷺ) told us that on the Day of Judgement, Allah will say to the one who memorised the Qur’an, “Recite, and rise up, recite (melodiously) as you would recite in the world. For indeed your rank shall be at the last Ayah you recited.” [Tirmidhi]

I ask Allah to give us the Tawfeeq to worship and love the Qur’an.

#### Pack II / Khutbah 6 — Forgiveness - A Noble Quality

First khutbah (English):

Part of the test of life is to take the attributes of Allah and translate it in our lives. We all know that Allah has 99 attributes and more. We should aim to practice some of these qualities in our lives. For example, one of the attributes of Allah is Al Ghaffar which means the forgiver. We should take this quality and implement it in our lives by showing our forgiveness towards others. Another attribute of Allah is Al Fattah which means the opener. We should also be an opener. Open doors to good things; for example, open doors to Islam, open doors so then people can learn about the lives of the Prophets. Open doors to the Qur’an so then people will love the Qur’an. Allah is Al-Aleem which means Al-Knowing. We should also seek Ilm - knowledge. We should spend time during the day learning about Allah, the angels, the prophets and about the hereafter. So the message is that we should try to incorporate some of the noble qualities of Allah in our daily lives.

The nature of this life is that no one is perfect, we all make mistakes. Due to our imperfections and shortcomings, we constantly ask Allah to forgive us. The quality that I would like to focus on today revolves around forgiveness and more so forgiving others. It is a fact of life that people will, sooner or later, hurt us. People do bad things to each other, intentionally or unintentionally, and this results in people being upset. I am sure everyone has been disturbed and troubled. Alhamdulillah, Allah and His Messenger (ﷺ) have given us guidance on how to deal with such situations.

Allah says,

> خُذِ الْعَفْوَ وَأْمُرْ بِالْعُرْفِ وَأَعْرِضْ عَنِ الْجَاهِلِينَ

“Show forgiveness, enjoin what is good, and turn away from the ignorant”. [7:199]

The Prophet (ﷺ) said, “No one forgives except that Allah increases his honour”. [Muslim]

So from these two Hadith we learn that if you forgive, no matter what people do to you, then Allah will show forgiveness to you. In fact, Allah will raise your honour. Sooner or later, people will really respect you and will think highly of you. There may be some people who think that if a person forgives others then they are weak. But this is not the case, forgiving others means that you are strong. We must bear in mind that Allah will deal accordingly with the wrong doers. No one will get away by doing wrong to people. But if you forgive people then you will get a lot of forgiveness in return.

Second khutbah (English):

If we analyse the life of the best human being, our Prophet (ﷺ), then we will see numerous occasions where he forgave people. The Prophet (ﷺ) went through a lot of hardship and pain. People were very disrespectful to him; called him with inappropriate names, he was forced out of his hometown and people physically assaulted him. How did the Prophet (ﷺ) deal with the worst day of his life? According to the Hadith reported by Aisha, the worst day is the day when the people of Taif rejected the message. What did they do? On top of rejecting the message, they pelted the Prophet (ﷺ) with stones. They threw stones at the Prophet (ﷺ) until he bled from top to bottom and they chased him out. The Prophet (ﷺ) was so upset, not because he was physically tortured but because he thought he didn’t convey the message properly. The angels wanted to crush the people of Taif but the Prophet (ﷺ) forgave them. The Prophet (ﷺ) did not want revenge or curse the people like most of us would do, rather, he was patient and calm in that very difficult situation and in fact made Dua for the people of Taif.

In another Hadith, a man was guaranteed Jannah simply because he would genuinely forgive people who he would go to sleep. There was nothing special about this man; he did not pray extra, he did not fast extra, all he did was forgive people and that earned him Paradise. So if anyone here finds it very difficult to forgive others, simply remind yourself of what the Prophet (ﷺ) experienced in Taif and how he forgave them and made Dua for their guidance. And remember how a man was guaranteed Paradise due to forgiving people every night.

There are various other wisdoms behind forgiving people. Psychologists say that it is one of the best ways to release your anger, discomfort and painful feelings. Doctors have linked improved mental health, less anxiety, stress with forgiveness, Moreover, there will be reduced cases of hostility and your relationship with your fellow human beings will improve.

To conclude, Ghaffar is one of the attributes of Allah that we should incorporate in our lives. Our Prophet (ﷺ) would forgive people, regardless of the physical and mental torture he went through. The benefits are huge in this world and in the hereafter for those who forgive.

I ask Allah to forgive us and to give us the Tawfeeq to forgive others.

#### Pack II / Khutbah 7 — Deeds – The Good and The Bad

First khutbah (English):

Allah gives people the ability to do lots of good deeds. Some good deeds are hard to do and some are easy to do. Some of the easy good deeds are very rewarding whereas others might not be. It would be wise to do lots of easy good deeds that are very rewarding. One of the easiest and highly rewarding good deeds one can do is to guide someone to a good action. The Prophet (ﷺ) said, "Whoever guides someone to a good action will be rewarded equivalent to him who practices that good action". [Muslim]

If you guide someone to do a good action then you will get the reward of the person who does it as well. For example, if you encourage someone to pray Dhur and he prays, then you get the reward of him praying Dhur. You get the reward of praying two Dhur; one from your own prayer and one because your friend prayed. What is amazing is that if you tell someone to pray and that person tells someone else to pray, then you get the reward of both praying and it continues. Imagine if you tell multiple people to come and pray Jummah then you will get the reward of them doing so.

Another example would be if you encourage someone to give Salaam, then every time he gives Salaam, and let us say he gives Salaam for the next 40 or 50 years, then you will get the reward of him giving Salaam for 40 to 50 years. Now, who would want to miss mountains of good deeds, especially when it is very easy to do?

Furthermore, if you share a reminder on Whatsapp, Instagram, Snapchat or any other social media app, and the reminder inspires others to worship Allah, then you will also get a share of the huge amount of reward that springs out from the beneficial reminder. Imagine 20 people sharing something good that you upload, actually, forget about sharing, just them viewing your status will make you earn good deeds. But if they change then you will get mountains of good deeds.

After all my dear respected brothers and sisters, we will all die one day and we will all stand before Allah and present our deeds. Who would want to present very little good deeds to Allah? No one. But rather we should want to present huge amounts of good deeds; small deeds, big deeds, deeds done in the public and deeds done in private. Good deeds in the form of charity, posts from social media, obeying parents, smiling at others and doing good on to others.

Second khutbah (English):

Good deeds and bad deeds will be weighed on the day of Judgement. Our objective in this life is to accumulate as many good deeds as possible and to avoid and minimise as much sins as much as possible. This is what will allow us to pass the test, earn Allah’s Mercy and avoid His Anger. This is what will be our ticket to success in this life and Jannah in the next.

Allah tells us on multiple occasions in the Qur’an, that it is those who consistently do good who will earn Jannah and be successful.

Allah says,

> إِنَّ ٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ وَأَخۡبَتُوٓاْ إِلَىٰ رَبِّهِمۡ أُوْلَٰٓئِكَ أَصۡحَٰبُ ٱلۡجَنَّةِۖ هُمۡ فِيهَا خَٰلِدُونَ

“Surely (as to) those who believe and do good and humble themselves to their Lord, these are the dwellers of the Paradise, in it they will abide”. [11:23]

Just like you get rewarded for spreading good, you also get a copy of a sin every time someone does something bad as a result of you. If you direct someone to do something wrong, you will also get a share of the sin. The Prophet (ﷺ) said, "No soul is wrongfully killed except that some of the burden falls upon the son of Adam, for he was the first to establish the practice of murder". [Bukhari]

Imagine that, every time someone murders someone, Qabil will also get a copy of the sin, even though he is dead. You might say why would Qabil get a copy of the sin. It is because he started this evil and others copied him. In our case, if you give someone a cigarette then you will get the sin of him smoking. If you give someone a link to something Haram or if you tell them to go to place where they would do Haram, then you will get a lot of sins, even if you do not do the Haram thing yourself. What is even more frightening is that if you do something Haram, and that Haram spreads on social media or it spreads from people to people, and this continues for years on end, then you will get all those sins committed by all those people.

To conclude, we should try to do deeds that are very easy and simultaneously very rewarding. If we do something good and others copy us, then we will get the reward of everyone doing that good deed. At the same time, if we do something bad and others copy us, then we will also get a copy of all the sins.

I ask Allah to give us the Tawfeeq to do good deeds and to make us role models for others. I also ask Allah to forgive us and protect us from being a bad influence on others.

#### Pack II / Khutbah 8 — Bankruptcy - Free Deeds

First khutbah (English):

Bankruptcy is a reality that many of us fear and try to avoid. No one wants to live a life of poverty and not be able to afford the basics, such as food and shelter. This is why everyone strives to live a comfortable and stable life.

The Prophet (ﷺ) wanted to teach the companions about the true concept of bankruptcy. He (ﷺ) said, “Do you know who is the one who is bankrupt?” They said, “Among us, the one who is bankrupt is the one who has no Dirhams and no goods” He said, “Rather the one who is bankrupt amongst my Ummah is the one who will come on the Day of Resurrection with prayer, fasting and Zakaah, but he will come having; insulted someone, slandered someone, consumed the wealth of people (stolen things), shed the blood of people and beaten people (bullying, fights), all of whom will be given some of his Hasanaat (good deeds). And if his Hasanaat run out before the scores have been settled, some of their sins will be taken and thrown onto him, then he will be thrown into the Hell Fire”. [Muslim]

This Hadith teaches us many things. One of the most important messages is that if you do anything bad, you will have to pay that person back on the Day of Judgement. How? By giving your hard-earned good deeds to them. The currency in the hereafter is good deeds, Hasanaat. Imagine all the hardship you went through to attend Jumu’ah, you did Wudu and got some good deeds, you walked to the place of Jumua’h and you got some good deeds, you sat down on the floor and got some good deeds, you listened to the Khutbah and you got good deeds, you prayed two Raka’ah and you earned good deeds. You sacrificed your lunch and therefore got a lot of good deeds. Imagine losing all that reward just by slandering or backbiting someone. Imagine losing a lot of these good deeds just because you physically or verbally intimidated someone. Honestly speaking, no one wants to give their hard-earned good deeds to others for free. It will be an utter loss. Looking carefully at the Hadith, we learn that the person in the Hadith would have come with many good deeds and so many acts of worship. Where he fell short was not these acts of worship, but with regards to interacting with other people. The Hadith specifically talks against insulting others, slandering, stealing and physical violence such as beating and hitting someone.

You might ask the question, would Allah not forgive our sins, including the ones where we wronged others. The answer to that question is that Allah forgives sins that are between you and Allah. But, when you wrong other people, only they can forgive you. So my dear brothers and sisters, let us not trap ourselves by doing bad to others. At the end of the day, we will have to pay them back and what a sad scene it would be to see your own good deeds decrease right in front of you on the Day of Judgement, a day in which even a single good deed will make a difference. If you have done something wrong, you can ask them to forgive you, return what you have stolen from them, and make sincere Dua for them. If you spoke bad about people on social media, then make good comments about them to override the bad.

Second khutbah (English):

People will be shown the good and bad deeds on the day of Judgement. Allah says,

> (8) وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ (7) فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ

“So whoever does an atom's weight of good will see it (7). And whoever does an atom's weight of evil will see it (8)”. [99:7-8]

We are living in a world whereby we do mistakes on a daily basis. No doubt that we should constantly ask Allah to forgive us. Just like we want Allah to forgive us, we should also forgive others, especially those who have wronged us by insulting, slandering, stealing or physically hitting us. Forgiving others is so rewarding that it can actually be a means for you to enter paradise.

One day the Prophet (ﷺ) was sitting with his companions and suddenly he said, “A man will come through this door and he will be a person of paradise.” A man from the Ansar came through the door. The next day the Prophet (ﷺ) repeated the same words, and the same man came in. The third day the Prophet (ﷺ) repeated the same again, and the same man came in. A young Sahabah called Abdullah Ibn Amr followed the man and stayed with him for three days. Abdullah did not find anything extraordinary about this man. So, Abdullah asked the man, “why did the Prophet speak highly of you?” The man said, “I am as you have seen (meaning I am a normal person doing normal deeds).” When Abdullah was about to leave, the man said, “I forgive everyone before I go to sleep”. [Musnad Ahmed]

So here is a man that does normal deeds, but he is guaranteed Paradise because he forgives people on a daily basis. I am sure that this man had people insult him, physically abuse him, steal from him and harm him in other ways, but he still had the courage to forgive everyone.

To conclude, we must be careful with our individual acts of worship and we should be careful with how we deal with others. Moreover, we should forgive those who wrong us in order to attain more of the forgiveness of Allah. Lastly, continuously and genuinely forgiving others is one of the ways to enter Paradise.

I ask Allah to give us the Tawfeeq to stay away from bankruptcy in this Dunya and in the Akhira.

#### Pack II / Khutbah 9 — Creation of Allah – The Day and The Night

First khutbah (English):

There are many creations of Allah and each of them should remind us of Allah. The trees, the sun, the moon, the stones that make up the mountains, the very earth we live in, wind and rain are all signs of Allah. We should remember Allah just by looking at His creations and consequently increase our worship to Him. There is a creation of Allah which most of us overlook, what is it? It is the day and night.

The alternation of the day and night is something that Allah has told us to ponder upon. Allah instructed us by saying,

> إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِّأُولِي الْأَلْبَابِ

"Verily! In the creation of the heavens and the Earth, and in the alternation of night and day, there are indeed signs for men of understanding”. [3:190]

To encourage contemplation, have you realised that the prayers that we pray during the early hours of the day and during the night are recited aloud? The imam recites loudly during the Fajr prayer, a prayer for the early hours of the day, and recites loudly during Esha, a prayer for the night. According to the scholars, one of the many wisdoms behind this is to ponder and contemplate more about the creations of. As believers, with the break of dawn and with sunset, we should spend some time reflecting on our lives. We should check if we have prayed the morning prayers and the night prayers. We should try to resolve any problems we have with our friends or family. We should ask Allah to forgive our sins committed during the day and night.

The Ahadith about the first prayer of the day and the last prayer of the night are amazing. The Prophet (ﷺ) said, “Two Rakahs of prayer before the Fajr (Fardh) prayer are better than the world and whatever is in it”. [Muslim]

Here the Prophet (ﷺ) is telling us that just the Sunnah prayer itself, meaning the two Rakah of Fajr Sunnah, is better than anything and everything the world can offer. It is so rewarding that nothing in this world can match it. What about the night? Is there an action that we can do during the night that will help us gain the love of Allah? Is there a simple action that will keep us in the good books of Allah? The Prophet (ﷺ) said: “Allah is single (Witr) and loves what is single, so observe the Witr, oh you who follow the Qur’an”. [Abu Dawud]

Is it not amazing that just by praying Witr at night, it will help us earn the love of Allah? Imagine this; we start our day by achieving better than what the world has to offer and we end our day with the love of Allah. You cannot be any more successful than that. Really! You start your day with a positive attitude and a lot of motivation because you have just achieved something big. Then you end your day by asking Allah to accept your efforts and to love you. And we all know that if Allah loves you, you are only going to one place in the hereafter, Jannah - a place where life gets better by the second.

Second khutbah (English):

The day and the night and the morning and evening are important for the people who are alive as well as for the people who have passed away. The Messenger of Allah (ﷺ) said: “When one of you dies, he will be shown his place in Jannah or Jahannam, in the morning and evening. If he is one of the people of Paradise, then he is one of the people of Paradise, and if he is one of the people of Hell, then he is one of the people of Hell. It will be said to him, this is your place until Allah resurrects you to go to it on the Day of Resurrection”. [Bukhari and Muslim]

The people buried below us or in the cemetery are viewing Jannah or Jahannam twice a day my brother and sisters. Twice a day. It is too late for them to change their situation as they cannot perform good deeds. What would you like to view twice a day in your grave? Would you like to see the Hellfire and consequently be frightened and terrified for hundreds of years? Or do you want to have a blissful life in the grave whereby you view your perfect eternal destination, Jannah?

If you want to enjoy the view of Paradise whilst in your grave then at least start your day with Fajr. Try your best to wake up early for Fajr, pray and then go to sleep if you want. Let us do some good during the day and do some good during the night so then we can live in peace in our graves. We all sleep during the night. Some of us, we sleep for 6 hours, most sleep for 7-8 hours. Imagine being rewarded for all those hours during the night. Do you want to get the reward for sleeping for 8 hours? We know it is very hard to do something good for even one hour but imagine being rewarded every night for sleeping for 8 hours. The task is very simple. Before you go to sleep, make the intention to sleep in order to gain energy to pray Fajr. This simple intention will help you earn mountains of good deeds. One may ask as to how to earn a lot of reward during the day. The answer is simple as well. When you wake up in the morning, make the intention to do everything for the sake of Allah. Make the intention to do your studies for the sake of Allah. By getting good grades and skills, you can get a good job and use it to help the community. Use it to help the Muslims portray a good image to the world. Get a good job, give charity, and help people build lives. If you make good intentions in the morning and throughout the day, then you get the reward of every single second that makes up the day. Throughout the day, spend just 4-5 minutes reciting Qur’an and reading its meaning. Spend few minutes every week reading about the life of the Prophet.

I ask Allah to give us the Tawfeeq to worship Him during the day and during the night and May Allah make us amongst those whom He loves.

#### Pack II / Khutbah 10 — Creation of Allah – The Trees

First khutbah (English):

We are surrounded by the various creations of Allah. You have the human beings, animals, trees, stones, the very earth we live in, the sun, the moon, wind, rain, and the list go on and on. The amazing thing is that all of the creations of Allah worship and glorify Allah. Allah said,

> تُسَبِّحُ لَهُ السَّمَاوَاتُ السَّبْعُ وَالْأَرْضُ وَمَن فِيهِنَّ ۚ وَإِن مِّن شَيْءٍ إِلَّا يُسَبِّحُ بِحَمْدِهِ وَلَٰكِن لَّا تَفْقَهُونَ تَسْبِيحَهُمْ ۗ إِنَّهُ كَانَ حَلِيمًا غَفُورًا

“The seven heavens and the Earth, and every being therein, celebrate His glory, and there is not a single thing but glorifies Him with His Praise, but you do not understand their glorification; verily He is Forbearing, Forgiving”. [17: 44]

Allah is telling us that everything does Tasbeeh of Allah, glorifies Allah. How? In whatever manner it befits them. But for sure they glorify and worship Allah, and it is this fact that should act as a strong reminder for us to worship Allah. Next time we walk down the road, look up at the sky and tell yourself that everything in the sky is worshipping Allah. Next time you are in a garden, look around and see the trees and tell yourself that trees and the leaves on them are all worshipping Allah. Next time you are free spending time outside, look at the birds and tell yourself that even the birds are praising Allah. During the day look at the sun and during the night look at the moon and tell yourself that these huge creations of Allah also worship Allah. Next time the wind or rain comes your way, remind yourself that even those things worship Allah. So if everything is worshipping Allah then why can you and I not worship the Creator of all things? Are we too busy to worship Allah even though He gave us the Sun which brightens the day, the moon which beautifies the night, the wind which helps us cool down during a hot day? Or are we too busy playing games and even revising and we just don’t care about the fact that everything is worshipping Allah apart from you?

Through these signs, Allah helps us to remember Him and reminds us of the reward that is awaiting us in Jannah. What do I mean? The beautiful trees should remind us of Jannah. The Prophet (ﷺ) said, “The trees in Paradise are so big and huge that a rider could travel in its shade for 100 years”. [Muslim]

Imagine how big the trees will be in Paradise. If you go to a nearby tree and you try to move from one side to another, it will take you a maximum of five seconds. But the trees (as well as other things) in Jannah are huge. The Prophet (ﷺ) went further and said that the trees have branches that are made from gold. There are some trees that have silver branches. Then there are trees that will bear different types of fruits. In the Tafsir it says that the believer will be reclining on their throne and the trees will bend themselves so then the fruits will directly enter your mouth. You would not even have to bend and reach for it, it will automatically enter your mouth.

In another Hadith, the Prophet (ﷺ) said, “When I went to Sidratul Muntaha, I saw trees whose leaves were like the ears of elephants”. [Bukhari]

Subhana’Allah, can you imagine trees made of gold, huge in structure, bearing fruits, which will move towards you by themselves and different shaped leaves that you have never seen before. Just from these descriptions of just the trees of Paradise should mesmerise you and me and encourage us to worship Allah.

When Prophet Ibrahim met our Prophet (ﷺ), he gave an advice, and this is the practical advice that I would like to share today. The Prophet Ibrahim said, “Oh Muhammad, give my Salaam to your nation and tell them that Paradise is beautiful. Its water is pure, its soil is clean, there are vast huge pieces of land, and the trees of Jannah are ‘Subhanallahi walhamdulillah, wala ilaha illala, wallahu akbar”. [Tirmidhi]

So Prophet Ibrahim is advising us to decorate our paradise by doing good deeds, more specifically decorating our Paradise with trees by saying ‘Subhanallah walhamdulillah, wala ilaha illala, wallahu akbar’. Whenever we are free, just say ‘Subhanallah walhamdulillah, wala ilaha illala, wallahu akbar’ and you’ll be decorating your paradise.

Second khutbah (English):

Allah also uses trees as a reminder of the Hell fire. We all know the famous story of how our Prophet Adam was tricked by Iblis, the cursed one. Allah said in the Qur’an,

> فَوَسْوَسَ إِلَيْهِ الشَّيْطَانُ قَالَ يَا آدَمُ هَلْ أَدُلُّكَ عَلَىٰ شَجَرَةِ الْخُلْدِ وَمُلْكٍ لَّا يَبْلَ

“Then Satan whispered to him; he said, "O Adam, shall I direct you to the tree of eternity and possession that will not decline?". [20:120]

So Iblis deceived Prophet Adam by saying that if he eats from a particular tree then he will live forever. We all know what happened, the fact that Iblis lied and deceived our father Adam. Unfortunately, the same thing happens to us as well. Shaytan deceives us by making us think that the religion is very burdensome, that praying will take so much time, that having illicit relationship is actually ok. That it is only one puff and you do not have to take the second. “Do not worry, it is fine to pray later. You don’t have to fast. Don’t worry, you’re too young to do good things, do all the bad things now and repent later”. All of these deceiving sentences echoes in our head. But the truth is, all of these misleading promises are false, none of them are true. When Adam was tricked into eating from the tree, did Prophet Adam have an eternal life? Did Prophet Adam have an everlasting power? No. Similarly, all those promises shaytan make to us are all false. So next time we walk pass a tree, remember the fact that shaytan lies and is continuously trying to make us commit sins so then we can enter Hell-fire with him.

In another passage, Allah describes the effects of eating from Zaqqoom, which is a tree of Jahannam. Allah says,

> (45) كَالْمُهْلِ يَغْلِي فِي الْبُطُونِ  (44) طَعَامُ الْأَثِيمِ  (43) إِنَّ شَجَرَتَ الزَّقُّومِ

“Indeed, the tree of Zaqqum (43). Is food for the sinful (44). Like murky oil, it boils within bellies (45)”. [44:43-45]

Here Allah is saying that the food from the trees of Hellfire will boil the bellies of those who eat from it.

The Prophet (ﷺ) said, “If one drop of Zaqqoom falls on the earth, it will corrupt the world and everything in it”. [Tirmidhi]

This hadith just shows how toxic this tree is. Just the one drop of Zaqqoom is enough to destroy the world. Then what would happen to those who will be forced to eat from it?

So my brothers and sisters, next time we pass a tree, let it remind us of the good that is waiting for us and the punishment that is waiting for the sinners. As we said at the beginning, everything Allah has created worships Allah. We just need to be part of that majority that worships and glorifies Allah. Yes, life is a struggle. It can be hard to pray, use good language, not ingest toxic substances, help others and so on. You will struggle here and there, for a few years only, but once we are in Jannah, once we enter Paradise, all those days of struggle will be forgotten and life in Paradise will all be about chilling and having fun.

May Allah give us the Tawfeeq to worship Him and may our hearts, minds, eyes and everything else help us to appreciate the signs of Allah.

### Pack III — Faith & The Qur’an

#### Pack III / Khutbah 1 — Islam and Evolution

First khutbah (English):

Allah has selected Islam as a way of life. Allah says in the Qur’an,

> الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي وَرَضِيتُ لَكُمُ الْإِسْلَامَ دِينًا

“This day I have perfected for you your religion and completed My favour upon you and have made Islam as your religion” (5:3).

Everything we need to know and do to please Allah can be found in the Qur’an and in the life of the Prophet (ﷺ). For example, Allah ordered us to pray and therefore we pray; Allah ordered us to give charity and so we give charity. Allah also ordered us to stay away from Haraam (forbidden) food and therefore we stay away from things like pork and alcohol. There are a certain number of beliefs that we must have in order to be a Muslim and it is really important we study these beliefs. Unfortunately, some people try to use science, history, philosophy and other methods to confuse our pristine belief system.

One of the theories that has been used to confuse Muslims is that of Darwin’s theory of evolution. Part of the theory states that human beings evolved from other species. There are two ways to tackle the theory of Darwinian evolution or human evolution; one from a scientific perspective while the other is from a scriptural perspective. I will begin by tackling it from a scriptural perspective.

Allah tells us in the Qur’an what to believe regarding our creation. The Qur’an clearly states that Adam was created by Allah, by His own hands. He said,

> إِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي خَالِقٌ بَشَرًا مِّن طِينٍ

“Your Lord said to the angels, ‘I am going to create a human being out of clay” (38:71). And,

> قَالَ يَا إِبْلِيسُ مَا مَنَعَكَ أَن تَسْجُدَ لِمَا خَلَقْتُ بِيَدَيَّ

[Allah] said, "O Iblees, what prevented you from prostrating to that which I created with My hands?... (38:75).

So here Allah is saying that Adam was created directly by Him and therefore Adam did not evolve from another species. There are plenty of Hadith that support the idea of Adam being created by Allah. The Messenger of Allah (ﷺ) said that on the day of Judgement, mankind would go from Prophet to Prophet requesting for intercession (for help); they would go to Adam and say, “You are the father of mankind, Allah created you with His hand, had the angels prostrate to you, and taught you the names of all things.” [Bukhari and Muslim]

Another scriptural argument against human evolution is that Adam was created in the heavens and he spent some time there before coming down to Earth. This goes against human evolution because the whole of human evolution takes place on earth. We all know the famous story when Adam and Eve ate from a tree and consequently were removed from Paradise and placed on the Earth. Allah says,

> قُلْنَا اهْبِطُوا مِنْهَا جَمِيعًا

We said: “Get down all of you from this place (the Paradise) ……” (2:38).

Furthermore, Adam was in Paradise when Allah asked the Angels to prostrate to Him. So, if we were to believe in human evolution and believe that Allah created Adam upon the Earth via the process of evolution then is it possible for all of these events to occur in Paradise. Are we to not believe in the verses that state that Angels prostrated to Adam and Adam ate from the forbidden tree? The Muslims believe that Adam was in Paradise and few events took place there before his coming down on to Earth.

A fourth scriptural argument against evolution is that Adam did not go through the normal standard stages of life. He was created in his man-form and therefore did not go through birth, infancy, youth and then adulthood, as evolution suggests. The Prophet (ﷺ) said: “Allah created Adam upon His form, his height being sixty cubits …” [Bukhari and Muslim].

So, Allah created Adam as a complete and well-proportioned man from the moment his soul was blown into him. Again, this Hadith clearly contradicts the theory of evolution which assumes the stages of life, beginning from birth and all the way to adulthood.

There are many more scriptural arguments against evolution, but time does not permit to go through all of them. The Qur’an and Sunnah indicate that Allah created Adam from nothing, without Adam going through the evolution process. Just like we believe and obey all the commandments of Allah, believing in the creation of Adam is also vital. We should make a firm intention to learn and even memorise scriptural arguments against the many confusing beliefs out there.

Second khutbah (English):

There are various scientific arguments against human evolution. Before I share some with you, it is vital that I emphasise that when you are confused about any Islamic beliefs, ask a reliable trustworthy learned Muslim. Allah commands us to do this by saying,

> فَاسْأَلُوا أَهْلَ الذِّكْرِ إِن كُنتُمْ لَا تَعْلَمُونَ

“So ask the people of the knowledge if you do not know.” (16:43)

Just to clarify from the start, the only problem Muslims have with evolution is the part that states that humans developed from another species, which is also known as human evolution. As Muslims we do not have a problem with believing in dinosaurs, Neanderthals and with concepts like speciation.

The truth of the matter is that even the scientists cannot scientifically prove the link between species, but rather they assume that there is a link and they use faith to connect the dots. No one can prove that one whole species came from another species. For example, there is no proof to show a direct link between a fish species and a terrestrial land species. Some scientists tried to use fossil records to show that one species came from another. But, on the contrary, the fossil records showed fully formed species without having anything in between them and their parent group. So, it is like saying that the sea species and land species existed simultaneously and one did not evolve from the other.

Some people argue for evolution by saying that species that look similar are closely related to each other. For example, some say that dolphins and sharks have a similar body shape and therefore must be closely related. Unfortunately for them, evidence shows that dolphins and sharks are not closely related, and they did not inherit their similar body shapes from a common ancestor. Rather, dolphins and sharks have similar features because they both have similar environments. This theory is known as convergent evolution. So, according to convergent evolution, there are species with similar features that do not have common ancestors. Therefore, the whole argument that if species look similar then they must have a common ancestor has been debunked with convergent evolution.

According to the evolutionary biologists, evolution has been going on for billions of years. If we go back in time to the first single-celled micro-organism, one can ask the question, how did the first single-celled micro-organism come about? Some will answer by saying that the accumulation of random events gave rise to the first single-celled micro-organism, the origin of life. The simple answer to this claim is that it is impossible for unguided and random chemical processes to give rise to the origin of a genetic code. Moreover, random mutations simply cannot produce the genetic information needed to build such complex structures. So, the belief that randomness leads to advantageous outcomes is false.

Due to lack of time, I will summarise some of the other arguments against evolution:

Natural selection does not construct genes but rather it conserves genes. This means that this process does not lead to new species.

It is impossible for random association of amino acids to produce functional proteins.

Neo-Darwinism struggles to explain the bio-geographical distribution of many species.

Evolutionary trees from different genes have conflicting branching patterns.

In conclusion, there are various scriptural and scientific arguments against evolution. Just because some people in society are pushing its theory does not mean we have to believe in it. In fact, we should do more research and know about the topic and put forward our arguments. When you yourself are confused about something, find someone who has studied the religion and ask. It is your religion and so you should know as much as it takes to remove doubt from your head and satisfy your heart.

May Allah give us the Tawfeeq to learn our religion and use it to remove all sorts of doubts. May Allah keep our beliefs pure and let us live and die as a Muslim. Ameen.

#### Pack III / Khutbah 2 — Islam and Liberalism

First khutbah (English):

We need to remind ourselves and each other that we are the slaves of Allah. Allah is our Creator and we are His slaves. Allah created you, me, our parents, and we all know that one day we will return to Allah. As slaves of Allah we submit our lives to His Will, and we live the way He wants us to live.

Allah says in the Qur’an,

> إِنَّ الدِّينَ عِندَ اللَّـهِ الْإِسْلَامُ

“Indeed the only religion or way of life accepted by Allah is Islam” (3:19).

In this verse Allah is clearly stating that we should live our lives according to Al-Islam, the religion which came from Allah, taught and practiced by the best of creations, the Prophet Muhammad (ﷺ). If we decide to follow other religions or other ways of living, then it will not be accepted by Allah.

Throughout history, we can see that people have promoted different ways of living, different ideologies and different ‘isms’ of life; there’s socialism, atheism, Marxism, secularism, communism and capitalism. We should study these modes of life in order to save ourselves from them. There is one ‘ism’ that is affecting millions of people today and that is liberalism. So, what is liberalism? Liberalism states that one has the right to do anything as long as it does not harm others. Therefore, you can practice anything as long as you are not having a negative impact on others. On face value it seems like this ideology is good. But when put in to practice, you will see the flaws. For example, part of the definition of liberalism is that you do not harm others. Who defines what is harmful or not? The word ‘harm’ differs from person to person and country to country. According to liberalism, it is okay for a man to drink, smoke, have illicit sexual relationships and make money at the expense of the poor people. For liberals, drinking alcohol is not bad. Smoking, even though it damages a person’s internal systems, is not bad. If someone sleeps with another person’s husband or wife, according to liberalism, if both have given consent, then it is not a bad thing. Does this really sound like a good way to live life? Does liberalism sound like a good system for one to live their life by? Does liberalism sound like it is a good system for a whole community and country to live by?

If one asks, does Islam promote liberalism? Does Islam allow people to do whatever they want, if supposedly no one is harmed? The reply given is that Allah told us how to live our lives and that is Islam. As we said before, Allah says in the Qur’an,

> إِنَّ الدِّينَ عِندَ اللَّـهِ الْإِسْلَامُ

“Indeed the only religion or way of life accepted by Allah is Islam” (3:19).

Islam has rules and regulations. So, when it comes to prayer, we are commanded to pray five times a day. Now if one misses prayer out of laziness or something else, then we hope he overcomes his laziness and starts praying five times a day. However, if one starts to apply a liberal mindset and tries to change Islam by saying you don’t have to pray five times a day, just one is enough, we tell this person that this is not acceptable to Allah and we Muslims will not accept it as well. This is not part of Islam. You are not allowed to change five daily prayers to one prayer. You do not have the right to change the religion; the religion belongs to Allah. Similarly, if someone says, ‘alcohol is allowed in Islam, you are not harming anyone by having it’, then we tell this person that he has got it wrong and that alcohol is forbidden in Islam. Allah says,

> يَسْأَلُونَكَ عَنِ الْخَمْرِ وَالْمَيْسِرِ ۖ قُلْ فِيهِمَا إِثْمٌ كَبِيرٌ وَمَنَافِعُ لِلنَّاسِ وَإِثْمُهُمَا أَكْبَرُ مِن نَّفْعِهِمَا ۗ

“They ask you about wine and gambling. Say, ‘In them is great sin and [yet, some] benefit for people. But their sin is greater than their benefit’" (2:219).

One cannot have a liberal attitude and start changing the religion. As we said at the beginning, we are all slaves of Allah and we submit to His will and follow the religion which He sent down. We say it every day in our prayer,

> “إِيَّاكَ نَعْبُدُ وإِيَّاكَ نَسْتَعِين”

“We worship You alone and we ask You for help.”

So, let us carry on worshiping Allah the way He wants us to. If Allah tells us to do something, we obey Him. If Allah tells us to stay away from something, we also obey Him and stay away.

Second khutbah (English):

Allah has revealed everything we need to know. He says,

> مَّا فَرَّطْنَا فِي الْكِتَابِ مِن شَيْءٍ

“We have neglected nothing in the Book” (6:38).

Everything we need to know we can find it in the Qur’an and in the Sunnah of the Prophet (ﷺ). If you study the religion, then you will know that the religion is perfect and that it has been made easy for us. We don’t need a liberal approach and change Islam. When it comes to food, everything is halal apart from a few things such as alcohol, dead meat and pig. When it comes to transactions, everything is allowed apart from a few things such as transactions that involve interest, cheating, lying and deceit. So really the religion has been made very easy for us.

As we said at the beginning of the Khutbah, Allah is our Creator. The Creator knows better about His creation than the creation itself. So, for example, maybe you do, or you don’t, know the harm of drinking alcohol. But Allah knows that it is overall very harmful and therefore He has made it Haraam. Similarly, maybe you know, or you don’t know of the benefits of fasting. But Allah knows and therefore he made it a must for us to fast in the month of Ramadan. Allah made certain things Haraam because it is truly bad for us and he made certain things Halal because it is certainly good for us. So, we do not need to have a liberal mindset and change the religion of Allah and do whatever we feel like.

Moving forward, what shall we do? We should study our religion. Learn, recite and memorise the Qur’an. Learn and study the life of the Prophet (ﷺ). As you grow up you can attend other structured courses and learn more about the beauty of your religion. With the knowledge you can tackle all these “isms” and different modes of life.

May Allah give us the Tawfeeq to live and abide by His religion and not get distracted by all the ‘isms’. May Allah protect our youth from confusion. Ameen.

#### Pack III / Khutbah 3 — Misconceptions about Qur’anic Laws

First khutbah (English):

Allah has sent this religion and has given us laws that we should abide by. Allah says,

> الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي وَرَضِيتُ لَكُمُ الْإِسْلَامَ دِينًا

“This day I have perfected for you your religion and completed My favour upon you and have made Islam as your religion” (5:3).

It is part of our belief that all the laws Allah has prescribed are beneficial to us. Allah created all of us and He knows what is good and bad for us. The things Allah told us to do are good for us and the things Allah told us to stay away from are actually bad for us. It is okay for one to ask about the wisdom behind each law, but as a starting point, we must acknowledge the fact that we obey Allah regardless of whether or not we understand the reasons and wisdom behind each law. Moreover, it is also important to understand that we actually cannot fully understand the reasons for every single law of Islam due to our own limitations. For example, Allah has ordered us to give an obligatory charity called Zakah. One has to calculate 2.5% of his overall income held for one year and give it to the poor and needy. We might understand the wisdom behind giving charity, which is to purify our wealth and lift people from poverty, but we generally might not understand why it is 2.5%. We just obey Allah and give 2.5%. Maybe in the future someone will do some sort of calculation and realise that if everyone gives 2.5% of their income to charity then it can reduce global poverty. Maybe in the future someone will use a complicated software and help us understand the benefit of 2.5%. But the main point is that, whether we understand or not why we give 2.5%, we just obey Allah and give it. One can give more examples but the main point being made is that we might not fully understand the wisdom behind everything, but we should obey Allah regardless. It is also important to stress the fact that you have to look at all the laws of Islam for things to make sense. You cannot analyse one Islamic law on its own and expect to gain the full picture, but rather you have to see how everything is connected to one other.

The first law I would like to discuss revolves around the topic of men and women. People accuse Islam as being barbaric and as a religion which degrades women; however, this is not true. In Islam, men and women are equal in the sight of Allah. The one who obeys and fears Allah more is the better one. Allah says,

> إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ ۚ إِنَّ اللَّهَ عَلِيمٌ خَبِيرٌ

“Verily, the most honourable of you in the Sight of Allah is the believer who has Taqwa (piety and righteousness)” [49:13].

Does the verse say men and women are equal physically? No. Does the verse say men and women are equal mentally? No. Does the verse say men and women have equal roles in every single section of the society? No. Does the verse say that men and women are identical? Of course not. So, if Allah does not want men and women to be identical, then would it make sense for all of the Islamic laws to be the same for men and women? Or would it make sense to have some laws that are the same for both genders and some laws that are only for men and some that are only for women? So, just to be clear, there are some laws that are applied to all the Muslims, regardless of gender. For example, both Muslim men and women have to pray, have to give Zakah, should stay away from alcohol, should not steal or cheat others. However, there are some laws that are for specifically for men and then there are some laws specifically for women. For example, it is an obligation for the father to provide for his family. If the women works, then it is fine and optional but it is a must for the man of the house to provide. Another example would be that it is not allowed for a man to wear real gold and silk whereas it is totally fine for a woman to wear gold and silk.

Ali Ibn Abu Talib reported that the Prophet (ﷺ) took some silk in his right hand and some gold in his left, declaring, “These two are Haraam for the males among my followers” [Ahmad].

So as we can see, in Islam there are rules for both men and women and then there are some rules that are specifically for men and some specifically for women. But the closest of the two to Allah is the one who obeys Allah the most.

One of the most controversial laws is associated with inheritance. When someone dies, his or her property is distributed amongst family members. Allah says,

> لِلرِّجَالِ نَصِيۡبٌ مِّمَّا تَرَكَ الۡوَالِدٰنِ وَالۡاَقۡرَبُوۡنَ وَلِلنِّسَآءِ نَصِيۡبٌ مِّمَّا تَرَكَ الۡوَالِدٰنِ وَالۡاَقۡرَبُوۡنَ مِمَّا قَلَّ مِنۡهُ اَوۡ كَثُرَ نَصِيۡبًا مَّفۡرُوۡضًا

“Allah says, there is a share for men and a share for women from what is left by parents and those nearest related, whether, the property be small or large – a legal share” (4:7).

In Islam, a woman receives half of what a man receives. For example, if there was £100 inheritance, the son will receive £50 whereas the daughter will receive £25. From one  perspective, one might say that this law is not fair or just. The response to this would be that the amount the daughter takes belongs solely to her whereas the amount a man inherits has to be used for his family and he cannot use it solely for himself. For example, the full £25 goes to the daughter and she can spend it however she wishes. However, the £50 the son inherits, he has to use it to look after his mother and sister. So really, he cannot spend the £50 however he wishes, and he cannot spend it on himself. The money has to be spent looking after the mother and the sister, pay for the house, food and clothes. If I was to ask, would you rather take £25 and you can spend it on yourself or would you rather get £50 even though from that £50 you have will have to spend it on your mother and sister and for the household shopping, rent?  Which one would you choose? So, Allah gives a double amount to the man because he has put the responsibility on the man to look after the family, financially and in other ways.

Our conviction in the religion should increase when we realise the wisdom behind the laws of Allah. Is it not amazing how a book sent 1400 years ago can still be used in the 21st century and beyond? Is it not amazing how the Qur’an which was sent 1400 years ago has laws that can be practically applied and benefit humanity at large? Alhamdulillah that we have the religion of Islam.

Second khutbah (English):

Some people accuse Islam of being boring and they accuse the religion of forbidding everything that is fun. For example, some say Islam forbids alcohol and therefore Muslims cannot enjoy themselves. Muslims have to fast for one whole month and so their life is boring. Our response to this is that it is true that Islam forbids alcohol. Allah says,

> يَسْأَلُونَكَ عَنِ الْخَمْرِ وَالْمَيْسِرِ ۖ قُلْ فِيهِمَا إِثْمٌ كَبِيرٌ وَمَنَافِعُ لِلنَّاسِ وَإِثْمُهُمَا أَكْبَرُ مِن نَّفْعِهِمَا

“They ask you (O Muhammad) concerning alcoholic drink and gambling. Say: ‘In them is a great sin, and (some) benefits for men, but the sin of them is greater than their benefit’” [2:219].

Allah forbids alcohol because it leads to a lot of harm. For example, it leads to liver diseases, different types of cancer, high blood pressure, strokes and many other things. A drunk person tends to be abusive and can become violent. The government spends millions of pounds trying to help people suffering from alcohol-related cases. Alhamdulillah, Alhamdulillah, Alhamdulillah, Allah has kept us safe by forbidding the consumption of alcohol and telling us to stay far from it. We also say to those who accuse Islam of being boring that just because alcohol is not allowed, it does not mean Islam does not allow us to have fun. Allah has allowed all the types of drinks; it is just alcoholic drinks which are not allowed. So Masha’Allah, you can have your mocktails, and your tropical juices, fresh coconut water, and more. Even when it comes to food, every type of food is allowed apart from a few which contain pork and other animal derivatives. When it comes to food and drink, majority of it is Halal, so Islam is definitely not restrictive nor boring.

Regarding fasting. Yes, Muslims fast for one whole month. The benefit of fasting is huge and to be honest doctors tell people to fast due to the huge number of benefits it brings. Some of the benefits of fasting are as follows

It aids weight loss

Improves immune system

Helps fight cancer

Reduces inflammation which leads to various other diseases

Reduces blood pressure

Boosts brain function

Promotes secretion of certain hormones that make one feel good

Delays ageing and extend longevity

The benefits of fasting are many. So we say to those who laugh at Muslims regarding fasting, that fasting improves our lives and maybe you should try it out. As we said at the beginning, the things Allah made Haram are actually bad for us and the things Allah made Halal are actually good for us.

I will end the Khutbah by saying that some people will say a lot of bad things about Islam and our role should be to learn our religion and then explain it to others. If you do not know something, then ask someone who is learned. When you yourself are confused about something, find someone who studied the religion and ask. It is your religion and so you should know as much as it takes to remove doubt from your head and satisfy your heart. Find out the meanings, the reasons and the wisdom behind each and every part of our beautiful religion, Islam.

#### Pack III / Khutbah 4 — Muhammad – Proof of Prophethood

First khutbah (English):

The life of our Prophet Muhammad (ﷺ) is full of miracles. The more we study his life the more we discover how great of a human being he was. The more we read about the Prophet Muhammad (ﷺ) the more we realise that he truly is a Prophet and a Messenger of Allah. The more we speak about him, our love for him increases by many folds. However, some people do not like the Prophet Muhammad (ﷺ) and make up lies about him. They accuse him of not being a Prophet and say that he made up the Quran. So, in today’s Khutbah I will share some of the proofs that Muhammad (ﷺ) is actually a Prophet and a Messenger of Allah and I hope that we will in our own time read more about the life of the Prophet Muhammad (ﷺ).

The Prophet Muhammad (ﷺ) was a simple man who could not read or write. His parents died when he was very young, and therefore he grew up as an orphan. Even though he went through so much difficulty and was surrounded by bad people and bad practices, he perfected all the good characteristics. Did I say he just had good characteristics? No, I said he perfected all the good characteristics. For example, when it came to generosity, people around him would cheat and steal from each other whereas the Prophet Muhammad (ﷺ) would give a lot of charity. It was narrated by Ibn Abbas that “the Prophet was the most generous amongst the people, and he used to be more so in the month of Ramadan” (Bukhari). When it comes to kindness, even though people were harsh to others, the Prophet (ﷺ) was extremely kind. When it comes to bravery, he won almost every single battle even though his army was much smaller than the opposing army. So, the conclusion is that only a Prophet, who has been supported by Allah, can be surrounded by so much evil and yet master all the good characteristics. It is impossible for history to produce another man like the Prophet (ﷺ). You show me one man that went through all the challenges of life and achieve what the Prophet (ﷺ) achieved. So the first proof of prophethood is the actual characteristic and achievement of the Prophet.

The second proof that Muhammad (ﷺ) is a Prophet and Messenger of Allah is that he performed many physical miracles in front of the people. For example, 1400 years ago, when there were no planes or aircrafts, the Prophet (ﷺ) went from Makkah to Masjidul Aqsa and then from Masjidul Aqsa back to Makkah all in one night.

Allah says,

> سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى الَّذِي بَارَكْنَا حَوْلَهُ لِنُرِيَهُ مِنْ آيَاتِنَا

“Praise is He Who carried His servant by night from Masjidul Haram to Masjidul Aqsa whose surroundings we have blessed, to show him of Our signs”(17:1).

Just so you can understand, according to today’s map, it is like saying the Prophet (ﷺ) travelled from Saudi Arabia to Palestine and then back to Saudi Arabia all in one night. At that time, a journey to Masjidul Aqsa would take at least one month and one month to come back to Makkah. However, the Prophet Muhammad (ﷺ) did it in one night. When the people challenged the Prophet (ﷺ) to prove his claim of going to Masjidul Aqsa, the Prophet described the design of Masjidul Aqsa and he was found to be very accurate with the description. The people were amazed with the precise and accurate description. Only a Prophet with the permission of Allah can perform this physical miracle. Some of the people accepted Islam when they realised that this was in fact a miracle.

Another proof of the prophethood of Muhammad (ﷺ) is that the content of his message is similar to all the previous Prophets and Messengers that came before him. Prophet Adam, Nuh, Ibrahim, Musa, Isa and the other 124,000 Prophets all had the same message which was to worship Allah alone. How is it possible for people who have never met to have the same message? The only way that is possible is because Allah sent the same message to all of the Prophets and Messengers. If the Prophet Muhammad was not a prophet then his message would have been different to the previous prophets and messengers.

Second khutbah (English):

The greatest miracle given to the Prophet (ﷺ) and one that can never be matched is the Qur’an. There are loads of miracles found within the Qur’an, but the main miracle of the Qur’an is linked to its style. Since we do not know Arabic, we might not be able to appreciate the style, the language, and the uses of words and rhythm. We might not be able to appreciate the linguistic miracles of the Qur’an. But it is enough to say that the best Arabic speaking people and the most talented Arab poets testified that the Qur’an is a written miracle.

However, when it comes to the content of the Qur’an, we can all still appreciate that it is the Word of Allah. . So, for example, 1400 years ago, the Qur’an mentioned that the Earth is round.

Allah says,

> وَالْأَرْضَ بَعْدَ ذَٰلِكَ دَحَاهَا

“And we have made the earth egg shaped” (79:30).

1400 years ago, it was impossible for anyone to know this as they did not have any means of checking the shape of the Earth. Hundreds of years after the Qur’an was revealed did the scientists prove that the Earth is in fact spherical when in 1577 Sir Francis Drake proved that the Earth is spherical. Furthermore, the Qur’an mentions that the universe is expanding. Allah says,

> وَالسَّمَاءَ بَنَيْنَاهَا بِأَيْدٍ وَإِنَّا لَمُوسِعُونَ

51:47 “We have created the universe with strength, and we expand it” (51:47).

The expansion of the universe was discovered by the scientist Edwin Hubble around 1929, hundreds of years after the Qur’an had revealed the very same fact. It is impossible for Prophet Muhammad (ﷺ) to guess these things, but the reason why he knows about the shape of the Earth, the expansion of the universe and all the other details is because Allah told him through the Qur’an. The Qur’an also talks about various other topics such as embryology, history and has mathematical miracles, but time does not permit to talk about them, but enough to say that all of these miraculous topics truly indicate that the Quran is from Allah and it was revealed to our prophet and messenger, Muhammad (ﷺ).

Another unique feature of the Qur’an is its predictions about the future. Every prediction in the Quran came true. For example, during the life of the Prophet (ﷺ), the Romans and Persians went to war. The Persians were winning the war and the Romans were heavily defeated. However, the Qur’an predicted that the Romans were going to dominate again within 10 years. The Quraysh laughed at this prediction as it was almost impossible for the Romans to win over the Persians. Did the Quranic prediction of the Romans becoming victorious come true? Yes. The Romans won as predicted in the Qur’an. Once again, the fact that all the predictions in the Qur’an came true proves that Muhammad (ﷺ) is a Prophet of Allah because Allah revealed future events to him. It is impossible for the Prophet Muhammad (ﷺ), an illiterate man, from barren lands, to get all his predictions right. By the permission of Allah, only a Prophet and Messenger of Allah can get it right.

In conclusions, there are many proofs that Prophet Muhammad (ﷺ) is actually a Prophet. He has perfected all the good characteristics, he invited people to the same message as the previous prophets and messengers and he performed many miracles, the biggest one being the Qur’an. So, anyone who tries to accuse Muhammad (ﷺ) of not being a prophet is definitely wrong and we can present various proofs to them. I hope we can spend some time every week to read more about the life of our beloved Prophet Muhammad (ﷺ). If you do not enjoy reading, then there are so many videos about the life of the prophet so start watching them. Once we know about the Prophet Muhammad (ﷺ) we can tell others about him.

May Allah give us the ability to study the life of the Prophet Muhammad (ﷺ) and use it to better our own lives. Ameen.

#### Pack III / Khutbah 5 — Why the Qur’an is a Miracle Part I

First khutbah (English):

Allah has described the Qur’an in many ways. One of the most important descriptions is that the Qur’an is a guidance for mankind. Allah says,

> شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ وَبَيِّنَاتٍ مِّنَ الْهُدَىٰ وَالْفُرْقَانِ

“The month of Ramadhan [is that] in which was revealed the Qur'an, a guidance for the people and clear proofs of guidance and criterion” (2:185).

Allah guides people through this book in various ways. Some people accept Islam because they find the language of the Qur’an amazing. Some people accept Islam because they find the historical accuracies of the Qur’an amazing. Some people accept Islam because they find spirituality in the Qur’an. Some people accept Islam because they find the science in the Qur’an to be incredible. As Muslims, it is important for us to know about the Qur’an as this will make us appreciate the Qur’an more. Also, it will help us do our duty of Da’wah to non-Muslims. If we can explain some of the messages and miracles in the Qur’an, there is a high chance for a non-Muslim to go and do further research on Islam and the Qur’an and, if Allah Wills, they will accept Islam. And so today we will discuss the miraculous nature of the Qur’an.

Miracle 1: Qur’an is not replicable

Allah challenges people to produce something similar to a chapter from the Qur’an. He says,

> وَإِن كُنتُمْ فِي رَيْبٍ مِّمَّا نَزَّلْنَا عَلَىٰ عَبْدِنَا فَأْتُوا بِسُورَةٍ مِّن مِّثْلِهِ وَادْعُوا شُهَدَاءَكُم مِّن دُونِ اللَّـهِ إِن كُنتُمْ صَادِقِينَ

“And if you are in doubt about what We have sent down upon Our Servant [Muhammad], then produce a surah the like thereof and call upon your witnesses other than Allah, if you should be truthful.” (2:23)

If a person simply produces a Surah, which could be as short as Surah Kawthar, a chapter consisting of 3 verses and 10 words only, then the Qur’an would be defeated and proven weak. But the amazing thing is, no one in the past 1400 years has risen to the challenge. All those who hated Islam throughout the 1400 years were not able to rise up to this basic challenge of producing anything similar to the Qur’an. There were people who have tried to write a Surah similar to that of the Qur’an, but they have failed miserably. The ones that people made up did not rhyme properly and the meaning was worthy of nothing but laughter.

The Arabs at the time of the Prophet Muhammad (ﷺ) were very good at poetry. They were the best linguists and so they could have potentially made a Surah like a Surah in the Qur’an. However, they to failed to live up to the challenge of the Quran. In fact they praised the style of the Qur’an and said they had never heard anything as amazing as the Qur’an.

Miracle 2: no contradiction in the Qur’an

Allah challenges people by asking them to find contradictions in the Qur’an. Allah says:

> أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ ۚ وَلَوْ كَانَ مِنْ عِندِ غَيْرِ اللَّـهِ لَوَجَدُوا فِيهِ اخْتِلَافًا كَثِيرًا

“Then do they not reflect upon the Qur'an? If it had been from [any] other than Allah, they would have found within it much contradiction” (4:82).

Once again, it has been 1400 years and people have not found any contradictions in the Qur’an. People have assumed there are, but after researching they realise the opposite, that in fact the Qur’an is free of contradictions. For example, some people said that the Qur’an states that the sun sets in murky water. But when you read the full verse, it actually says

> حَتَّىٰ إِذَا بَلَغَ مَغْرِبَ الشَّمْسِ وَجَدَهَا تَغْرُبُ فِي عَيْنٍ حَمِئَةٍ وَوَجَدَ عِندَهَا قَوْمًا

“Until, when he reached the setting of the sun, he found it [as if] setting in a spring of dark mud, and he found near it a people” (18:86)

The Qur’an describes what appeared to Dhul Qarnain and does not describe the actual setting of the Sun. So, in this case, just by reading the full verse, one would realize that there is no contradiction between the Qur’an and science.

I would like to emphasize the fact that the Qur’an is not a science book. Nor is it a historical book. Rather, Allah mentions stories in the Qur’an so as to derive lessons from them both in present and future times.

Second khutbah (English):

Other unique features of the Quran include:

Underlying mathematical coherence

There are many mathematical features in the Qur’an. For example, you will find the number of words and their opposites appear the same number of times in the Qur’an. The words man and woman appear 24 times each; the words Dunya and Akhirah appear 115 times each; Shaytan and Mala’ikah (Angels) appear 88 times each. Some people might say that having opposite words appear the same number of times is not a  unique feature. But remember that the Qur’an was revealed to the Prophet (ﷺ) over a period of 23 years, bit by bit, in different places and in different situations. It is impossible for an illiterate man to have counted and matched the number of times two opposite words appeared in a book. And remember, at the beginning, Qur’an was recited and spread verbally only. It was not even written and collated as a book like we have it now and therefore no one was counting how many times a word appeared.

The truth is, the Qur’an is from Allah and it is only Allah who can put this miracle in the Qur’an and keep a record of things. As Allah says,

> وَأَحَاطَ بِمَا لَدَيْهِمْ وَأَحْصَىٰ كُلَّ شَيْءٍ عَدَدًا

“And He (Allah) keeps count of all things” (72:28).

Qur’an is preserved

Allah has promised to preserve the Qur’an. Allah says:

> إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ

“Indeed, it is We who sent down the Qur'an and indeed, We will be its guardian.” Al-Qur’an” (15:9).

Even though various attempts have been made, no one can change the Qur’an as Allah is the protector of the Qur’an. In order to keep it preserved, millions of Muslims all over the world have memorised it.

Imagine if all the religious scriptures were thrown into the sea, all of them, including the Qur’an, Bible, Torat, Vedas. Imagine if all the religious scriptures were deleted from gadgets and computers. If we got rid of all of the scriptures, which book can be re-written, word for word, cover to cover? Which book can be reproduced exactly as the original? Only the Qur’an can be brought back exactly as it was revealed. Why? Because it is preserved in the hearts of millions of men. Millions of people have memorised it and so they will be able to write the Qur’an word for word, cover to cover. If you look at the other religions, their scriptures have changed many times. Moreover, very few, if any at all, know the original language of their scripture, such as Hebrew and Aramaic. There is confusion as to what part of the bible is from God and which parts are not. Alhamdulillah, as for our Qur’an, it has not been changed and the entire book is from Allah.

In conclusion, in today’s Khutbah we have discussed the miraculous nature of the Qur’an; 1) There is nothing like the Qur’an, 2) no contradictions can be found in the Qur’an. And we also discussed the unique features of the Quran; 1) there are numerous unique mathematical features in the composition of the Qur’an and 2) the Qur’an has been preserved for the past 1400 years and will be preserved until the end of time. More miracles and unique features will be shared in the next Khutbah. I would like to remind myself and all of you that it is our duty as Muslims to study our Qur’an. Let us make a daily habit of reciting the Qur’an just for 5 minutes. After that maybe spend few more minutes reading the meaning and then move on to memorising it. Would it not be just amazing to be one of the millions of Muslims that memorise the Qur’an and be part of the global and historical preservation of the Qur’an. And lastly, if you have questions or doubts, please do ask a reliable trustworthy learned Muslim. Do not let it fester in your heart. Find the answers and let your heart be at rest. The religion is amazing and makes sense and has all the answers to your questions.

May Allah give us the Tawfeeq to learn the Qur’an and put it in to our daily life. And May Allah give us the ability to overcome our doubts by finding the right people to give us the right answers. Ameen.

#### Pack III / Khutbah 6 — Why the Qur’an is a Miracle Part II

First khutbah (English):

As we mentioned last week, the Qur’an is a guidance for mankind. Allah says,

> شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ وَبَيِّنَاتٍ مِّنَ الْهُدَىٰ وَالْفُرْقَانِ

“The month of Ramadhan [is that] in which was revealed the Qur'an, a guidance for the people and clear proofs of guidance and criterion” (2:185).

Allah guides people through this book in various ways, such as through science, history, spirituality and more. In today’s Khutbah I will continue to talk about the unique features of the Qur’an.

3) The accuracy of the historical stories mentioned in the Qur’an

The Qur’an accurately narrates many stories and events of the past. The uniqueness is in the fact that the stories from the Qur’an match stories found in the Bible and Torah even though they were all revealed at different eras and places. Now, one may accuse the Prophet Muhammad (ﷺ) as copying from the previous scriptures. However, the Prophet Muhammad (ﷺ) was an illiterate man meaning he could not read or write. Allah says,

> الَّذِينَ يَتَّبِعُونَ الرَّسُولَ النَّبِيَّ الْأُمِّ

“Those who follow the Messenger, the unlettered Prophet ….” (7:156).

So how could an illiterate Prophet have copied from previous scriptures? How does an illiterate man accurately narrate stories of events that happened hundreds to thousands of years before his birth at a time when there is no internet to check? The real reason why the Prophet knew about previous historical events is because Allah told him through the Qur’an. Allah revealed to the Prophet stories regarding Musa, Isa, Ibrahim, Nuh and Adam.

4) Scientific facts revealed 1400 years ago

There are many scientific facts/theories discussed in the Qur’an and only now, using complex technology, have scientists discovered many of them. To appreciate this unique feature, one has to remember that the Qur’an was revealed 1400 years ago in a desert area, where there was no absolutely no technology.

So, what are some of the scientific verses in the Qur’an?

The Qur’an mentions that the earth moves around in an orbit, even though at that time everyone thought the earth was stationary and things were moving around it.

> لَا الشَّمْسُ يَنبَغِي لَهَا أَن تُدْرِكَ الْقَمَرَ وَلَا اللَّيْلُ سَابِقُ النَّهَارِ ۚ وَكُلٌّ فِي فَلَكٍ يَسْبَحُونَ

“It is not allowable for the sun to reach the moon, nor does the night overtake the day, but each, in an orbit, is swimming” (36:40).

Allah mentions that the universe is expanding/becoming bigger

> وَالسَّمَاءَ بَنَيْنَاهَا بِأَيْدٍ وَإِنَّا لَمُوسِعُونَ

“And the heaven We constructed with strength, and indeed, We are [its] expander” (51:47).

Allah amazingly describes what happens when two seas meet. Allah says,

> مَرَجَ الْبَحْرَيْنِ يَلْتَقِيَانِ ﴿19﴾ بَيْنَهُمَا بَرْزَخٌ لَّا يَبْغِيَانِ

“He has set free the two seas meeting together.  There is a barrier between them.  They do not transgress.” (55:19-20).

Allah is telling us that when two seas meet, a barrier form. This barrier divides the two seas so that each sea has its own temperature, salinity, and density. This information has been discovered only recently, using advanced equipment to measure temperature, salinity, density, oxygen dissolubility, etc.  The human eye cannot see the difference between the two seas that meet.

The Qur’an accurately describes the development of an embryo in a mother’s womb. Allah says,

> وَلَقَدْ خَلَقْنَا الْإِنسَانَ مِن سُلَالَةٍ مِّن طِينٍ ﴿١٢﴾ ثُمَّ جَعَلْنَاهُ نُطْفَةً فِي قَرَارٍ مَّكِينٍ ﴿١٣﴾ ثُمَّ خَلَقْنَا النُّطْفَةَ عَلَقَةً فَخَلَقْنَا الْعَلَقَةَ مُضْغَةً فَخَلَقْنَا الْمُضْغَةَ عِظَامًا فَكَسَوْنَا الْعِظَامَ لَحْمًا ثُمَّ أَنشَأْنَاهُ خَلْقًا آخَرَ ۚ فَتَبَارَكَ اللَّـهُ أَحْسَنُ الْخَالِقِينَ

“And certainly, did We create man from an extract of clay. Then We placed him as a sperm-drop in a firm lodging. Then We made the sperm-drop into a clinging clot, and We made the clot into a lump [of flesh], and We made [from] the lump, bones, and We covered the bones with flesh; then We developed him into another creation. So blessed is Allah, the best of creators” (23:12-14)

One can go on and on regarding the scientific miracles in the Qur’an, as there are many. The miraculous nature of the Qur’an should increase our Iman and make us appreciate the Qur’an more. May Allah give us the ability to study and understand the Qur’an. Ameen.

Second khutbah (English):

5) Memorisation of the Qur’an

The Qur’an is a living miracle which is utterly unique in features, composition and meaning due to it being the Word of Allah. But there is one simple but unique feature of the Quran which amazes pretty much everyone that knows about it. That is the fact thousands and millions of people have memorised the Qur’an. There are thousands of Huffadh (those who have memorised the whole Qur’an) in the UK. You can almost say that every city and every area where Muslims reside in have a large number of Huffadh. What do we understand from this amazing miracle of millions of Muslims memorising the entire Qur’an? We understand that number 1, Allah is preserving the Qur’an through the hearts and mind of the believers and number 2, Allah has made it easy to memorise and remember the Qur’an. Allah says,

> وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ

“And We have certainly made the Qur'an easy for remembrance, so is there any who will remember?” (54:17).

Isn’t it amazing the fact that a person never gets tired of reciting and repeating the verses in the Qur’an? Even though we listen and recite the Qur’an on a daily basis, in our prayers, in various gatherings, during Taraweeh in Ramadan, we still want to listen to more. I can guarantee you that no other religion has even a few hundred people who have memorised their entire scripture. You won’t find many Christians who have memorised the whole Bible, nor will you find many Jews who have memorised the Towrah, nor will you find Hindus who have memorised their entire scripture. It may be because it for them it very hard to memorise, remember and understand. It is only the Muslims that memorise the entire scripture. Every single community of the Muslims, the Arabs and the non-Arab memorise the Qur’an. Subhana’Allah, Muslims as young as 10 memorise the entire Qur’an. Even if you haven’t memorised the entire Qur’an, one can confidently say that every single Muslim has memorised at least the last few Surahs of the Qur’an. Tell me one other book that is venerated like the Qur’an. How many times can you read a book? Even if it is great book you get tired and bored after reading it two or three times. As for the Qur’an, we want to recite or listen to it again and again. So, the fact that millions of people recite, memorise and love the Qur’an; it is a miracle as no other book has that type of attachment.

In conclusion, the Qur’an is living miracle and is full of unique features which are unparalleled and unmatched. Today we mentioned some of these unique features of the Qur’an with reference to the accuracy of historical events, scientific descriptions of the universe, and the fact that it is the only book easily memorised by millions of people. Given the power of the Qur’an, it is vital that we Muslims spend some time learning it. All you have to do is spend a few minutes reciting the Qur’an and do this on a daily basis. Even if you recite the Qur’an 5 minutes every day, it will accumulate to 35 minutes a week. If you get into the habit of reciting, then you can start reading the meaning and studying the different miracles of the Qur’an. Once we have grounded well with the knowledge of the Qur’an, we can tell others about it and get everyone to appreciate the uniqueness of the Qur’an.

May Allah give us the Tawfeeq to study the Qur’an and spread its message. May Allah increase our love for the Qur’an and make us people who live their lives according to the Qur’an. Ameen.

### Pack IV — The Believer’s Heart

#### Pack IV / Khutbah 1 — Friday - The Chosen Day

First khutbah (English):

Not every day is the same in the life of a Muslim. There are some days that are extra special because Allah has blessed those days. For example, the first 10 days of Dhul Hijjah are the most blessed days of the year. Then you have other blessed days such as Ashoora, the days of Ramadan, the two Eids and many more. There is a day in the week that is more blessed compared to other 6 days. What day is that? It is Yawmul Jumu’ah or Friday.

Allah has blessed Friday more than the other 6 days. Where is the evidence to say that Friday is more blessed? The Prophet (ﷺ) said, “The best day the sun has risen is the day of Friday” [Muslim]. So, the best day is Friday. It is a day of hope, mercy and a day of blessing. I know in this country, just like so many others, Friday is a normal school day but in other countries Friday is actually a day off. Why? So that people can worship Allah more, by coming to Jumu’ah early, reciting Surah Kahaf, doing extra Durood and having nice food just like we do on the two Eid days.

There is a Hadith that summarises why Friday is an important day. The Messenger of Allah (ﷺ) said, “The best day on which the sun has risen is Friday. Adam was created on Friday and on it he entered Paradise and on it he was expelled from therein. The Hour will not be established but on Friday” [Muslim]. This hadith gives 4 reasons why Friday is important;

It is the day Adam was born – Subhanallah, Friday is the day when the first man on earth was born. When our father Adam was born, all the angels prostrated to him out of obedience to Allah and respect for Adam. So, brothers, Friday is a day when our race started and therefore Friday should remind ourselves about our beginning. On a Friday we should remember Allah even more because he created us on that day.

Friday is a day Adam entered Paradise – Subhanallah, as a minimum, every Friday we should realign our focus for Paradise. That is the day our father Adam entered paradise, so would it make sense for us to do things that will lead us to Hell? Of course not. Friday should be a day we do additional acts of worship in order to get closer to Paradise and achieve the higher levels.

Friday is also the day Adam was expelled from Paradise – we should remember how humble Adam was when he was expelled. Adam made a famous Du’a in which he asked Allah for forgiveness for his mistake.

> قَالَا رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ

They said, "Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers" [7:23].

So, Friday should be a day when we own up to our mistakes and ask Allah to forgive us for our shortcomings.

Friday is also the last day of the earth - it would be the last day for humans and Jinns on Earth; everything will come to an end on a Friday. This reason alone should be a strong reason behind doing as much good deeds as we can on a Friday.

So just to repeat the Hadith, The Messenger of Allah (ﷺ) said, “The best day on which the sun has risen is Friday. Adam was created on Friday and on it he entered Paradise and on it he was expelled from therein. The Hour will not be established but on Friday” [Muslim].

In order to help us understand further the importance of Friday, a scholar called Ibn Qayyim compared Friday to Ramadan; he said, Friday is a day of worship and it is like Ramadan amongst the other months. So just like Ramadan is more special compared to the other 11 months, Friday is more special compared to the other 6 days. Ibn Qayyim carried on by saying, the last hour on a Friday is like Laylatul Qadr. So just like we prepare for Laylatul Qadr, due to knowing its value and significance, we should also prepare for the last hour of Friday.

Second khutbah (English):

Now that we know some of the reasons why Friday is the most important day of the week, you might ask the question, what are some of the actions we can do on Fridays?

My recommendation, for students in a school or college, is to do a minimum of three to four easy good deeds every Friday;

Make specific preparation for Salatul Jumu’ah.

Allah says,

> يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ إِذَا نُودِىَ لِلصَّلَوٰةِ مِن يَوْمِ ٱلْجُمُعَةِ فَٱسْعَوْا۟ إِلَىٰ ذِكْرِ ٱللَّهِ وَذَرُوا۟ ٱلْبَيْعَ ۚ ذَٰلِكُمْ خَيْرٌ لَّكُمْ إِن كُنتُمْ تَعْلَمُونَ

“Oh, you who have believed, when the call for the prayer on Friday is made, then proceed to the remembrance of Allah and leave trade. That is better for you, if you only knew” [62:9].

So here Allah is saying be prepared for the Friday prayer and when the call is given, you actually need to be prepared to leave things in order to attend. So for us, preparation for Jumu’ah starts off with having a shower in the morning before coming to school, wearing your best clothes (so maybe a clean shirt, new socks), doing wudu during break time, having lunch early and quickly. Your behaviour during the lesson before lunch should be good so then your teachers do not keep you behind during lunch which would mean you go late for Jumu’ah. Preparing for Jumu’ah requires mental and physical preparation; but remember, as we said before, the reward behind all of this is Paradise and Friday is a day Adam entered Paradise.

Make specific Du’a before Maghrib on Friday - we mentioned how Ibn Qayyim said the last hour on a Friday is very important and is like Laylatul Qadr. Your Du’as are more likely to be accepted during the last hour. So, every Friday, we need to allocate just few minutes - make Du’a for yourself; Oh Allah, I am finding learning challenging give me the ability to memorise faster. Oh Allah, make me successful in this life and in the hereafter. Oh Allah, have mercy on my parents. Oh Allah, protect my Muslim brothers and sisters around the world. You can make whatever Du’a you want and in English.

Send salutations upon the Messenger of Allah (ﷺ) – it could be as simple as اللَّهُمَّ صَلِّ عَلَى مُحَمَّدِ or some of the long ones.

Recite the first 10 verses of chapter 18, Surah Kahaf. We will discuss the significance of this another day. But we can recite it before we come to school, during break or lunch or after school. The 10 verses only takes 1-2 minutes and if you cannot recite it then start by listening to any reciter from YouTube.

So just to conclude, Friday is the most important day of the week and we Muslims should treat it well. We should make every effort to come on time for Jumu’ah prayer and do other specific good deeds like making Du’a, Durood and reciting the first 10 verses of surah Kahaf.

May Allah give us the Tawfeeq to give Friday is rightful importance and may Allah accept our good deeds and give us the ability to do more.

#### Pack IV / Khutbah 2 — Husnul-Dhan - Good Opinions Of Others

First khutbah (English):

Everyone will agree that having a good opinion about people is something very noble. Having a good opinion of Allah, his religion and his creation will indeed bring peace to one’s self and others around them. Having a good opinion or thinking positively about others in Arabic is Husnul-Dhan (حٌسن الظّن). Our Prophet has encouraged the practice of having a good opinion of Allah. The Prophet said three days before his death: “Let none of you die unless he has good expectations from Allah” (Muslim).

The opposite of having good opinions is to have bad opinions of others. Having negative assumptions is so bad that Allah made it a sin. Allah says,

> يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱجْتَنِبُوا۟ كَثِيرًا مِّنَ ٱلظَّنِّ إِنَّ بَعْضَ ٱلظَّنِّ إِثْمٌ

“O you who have believed, avoid much [negative] assumption. Indeed, some assumption is sin …. [49:12]

During the lifetime of the Prophet Muhammad (ﷺ), there was an incident in which Allah himself told people off for not practicing Husnul Dhan. The incident involved A’isha, the Prophet’s wife. To summarise the whole story, some people saw A’isha with another man and they automatically assumed something very bad had happened and they started to spread the rumour as well. Allah revealed verses rebuking the people. Allah said,

> لَّوْلَآ إِذْ سَمِعْتُمُوهُ ظَنَّ ٱلْمُؤْمِنُونَ وَٱلْمُؤْمِنَٰتُ بِأَنفُسِهِمْ خَيْرًا وَقَالُوا۟ هَٰذَآ إِفْكٌ مُّبِينٌ

“Why, when you heard it, did not the believing men and believing women think good of one another and say, "This is an obvious falsehood?” [24:12].

So, Allah is telling people to think good of others, especially if things appear different.

So, the question I would like to ask myself and you brothers, how should we go about living our lives? Shall we practice Husnul Dhan and have good opinions of people? Or shall we assume bad things every time? People who are ugly in the inside will only see ugliness around them. When negative people see good people, they will automatically have negative assumptions. That guy doesn’t have the latest shoes and so he must be poor. This person on social media does not do random pictures and videos and so he must be depressed. He does not swear every few sentences and so he does not have a lot of fun. He looks after his parents and so he seriously must have a boring life. These are assumptions that come from a corrupt heart and from a mind that is suffering from negative assumptions. People with such thoughts and speech need to practice Husnul-Dhan in order to improve the quality of their life. And to be honest, no one is perfect, and we all need to work on it. We need to start maybe thinking well of Allah first, thinking positive about our religion. This will require you to study who Allah is and study the religion. After that we need to start thinking positively about our parents who have sacrificed so much for us. And we all need to have good opinion about other people.

Even if someone has faults, we should still think good of them. Our Prophet (ﷺ) said: “Whoever conceals the faults of a Muslim, Allah will conceal his faults in this world and in the Hereafter. Allah helps the servant as long as he helps his brother” [Muslim]. From this Hadith, we learn that we must not spread the faults of others, rather, we should cover their faults as they might have made a mistake and repented from it. By covering their faults, you are helping them, and so Allah will help you cover your own faults and shortcomings.

Second khutbah (English):

We said it before, no-one is perfect. Due to social media and other forms of distractions, we might constantly find ourselves in situations in which we are thinking negatively and so we need to find solutions.

There are many steps one can take to develop this noble characteristic of assuming good of others. Firstly, we should make Du’a and ask Allah to give us the ability to have good assumptions of others. Know that with anything in life you should always ask for Allah’s help. Secondly, listen to some Islamic and academic talks on how to think positively, how to be a positive person, the evils of bad assumptions, jealousy, hatred, envy and others. By researching further, you and I will be equipped with the necessary skills needed to practice Husnul-Dhan. Thirdly, use social media wisely; if your social media is making you think negatively about yourself, your family and good people then it would be wise for you to add good people and unfriend the bad ones. There are plenty of people who give positive and emotional messages. Add those who remind you about Allah, about the Prophet Muhammad (ﷺ) and about the beauty of this religion. Fourthly, if you find yourself writing negative messages about others on social media then you should delete them and start writing good things about people. The good you do will wipe the bad. Allah says:

> إِنَّ ٱلْحَسَنَـٰتِ يُذْهِبْنَ ٱلسَّيِّـَٔاتِ

“…Surely good deeds wipe out evil deeds…” [11:114].

Trust me brothers, when you do good instead of bad, your self-esteem will go the right way and you will achieve the happiness people are looking for in life. Practising Husnul-Dhan will improve your physical and mental wellbeing and it will help others improve theirs as well. Most importantly, you will be following the guidelines of Allah and Allah rewards the good doers with Paradise.

So, in conclusion, we need to practice Husnul-Dhan, have good opinions of others, in order to have a peaceful life. There are various ways to improve our practice of Husnul-Dhan and so we need to do further research. May Allah give us the ability to practice Husnul-Dhan and have a positive outlook to life.

#### Pack IV / Khutbah 3 — Illness - A Blessing in Disguise

First khutbah (English):

A believer is always in a state of reflection. Reflection is actually one of the greatest acts of worship enjoined and encouraged in the Qur’an. Allah says,

> الَّذِينَ يَذْكُرُونَ اللَّهَ قِيَامًا وَقُعُودًا وَعَلَىٰ جُنُوبِهِمْ وَيَتَفَكَّرُونَ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ رَبَّنَا مَا خَلَقْتَ هَٰذَا بَاطِلًا سُبْحَانَكَ فَقِنَا عَذَابَ النَّار

“Those who remember Allah (always, and in prayers) standing, sitting, and lying down on their sides, and think deeply about the creation of the heavens and the earth, (saying): Our Lord! You have not created (all) this without purpose, glory to You! (Exalted are You above all that they associate with You as partners). Give us salvation from the torment of the Fire” [3:191].

A Muslim is encouraged to reflect and derive lessons from things that happen to him and those around him. For example, when one sees pictures and documentaries about the amazing design of the universe, one should increase in his faith and praise Allah even more. Think of just how small we are in comparison to the entire Earth, and even then Allah values us. When one sees diagrams of the human body, with all the complex structures of the organs and all the interconnected systems, one should be amazed and praise Allah even more as He has created us from nothing, Subhan’Allah. There is one experience that we all go through that we need to reflect upon; the rich and the poor go through it, the strong and the weak go through it and the young and the old go through it. What is this condition which everyone goes through, minimum once or twice a year? It is the condition of falling ill. Insha’Allah in today’s Khutbah we will try to mention some of the wisdoms and lessons behind falling ill.

The first reflection point as to why we fall ill is very important and that is to humble ourselves in front of Allah, the Most Powerful. We should realise that, even though we have so much advanced technology and modern science, we are actually a weak creation of Allah. USA, the most powerful country in the world; China, the largest country in the world; and the rest of the whole of human race were in terror when Covid-19 started to spread. Terrified of what? Terrified of a virus, something so small that the eyes cannot even see. It is smaller than even your cell. You can’t even see it with the light microscope. It is 20nm in length and you have to zoom in 100,000 times to see it. So, brothers, we need to humble ourselves in front of Subhanal Khaliq – the one who created everything with a purpose. And as a result of humbling ourselves, we need to connect to Allah on a daily basis. We need to start our daily Salahs and humbly pray to Allah. We need to humbly talk to Allah by reading the Qur’an and by doing regular Du’a.

The second reflection point as to why we fall ill is for us to appreciate good health and use it to worship Allah. We all know how life changes when we fall ill. We appreciate even the smallest of things. For example, when we get a sore throat, we appreciate all those weeks and months when food would go down our throat so easily. When we get a neck or shoulder pain we realise the blessing of a having a functional body. When, for a few seconds something tiny goes into our eyes and we can’t see properly, we just can’t wait to quickly get it out and start using our eyes again. Subhanallah, Allah gave you a normal throat, functional body and eyes for what? To use them to worship Allah. You are supposed to use that functional body to walk to prayer, you’re supposed to use the eyes to look at the Quran, even if it’s just few minutes a day. This is how we truly appreciate Allah for giving us a good health. In our prayer when we say الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِين (Alhamdulillahi rabbil aalamin) – one of the millions of reasons why we are praising Allah right from the beginning of prayer is because He gave us good health and Allah gave it to us for free without us asking for it. What happens when we become comfortable and start enjoying life? We forget the One who gave us our lives and good health. We forget Allah. “It is my life; I can do whatever I want; it’s my body, I can do whatever I want”. Really? It is Allah Who gave you your life and it is Allah Who gave you your health; so, use it to worship Allah in whatever way you enjoy. Sometimes we become so attached to wordily life that we forget that there is actually a Hereafter. We all know that no human will live forever. Allah says in the Qur’an,

> وَمَا جَعَلْنَا لِبَشَرٍ مِّن قَبْلِكَ الْخُلْدَ أَفَإِن مِّتَّ فَهُمُ الْخَالِدُون

“And We granted not to any human being immortality before you (O Muhammad SAW), then if you die, would they live forever? [21:34].

We will all die one day, so let us appreciate life and use it to prepare for the next life.

People generally ask if illnesses are punishments or not. The answer is that if illnesses make our hearts soft and help us worship Allah, then it is actually a blessing. But if illnesses does not help us to worship Allah then no doubt it can be described as a punishment. A great scholar of Islam called Ibn Taymiyyah once said, ‘a calamity that makes you turn to Allah is better than a blessing that makes you forget the remembrance of Allah’.

Second khutbah (English):

The third benefit of people falling ill is to get rid of the arrogant notion that some people are better than others. Some people think that they are better than others because they are of a particular skin colour, or race, or because they are rich, or very smart, or because they have qualification from a prestigious institute. But the fact of the matter is that, it doesn’t matter if you are from a particular country, race or have a specific skin colour, you should not be racist and look down on others. It doesn’t matter if you are smart, you should not look down at those who are less smart than you. It doesn’t matter if you have a degree from a prestigious institute, you should not look down on those who may not have a qualification. You should rather use all of your successes to do good for humanity, to help each other and ultimately use it to give Islam a good image and please Allah.

A reminder that the first person to have arrogance is Iblees. He thought he was better than Adam because he was made from fire and Adam was created from clay. Allah says in the Qur’an:

> قَالَ مَا مَنَعَكَ أَلَّا تَسْجُدَ إِذْ أَمَرْتُكَ قَالَ أَنَا خَيْرٌ مِّنْهُ خَلَقْتَنِي مِن نَّارٍ وَخَلَقْتَهُ مِن طِين

> قَالَ فَاهْبِطْ مِنْهَا فَمَا يَكُونُ لَكَ أَن تَتَكَبَّرَ فِيهَا فَاخْرُجْ إِنَّكَ مِنَ الصَّاغِرِين

[Allah] said, "What prevented you from prostrating when I commanded you?" [Satan] said, "I am better than him. You created me from fire and created him from clay." [Allah] said, "Descend from Paradise, for it is not for you to be arrogant therein. So, get out; indeed, you are of the debased (7:12-13).

Bacteria and viruses infect everyone, and they do not care who you are, how smart you are or how rich you are. The pathogens infect and attack everyone and it is showing the foolishness in the idea that I am better than someone else because of my skin colour, intelligence or qualifications. We should use our differences to help each other and use it to worship Allah. Allah says,

> يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ إِنَّ اللَّهَ عَلِيمٌ خَبِير

“O mankind, indeed, We have created you from male and female and made you peoples and tribes that you may know one another. Indeed, the most noble of you in the sight of Allah is the most righteous of you. Indeed, Allah is Knowing and Acquainted” [49:13].

The fourth benefit, which has to be said with great importance, is to respect and obey your parents even more and look after them as much as you can. When you are ill, who looks after you? Who sacrifices their sleep to make sure you are okay during the night? Who takes you to the doctor and then gets your medicine? Who? Your friends? The people on your social media?  The people who you message for hours on end? The people who you chill with, forgetting the main people you should spend your quality time with? It is no other than your parents. During the coronavirus crisis, our parents stood in very long lines, just to ensure that they buy foods and other essentials just so then we can peacefully eat and stay safe. All those people who believed that they don’t need family members or neighbours and that they can look after themselves, well guess what, they too were the ones relying on family members and neighbours to help them. They too were asking others for help. So, brothers, we need to respect our parents even more, obey them and help them even when they need our help.

In conclusion, as Muslims we should reflect on what is happening and use it to increase our Imaan and worship Allah more. We should humble ourselves, not think we are better than others, appreciate good life, follow Allah’s commands because it is good for us, and respect and obey our parents even more. Have Tawakkul in Allah, make lots of Du’a and follow the precautionary measures such as washing your hands and covering your mouth when you cough. May Allah keep us safe, cure those who are ill and give us the Tawfeeq to worship Him in all situations. Ameen.

#### Pack IV / Khutbah 4 — Love – An Integral Part of Faith

First khutbah (English):

Loving Allah is an integral part of our faith. It is an action of the heart which drives a believer towards Allah. Loving Allah should occupy our heart and it should get total possession of it. Allah says in the Qur’an:

> وَٱلَّذِينَ ءَامَنُوٓا۟ أَشَدُّ حُبًّا لِّلَّهِ

“But those who believe, love Allah more (than anything else)” [2:165]

Now you might ask, how can I grow my love of my Creator? How can I increase my love for Allah? The simple answer is to get to know Allah more. The best way to love Allah more is by learning about His Names and Attributes. For example, one of Allah’s name is Al-Kareem, the Most Generous. He generously gave us so many blessings even though we did not ask for it. When we are in our mother’s womb, did we ask Allah to give us two eyes, two hands, two legs, a heart and a healthy body? No. But Allah still gave it to us for free. To get a heart transplant it will cost about £100,000 and a kidney transplant costs around £17,000. Did any of us pay Allah thousands of pounds for our heart and kidney? Of course not, Allah gave it to us for free without even us asking for it. Should we not love Allah more now, given that we know Allah is Al-Kareem, the Most Generous?

Another attribute of Allah is that He is Al-Ghafoor, the Most Forgiving. Allah forgives us even though we commit sins every day. In a hadith, the Prophet (ﷺ) said, “O son of Adam, were your sins to reach the clouds of the sky and were you then to ask forgiveness of Me, I would forgive you” (Tirmidhi). We all commit sins on a daily basis which means that we should ask for forgiveness on a daily basis. Allah is Al-Ghafoor and He will forgive us no matter how big or small it is, but the condition is that we need to sincerely ask for forgiveness. Tell me one person who will forgive you at least a thousand times? Even your best friend will have some sort of limit. But know that Allah is Al-Ghafoor, the most Forgiving, and therefore our Love for Allah should increase even more given that he will forgive us without any limits.

Another name of Allah is Al-Hakeem, the most Wise. Everything Allah has made halal for us is actually good for us and everything He has prohibited is actually harmful to us. For example, Allah made eating pork haram because ingesting pig is bad for us. Pigs harbour a lot of pathogens and toxins and their lifestyle is that of scavengers. Allah, out of His Wisdom, prescribed 5 daily prayers which is meant to be a form of meditation. According to some research, meditation can improve the mental health and reduce symptoms associated with chronic conditions. Subhanallah, by prescribing Salah, Allah is helping our mental and physical health. It might be difficult at the beginning to understand, but everything Allah has prescribed is beneficial for us, He is Al-Hakeem, the Most Wise.

Two more names of Allah are Al-Khaliq - the Creator, and Al- Aleem, the All-Knowing. Allah created us and so He knows our strengths and weaknesses. He knows that alcohol will damage our liver, brain, social and personal life and so he made it haram. Allah Knows that meditation relieves so many problems and so He prescribed daily prayers. Allah knows that racism, poverty, health issues and other problems will exist and so He prescribed Hajj, Zakah and fasting. The most important point behind each and every rule of Allah is that it brings about overall benefit, ease and tranquillity in one’s life.

Allah says in the Quran about fasting:

> يُرِيدُ ٱللَّهُ بِكُمُ ٱلْيُسْرَ وَلَا يُرِيدُ بِكُمُ ٱلْعُسْرَ

“Allah intends for you ease and does not intend for you hardship” [2:185]

Knowing that Allah does not intend difficulty, but ease, should lead us to love our creator.

Second khutbah (English):

Love is a two-way relationship. At the beginning we mentioned that one can increase the love for Allah by knowing and applying the Attributes of Allah. You might ask the question; how do we earn the love of Allah? Is there a few things that I can do whereby Allah will also love me for? The good news is that there are so many ways to gain the love of Allah. For example, Allah describes the characteristics and traits that He loves. Allah says in the Quran,

> إِنَّ ٱللَّهَ يُحِبُّ ٱلتَّوَّٰبِينَ وَيُحِبُّ ٱلْمُتَطَهِّرِينَ

"Verily, Allah loves those who are ask for forgiveness and those who keep themselves pure" [2:222].

In another verse, Allah says,

> بَلَىٰ مَنْ أَوْفَىٰ بِعَهْدِهِۦ وَٱتَّقَىٰ فَإِنَّ ٱللَّهَ يُحِبُّ ٱلْمُتَّقِينَ

For verily, Allah loves those who are righteous" [3:76].

In another verse, Allah says,

> إِنَّ ٱللَّهَ يُحِبُّ ٱلْمُتَوَكِّلِينَ

"...Allah loves those who trust in Him" (3:159).

In another verse, Allah says,

> إِنَّ ٱللَّهَ يُحِبُّ ٱلْمُقْسِطِينَ

"...Allah loves those who are just" [5:42].

So, we can attain the love of Allah by incorporating some of those noble characteristics, such as asking for forgiveness, patience, fearing Allah, doing good deeds and trusting Allah.

Another way to love Allah is to follow the Prophet Muhammad. Allah says, Say,

> قُلْ إِن كُنتُمْ تُحِبُّونَ ٱللَّهَ فَٱتَّبِعُونِى يُحْبِبْكُمُ ٱللَّهُ وَيَغْفِرْ لَكُمْ ذُنُوبَكُمْ ۗ وَٱللَّهُ غَفُورٌ رَّحِيمٌ

“If you really love God then follow me (Muhammad) and God will love you and forgive you your sins and God is Most Forgiving and Most Merciful” (3:31).

We should spend some time during each weekend reading about the Prophet Muhammad (ﷺ). You can also listen to talks online and discuss amongst your friends. Discuss matters like what kind of food did the Prophet (ﷺ) have, what kind of sports was the Prophet (ﷺ) involved in, what kind of struggles did he go through just so then we can be Muslims today. Discuss some of the miracles and prophecies and other amazing aspects of the life of the Prophet (ﷺ). And then once we know about the Prophet (ﷺ) we should try our utmost best to follow his examples.

In conclusion, we should increase our love for Allah by getting to know Him more. We can also attain the love of Allah by having good characteristics and by following the best of creation, the Prophet Muhammad (ﷺ).

May Allah give us the Tawfeeq to love Him and to earn His love and therefore achieve His pleasure in Jannah.

#### Pack IV / Khutbah 5 — Reactions - The Four Types

First khutbah (English):

If someone said that they have never been through any difficulty then know that they are not telling the truth. Moreover, if someone said that they have never been through ease, then that is also not true. In fact, for the ordinary people, like you and me, we go through at least a few difficulties per day but the rest of it is easiness and comfort. No doubt, some difficulties are more challenging to deal with compared to others, just like some ease are more comforting then others. The big question is, as servants of Allah, how should we react to difficulty and ease?

Just before we answer that question, it is very important to know why Allah has created us, as this will help us navigate through the good and bad times of life. So why did Allah create us from nothing, give us a soul, bring us here on earth and make us Muslims? Have we been created to stay in the mosque all day? Have we been created to eat and sleep the whole day? Have we been created to not care about others? Have we been created to just do whatever we feel like? Have we been created in such a way that no matter what we do in this life, we are guaranteed Paradise? No, but rather, we have been created to enjoy worshipping Allah. Enjoy worshipping Allah in different ways, places, situations, and most importantly during ease and difficulty. Allah said,

> وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ

“And I have not created Jinns and Mankind except to worship me” [51:56].

So how should we react to hardship and ease? Broadly, there are four distinct categories of people in times of ease and hardship. Which of the four do you fit in? Or how much of each category do you exhibit on a regular basis?

The first category are those who turn to Allah during times of ease but ignore Him during times of difficulty. Allah said,

> وَمِنَ النَّاسِ مَنْ يَعْبُدُ اللَّهَ عَلَى حَرْفٍ فَإِنْ أَصَابَهُ خَيْرٌ اطْمَأَنَّ بِهِ وَإِنْ أَصَابَتْهُ فِتْنَةٌ انْقَلَبَ عَلَى وَجْهِهِ خَسِرَ الدُّنْيَا وَالْآخِرَةَ ذَلِكَ هُوَ الْخُسْرَانُ الْمُبِينُ

“And of the people is he who worships Allah on an edge; if he is touched by good, he is reassured by it, but if he is struck by trial, he turns on his face [to unbelief]. He has lost [this] world and the Hereafter. That is the clearest loss” [7:94].

Allah here is saying that some people’s love for Allah is so weak that if a difficulty was to be inflicted then this person would forgot about Allah. We see this sometimes in our own lives. During the winter season and when it is cold, will we go through the struggle to do wudu and pray in the cold? To be honest, with instant access to hot water and central heating system, we would not even feel cold. But the question is, will we guard our prayers no matter what? On Fridays, you might have to eat quickly or get cold lunch just so then you can come on time for Jumuah. Just because there is less time to have lunch, will you forget about Allah and miss Jumuah prayer?

The second category are those who turn to Allah during times of difficulty but ignore Him during times of ease. Allah said,

> وَإِذَا مَسَّ الْإِنْسَانَ الضُّرُّ دَعَانَا لِجَنْبِهِ أَوْ قَاعِدًا أَوْ قَائِمًا فَلَمَّا كَشَفْنَا عَنْهُ ضُرَّهُ مَرَّ كَأَنْ لَمْ يَدْعُنَا إِلَى ضُرٍّ مَسَّهُ

“Whenever adversity touches the human being, he prays to Us, reclining on his side, or sitting, or standing. But when We have relieved his difficulty from him, he goes away as though he had never called on Us for trouble that had afflicted him” [10:12].

Allah here is saying that some people connect with Allah only during challenging situations. To be honest, a lot of us might fall into this category. When someone dies, we start praying for a bit. But after a little while, we unfortunately stop. When students go through years 11 and 13, the two exam years, unfortunately some will probably pray the night before the results day and might give charity here and there, but after results day they forget Allah, they forget to pray and make Du’a to Allah. When people go for job interviews, they pray a bit and ask others to make Du’a for them, but straight after they get the job they forget to pray and give charity. We do not want to be like such people, but we want to be true servants of Allah that worship Allah regardless of how good or bad the situation is. We know there is a lot of reward in worshipping Allah before and after difficulties in life.

Second khutbah (English):

The third category, which is the worst of the four, are those who ignore and forget Allah during both times of ease and difficulty. Allah said,

> وَإِذَا أَنْعَمْنَا عَلَى الْإِنْسَانِ أَعْرَضَ وَنَأَى بِجَانِبِهِ وَإِذَا مَسَّهُ الشَّرُّ كَانَ يَئُوسًا

“When We grant people Our favours, they turn away, acting arrogantly. But when touched with evil, they lose all hope” [17:83].

Unfortunately, we find people like that on a daily basis. When something good happens, they say it is because of my intelligence, my hard work or it was pure luck. They do not see how it was Allah who gave them the blessing that they are enjoying. They do not acknowledge the fact that the intelligence came from Allah and that Allah is the One who created them with a brain, two eyes, hands and the rest of the body. Furthermore, when something bad happens, some people utter words like it is God’s fault, why did God create me. Once again this is not appropriate attitude for someone who worships Allah. As believers in Allah, we should have a positive mind-set and say that everything is a test from Allah and that I will try my best no matter what difficulty lies ahead of me. We should be careful not to fall into this category of forgetting Allah during both times of ease and difficulty.

The fourth category, which is the best category and one that we should all strive to be in, are those who turn to Allah during times of ease and difficulty. The example that can be given for this category is that of Prophet Yunus. Prophet Yunus would do a lot of good deeds during the days he was at ease. Sometime later, and we all know the story, he was in a very difficult situation whereby he found himself stuck in the belly of a whale. In that challenging environment, Yunus still connected to Allah and made Du’a to Allah and Allah saved him. Allah said about Prophet Yūnus,

> (144) فَلَوْلَا أَنَّهُ كَانَ مِنَ الْمُسَبِّحِينَ (143) لَلَبِثَ فِي بَطْنِهِ إِلَى يَوْمِ يُبْعَثُونَ

“And had he not been of those who glorified Allah, He would have remained inside its belly [i.e. of the whale] until the Day of Resurrection” [37:143-144].

So, Prophet Yunus remembered Allah during both difficult and easy times and this was the greatest reasons for his survival. In a similar manner, we should try our best to remember Allah when things are going well for us in school and outside school, as well as during times of difficulty. No doubt we will make mistakes here and there, which is why we should immediately ask Allah to forgive us.

In conclusion, there are four categories of people in times of ease and hardship; those who forget Allah at times of ease, those who forget Allah at times of difficulty, those who forget Allah at times of ease and difficulty, but then the special category of people who remember and worship Allah during times of ease and difficulty.

May Allah give us the Tawfeeq to remember and worship Him during times of ease and difficulty and may Allah give us the ability to overcome our weaknesses.

#### Pack IV / Khutbah 6 — Sabr - A Quality Of Success

First khutbah (English):

As Muslims we must possess very good qualities, they certainly include being respectful, kind, helpful, understanding and have patience. Our focus today will be on Sabr. The word Sabr is commonly translated as ‘patience’. But it also includes; forbearance, endurance, steadfastness, perseverance and restraint.

There are many Qur’anic verses and Hadith on Sabr, patience. This means that it is very important for us to practice Sabr. Allah says:

> أُو۟لَٰٓئِكَ يُجْزَوْنَ ٱلْغُرْفَةَ بِمَا صَبَرُوا۟ وَيُلَقَّوْنَ فِيهَا تَحِيَّةً وَسَلَٰمًا

“Those will be awarded the Chamber (in Paradise) for what they patiently endured, and they will be received therein with greetings and [words of] peace.” [25:75]

In another verse, Allah says,

> إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُم بِغَيْرِ حِسَابٍ

“Indeed, the patient will be given their reward without account” [39:10].

In both verses Allah is guaranteeing that those who are patient will be rewarded with Paradise. Subhanallah, Paradise just for something as simple as having Sabr, patience. Amazing is Allah’s generosity.

There are 3 major types of Sabr that we will focus on. When we go over each, I want us all to remember the reward of being patient, which, as we mentioned earlier, is Jannah.

The first type of Sabr is the ‘endurance Sabr’ which is required to fulfil the commands of Allah. For example; to perform Salah, you need endurance. Why? Because you need to do 5 prayers every single day and on time. For Fajr Salah, we need to make sure we wake up from our sleep, do Wudu in the cold and then sometimes pray when really most of the people are sleeping. Remember, the reward is Jannah.

The second type of Sabr is the ‘restraint Sabr’ which is required to stay away from the things Allah made Haram. For example, you need to restrain yourself when it comes to your tongue and therefore you should avoid swearing and backbiting. You need Sabr with your eyes. You should restrain your eyes and not look at Haram things. Remember, the reward is Jannah.

The third type of Sabr, is the ‘acceptance Sabr’ whereby you accept the decree of Allah. For example, even though you try your best, it may be that you get a bad result after doing a test. You need to accept the decree of Allah and not say why Allah did this to me. Moreover, a few times in life you will lose people who are close to you. Even then, you need to show Sabr, patience. You need to accept the decree and decision made by Allah. Now, no one is saying that it is easy to look at challenging life experiences in a positive manner; but like we said, the reward is Jannah. We often see people who are not practising or are far away from Allah, once something bad happens, such as someone passing away, they get close to Allah and start following Islam. We should not have to wait for a calamity to happen for us to get close to Allah.

So, to recap, the three types of Sabr are; endurance with doing what Allah has commanded to do, staying away from what Allah has made Haram and acceptance of the decree of Allah. In summary, we should show patience in as many situations as possible, with the hope of making Allah happy and consequently enter Jannah.

Second khutbah (English):

Allah created us in order to test us. Allah says:

> أَمْ حَسِبْتُمْ أَن تَدْخُلُوا۟ ٱلْجَنَّةَ وَلَمَّا يَأْتِكُم مَّثَلُ ٱلَّذِينَ خَلَوْا۟ مِن قَبْلِكُم ۖ مَّسَّتْهُمُ ٱلْبَأْسَآءُ وَٱلضَّرَّآءُ وَزُلْزِلُوا۟ حَتَّىٰ يَقُولَ ٱلرَّسُولُ وَٱلَّذِينَ ءَامَنُوا۟ مَعَهُۥ مَتَىٰ نَصْرُ ٱللَّهِ ۗ أَلَآ إِنَّ نَصْرَ ٱللَّهِ قَرِيبٌ

“Do you think you will be admitted into Paradise without being tested like those before you? They were afflicted with suffering and adversity and were so (violently) shaken that (even) the Messenger and the believers with him cried out, “When will Allah’s help come?” Indeed, Allah’s help is (always) near” [2:214].

From this verse it is clear that Allah will test people; some tests will be easy, and some will be hard. But the fact that Allah is testing us is a good sign. The Prophet Muhammad (ﷺ) said, “When Allah loves a servant, He tests him” [Tirmidhi]. We should not get angry and upset or think that Allah dislikes us, but rather, accept the situation, show Sabr and do everything within our ability to overcome the difficulty.

There are few ways we can build our level of patience in order to pass the various tests of life.

We should often make Du’a to Allah that He gives us the ability to be patient and that He tests us in ways that we will be able to pass the tests.

We should read and watch videos on the life of the Prophet Muhammad (ﷺ) and other Prophets. By doing this we will know what they went through and therefore mentally be prepared ourselves.

Always remember and find out more about the reward Allah has for those who show patience.

Surround yourselves with people who practice Sabr. At the end of the day, you pick up the habits of those you are around. So, if spend most of your time with those who complain about everything, then guess what, you will also do the same.

Read and watch other materials on how to build patience, endurance, perseverance and other similar qualities. You might find some good videos on techniques such as doing a count-down, meditating, self-talk and others. So, spend some time practising this.

In conclusion, Sabr is one of the key qualities of a believer. It is so vital that Allah guarantees Paradise for those who regularly show patience. No one is perfect and therefore we should find different ways to build our patience.

May Allah give us the Tawfeeq to increase our level of patience and overcome the various challenging situations we find ourselves in.

#### Pack IV / Khutbah 7 — Sacrifice - Get Something Better

First khutbah (English):

I need all of us to think of someone you love, respect, want to be like and will do anything if that person tells you to do. For some of us it might be our parents; we love our parents so much that if they tell us to leave something, we will. For some people it might be a football player; if Ronaldo specifically mentioned your name and told you to stop smoking you probably will do it. For some, if a famous actor or the richest man on earth or any other legendary person says to stop doing something bad, then most likely the person will leave it.

Now what if the Creator of you, me, our parents, the king of Dubai and the richest man on earth, Allah (سبحانه و تعالى), tells us to do something, will we do it? What if Allah tells us to leave something, will we do it? What if Allah tells us to leave something and He will give something better in return, will we do it? The Prophet (ﷺ) has given us the good news my brothers. The Prophet (ﷺ) said, “Verily, you will never leave anything for the sake of Allah Almighty, but that Allah will replace it with something better” [Ahmed].

All of us are on the same journey in this life. A journey to earn the Mercy of Allah and be admitted into Jannah. On this journey there will be many distractions; the distraction will try to deviate our pursuit to obey Allah and earn His Mercy. We all know our own distractions. They may be things that Allah has made Haram, such as looking at Haram, listening to Haram, engaging in impermissible relationships, wasting time in games for hours and not caring about prayer and obedience to your parents. It is upon us, O servants of Allah, to reduce these distractions, slowly, one after the other. For who? For the sake of Allah.

You might be thinking, I really want to leave some bad things that I do, but how do I let things go? A person can leave something bad using one of two methods; either by feeling motivated due to the reward of leaving something bad or fearing the punishment of doing the bad action. In terms of the reward of leaving something for the sake of Allah, as we said before, Allah promises us to get something better as a replacement. The Prophet (ﷺ) said, “Verily, you will never leave anything for the sake of Allah Almighty, but that Allah will replace it with something better” (Ahmed).

As explained by the Hadith, you really need to give it up for the sake of Allah with the reward in mind. The main reason should not be due to money, comfort, health, family status or what the people will say. The primary reason should be due to the love of Allah. Ibn Qayyim said that the reason why people find it difficult to stay away from haram is because they do not really leave it for the sake of Allah.

Remember, if you leave a sin for the sake of Allah, Allah promises to replace it with something much better. Better in the Dunya and better in the Akhirah. And you do not need to worry, if Allah promises something, He will fulfill it. The story of Yusuf demonstrates how Allah gives something better when one leaves something for the sake of Allah. Yusuf was seduced by the wife of the king. Instead of giving in, Prophet Yusuf remained steadfast and as a result Allah made him the finance minister of Egypt. So, from being a servant, Allah made him the finance minister of the country. The take home message is that if we leave anything for the sake of Allah then Allah will replace it with something better.

In a Hadith, the Prophet (ﷺ) said, “Whoever gives up argument when he is in the right, a palace will be built from him in the middle of Paradise” (Ibn Majah). Imagine that, giving up something as simple as arguments for the sake of Allah will earn you Paradise.

Second khutbah (English):

We said that a person can leave something bad using one of two methods; either by feeling motivated due to the reward of leaving something bad or fearing the punishment of doing the bad action. If the reward does not motivate you to leave something for the sake of Allah, then the punishment is there to act as a deterrent and help us leave the bad things for Allah’s sake.

Jahannam is made for those who fail to leave something bad for the sake. There are many Hadith about how people will be punished for persistently committing sins. There are severe punishments for those who lie, cheat, swear, backbite, slander, miss prayer, do not respect parents, harm others and live a useless life. Just by reading some of the punishments of hell should help us leave bad things for the sake of Allah.

In another Hadith, the Prophet (ﷺ) said, “whoever drinks alcoholic drinks in this world and does not repent, he will be deprived of it in the hereafter” [Bukhari]. So, Paradise will be forbidden for the one who cannot, for the sake of Allah, stay away from consuming alcohol. The general message is clear, if you do not give up bad things for the sake of Allah, then know that there are punishments associated with that decision.

Remember that one day you will stand before Allah, where your good deeds will be weighed up against your wrongdoings. Allah says,

> فَأَمَّا مَن ثَقُلَتْ مَوَازِينُهُ ﴿٦﴾ فَهُوَ فِي عِيشَةٍ رَّاضِيَةٍ ﴿٧﴾

> وَأَمَّا مَنْ خَفَّتْ مَوَازِينُهُ ﴿٨﴾ فَأُمُّهُ هَاوِيَةٌ ﴿٩﴾

Then as for one whose scales are heavy [with good deeds], (6) He will be in a pleasant life. (7) But as for one whose scales are light, (8) His refuge will be an abyss [101:6-9].

No one is saying that you can change your bad habits overnight, it takes time. You will have to make small changes, make Du’a to Allah, start having good friends and most importantly know that Allah will give you something better in return. A motivational speaker once said; we must all suffer from one of two pains: the pain of discipline or the pain of regret. So, do you want to suffer a bit and let go of the bad things in life or do you want to suffer in Hell.

To summarise, all of us have distractions, whether they be looking at haram, listening to Haram, engaging in impermissible relationships and others. We should leave these things for the sake of Allah, as the Prophet (ﷺ) said, “Verily, you will never leave anything for the sake of Allah Almighty but that Allah will replace it with something better”[Ahmed].

We ask Allah to give us the Tawfeeq to decrease the number of distractions in our lives and to forgive our sins and mistakes.

#### Pack IV / Khutbah 8 — Shukr – The Life Of A Believer

First khutbah (English):

Allah has blessed us in abundance, and it would be impossible to count all of the blessings. If we look at the body, Allah has blessed the humans with 30 trillion cells. Imagine if we had had only 10 trillion cells; maybe we would have just one eye instead of two, one hand instead of two, one leg instead of two. Life would be very difficult if did not have everything we currently possess. If you then zoom and look at the environment, there are around 40 billion trees. Imagine if there were just 10 billion trees; maybe the amount of oxygen released would not have been enough to sustain life. Even though we just mentioned two types of blessings of Allah, the number of cells in our body and the number of trees on Earth, the truth is that there are a lot of blessings surrounding us and we cannot count them. Allah says,

> وَإِن تَعُدُّوا نِعْمَةَ اللَّهِ لَا تُحْصُوهَا ۗ إِنَّ اللَّهَ لَغَفُورٌ رَّحِيمٌ

“And if you count the favours of Allah, you could not enumerate them. Indeed, Allah is Forgiving and Merciful” [16:18].

Not all blessings are visible to the eye; some are apparent, and others are hidden.

> .… وَأَسْبَغَ عَلَيْكُمْ نِعَمَهُ ظَاهِرَةً وَبَاطِنَةً …

“ …. and bestowed upon you His blessings, [both] apparent and hidden?” [31:20].

So, what should we do given that Allah has given us blessings after blessings? We should do Shukr which means we should be thankful and grateful to Allah. We can see Shukr in all of the lives of the Prophets. Prophet Sulayman had a lot of blessings. There is one blessing which was just for him and that was to interact and control the different types of animals and Jinns. Prophet Sulayman, with the permission of Allah, would get the Jinns to transport a big throne from one country to another within the blink of an eye. The question for us is how did Sulayman respond to all the blessings? Did he say I am the chosen one and I can do whatever I want? Did he say I will use this blessing however I wish? Did he say I am the one who earned it because I worked hard for it? No, but rather Prophet Sulayman did Shukr to Allah and he said the blessings are from Allah. Prophet Sulayman said,

> قَالَ هَـٰذَا مِن فَضْلِ رَبِّي لِيَبْلُوَنِي أَأَشْكُرُ أَمْ أَكْفُرُ  ….

“… This is from the favour of my Lord to test me whether I will be grateful or ungrateful” [27:40].

So, Prophet Sulayman is saying that all of the blessings are a test to see how much Shukr he does. The questions to myself and you brothers is, how much Shukr are we doing for the blessings that we have? Do we say Alhamdulillah after we eat? Do we use our healthy body to just pray for few minutes a day? Do we use our social media, which no doubt is a blessing, to promote good?

One may ask, is Shukr just verbal? Is it enough to say thank you oh Allah? The answer is that Shukr should to be felt in the heart, uttered by the tongue and demonstrated physically by the limbs. One needs to be grateful internally, with the heart and the mind. We need to internally love Allah and internally think good of Allah. Shukr also needs to be uttered verbally. Allah says,

> وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ

“But as for the favour of your Lord, narrate it” [93:11].

Here Allah is instructing us to tell people about the blessings Allah has given us. Alhamdulillah, amongst the greatest, if not the greatest blessing is that Allah has made us Muslims. Imagine if we were to follow a different religion and worship cows, trees, fire, and other things. Alhamdulillah, we have food and good health. Majority of the world population are living in dire poverty. Imagine living life without two eyes, two hands, two legs, without a brain. So, we should tell people the blessings and remind everyone of their blessings as well.

Furthermore, Shukr, gratitude should be demonstrated physically. It is not enough to verbally say Alhamdulillah only, we have to physically show it. How? Through prayer, through physically respecting the elders when they walk past us, by looking after the younger ones and being a good role model for them, through physically helping our parents; whether it is during shopping or just normal chores in the house.

Prophet Dawud had so many blessings. One of the blessings was that when Prophet Dawud would recite the Psalm, the mountains and birds would miraculously join in and recite with Dawud. With all the blessings, Allah orders Prophet Dawud by saying,

> اعْمَلُوا آلَ دَاوُودَ شُكْرًا ۚ وَقَلِيلٌ مِّنْ عِبَادِيَ الشَّكُورُ

“….. Work, O family of David, in gratitude. And few of My servants are grateful”. [34:13]. Allah is telling Prophet Dawud, and indirectly all of us, to physically show Shukr (gratitude) and not just verbally.

One of the greatest benefits and reward of doing Shukr is that Allah will be pleased with you. Allah says,

> وَإِن تَشْكُرُوا يَرْضَهُ لَكُم

“And if you are thankful, Allah’s Pleasure will be on you” [39:7]. Subhanallah, we will earn Allah’s happiness if we continuously do Shukr. So, when we do our prayers, help others, recite the Quran, read the life of our Prophet Muhammad (ﷺ), make the intention that you are doing them out of Shukr to Allah.

Second khutbah (English):

I know it is difficult to do Shukr and be grateful when things are challenging and tough. When you feel low and sad, it is very difficult to be positive, but we all want to return to an average level of happiness, right? Well, still try out Shukr. What do I mean by, still try out Shukr? Even if you are deprived of few things, say Alhamdulillah and be grateful because you and I know very well that we still have a lot. You and I know very well that Alhamdulillah Allah has given us hundreds of other things even if He deprived us of a few. To be honest, what we have is what others dream to have.

When people go to psychologist and therapists to receive help for severe depression, low self-esteem and other related conditions, one of the activities the therapists do is tell the people to make a list of all the good things in their life. The therapists then train the people to internally and externally be grateful for all the good in life. Be grateful for your health, ease of life, delicious food, intelligence, technology, cars, safety and other aspects of life. Subhanallah, Allah has given us this advice of being grateful for free and so let us practice doing Shukr and being appreciative during times of ease and difficulty.

If I was to ask, if you had the option between eating a nice meal and doing Shukr or fasting and showing patience, which one would we go for? Obviously we will go for eating and showing Shukr. No one wants to be hungry and suffer from fatigue. There is an amazing Hadith in which the Prophet (ﷺ) said, “The one who eats and is grateful reaches the status of the one who fasts and is patient” [Tirmidhi]. So just by perfecting one’s thankfulness, he or she can get the same reward as the one who is hungry and patient. Subhanallah, amazing reward for the one who shows true gratitude to Allah. And remember, for every difficulty, illness and problem that we face, there is some else who is facing a greater challenge. You just need to listen to the news about the wars, famine, diseases, oppression, deaths occurring around the world.

In conclusion, Allah has showered us with blessings, and we should be grateful and thankful to Him with our hearts, tongues and body. May Allah give us the Tawfeeq to be grateful in all situations and may Allah accept our good deeds and give us the ability to do more.

#### Pack IV / Khutbah 9 — Wudu – Its Secrets and Rewards

First khutbah (English):

Do you know what the first act of worship which Allah legislated and taught to our Prophet Muhammed (ﷺ)? What was the first ritual that was legislated in Islam? Some might say Salah or Zakah or Tasbeeh or Dua. It is actually Wudu. After the second revelation, which is the verse يٰۤاَيُّهَا الۡمُزَّمِّلُ, Angel Jibreel came to the Prophet (ﷺ) and spent a day with him and he taught the Prophet (ﷺ) Wudu and then Salah. So, in one day, Jibreel taught how to wash the different body parts and then how to pray. Wudu is a topic that is very important in our religion and so we should spend some time researching its significance and rewards.

The command to do wudu before prayer has been mentioned only once in the Quran. Allah says,

> يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا قُمْتُمْ إِلَى الصَّلَاةِ فَاغْسِلُوا وُجُوهَكُمْ وَأَيْدِيَكُمْ إِلَى الْمَرَافِقِ وَامْسَحُوا بِرُءُوسِكُمْ وَأَرْجُلَكُمْ إِلَى الْكَعْبَيْنِ

“O you who have believed, when you rise to [perform] prayer, wash your faces and your forearms to the elbows and wipe over your heads and wash your feet to the ankles …” [5:6].

Here Allah has connected belief with Wudu and Salah. The scholars say that a person who does Wudu and prays is outwardly demonstrating his belief in Allah.

Now let us go over some of the benefits of doing Wudu. One of the benefits of doing Wudu is that it removes sins. The Prophet Muhammad (ﷺ) said, “When a believer washes his face, every sin which he committed with his eyes, will be washed away from his face with water, when he washes his hands, every sin which is committed by his hands will be effaced from his hands with the water; and when he washes his feet, every sin his feet committed will be washed away with the water; until he finally emerges cleansed of all his sins.” [Muslim]. Subhanallah, Allah is giving us easy opportunity to get rid of all of our sins. No one can say that they do not commit sins. In fact, we commit sins between one prayer to the next. But by doing Wudu for each prayer, we are technically washing away the sins we end up committing during the course of the day.

Another benefit of doing wudu is that it is one of the actions that, if sincerely done, will earn you a place in Paradise. Yes, that is right, something as simple as sincere regular wudu and prayer can earn you Paradise. Our Prophet (ﷺ) said to a companion called Bilal, ‘Oh Bilal, when I visited Jannah, I heard your flip flops already there in Jannah, how you got there, what are you doing?’ Bilal famously said that I don’t know anything except that every time I break my Wudu, I stand up and do Wudu and pray two rakah’. This shows that constantly being in the state of Wudu will lead to entering Jannah and having a high position in Jannah.

The day of Judgement is a very tough day. On this day people will not be able to help each other because everyone will be concerned with their own deeds; a child will not be able help his parents, a friend will not be able to help even his own best friend. The whole of humanity will be running from one place to another. People will be hungry, thirsty, tired and scared. However, on the Day of Judgment, with the permission of Allah, our Prophet Muhammad (ﷺ) will be able to help us and will give his followers water to drink. But there will be billions of people on that day and so how will the Prophet Muhammad (ﷺ) recognise us? This question was answered by the Prophet Muhammad (ﷺ) himself. He said “They (my followers) will come with bright faces and white limbs because of Wudu; and I will arrive at the Haud (Al-Kauthar) ahead of them.” [Muslim]. So, my brothers, Wudu will help you in the afterlife as well, so let us keep on doing Wudu, at least few times a day.

Second khutbah (English):

We all want to please Allah, right? There are some actions that are more beloved to Allah than others. Our Prophet (ﷺ) said “the most beloved of deeds to Allah is that which is constant but small” (Bukhari). Wudu is small, but if we do it regularly, we shall Insha’Allah attain the love of Allah in this world and the hereafter.

Paradise has 8 gates and so there are multiple ways to enter Jannah. If someone is regular with his prayer then we hope that he will enter Paradise through the gate of Prayer. If someone gives charity regularly then we hope that he will enter Paradise through the gate of charity. If someone obeys and looks afters their parents then we hope that he will enter Paradise through the gate titled kindness to parents. However, to emphasise the immense reward associated with doing Wudu, the Prophet (ﷺ) actually said that all the gates will open up for the one who regularly does Wudu. The Prophet said, “Whoever of you performs Wudu carefully and then affirms: `Ash-hadu an la ilaha illallahu Wahdahu la sharika Lahu, wa ash-hadu anna Muhammadan `abduhu wa Rasuluhu [I testify that there so no true god except Allah Alone, Who has no partners and that Muhammad is His slave and Messenger],’ the eight gates of Jannah are opened for him. He may enter through whichever of these gates he desires (to enter)” [Muslim]. Subhanallah, this Hadith coupled with the other ones should really make us want to do Wudu regularly. I know doing Wudu can be difficult in some situations, for example in a school environment or when it is cold. However, this struggle is not new and thousands of people before you went through it. In fact, 1400 years ago when the commandment to do Wudu was revealed, there was no central heating. The Prophet Muhammad (ﷺ) and his companions would do water with cold water. We have a central heating system and so we can do wudu comfortably. However, when laziness does kick in, then we should remind ourselves of the reward associated with Wudu.

In conclusion, Wudu is one of the important rituals in Islam. Next time when you are standing in front of the sink and doing Wudu, remind yourself that your sins are being washed away, this is how our Prophet (ﷺ) will recognise us and that the Wudu will help us enter through the gates of Paradise. We need to increase in our knowledge about Wudu and other rituals in Islam. The one who studies Islam begins to enjoy Islam. The one who studies how to worship Allah will begin to enjoy the worship of Allah.

May Allah us the Tawfeeq to perfect our Wudu, be recognised by the Prophet (ﷺ) on the day of Judgement and allow us to enter Paradise.

#### Pack IV / Khutbah 10 — Hard Heart – How To Soften It

First khutbah (English):

The heart is the most important organ in our body, and it needs to be in the correct state for us to be successful. We also have our spiritual heart which must also be in the correct state to be successful in the Dunya and in the Akhira. The Prophet Muhammad ﷺ said: “In the body there is a piece of flesh, if it is sound (or good), the whole body is sound (or good). If it is corrupted, the whole body is corrupted. Indeed, it is the heart” [Bukhari].

People spend a lot of time on their outer appearance; everyone wants to look nice and there is nothing wrong with that. The issue is when you focus on the outer look so much that you forget about the inner state. You forget about the state of the spiritual heart itself. A lot of the spiritual diseases, such as hatred, arrogance and jealousy, stem from a diseased heart. Furthermore, a corrupted heart also reduces your relationship with Allah.  This is why the Messenger of Allah (ﷺ) said: “Allah does not look at your figures, nor at your clothing but He looks at your hearts [and deeds]” [Muslim]. So we need to work on the state of our heart and the rest will follow InshaAllah.

In this Khutbah, we will discuss two things; the causes of a hard heart and how to cure it. It must be emphasised right from the beginning that no one is perfect and that the battle to have a soft and clean heart is something that everyone is struggling with and really will finish when one dies. Also, know that out, even if you find yourself with a hard heart, know that, out of the Mercy of Allah, it is very easy to switch to the other side.

The causes of a hard heart are many, but it can be summarised into the things that displease Allah. So every time you do something, ask yourself will it will upset Allah. If the answer is yes then know that that thing is bad and it will cause your heart to harden. Allah says,

> كَلَّا بَلْ رَانَ عَلَىٰ قُلُوبِهِم مَّا كَانُوا۟ يَكْسِبُونَ

“No indeed! Their hearts have been stained by all the evil they used to commit!” [83:14].

The consequence of not doing anything about a heard heart is that Allah will, slowly, slowly, remove peace from your life. Allah says,

> وَمَنْ أَعْرَضَ عَن ذِكْرِي فَإِنَّ لَهُ مَعِيشَةً ضَنكًا وَنَحْشُرُهُ يَوْمَ الْقِيَامَةِ أَعْمَىٰ

“But whoever turns away from My Reminder will certainly have a miserable life, then We will raise them up blind on the Day of Judgment” [20:124].

The heart is like an empty vessel it is filled with what we see, what we hear, what we eat, and what we smell. Every sin that we commit leaves a mark on the heart, till it eventually hardens. None of us would want to live a miserable life and therefore we should research the different diseases of the heart and then find ways to cure the ones you are suffering from.

Second khutbah (English):

In the first part of the Khutbah we mentioned that anything that displeases Allah causes are hearts to be hard. Now we will mention few specific ways to cure a hard heart. Firstly, we must monitor our spiritual heart to see the state it is in. Is it soft or hard? This means knowing our strengths and weaknesses, how important is Allah and his Messenger Muhammad (ﷺ) to you, are you doing the Islamic duties, how often do you think of Allah and turn to him? These are some important questions we must ask ourselves.

And then you can make a list of a few major things you need to do. So if you are not performing Salah, reciting the Qur’an, attending Islamic lectures or gatherings, then make some realistic plan in doing them. Check the mosque calendar and see when the prayer times are and tell yourself I will spend just 5-7 minutes per Salah. Maybe spend just 4-5 minutes reciting and reading the meaning of the Quran. It would also be ideal to physically attend at least one programme at your local mosque and if there isn’t any then you should attend at least one prayer in the mosque. By being in good gatherings you will make good friends, and this will help you develop good habits. If you are suffering from arrogance or jealousy then you should listen to some Islamic talks on these issues. Maybe on the way to school you can. Maybe at the end of the day, just before you go to sleep, you make certain Duas and do few Istighfaar and spend few seconds thinking about the hereafter and meeting Allah. This will definitely soften one’s heart.

There is actually so much one can practically do to soften the heart. I know at the beginning doing these things can be a bit challenging, but if you do it consistently then it will be part of your routine and it will be very easy to do. Ultimately remember that it will bring peace to your heart and mind. Allah says,

> أَلَا بِذِكْرِ ٱللَّهِ تَطْمَئِنُّ ٱلْقُلُوب

“Verily in the remembrance of Allah do hearts find peace” [13:28].

The general rule of life is that if you want something then you have to work for it. So if we want long term peace in our lives then we need to work hard for it. The good news is that Allah promises us that He will help us find the long-term peace if you want it and work hard for it. Allah says,

> وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا ۚ وَإِنَّ اللَّهَ لَمَعَ الْمُحْسِنِينَ

“As for those who strive hard in Us (Our Cause), We will surely guide them to Our Paths. And verily, Allah is with the good doers" [29:69].

May Allah give us all the Tawfeeq to remember him often so that our hearts become soft and may Allah give us the ability to overcome any physical and spiritual challenges we go through.
