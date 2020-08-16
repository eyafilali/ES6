let pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
   const getage=(pet)=> new Date().getFullYear() - pet.bornOn;
   
   const petsWithAge=pets.map(pet =>({...pet,age: getage(pet) }))

   console.log(petsWithAge);


   const dogs = pets.filter(animal => animal.type === "dog");
   console.log(dogs);
   const Jasper = petsWithAge.find(animal => animal.name==="Jasper");

   console.log(Jasper);
   console.log(`Jasper is ${Jasper.age} years old`)
