var age;
var gender;
var uid;
var key;

// export { age, gender, uid };

function Start() {
    
    // 나이 파싱
    age = document.getElementById("select_age").value;
    // 성별 파싱
    gender = document.getElementById("select_gender").value;

    // todo : 세션 ID를 통해 UID 발급
    // const sessions = new Map();
    // const sessionId = req.cookies.sessionId;
    uid = "testtesttest";
    key = "lifesaver12";
    
    console.log(age, gender, uid)

    localStorage.setItem('age', age);
    if (gender == "male") {
        localStorage.setItem('gender', 1);
    }
    else {
        localStorage.setItem('gender', 0);
    }
    localStorage.setItem('uid', uid);
    localStorage.setItem('key', key);

    // 다음 페이지로 넘김
    window.location.href = '/q1';

}

function redirectToMain() {
    window.location.href = '/';
}