function solution(id_pw, db) {

    const [id,pw] = id_pw
    
    // 1차답안 O(n)
    // const match = db.filter((a)=>{
    //     return a[0]==id;
    // })[0]
    
    // filter보다 find를 썻어야했다.
    
    // 2차 O(1)
    const match = new Map(db);
     
    return match.has(id) ? match.get(id)==pw ? "login" : "wrong pw" : "fail"
    
}