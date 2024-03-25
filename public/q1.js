// import { uid } from "./index.js";
// import { age } from "./index.js";
// import { gender } from "./index.js";
// import { baseUrl } from "./index.js"

// https://os94.tistory.com/125

const baseUrl = 'http://175.45.194.237:8000/predict?';

const age = localStorage.getItem('age');
const gender = localStorage.getItem('gender');
const uid = localStorage.getItem('uid');

console.log(age, gender, uid);

const requestData = {
    id : uid,
    age : age,
    gender : gender,
    question : 1,
    created_at : get_nowtime(),
    key : "Wlkdsf1ljwdo",
};

console.log(requestData)


var audioBlob;

function next_question(q_num) {

    uploadAudio(audioBlob);

    if (q_num == 2) {
        window.location.href = '/q2';
    }
    else if (q_num === 3) {
        window.location.href = '/q3';
    }
    else if (q_num === 4) {
        window.location.href = '/q4';
    }
    else if (q_num === 5) {
        window.location.href = '/q5';
    }
}

function get_nowtime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    // const hours = String(now.getHours()).padStart(2, '0');
    // const minutes = String(now.getMinutes()).padStart(2, '0');
    // const seconds = String(now.getSeconds()).padStart(2, '0');
    const formattedDateTime = `${year}${month}${day}`;
    return formattedDateTime;
}


let mediaRecorder;
let recordedChunks = [];

const startRecordingButton = document.getElementById('startRecording');
const stopRecordingButton = document.getElementById('stopRecording');
const audioPlayback = document.getElementById('audioPlayback');

startRecordingButton.addEventListener('click', startRecording);
stopRecordingButton.addEventListener('click', stopRecording);

function startRecording() {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();

        startRecordingButton.disabled = true;
        stopRecordingButton.disabled = false;

        mediaRecorder.ondataavailable = event => {
            recordedChunks.push(event.data);
        };

        mediaRecorder.onstop = () => {
            audioBlob = new Blob(recordedChunks, { type: 'audio/wav' });
            // uploadAudio(audioBlob);
            const audioUrl = URL.createObjectURL(audioBlob);
            console.log(audioUrl);
            audioPlayback.src = audioUrl;
        };
        })
        .catch(error => {
        console.error('Error accessing microphone:', error);
        });
}

function stopRecording() {
    mediaRecorder.stop();
    startRecordingButton.disabled = false;
    stopRecordingButton.disabled = true;
}

function uploadAudio(blob) {
    
    const formData = new FormData();
    // const file = new File([blob], "test.wav", {lastModified: Date.now});
    formData.append('audio_file', blob);

    const apiUrl = baseUrl + "id=" + requestData["id"] + "&" + "age=" + requestData["age"] + "&" + "gender=" + requestData["gender"] + "&" + "question=" + requestData["question"] + "&" + "created_at=" + requestData["created_at"] + "&" + "key=" + requestData["key"];
    console.log(apiUrl)
    console.log(formData)

    // const config = {
    //     headers: { 'content-type': 'multipart/form-data' }
    // }
    // axios.post(apiUrl, formData, config)

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            // 'Content-Type': 'multipart/form-data'
          },
        body: formData,
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log("Request Done.");
            return response.json();
            // 리턴 처리
        })
        .then(data => {
            console.log('Audio upload successful:', data);
        })
        .catch(error => {
            console.error('Error uploading audio:', error);
        });

}

function redirectToMain() {
    window.location.href = '/';
}