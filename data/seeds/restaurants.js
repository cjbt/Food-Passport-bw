exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurants')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('restaurants').insert([
        {
          id: 1,
          name: "Roscoe's Chicken and Waffles",
          meal: 'Fried Chicken',
          comment: "I'm not used to having maple syrup on my chicken",
          city_id: 1
        },
        {
          id: 2,
          name: "Denny's",
          meal: 'American',
          comment: 'I only became a senior software engineer for the discounts',
          city_id: 1
        },
        { id: 3, name: 'Vero', meal: null, comment: null, city_id: 2 },
        { id: 4, name: 'Tacovore', meal: null, comment: null, city_id: 2 },
        { id: 5, name: "Phil's BBQ", meal: null, comment: null, city_id: 3 },
        { id: 6, name: 'Searsuckers', meal: null, comment: null, city_id: 3 }
      ]);
    });
};
