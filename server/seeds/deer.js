exports.seed = (knex) => {
  return knex('deer').insert([
    { id: 1, deer_img: 'https://unsplash.com/photos/favQn8WgRyk' },
    { id: 2, deer_img: 'https://unsplash.com/photos/B8xmtKWLrVo' },
    { id: 3, deer_img: 'https://unsplash.com/photos/NIyqowE5aDE' },
    { id: 4, deer_img: 'https://unsplash.com/photos/WHrwb43vH9E' },
    { id: 5, deer_img: 'https://unsplash.com/photos/WHrwb43vH9E' },
    { id: 6, deer_img: 'https://unsplash.com/photos/F0dmGPe2KG0' },
    { id: 7, deer_img: 'https://unsplash.com/photos/3FjIywswHSk' },
    { id: 8, deer_img: 'https://unsplash.com/photos/MlmN7bHBhE4' },
    { id: 9, deer_img: 'https://unsplash.com/photos/ftXYnqwAKcc' },
    { id: 10, deer_img: 'https://unsplash.com/photos/dncH5ywp9Uc' }
  ])
}
