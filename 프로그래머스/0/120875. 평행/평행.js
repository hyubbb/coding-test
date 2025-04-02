function solution(dots) {
  var answer = 0;
  var tmp = 0;



  function chk() {

    if (CheckSlope(dots[0], dots[1], dots[2], dots[3]) ||
      CheckSlope(dots[0], dots[2], dots[1], dots[3]) ||
      CheckSlope(dots[0], dots[3], dots[1], dots[2])
    ) return 1;

    // if (CheckSlope(dots[0], dots[2], dots[1], dots[3])) return 1;

    return 0;


  }

  function CheckSlope(a, b, c, d) {

    d1 = GetSlope(a, b);
    d2 = GetSlope(c, d);

    if (d1 == d2) return true;

    return false;

  }

  GetSlope = (a, b) => {
    return (a[1] - b[1]) / (a[0] - b[0]);

  }

  return chk();

}

