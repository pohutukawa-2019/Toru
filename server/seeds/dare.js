exports.seed = (knex) => {
  return knex('dare').insert([
    { id: 1, dare_prompt: 'Talk in an accent for the next 3 rounds.' },
    { id: 2, dare_prompt: 'Eat five spoonfuls of a condiment.' },
    { id: 3, dare_prompt: 'Do the worm.' },
    { id: 4, dare_prompt: 'Belly dance like your life depended on it.' },
    { id: 5, dare_prompt: 'Drink a small cup of a concoction that the group makes. (Don’t make anything that might cause bodily harm. No visits to the emergency room.).' },
    { id: 6, dare_prompt: 'Let the person to your left draw on your face with a pen.' },
    { id: 7, dare_prompt: 'Sell a piece trash to someone in the group. Use your best salesmanship.' },
    { id: 8, dare_prompt: 'Imitate popular YouTube videos until someone can guess the video you are imitating.' },
    { id: 9, dare_prompt: 'Drag your butt on the carpet like a dog from one end of the room to the other. You’ll need to be wearing shorts or pants for this one.' },
    { id: 10, dare_prompt: 'Act like whatever animal someone yells out for the next 1 minute.' }
  ])
}
