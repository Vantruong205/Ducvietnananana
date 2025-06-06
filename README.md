# 💖 Sức Khỏe & Làm Đẹp - Web App

Một nền tảng web hiện đại giúp người dùng chăm sóc toàn diện từ làn da, vóc dáng đến tinh thần. Ứng dụng tích hợp AI, giao diện cá nhân hóa và các công cụ hỗ trợ hữu ích giúp người dùng tự tin và khỏe mạnh hơn mỗi ngày.

---

## 🚀 Tính Năng Chính

### 1. 🌿 Mỹ Phẩm & Chăm Sóc Da

- Cho phép người dùng upload 3 ảnh khuôn mặt (trái, phải, chính diện) qua form (không yêu cầu chụp camera trực tiếp).
- Ảnh được xử lý trước khi phân tích:
  - Resize về `512x512`
  - Kiểm tra độ nét
  - Tăng độ sáng và tương phản nhẹ
- Sử dụng mô hình YOLOv8 tự train (best.pt) để nhận diện các vấn đề da:
  - Mụn
  - Lỗ chân lông to
  - Sắc tố da
- Chấm điểm tổn thương, phân tích tình trạng và gợi ý sản phẩm chăm sóc phù hợp.
- Khảo sát để phân loại loại da (da nhạy cảm, da thường, da dầu, da hỗn hợp), từ đó cá nhân hóa gợi ý.

---

### 2. 🧍‍♀️ Vóc Dáng & Phong Cách

- Xác định mục tiêu vóc dáng: tăng cân, giảm cân, duy trì cân nặng.
- Thu thập thông tin cá nhân: chiều cao, cân nặng, số đo → tính toán TDEE & BMR.
- Đưa ra gợi ý lượng calo phù hợp mỗi ngày.
- Cho phép nhập số đo cơ thể, xác định dáng người và gợi ý phối đồ phù hợp.
- Khảo sát màu sắc cá nhân giúp người dùng phối đồ tự tin, nổi bật hơn.

---

### 3. 💬 Trò Chuyện & Tâm Sự

- Khu vực chat chia sẻ cảm xúc và tâm trạng.
- Giao diện đổi màu theo trạng thái cảm xúc: vui, buồn, tức giận, cần tâm sự.
- Chatbot trả lời tự động, hỗ trợ tâm lý và tạo cảm giác gần gũi, thân thiện.

---

## 🛠️ Công Nghệ Sử Dụng

- Backend: Python với Flask framework xử lý logic, phân tích ảnh AI, API và render template.
- Frontend: HTML5, JavaScript, Tailwind CSS thiết kế giao diện hiện đại, responsive.
- Hiệu ứng: Animation và gradient động tạo trải nghiệm bắt mắt, mượt mà.
- AI: Mô hình YOLOv8 tự train dùng nhận diện các vấn đề da.
- Ảnh: Xử lý ảnh đầu vào (resize, kiểm tra nét, tăng sáng/tương phản) trước khi phân tích

---
