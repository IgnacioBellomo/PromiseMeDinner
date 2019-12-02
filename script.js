

const steak = [
  'season steak generously with salt, pepper and garlic powder',
  'place in ziplock bag',
  'cook in sous vide at 120 F for 1-2 hours',
  'remove from bag and pat dry',
  'heat pan with grapeseed oil and a quarter stick of butter',
  'cook steak for 30-60 seconds per side using a spoon to baste with butter',
  'rest for 10 mintutes',
  'enjoy'
]

const brusselSprouts = [
  'wash burussel srouts',
  'cut off base and chop in half',
  'toss in bowl with olive oil, balsamic vinger and salt',
  'preheat oven to 500 F',
  'coat baking sheet with olive oil',
  'place in flat side down',
  'cook for 20 minutes',
  'place back in bowl and add salt and pepper',
  'enjoy'
]

const mashPotatoes = [
  'boil water',
  'tear open bag of of instant potato mix and pour into bowl',
  'pour in water',
  'mix',
  'enjoy'
]






  
function makeFoodSteak(steps, id){
  addFood(steps[0], id, () => {
    addFood(steps[1], id, () => {
      addFood(steps[2], id, () => {
        addFood(steps[3], id, () => {
          addFood(steps[4], id, () => {
            addFood(steps[5], id, () => {
              addFood(steps[6], id, () => {
                addFood(steps[7], id, () => {
                  document.querySelector('#table').innerHTML += (`<img src="images/${id.replace('#','')}.jpg" />`);
                })
              })
            })
          })
        })
      })
    })
  })

  //Adds image to the table div
  // document.querySelector('#table').innerHTML += (`<img src="images/${id.replace('#','')}.jpg" />`)

  //Use once all food is made 
  //document.body.innerHTML += `<button onclick="new Audio('dinnerIsServed.mp3').play()">Dinner is Served!</button>`
  
}

function makeFoodPotatoes(steps, id){
  addFood(steps[0], id).then(() => {
    addFood(steps[1], id).then(() => {
      addFood(steps[2], id).then(() => {
        addFood(steps[3], id).then(() => {
          addFood(steps[4], id).then(() => {
            document.querySelector('#table').innerHTML += (`<img src="images/${id.replace('#','')}.jpg" />`);
          })
        })
      })
    })
  })
}

async function makeFoodBrusselSprouts(steps, id){
  await addFood(steps[0], id)
  await addFood(steps[1], id)
  await addFood(steps[2], id)
  await addFood(steps[3], id)
  await addFood(steps[4], id)
  await addFood(steps[5], id)
  await addFood(steps[6], id)
  await addFood(steps[7], id)
  await addFood(steps[8], id)
  document.querySelector('#table').innerHTML += (`<img src="images/${id.replace('#','')}.jpg" />`);
}


makeFoodSteak(steak, '#steak')
makeFoodPotatoes(mashPotatoes, '#mashPotatoes')
makeFoodBrusselSprouts(brusselSprouts, '#brusselSprouts')







