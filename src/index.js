class Sorter {
  constructor() {
    // your implementation
    this.array = [];
      }

  add(element) {
    // your implementation
    this.array.push (element);
     }

  at(index) {
    // your implementation
    return this.array [index];
  }

  get length() {
    // your implementation
    return this.array.length;
  }

  toArray() {
    // your implementation
    return this.array;
  }

  sort(indices) {
    // your implementation
    var zam ;
    for (var n=0 ; n< indices.length ; n++) {
      for (var m = n+1 ; m < indices.length ; m++) {
        if (indices[n]> indices[m]) {
          zam = indices[m];
          indices[m] = indices[n];
          indices[n] = zam;
        }
      }
    }

    var zam ;
    for (var n=0 ; n< indices.length ; n++){
      for (var m = n+1 ; m < indices.length ; m++){
        if (this.array[indices[n]] > this.array[indices[m]]) {
          zam = this.array[indices[m]];
          this.array[indices[m]] = this.array[indices[n]];
          this.array[indices[n]] = zam;
        }
      }
    }
  }

  setComparator(compareFunction) {
    // your implementation
    }
}

module.exports = Sorter;