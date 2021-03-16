$(document).ready(function () {
        console.log('weekly-calendar.js work');
        let bookingCalendar = new Vue({
            el: '#weekly-calendar',
            data: {
                month: new Date().getMonth(),
                year: new Date().getFullYear(),
                dFirstMonth: '1',
                timeZones: [],
                day: ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"],
                monthes: ["January", "Февраль", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                date: new Date(),
                weekNumber: null,
                dateInterval: null,
            },
            beforeMount: function () {
                Date.prototype.getWeek = function () {
                    var onejan = new Date(this.getFullYear(), 0, 1);
                    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
                } // возвращает номер недели
                this.weekNumber = ((new Date()).getWeek() - 1);
            },

            methods: {
                DateOfMondayInWeek(year, weekNumber) {
                    for (var a = 1; ; a++) if ((new Date(year, 0, a)).getDay() == 1) break;
                    a += (weekNumber - 1) * 7;
                    return (new Date(year, 0, a))
                },
                weekCalendar: function () {
                    let numOfDayInMonth = new Date(this.year, this.month + 1, 0).getDate(); // число дней в текущем мес
                    let week = [];
                    let w = 0;
                    week[w] = [];
                    let dayInCurrentWeek = this.DateOfMondayInWeek(this.year, this.weekNumber).getDate();
                    for (let i = dayInCurrentWeek; i <= dayInCurrentWeek + 6; i++) {
                        let a = {index: i};
                        if (i <= numOfDayInMonth) {
                            week[w].push(a);
                        }
                        if (i > numOfDayInMonth) {
                            a = {index: i-numOfDayInMonth};
                            week[w].push(a);
                            // week[w].push(i - numOfDayInMonth);
                        }
                        if (i === new Date().getDate() && this.year === new Date().getFullYear() && this.month === new Date().getMonth()) {

                            a.current = '#25eeee';
                        }
                    }
                    console.log(week);
                    // console.log(week[w][0] + ' - ' + week[w][6]);
                    this.dateInterval = week[w][0] + ' - ' + week[w][6];
                    return week;
                },
                decrease: function () {
                    this.weekNumber--;
                    this.month = this.DateOfMondayInWeek(this.year, this.weekNumber).getMonth();
                    console.log(this.month);
                    console.log(this.weekNumber);
                    if (this.weekNumber === 0) {
                        this.weekNumber = 52
                        this.year--;

                    }
                },
                increase: function () {
                    this.weekNumber++;
                    this.month = this.DateOfMondayInWeek(this.year, this.weekNumber).getMonth();
                    console.log(this.weekNumber);
                    if (this.weekNumber === 52) {
                        this.weekNumber = 1;
                        this.year++;
                    }
                },
            },
        });
});

