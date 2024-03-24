function redirectToMain() {
    window.location.href = '/index';
}

function next_question(q_num) {
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
            const audioBlob = new Blob(recordedChunks, { type: 'audio/wav' });
            const audioUrl = URL.createObjectURL(audioBlob);
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