const date = new Date();

const viewYear = date.getFullYear();
const viewMonth = date.getMonth();

document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth + 1}월`;

const lastmonth = new Date(viewYear, viewMonth, 0);
const nextmonth = new Date(viewYear, viewMonth + 1, 0);

const lmDate = lastmonth.getDate();
const lmDay = lastmonth.getDay();

const nmDate = nextmonth.getDate();
const nmDay = nextmonth.getDay();

const lastdates = [];
const thisDates = [...Array(nmDate + 1).keys()].slice(1);
const nextdates = [];

if (lmDay !== 6) {
    for (let i = 0; i < lmDay + 1; i++) {
        lastdates.unshift(lmDate - i);
    }
  }

  for (let i = 1; i < 7 - nmDay; i++) {
    nextdates.push(i);
  }

  const dates = lastdates.concat(thisDates, nextdates);

const firstDateIndex = dates.indexOf(1);
const lastDateIndex = dates.lastIndexOf(nmDate);

dates.forEach((date, i) => {
  const condition = i >= firstDateIndex && i < lastDateIndex + 1
                    ? 'this'
                    : 'other';

  dates[i] = `<div class="date"><span class="${condition}">${date}</span></div>`;
})
document.querySelector('.dates').innerHTML = dates.join('');

dates.forEach((date, i) => {
  dates[i] = `<div class="date">${date}</div>`;
})



