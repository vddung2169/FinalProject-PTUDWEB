# FinalProject-PTUDWEB

[Frond-end](#frond-end)
  * [Task](#task)
  
[Back-end](#back-end)
  * [Task](#task-1)
  * [Hướng dẫn chạy server](#hướng-dẫn-chạy-server)
  * [Phân công](#phân-công)
  * [Lưu ý](#lưu-ý)

## Frond-end
### Task:
- [ ] Tạo giao diện cho hệ quản trị (file html riêng)
- [ ] Chuyển sang handlebar
- [ ] Cấu trúc lại file
## Back-end
### Task:
- [X] Set up server, route
- [X] Tạo database bằng sequelize
- [ ] Tạo dữ liệu mẫu
- [ ] Hiển thị tuyến xe ở trang chủ
- [ ] Hiển thị danh sách xe theo tuyến
- [ ] Hiển thị thông tin chi tiết của xe
- [ ] Sử dụng phân trang
- [ ] Thêm dữ liệu vào lựa tuyến xe (điểm bắt đầu, kết thúc)
- [ ] Thực hiện sort
- [ ] Thực hiện search
- [ ] Thực hiện filter
- [ ] Hiển thị thông tin lên phần mua vé
- [ ] Lưu thông tin mua vé lên database
- [ ] Quản lý nhà xe: Xem, thêm, xóa, sửa
- [ ] Quản lý chuyến xe: Thêm, xóa, sửa
- [ ] Quản lý đặt chỗ: Xem, sửa
- [ ] Chức năng đăng nhập
- [ ] Chức năng đăng ký
- [ ] Hiển thị lịch sử đặt vé
- [ ] Confirm đăng ký + quên mật khẩu
- [ ] Gửi thông tin qua vé email, SMS
- [ ] Thực hiện đánh giá + bình luận

***Bonus:***
- [ ] Thanh toán liên kết ngân hàng
- [ ] Hỗ trợ nhiều điểm khởi hành, kết thúc và chức năng tìm kiếm có khả năng tìm được chuyến xe giữa chặng 
- [ ] cho phép chọn ghế khi đặt chỗ
- [ ] Sử dụng AJAX để tải thêm tự động thông tin
### Hướng dẫn chạy server
#### Cài đặt biến môi trường:
Biến môi trường giúp cho việc bảo mật, config theo máy của mình, tránh lộ ra trong code hay push lên github,... Ở đây sẽ dùng cho config database
- Tạo file đặt là `.env` ở file server
- Nhập các thông tin sau vào file đó :
```
DB_HOST = 'localhost'
DB_NAME = 'tickettakeit'
DB_USER = 'tên tài khoản postgres (nếu không có thì để mặc định là postgres'
DB_PASSWORD = 'mật khẩu postgres'
```
#### Chạy server
Vào cmd chạy các lệnh sau theo trình tự:
- `cd server` : dẫn cmd đến file server
- `pnpm i` hoặc `npm i` : để cài đặt các thư viện
- `npm i -g <thư viện>`: cài đặt global các thư viện tiện ích nếu chưa cài : **nodemon**, **pnpm**
- `npm start` hoặc `npm run server.js`: để chạy server

#### Cài đặt database

 Vào cmd chạy các lệnh sau theo trình tự:
- `npm run db:create` : tạo database. thấy `Database tickettakeit created` là ok
- `npm run db:migrate` tạo các table, không ERROR là ok

Có thể vào kiểm tra tại pgAdmin, nhấn chuột phải vài database **tickettakeit** -> chọn **Grenerate ERD** (Tổng 14 bảng)
### Phân công
### Lưu ý
