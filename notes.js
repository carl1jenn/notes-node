console.log('Starting notes.js');

module.exports.addNote = () => {
  console.log('addNote');
  return 'New note';
}

module.exports.add = (x,y) => {
  return x+y;
}
