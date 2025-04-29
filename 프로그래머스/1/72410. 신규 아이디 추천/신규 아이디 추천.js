function solution(new_id) {
   var answer = '';
    var id = new_id.toLowerCase()
    .replace(/[^\w-_.]/g,'')
    .replace(/\.+/g,'.')
    .replace(/\.$|^\./,'')
    .replace(/^\s*$/g,'a')
    .slice(0,15).replace(/\.$/,'');
    let len = id.length;
    answer = len <= 2 ? id.padEnd(3,id.charAt(len-1)) : id;
    console.log(answer);
    
    
    return answer;
}