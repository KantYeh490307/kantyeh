// 將訊息顯示並放大字體
const greeting = document.getElementById('greeting');
greeting.innerHTML = `青鳥飛出來`;
greeting.style.fontSize = '3em'; // 放大字體 (2em * 150% = 3em)

// --- 影片播放程式碼 (此部分不需修改) ---

// 取得按鈕和影片播放器元素
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const videoPlayer = document.getElementById('videoPlayer');
const videoSource = document.getElementById('videoSource');
const videoPlaceholder = document.getElementById('videoPlaceholder'); // 取得預留位置元素

// 影片檔案名稱 (假設影片放在同一個資料夾)
const videos = {
    huShuo: 'video1.mp4',
    femaleVoice: 'video2.mp4',
    speechless: 'video3.mp4'
};

// 播放影片的函式
function playVideo(videoFile) {
    videoPlaceholder.style.display = 'none'; // 隱藏預留位置
    videoPlayer.style.display = 'block'; // 顯示播放器
    videoSource.src = videoFile;
    videoPlayer.load(); // 重新載入影片
    videoPlayer.play(); // 播放影片
}

// 為每個按鈕加上點擊事件
btn1.addEventListener('click', () => playVideo(videos.huShuo));
btn2.addEventListener('click', () => playVideo(videos.femaleVoice));
btn3.addEventListener('click', () => playVideo(videos.speechless));