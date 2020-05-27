function hash (string) {
  return string
    .split('')
    .reduce((a, b) => ((a << 5) + a) + b.charCodeAt(0), 5381)
}

class HashMap {
  constructor() {
    this.items = [];
  }
  get(key) {
    let hashKey = hash(key);
    let location = this.items[hashKey];
    if (!location) {
      return undefined;
    }
    for(let i = 0; i < location.length; i++) {
      let k = location[i][0];
      if (key === k) {
        return location[i][1];
      }
    }
  }
  set(key, val) {
    let hashKey = hash(key);
    if (!this.items[hashKey]) {
      this.items[hashKey] = [];
    }

    let location = this.items[hashKey];
    let index = 0;
    while(location[index]) {
      if(location[index][0] === key) {
        break;
      }
      index++;
    }
    location[index] = [key, val];
  }
}