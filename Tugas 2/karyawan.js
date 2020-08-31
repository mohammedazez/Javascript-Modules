export default class karyawan {
  constructor(nama, umur, job) {
    this.nama = nama;
    this.umur = umur;
    this.pekerjaan = job;
  }
  detail() {
    return this.nama + "berusia" + this.umur;
  }
}

let karyawan1 = new karyawan("Muhamad Aziz", 20, "Software Engineer");
console.log(karyawan.nama);
console.log(karyawan.umur);
console.log(karyawan.job);
console.log(karyawan.detail);
