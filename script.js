// Hàm tạo link với text được encode
function generateLink() {
    const textInput = document.getElementById('textInput');
    const text = textInput.value.trim();
    
    if (!text) {
        alert('Vui lòng nhập text!');
        return;
    }
    
    // Encode text để có thể truyền qua URL
    const encodedText = encodeURIComponent(text);
    
    // Tạo URL với text được encode
    const currentUrl = window.location.origin + window.location.pathname;
    const generatedUrl = `${currentUrl}?text=${encodedText}`;
    
    // Hiển thị kết quả
    const resultSection = document.getElementById('resultSection');
    const generatedLink = document.getElementById('generatedLink');
    const previewLink = document.getElementById('previewLink');
    
    generatedLink.value = generatedUrl;
    previewLink.href = generatedUrl;
    resultSection.style.display = 'block';
    
    // Scroll xuống kết quả
    resultSection.scrollIntoView({ behavior: 'smooth' });
}

// Hàm copy link vào clipboard
function copyLink() {
    const linkInput = document.getElementById('generatedLink');
    linkInput.select();
    linkInput.setSelectionRange(0, 99999); // Cho mobile
    
    try {
        document.execCommand('copy');
        alert('Đã copy link vào clipboard!');
    } catch (err) {
        // Fallback cho trình duyệt mới
        navigator.clipboard.writeText(linkInput.value).then(() => {
            alert('Đã copy link vào clipboard!');
        }).catch(() => {
            alert('Không thể copy. Vui lòng copy thủ công.');
        });
    }
}

// Hàm test link
function testLink() {
    const linkInput = document.getElementById('generatedLink');
    window.open(linkInput.value, '_blank');
}

// Hàm copy text vào clipboard
function copyTextToClipboard(text) {
    // Tạo textarea tạm thời
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-999999px';
    textarea.style.top = '-999999px';
    document.body.appendChild(textarea);
    
    try {
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        return true;
    } catch (err) {
        console.error('Copy failed:', err);
        return false;
    } finally {
        document.body.removeChild(textarea);
    }
}

// Hàm xử lý khi trang load với parameter text
function handleTextParameter() {
    const urlParams = new URLSearchParams(window.location.search);
    const text = urlParams.get('text');
    
    if (text) {
        // Decode text
        const decodedText = decodeURIComponent(text);
        
        // Copy text vào clipboard
        if (copyTextToClipboard(decodedText)) {
            // Hiển thị thông báo
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.innerHTML = `
                <div class="notification-content">
                    <h3>✅ Text đã được copy vào clipboard!</h3>
                    <p><strong>Nội dung:</strong> ${decodedText}</p>
                    <button onclick="this.parentElement.parentElement.remove()">Đóng</button>
                </div>
            `;
            document.body.appendChild(notification);
            
            // Auto remove sau 5 giây
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 5000);
        } else {
            // Fallback nếu không copy được
            const notification = document.createElement('div');
            notification.className = 'notification error';
            notification.innerHTML = `
                <div class="notification-content">
                    <h3>⚠️ Không thể copy tự động</h3>
                    <p><strong>Nội dung:</strong></p>
                    <textarea readonly style="width: 100%; height: 100px; margin: 10px 0;">${decodedText}</textarea>
                    <button onclick="this.parentElement.parentElement.remove()">Đóng</button>
                </div>
            `;
            document.body.appendChild(notification);
        }
    }
}

// Chạy khi trang load
document.addEventListener('DOMContentLoaded', function() {
    handleTextParameter();
    
    // Thêm event listener cho Enter key
    document.getElementById('textInput').addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'Enter') {
            generateLink();
        }
    });
});
