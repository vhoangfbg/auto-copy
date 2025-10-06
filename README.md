# 🔗 Text Link Generator

Một ứng dụng web đơn giản để tạo link và tự động copy text vào clipboard khi người dùng bấm vào link.

## ✨ Tính năng

- 📝 Nhập text và tạo link
- 🔗 Tự động copy text vào clipboard khi bấm link
- 📱 Responsive design, hoạt động trên mobile
- 🎨 Giao diện đẹp và hiện đại
- ⚡ Hoạt động hoàn toàn trên client-side

## 🚀 Cách sử dụng

1. Mở file `index.html` trong trình duyệt
2. Nhập text bạn muốn tạo link
3. Bấm "Tạo Link"
4. Copy link được tạo
5. Gửi link cho người khác
6. Khi họ bấm vào link, text sẽ được copy vào clipboard

## 🌐 Host trên GitHub Pages

### Bước 1: Tạo repository trên GitHub

1. Đăng nhập vào GitHub
2. Tạo repository mới với tên `text-link-generator` (hoặc tên khác)
3. Chọn "Public" để có thể sử dụng GitHub Pages miễn phí

### Bước 2: Upload code lên GitHub

```bash
# Clone repository về máy
git clone https://github.com/username/text-link-generator.git
cd text-link-generator

# Copy các file vào thư mục
cp index.html style.css script.js README.md .

# Commit và push
git add .
git commit -m "Initial commit: Text Link Generator"
git push origin main
```

### Bước 3: Bật GitHub Pages

1. Vào repository trên GitHub
2. Click vào tab "Settings"
3. Scroll xuống phần "Pages"
4. Trong "Source", chọn "Deploy from a branch"
5. Chọn branch "main" và folder "/ (root)"
6. Click "Save"
7. Đợi vài phút để GitHub build và deploy

### Bước 4: Truy cập website

Website sẽ có địa chỉ: `https://username.github.io/text-link-generator`

## 📁 Cấu trúc file

```
text-link-generator/
├── index.html          # File HTML chính
├── style.css           # File CSS styling
├── script.js           # File JavaScript xử lý logic
└── README.md           # File hướng dẫn
```

## 🔧 Cách hoạt động

1. **Tạo link**: Text được encode và thêm vào URL dưới dạng query parameter
2. **Copy clipboard**: Khi người dùng bấm link, JavaScript sẽ:
   - Decode text từ URL parameter
   - Copy text vào clipboard
   - Hiển thị thông báo thành công

## 🛠️ Tùy chỉnh

### Thay đổi giao diện
Chỉnh sửa file `style.css` để thay đổi màu sắc, font chữ, layout...

### Thêm tính năng
Chỉnh sửa file `script.js` để thêm các tính năng như:
- Lưu lịch sử link đã tạo
- Thêm password bảo vệ link
- Tự động expire link sau thời gian nhất định

## 📱 Hỗ trợ trình duyệt

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## ⚠️ Lưu ý

- Text được truyền qua URL nên có giới hạn độ dài (khoảng 2000 ký tự)
- Một số trình duyệt có thể yêu cầu người dùng cho phép copy clipboard
- Link chỉ hoạt động khi truy cập qua HTTPS (GitHub Pages tự động có HTTPS)

## 🤝 Đóng góp

Nếu bạn muốn cải thiện ứng dụng, hãy:
1. Fork repository
2. Tạo branch mới
3. Commit thay đổi
4. Tạo Pull Request

## 📄 License

MIT License - Sử dụng tự do cho mục đích cá nhân và thương mại.
# auto-copy
