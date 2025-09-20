// 將訊息排成三行，置中顯示並放大字體
const greeting = document.getElementById('greeting');
greeting.innerHTML = `你好 新世界<br>我是 Kant Yeh<br>使用 VS 寫的第一個網頁`;
greeting.style.textAlign = 'center';
greeting.style.fontSize = '2em';
greeting.style.marginTop = '10vh'; // 調整間距

// --- 新增的影片播放程式碼 ---

// 取得按鈕和影片播放器元素
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const videoPlayer = document.getElementById('videoPlayer');
const videoSource = document.getElementById('videoSource');

// 影片檔案名稱 (假設影片放在同一個資料夾)
const videos = {
    huShuo: 'video1.mp4',
    femaleVoice: 'video2.mp4',
    speechless: 'video3.mp4'
};

// 播放影片的函式
function playVideo(videoFile) {
    videoPlayer.style.display = 'block'; // 顯示播放器
    videoSource.src = videoFile;
    videoPlayer.load(); // 重新載入影片
    videoPlayer.play(); // 播放影片
}

// 為每個按鈕加上點擊事件
btn1.addEventListener('click', () => playVideo(videos.huShuo));
btn2.addEventListener('click', () => playVideo(videos.femaleVoice));
btn3.addEventListener('click', () => playVideo(videos.speechless));