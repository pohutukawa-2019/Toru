exports.seed = (knex) => {
  return knex('deer').insert([
    { id: 1, deer_img: 'https://images.unsplash.com/photo-1545063914-a1a6ec821c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' },
    { id: 2, deer_img: 'https://images.unsplash.com/photo-1543782248-03e2c5a93e18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80' },
    { id: 3, deer_img: 'https://images.unsplash.com/photo-1519268237282-0d15e6791ccc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' },
    { id: 4, deer_img: 'https://images.unsplash.com/photo-1506099914961-765be7a97019?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' },
    { id: 5, deer_img: 'https://images.unsplash.com/photo-1495366821225-0a3d30d20b5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
    { id: 6, deer_img: 'https://images.unsplash.com/photo-1476922027627-aa7293e3aaa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' },
    { id: 7, deer_img: 'https://images.unsplash.com/photo-1473603477862-9d352d4615e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80' },
    { id: 8, deer_img: 'https://images.unsplash.com/photo-1446625486304-c23811ccd1b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80' },
    { id: 9, deer_img: 'https://images.unsplash.com/photo-1542576209-dbb5135408b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80' },
    { id: 10, deer_img: 'https://images.unsplash.com/photo-1551440399-e7ac89436856?ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80' }
  ])
}
