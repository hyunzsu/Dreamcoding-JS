const apple = {
  name: 'apple',
  display: function () {
    console.log(`${this.name}: π`); // κ°μ²΄μμμ μμ μ μ΄λ¦μ μ κ·Όν  λ this
  }
}

apple.display();