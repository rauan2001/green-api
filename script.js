const API_BASE = "https://api.green-api.com/";

async function getSettings() {
    const idInstance = document.getElementById("idInstance").value;
    const apiTokenInstance = document.getElementById("apiTokenInstance").value;

    const url = `${API_BASE}waInstance${idInstance}/getSettings/${apiTokenInstance}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById("response").value = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById("response").value = "Ошибка: " + error;
    }
}

async function getStateInstance() {
    const idInstance = document.getElementById("idInstance").value;
    const apiTokenInstance = document.getElementById("apiTokenInstance").value;

    const url = `${API_BASE}waInstance${idInstance}/getStateInstance/${apiTokenInstance}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById("response").value = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById("response").value = "Ошибка: " + error;
    }
}

async function sendMessage() {
    const idInstance = document.getElementById("idInstance").value;
    const apiTokenInstance = document.getElementById("apiTokenInstance").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const messageText = document.getElementById("messageText").value;

    const url = `${API_BASE}waInstance${idInstance}/sendMessage/${apiTokenInstance}`;
    const body = JSON.stringify({ chatId: `${phoneNumber}@c.us`, message: messageText });

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: body
        });
        const data = await response.json();
        document.getElementById("response").value = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById("response").value = "Ошибка: " + error;
    }
}

async function sendFileByUrl() {
    const idInstance = document.getElementById("idInstance").value;
    const apiTokenInstance = document.getElementById("apiTokenInstance").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const fileUrl = document.getElementById("fileUrl").value;

    const fileName = extractFileName(fileUrl);

    const url = `https://api.green-api.com/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`;
    const body = JSON.stringify({
        chatId: `${phoneNumber}@c.us`,
        urlFile: fileUrl,
        fileName: fileName
    });

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: body
        });
        const data = await response.json();
        document.getElementById("response").value = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById("response").value = "Ошибка: " + error;
    }
}

function extractFileName(url) {
    let fileName = url.split('/').pop();
    return fileName.split('?')[0]; // Убираем GET-параметры (если есть)
}


