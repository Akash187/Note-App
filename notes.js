console.log('Starting notes.js');

//module object is default object in every node file

module.exports.addNote = () => {
    console.log('addNote');
    return 'New note!';
};
module.exports.addNum = (b, a) => {
  return a+b;
};