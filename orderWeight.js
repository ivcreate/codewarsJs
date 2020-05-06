function compare(a, b) {
    let str_a = a.toString(),
    str_b = b.toString(),
    sum_a = eval(str_a.split("").join("+")),
    sum_b = eval(str_b.split("").join("+"));
    if (sum_a > sum_b) return 1;
    if (sum_a == sum_b){
      if (str_a > str_b) return 1;
      if (str_a == str_b) return 0;
      if (str_a < str_b) return -1;
    }
    if (sum_a < sum_b) return -1;
  }
function orderWeight(strng) {
    return strng.split(" ").sort(compare).join(" ");
}

console.log(orderWeight("103 123 4444 99 2000"));
