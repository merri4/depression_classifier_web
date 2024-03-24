var age;
var gender;

function Start() {
    
    // 나이 파싱
    age = document.getElementById("select_age").value;
    // 성별 파싱
    gender = document.getElementById("select_gender").value;

    console.log("Age:", age);
    console.log("Selected Option:", gender);

    // 세션 ID를 통해 UID 발급

    // 다음 페이지로 넘김
    window.location.href = '/q1';

}

function redirectToMain() {
    window.location.href = '/index';
}