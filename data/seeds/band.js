
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bands').del()
    .then(function () {
      // Inserts seed entries
      return knex('bands').insert([
        {id: 1, band_name: 'BTS', years_active: 6 ,hit_song: 'DNA'},
        {id: 2, band_name: 'Red Velvet', years_active: 5 ,hit_song: 'Dumb Dumb'},
        {id: 3, band_name: 'Blackpink', years_active: 3 ,hit_song: 'Whistle'},
        {id: 4, band_name: '2NE1', years_active: 7 ,hit_song: 'I Am The Best!'},
        {id: 5, band_name: 'band1', years_active: 6 ,hit_song: 'Song1'},
        {id: 6, band_name: 'band2', years_active: 6 ,hit_song: 'Song2'},
        {id: 7, band_name: 'band3', years_active: 6 ,hit_song: 'Song3'},
        {id: 8, band_name: 'band4', years_active: 6 ,hit_song: 'Song4'},
        {id: 9, band_name: 'band5', years_active: 6 ,hit_song: 'Song5'},
        {id: 10, band_name: 'band6', years_active: 6 ,hit_song: 'Song6'},
        {id: 11, band_name: 'band7', years_active: 6 ,hit_song: 'Song7'},
        {id: 12, band_name: 'band8', years_active: 6 ,hit_song: 'Song8'},
        

      ]);
    });
};
