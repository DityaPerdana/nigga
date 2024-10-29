//ngebuat class es6
class cat {
  constructor(nama, warna, kelamin) {
    this.name = nama;
    this.color = warna;
    this.gender = kelamin;
  }

  play = () => console.log(this.name + " sedang bermain");

  eat = () => console.log(this.name + " sedang makan");

  sleep = () => console.log(this.name + " sedang amimir");
}

//insitent atau apalah itu
const cat1 = new cat("apis", "hijau", "sigma");
const cat2 = new cat("fajar", "biru", "quaso");
const cat3 = new cat("vino", "hijauToska", "suki");

//untuk debug
console.log(cat2.name);
console.log(cat1);

cat1.play();
cat2.eat();
cat3.sleep();

console.log(typeof cat1); //bukti nyata js tidak mendukung class
