function solution(s) {
    
    const mid = s.length/2;
    
    return s.length%2==0 ? s.slice(mid-1, mid+1) : s.slice(mid,mid+1)
       
    
}