let fechaHoy = new Date()
console.log(fechaHoy);

let fechaNacimiento = new Date(96, 08, 01);
console.log(fechaNacimiento);

let fechaComparacion = fechaHoy.getTime() > fechaNacimiento.getTime();
console.log(fechaComparacion);

let diaN = fechaNacimiento.getDate();
console.log(diaN);

let mesN = fechaNacimiento.getMonth();
console.log(mesN +1);

let anyoN = fechaNacimiento.getFullYear();
console.log(anyoN);