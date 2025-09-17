# 🚀 Hướng dẫn Deploy Website Tình Yêu lên GitHub Pages

## 📋 Chuẩn bị

1. **GitHub account**: https://github.com
2. **Git** đã được cài đặt
3. **Repository**: `cam-huynh-luv` (đã tồn tại)

## 🔧 Các bước deploy

### Bước 1: Chuẩn bị Git Repository

**Repository hiện tại:** `https://github.com/YOUR_USERNAME/cam-huynh-luv`

### Bước 2: Upload code lên GitHub

**Sử dụng Git command line:**

```bash
# Di chuyển vào thư mục dự án
cd /Users/nguyenthanh/Desktop/cam-huynh/love-website

# Khởi tạo git repository (nếu chưa có)
git init

# Thêm tất cả file vào staging area
git add .

# Commit với message đầy đủ
git commit -m "✨ Add love website with galaxy effects

- Add login page with matrix background
- Add main page with text animations using GSAP
- Add galaxy page with Cẩm Huỳnh image particles
- Add responsive design for all screen sizes
- Include deployment instructions and local server

🎉 Complete love website for Cẩm Huỳnh"

# Kết nối với GitHub repository cam-huynh-luv
git remote add origin https://github.com/YOUR_USERNAME/cam-huynh-luv.git

# Hoặc nếu đã có remote, cập nhật URL:
git remote set-url origin https://github.com/YOUR_USERNAME/cam-huynh-luv.git

# Tạo và chuyển sang branch main
git branch -M main

# Push code lên GitHub (lần đầu tiên)
git push -u origin main

# Hoặc nếu repository đã tồn tại:
git push origin main
```

**Các lệnh Git hữu ích:**

```bash
# Kiểm tra trạng thái
git status

# Xem lịch sử commit
git log --oneline

# Xem remote repository
git remote -v

# Cập nhật code mới
git add .
git commit -m "🔄 Update website features"
git push origin main

# Pull code mới nhất từ GitHub
git pull origin main

# Kiểm tra branch hiện tại
git branch

# Xem thay đổi trước khi commit
git diff
```

### Bước 3: Bật GitHub Pages

1. Vào repository `cam-huynh-luv` trên GitHub
2. Click tab **Settings**
3. Scroll xuống phần **Pages** (bên trái sidebar)
4. Trong phần **Source**, chọn **Deploy from a branch**
5. Chọn branch **main** và folder **/ (root)**
6. Click **Save**

### Bước 4: Truy cập website

- Sau 2-5 phút, website sẽ có sẵn tại: `https://YOUR_USERNAME.github.io/cam-huynh-luv`
- GitHub sẽ hiển thị link chính xác trong phần Settings > Pages

## 🖥️ Chạy Local Development Server

**Để test website với ảnh thật (galaxy particles):**

```bash
# Di chuyển vào thư mục dự án
cd /Users/nguyenthanh/Desktop/cam-huynh/love-website

# Chạy server Python (có CORS headers)
python3 simple-server.py

# Hoặc chạy server HTTP đơn giản
python3 -m http.server 8000

# Website sẽ có tại:
# http://localhost:8080 (với simple-server.py)
# http://localhost:8000 (với http.server)
```

**Lý do cần server local:**
- Galaxy page sử dụng ảnh thật của Cẩm Huỳnh làm particles
- Browser chặn CORS khi mở file trực tiếp (`file://`)
- Server local giải quyết vấn đề này

## 🎨 Tùy chỉnh thêm

### Thêm ảnh của Cẩm Huỳnh

1. Tạo thư mục `images` trong repository
2. Upload ảnh của em vào đó
3. Sửa file `main.html`, dòng:
   ```html
   <img src="https://picsum.photos/400/600?random=1" alt="Ảnh của em" id="main-image">
   ```
   Thành:
   ```html
   <img src="images/cam-huynh-photo.jpg" alt="Ảnh của em" id="main-image">
   ```

### Custom domain (tùy chọn)

1. Mua domain từ các nhà cung cấp (GoDaddy, Namecheap, etc.)
2. Trong Settings > Pages, thêm custom domain
3. Cấu hình DNS của domain trỏ về GitHub Pages

## 🔧 Troubleshooting

### Website không hiển thị đúng

- Kiểm tra tất cả file đã được upload đúng cấu trúc
- Đảm bảo file `index.html` ở root directory
- Chờ 5-10 phút để GitHub xử lý

### Ảnh không hiển thị

- Kiểm tra đường dẫn ảnh trong code
- Đảm bảo ảnh đã được upload vào repository
- Kiểm tra tên file và extension (jpg, png, etc.)

### CSS/JS không hoạt động

- Kiểm tra đường dẫn relative path trong HTML
- Đảm bảo tất cả file CSS và JS đã được upload

## 📱 Cấu trúc thư mục hoàn chỉnh

```
love-website/
├── index.html          # Trang đăng nhập
├── main.html           # Trang chính với text animation
├── galaxy.html         # Trang galaxy cuối
├── css/
│   ├── login.css       # Style cho trang login
│   └── main.css        # Style cho trang main
├── js/
│   ├── matrix.js       # Matrix rain effect
│   ├── login.js        # Login logic
│   └── main.js         # Main page animations
├── images/             # Thư mục ảnh (tạo sau)
│   └── cam-huynh.jpg   # Ảnh của em
└── DEPLOY.md           # File hướng dẫn này
```

## 🎉 Hoàn thành!

Sau khi hoàn thành các bước trên, bạn sẽ có một website tình yêu hoàn chỉnh với:

- ✅ Trang đăng nhập với hiệu ứng Matrix
- ✅ Animation text đẹp mắt
- ✅ Hiệu ứng chữ chạy và hình ảnh
- ✅ Trang galaxy tương tác cuối
- ✅ Responsive design
- ✅ Deploy tự động trên GitHub Pages

**Link website:** `https://YOUR_USERNAME.github.io/cam-huynh-luv`

## 🚀 Quick Deploy Commands

**Deploy nhanh với một lệnh:**

```bash
# Tạo script deploy tự động
cat > deploy.sh << 'EOF'
#!/bin/bash
echo "🚀 Deploying love website..."
cd /Users/nguyenthanh/Desktop/cam-huynh/love-website
git add .
git commit -m "🔄 Update website - $(date)"
git push origin main
echo "✅ Deployed successfully!"
echo "🌐 Visit: https://YOUR_USERNAME.github.io/cam-huynh-luv"
EOF

# Làm cho script có thể chạy được
chmod +x deploy.sh

# Chạy deploy
./deploy.sh
```

**Hoặc deploy manual nhanh:**

```bash
cd /Users/nguyenthanh/Desktop/cam-huynh/love-website
git add . && git commit -m "🔄 Update $(date)" && git push origin main
```

## 📝 Checklist Deploy

- [ ] Code đã được test local (`python3 simple-server.py`)
- [ ] Repository `cam-huynh-luv` đã tồn tại trên GitHub  
- [ ] Git repository đã được khởi tạo
- [ ] Files đã được add và commit
- [ ] Code đã được push lên GitHub
- [ ] GitHub Pages đã được bật
- [ ] Website live tại `https://YOUR_USERNAME.github.io/cam-huynh-luv`

---

💕 **Chúc bạn thành công trong việc thể hiện tình yêu với Cẩm Huỳnh!** 💕

🌟 **Galaxy của em sẽ tỏa sáng trên internet!** 🌟