function solution(num_str) {
  return [...num_str].reduce((acc,cur)=>{
      return +acc + +cur
  },0)
}