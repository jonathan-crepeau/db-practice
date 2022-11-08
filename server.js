const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://jonathan-crepeau:this-is-my-password@cluster0.baogeq6.mongodb.net/?retryWrites=true&w=majority');

  const kittySchema = new mongoose.Schema({
    name: String,
    color: String,
  });

  kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };

  const Kitten = mongoose.model('Kitten', kittySchema);

  const luna = new Kitten({ name: 'Luna' });
  await luna.save();

  const kittens = await Kitten.find();
  console.log(kittens);
}

