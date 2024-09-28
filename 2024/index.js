/* イベント詳細の表示切替 */
const event_detail = document.getElementById('event_detail');
const detail_close = document.getElementById('detail_close');

detail_close.addEventListener('click', () => {
    event_detail.style.display="none";
    detail_keynote.style.display="none";
    detail_talk1.style.display="none";
    detail_talk2.style.display="none";
    detail_talk3.style.display="none";
    detail_talk4.style.display="none";
    detail_talk5.style.display="none";
    detail_talk6.style.display="none";
    detail_talk7.style.display="none";
    detail_workshop1.style.display="none";
    detail_workshop2.style.display="none";
    detail_workshop3.style.display="none";
});

const keynote = document.getElementById('keynote');
const detail_keynote =document.getElementById('detail_keynote');

const talk_1 = document.getElementById('talk_1');
const detail_talk1 =document.getElementById('detail_talk1');
const talk_2 = document.getElementById('talk_2');
const detail_talk2 =document.getElementById('detail_talk2');
const talk_3 = document.getElementById('talk_3');
const detail_talk3 =document.getElementById('detail_talk3');
const talk_4 = document.getElementById('talk_4');
const detail_talk4 =document.getElementById('detail_talk4');
const talk_5 = document.getElementById('talk_5');
const detail_talk5 =document.getElementById('detail_talk5');
const talk_6 = document.getElementById('talk_6');
const detail_talk6 =document.getElementById('detail_talk6');
const talk_7 = document.getElementById('talk_7');
const detail_talk7 =document.getElementById('detail_talk7');

const workshop_1 = document.getElementById('workshop_1');
const detail_workshop1 = document.getElementById('detail_workshop1');
const workshop_2 = document.getElementById('workshop_2');
const detail_workshop2 = document.getElementById('detail_workshop2');
const workshop_3 = document.getElementById('workshop_3');
const detail_workshop3 = document.getElementById('detail_workshop3');

keynote.addEventListener('click', () => {
    event_detail.style.display="block";
    detail_keynote.style.display="block";
});

talk_1.addEventListener('click', () => {
    event_detail.style.display="block";
    detail_talk1.style.display="block";
});

talk_2.addEventListener('click', () => {
    event_detail.style.display="block";
    detail_talk2.style.display="block";
});

talk_3.addEventListener('click', () => {
    event_detail.style.display="block";
    detail_talk3.style.display="block";
});

talk_4.addEventListener('click', () => {
    event_detail.style.display="block";
    detail_talk4.style.display="block";
});

talk_5.addEventListener('click', () => {
    event_detail.style.display="block";
    detail_talk5.style.display="block";
});

talk_6.addEventListener('click', () => {
    event_detail.style.display="block";
    detail_talk6.style.display="block";
});

talk_7.addEventListener('click', () => {
    event_detail.style.display="block";
    detail_talk7.style.display="block";
});

workshop_1.addEventListener('click', () => {
    event_detail.style.display="block";
    detail_workshop1.style.display="block";

});

workshop_2.addEventListener('click', () => {
    event_detail.style.display="block";
    detail_workshop2.style.display="block";
});

workshop_3.addEventListener('click', () => {
    event_detail.style.display="block";
    detail_workshop3.style.display="block";
});