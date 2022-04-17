const object1 = {
  a: 'atring',
  b: 40
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

