
const data = JSON.parse(localStorage.getItem('result_data'));
console.log(data);
console.log(data["result"]);
console.log(data["result"][0]);
console.log(data["result"][0]["question"]);
console.log(data["result"][0]["prob"]);

// for (let key in data) {
//     if (data.hasOwnProperty(key)) {
//         console.log(key + ': ' + data[key]);
//     }
// }

const q1_prob = document.getElementById('q1_prob');
const q2_prob = document.getElementById('q2_prob');
const q3_prob = document.getElementById('q3_prob');
const q4_prob = document.getElementById('q4_prob');
const q5_prob = document.getElementById('q5_prob');
const qall_prob = document.getElementById('qall_prob');

q1_prob.textContent = Math.round(data["result"][0]["prob"]*100)/100;
q2_prob.textContent = Math.round(data["result"][1]["prob"]*100)/100;
q3_prob.textContent = Math.round(data["result"][2]["prob"]*100)/100;
q4_prob.textContent = Math.round(data["result"][3]["prob"]*100)/100;
q5_prob.textContent = Math.round(data["result"][4]["prob"]*100)/100;
qall_prob.textContent = Math.round(((data["result"][0]["prob"] + data["result"][1]["prob"] + data["result"][2]["prob"] + data["result"][3]["prob"] + data["result"][4]["prob"])/5)*100);

function redirectToMain() {
    window.location.href = '/';
}