class DynamicArray {

  constructor(defaultSize=4) {
    this.capacity = defaultSize;
    this.data = Array(defaultSize);
    this.length = 0;
    // Read specs for details
  }

  read(index) {
    return this.data[index]
    // Your code here
  }

  push(val) {
    // console.log(this.data)
    this.length++
    for (let i = 0; i < this.length; i++) {
      // console.log('HERE')
      if (this.data[i] === undefined) {
        this.data[i] = val;
      }

    }
    // Your code here
  }


  pop() {

    this.length--; // minusing length of array because removing 1 item
    for (let i = this.length; i >= 0; i--) { // beginning at the end of array to hit the last index

      if (this.data[i] !== undefined) { // check if data[i] is undefined.. if is equal continue moving/looping thru array.... if data[i] is !equal return data[i]

        return this.data[i] //
      }
    }
    // console.log(this.data)
    // console.log(this.data[undefined - 1])
    // Your code here
  }

  shift() {
    for (let i = this.length; i >= 0; i--) {
      if (this.data[i] !== this.data[0]) {
        this.length--;
        return this.data[0]
      } else {
        this.data[i - 1] = this.data[i];
      }
    }
    // Your code here
  }

  unshift(val) {
    this.length++;

    for (let i = 0; i < this.length; i++) {

      if (this.data[0] !== undefined) {
        this.data[i] = val;
      }

    }
  }

  indexOf (val) {

    // Your code here
  }

  resize () {

    // Your code here
  }

}


module.exports = DynamicArray;
