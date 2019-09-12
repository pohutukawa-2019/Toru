exports.seed = (knex) => {
  return knex('truth').insert([
    { id: 1, truth_prompt: 'Describe the strangest dream you’ve had in your life.' },
    { id: 2, truth_prompt: 'What is one secret that you kept from your parents when you were growing up?' },
    { id: 3, truth_prompt: 'Do you have a weird collection?' },
    { id: 4, truth_prompt: 'What is one thing you really like about yourself?' },
    { id: 5, truth_prompt: 'What is the one thing you are the most afraid of?' },
    { id: 6, truth_prompt: 'Have you ever sent an inappropriate text to your mom or dad by accident?' },
    { id: 7, truth_prompt: 'What is a bad habit that you have?' },
    { id: 8, truth_prompt: 'The world ends next week and you can do anything you want (even if it’s illegal). What would you do?' },
    { id: 9, truth_prompt: 'What is the most childish thing that you still do?' },
    { id: 10, truth_prompt: 'If you had to make out with any Disney character, who would it be?' }
  ])
}
