import React from 'react'

export default function Base2() {
  let animals = ['dog','cat','rabbit'];
  
  let newAnimals = animals.filter((animal)=>{
    return animal.length>3
  })
  console.log(newAnimals);

  let words = ['dog','cat','rabbit'];

  let result2 = words.filter((word)=>{
    return word.length1>1
  })
  
  return (
    <div>
      <ul>
        {newAnimals.join(', ')}
      </ul>
      <ul>
        {result2.join(', ')}
      </ul>
    </div>
  )
}
