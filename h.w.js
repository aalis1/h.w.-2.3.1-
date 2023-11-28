let studentPoints = [
  2001, 284, 608, 2152, 22, 531, 236, 640, 253, 722, 533, 237, 518, 2243, 2361,
  449, 251, 572, 659, 26, 263, 268, 36, 278,
];

for (let i = 0; i < studentPoints.length; i++) {
  console.log("___________new itteration");
  console.log("work with array : " + studentPoints);

  for (let j = 0; j < studentPoints.length - i - 1; j++) {
    if (studentPoints[j] < studentPoints[j + 1]) {
      let temp = studentPoints[j];
      studentPoints[j] = studentPoints[j + 1];
      studentPoints[j + 1] = temp;

      console.log("compare an index ", j, j + 1);
      console.log("compare a pair ", studentPoints[j], studentPoints[j + 1]);
      console.log("transitional array " + studentPoints);
    }
  }
}
console.log(studentPoints);
