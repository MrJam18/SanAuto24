// По г. Москва поездка в одну сторону
const moscow = '3000 р.';
// "Туда-обратно" Москва
const moscowFull = '4500 р.';
// Поездка за МКАД
const MKAD = 'от 3 000 р. + 50 р/км';
// "Туда-обратно"
const MKADFull = 'от 4 500 р. + 50 р/км';
// Ожидание
const waiting = '400 р.*';
// Превышение 1 часа ожидания
const waitingExcess = '400р/30мин';
// Доплата за работу в ночное время с 22:00 до 06:00
const night = '500 р.';
// Встреча / проводы аэропорт
const airport = '4500 р.';
// Встреча / проводы вокзал
const railway = '3 500 р.';



// не удалять!
export const priceList = [
    {id: 'moscow', price: moscow},
    {id: 'moscowFull', price: moscowFull},
    {id: 'MKAD', price: MKAD},
    {id: 'MKADFull', price: MKADFull},
    {id: 'waiting', price: waiting},
    {id: 'waitingExcess', price: waitingExcess},
    {id: 'night', price: night},
    {id: 'airport', price: airport},
    {id: 'railway', price: railway},
]


