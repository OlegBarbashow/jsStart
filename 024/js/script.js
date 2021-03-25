"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '0');
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '0');
        }
    },

    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Один из последних просмотренных фильмов?', ''),
                b = +prompt('На сколько оцените его?', '0');
            if (a != "" && b != "" && a != null && b != null && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },

    writeYourGenres: function() {
        let genres = '';
        for(let i = 1; i <= 3; i++) {
            genres = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genres === null || genres === '') {
                console.log("Вы ввели не корректные данные или вовсе их не ввели");
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genres;
            }
        }
        personalMovieDB.genres.forEach((item, index) => {
            console.log(`Любимый жанр #${index + 1} - это ${item}`);
        });

    },

    writeYourGenresComma: function() {
        let genres = '';
        for(let i = 1; i <= 2; i++) {
            genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
            if (genres === null || genres === '') {
                console.log("Вы ввели не корректные данные или вовсе их не ввели");
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, index) => {
            console.log(`Любимый жанр #${index + 1} - это ${item}`);
        });

    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

// personalMovieDB.start();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectPersonalLevel();

personalMovieDB.writeYourGenres(personalMovieDB);

// personalMovieDB.toggleVisibleMyDB();

personalMovieDB.showMyDB(personalMovieDB.privat);
