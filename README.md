# FinalProject-PTUDWEB

[Frond-end](#frond-end)
  * [Task](#task)
  
[Back-end](#back-end)
  * [Task](#task-1)
  * [Hướng dẫn chạy server](#hướng-dẫn-chạy-server)
  * [Lưu ý](#lưu-ý)
  * [Phân công](#phân-công)
  

## Frond-end
### Task:
- [ ] Tạo giao diện cho hệ quản trị (file html riêng)
- [ ] Chuyển sang handlebar
- [X] Cấu trúc lại file
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
- Tạo file đặt là `.env` ở thư mục server
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
- `npm start` chạy server
- truy cập đường dẫn `http://localhost:3000/createDatabase` và hiện lên **create database tickettakeit successful** là thành công

Có thể vào kiểm tra tại pgAdmin, nhấn chuột phải vài database **tickettakeit** -> chọn **Grenerate ERD** (Tổng 13 bảng)
### Lưu ý
- Mở VScode ra làm thì trước tiên &rarr; **FETCH**: để kiếm tra trên github có thay đổi gì không (bước này để chuẩn bị backup trước khi pull nếu confilct), nếu có thì **PULL**: lấy code trên github về máy
- Làm xong một chức năng, một hàm rồi (***Không bị lỗi compile***) &rarr; **COMMIT** và **PUSH**
- Chỉ nên làm trên **file mình được giao**, cần chỉnh file khác thì báo trước
- Deadline luôn là tối ngày hôm đó phải có
### Phân công
1. <details><summary> <b>Tạo dữ liệu mẫu</b> </summary>
    <ul><li>Người làm: Dũng</li>
    <li>Mô tả: Cần  có ít nhất 10 chuyến xe thuộc 4-5 nhà xe, 3-4 loại xe, có nội dung mô tả và hình ảnh minh hoạ đầy đủ. Thông tin nhà xe có thông tin đánh giá và bình luận đầy đủ</li>
    <li>Deadline: 18/12/2022</li>
    </ul>
  </detail>
  
2.  <details><summary> <b>Thiết kế giao diện quản trị</b> </summary>
    <ul><li>Người làm: Quỳnh, Niên</li>
    <li>Mô tả:  
    <ul>
          <li> Đăng nhập bằng tài khoản riêng</li>
          <li>Quản lý nhà xe: Xem, thêm, xóa, sửa</li>
          <li>Quản lý chuyến xe: Thêm, xóa, sửa</li>
          <li>Quản lý đặt chỗ: Xem, sửa</li>
          <li>Thiết kế html ở folder riêng của mình, xong xuôi thì để tất cả file html vào <b>client/views</b>.
             File hình, css, js để lần lượt ở <b>client/img</b>, <b>client/css</b>, <b>client/js</b> </li>
    </ul>
    </li>
    <li>Deadline: 18/12/2022</li>
    </ul>
  </detail>
  
3.  <details><summary> <b> Chuyển sang handlebar</b> </summary>
    <ul><li>Người làm: Hiện</li>
    <li>Mô tả: 
        <ul>
            <li>Chuyển các file html sang handlebar .hbs, 
                Lưu ý ở các thẻ mà server có thể truyền dữ liệu vào</li>
            <li>Sửa đường dẫn đến các file css, js ví dụ src="../public/css/style.css"
                thành src="/css/style.css" <i>(tham khảo file main.hbs trong client/views/layouts)</i>
            </li>
        </ul>
    </li>
    <li>Deadline: 19/12/2022</li>
    </ul>
  </detail>


