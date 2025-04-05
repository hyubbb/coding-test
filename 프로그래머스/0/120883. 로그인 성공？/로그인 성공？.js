function solution(id_pw, db) {

    const [id,pw] = id_pw
    
    const match = db.filter((a)=>{
        return a[0]==id;
    })[0]
    
    return !match ? "fail" : pw==match[1] ? "login" : "wrong pw";
    
}