# FinalProject-PTUDWEB

## Web demo 
***Link*** : https://tickettakeit-test.onrender.com/

## Mục lục
[Frond-end](#frond-end)
  * [Task](#task)
  
[Back-end](#back-end)
  * [Task](#task-1)
  * [Hướng dẫn chạy server](#hướng-dẫn-chạy-server)
  * [Lưu ý](#lưu-ý)
  * [Phân công](#phân-công)
  

## Frond-end
### Task:
- [X] Tạo giao diện cho hệ quản trị (file html riêng)
- [X] Chuyển sang handlebar
- [X] Cấu trúc lại file
- [X] Tạo trang lỗi 404 (tối thiếu cần một thẻ span hoặc p ghi mã lỗi và nội dung lỗi)
- [X] Tạo trang yêu cầu nhập mã được gửi từ email để xác thực email (này kiểu sau khi đăng ký, mình nhập email => nó gửi email kèm mã xác nhận => mình nhập vào mới được)
- [X] Tạo trang quên mật khẩu(ở đây chỉ nhập email), khi nhấn nút gửi ==> không còn ô nhập email mà hiển thị thông báo đã gửi email, có thể có yêu cầu gửi lại)
- [X] Tạo trang cho đổi mật khẩu(gồm :một thẻ hiển thị email, ô nhập mẫu khẩu mới,nhập mật khẩu mới nhập lại,nút gửi )
## Back-end
### Task:
- [X] Set up server, route
- [X] Tạo database bằng sequelize
- [X] Tạo dữ liệu mẫu
- [X] Hiển thị tuyến xe ở trang chủ
- [X] Hiển thị danh sách xe theo tuyến
- [X] Hiển thị thông tin chi tiết của xe
- [X] Sử dụng phân trang
- [X] Thêm dữ liệu vào lựa tuyến xe (điểm bắt đầu, kết thúc)
- [X] Thực hiện sort
- [X] Thực hiện search
- [X] Thực hiện filter
- [X] Hiển thị thông tin lên phần mua vé
- [X] Lưu thông tin mua vé lên database
- [X] Quản lý nhà xe: Xem, thêm, xóa, sửa
- [X] Quản lý chuyến xe: Thêm, xóa, sửa
- [X] Quản lý đặt chỗ: Xem, sửa
- [X] Chức năng đăng nhập
- [X] Chức năng đăng ký
- [X] Hiển thị lịch sử đặt vé
- [X] Confirm đăng ký + quên mật khẩu
- [X] Gửi thông tin qua vé email, SMS
- [X] Thực hiện đánh giá + bình luận

***Bonus:***
- [ ] Thanh toán liên kết ngân hàng
- [ ] Hỗ trợ nhiều điểm khởi hành, kết thúc và chức năng tìm kiếm có khả năng tìm được chuyến xe giữa chặng 
- [X] cho phép chọn ghế khi đặt chỗ
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
SECRET_KEY = 'chuỗi key dùng cho JWT'
SECRET_KEY_RESEY = 'chuỗi key dùng cho reset mật khẩu'
USER_GMAIL ='gmail của hệ thống web'
PASSWORD_GMAIL = 'gmail của hệ thống web'
GOOGLE_CLIENT_ID='lấy từ Google OAuth'
GOOGLE_CLIENT_SECRET='lấy từ Google OAuth'
PORT = 3000
HOSTNAME = 'http://localhost:3000'
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
- `npm run runseed` để nạp dữ liệu mẫu
- `npm run db:drop` để xóa database

Có thể vào kiểm tra tại pgAdmin, nhấn chuột phải vài database **tickettakeit** -> chọn **Grenerate ERD** (Tổng 13 bảng)
### Lưu ý
- Mở VScode ra làm thì trước tiên &rarr; **FETCH**: để kiếm tra trên github có thay đổi gì không (bước này để chuẩn bị backup trước khi pull nếu confilct), nếu có thì **PULL**: lấy code trên github về máy
- Làm xong một chức năng, một hàm rồi (***Không bị lỗi compile***) &rarr; **COMMIT** và **PUSH**
- Chỉ nên làm trên **file mình được giao**, cần chỉnh file khác thì báo trước
- Deadline luôn là tối ngày hôm đó phải có
### Phân công
1. <details><summary> <b>Tạo dữ liệu mẫu 	&#10004</b> </summary>
    <ul><li>Người làm: Dũng</li>
    <li>Mô tả: Cần  có ít nhất 10 chuyến xe thuộc 4-5 nhà xe, 3-4 loại xe, có nội dung mô tả và hình ảnh minh hoạ đầy đủ. Thông tin nhà xe có thông tin đánh giá và bình luận đầy đủ</li>
    <li>Deadline: 18/12/2022</li>
    </ul>
  </detail>
  
2.  <details><summary> <b>Thiết kế giao diện quản trị 	&#10004</b> </summary>
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
  
3.  <details><summary> <b> Chuyển sang handlebar 	&#10004</b> </summary>
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
  
4.  <details><summary> <b> Hiển thị thông tin tuyến xe top ở trang chủ</b> </summary>
    <ul><li>Người làm: </li>
    <li>Mô tả: 
        <ul>
            <li>Kiếm hình ảnh cho Popular bus routes: hình xe, hình cảnh gì cũng được miễn đẹp, 
                kích thước phải tương đương hình Hot deals (ở client/public/img/about1.png), 
                để hình ảnh ở client/public/img/</li>
            <li>Viết thông tin ý nghĩa ở mục about ở client/views/index.html</li>
        </ul>
    </li>
    <li>Deadline: 01/02/2022</li>
    </ul>
  </detail>

5.  <details><summary> <b> Hiển thị danh sách chuyến xe &#10004</b> </summary>
    <ul><li>Người làm: </li>
    <li>Mô tả: 
        <ul>File làm việc : /server/controllers/busDataController.js</ul>
    </li>
    <li>Deadline: 23/12/2022</li>
    </ul>
  </detail>

6.  <details><summary> <b> Hiển thị thông tin chi tiết của xe &#10004</b> </summary>
    <ul><li>Người làm: </li>
    <li>Mô tả: 
        <ul></ul>
    </li>
    <li>Deadline: 23/12/2022</li>
    </ul>
  </detail>
  
7.  <details><summary> <b> Sử dụng phân trang</b> </summary>
    <ul><li>Người làm: </li>
    <li>Mô tả: 
        <ul></ul>
    </li>
    <li>Deadline: 24/12/2022</li>
    </ul>
  </detail>
  
  
9.  <details><summary> <b> Thực hiện sort &#10004</b> </summary>
    <ul><li>Người làm: </li>
    <li>Mô tả: 
        <ul></ul>
    </li>
    <li>Deadline: 25/12/2022</li>
    </ul>
  </detail>
  
 
 - <details><summary> <b>10.Thực hiện search &#10004</b> </summary>
      <ul><li>Người làm: </li>
      <li>Mô tả: 
          <ul></ul>
      </li>
      <li>Deadline: 25/12/2022</li>
      </ul>
    </detail>
 - <details><summary> <b>11.Thực hiện filter</b> </summary>
    <ul><li>Người làm: </li>
    <li>Mô tả: 
        <ul></ul>
    </li>
    <li>Deadline: 25/12/2022</li>
    </ul>
  </detail>

 - <details><summary> <b>12.Hiển thị thông tin lên phần mua vé</b> </summary>
    <ul><li>Người làm: </li>
    <li>Mô tả: 
        <ul></ul>
    </li>
    <li>Deadline: 26/12/2022</li>
    </ul>
  </detail>
  
 - <details><summary> <b>13.Lưu thông tin mua vé lên database</b> </summary>
    <ul><li>Người làm: </li>
    <li>Mô tả: 
        <ul></ul>
    </li>
    <li>Deadline: 26/12/2022</li>
    </ul>
  </detail>
  
 - <details><summary> <b>14.Quản lý nhà xe: Xem, thêm, xóa, sửa &#10004</b> </summary>
    <ul><li>Người làm: </li>
    <li>Mô tả: 
        <ul></ul>
    </li>
    <li>Deadline: 26/12/2022</li>
    </ul>
  </detail>
  
 - <details><summary> <b>15.Quản lý chuyến xe: Thêm, xóa, sửa &#10004</b> </summary>
    <ul><li>Người làm: </li>
    <li>Mô tả: 
        <ul></ul>
    </li>
    <li>Deadline: 27/12/2022</li>
    </ul>
  </detail>
  
 - <details><summary> <b>16.Quản lý đặt chỗ: Xem, sửa &#10004</b> </summary>
    <ul><li>Người làm: </li>
    <li>Mô tả: 
        <ul></ul>
    </li>
    <li>Deadline: 26/12/2022</li>
    </ul>
  </detail>
  
 - <details><summary> <b>17.Chức năng đăng nhập &#10004</b> </summary>
    <ul><li>Người làm: </li>
    <li>Mô tả: 
        <ul></ul>
    </li>
    <li>Deadline: 27/12/2022</li>
    </ul>
  </detail>
  
 - <details><summary> <b>18.Chức năng đăng ký &#10004</b> </summary>
    <ul><li>Người làm: </li>
    <li>Mô tả: 
        <ul></ul>
    </li>
    <li>Deadline: 27/12/2022</li>
    </ul>
  </detail>
  
 - <details><summary> <b>19.Hiển thị lịch sử đặt vé</b> </summary>
    <ul><li>Người làm: </li>
    <li>Mô tả: 
        <ul></ul>
    </li>
    <li>Deadline: 27/12/2022</li>
    </ul>
  </detail>
  
 - <details><summary> <b>20.Confirm đăng ký + quên mật khẩu</b> </summary>
    <ul><li>Người làm: </li>
    <li>Mô tả: 
        <ul></ul>
    </li>
    <li>Deadline: 28/12/2022</li>
    </ul>
  </detail>
  
 - <details><summary> <b>21.Gửi thông tin qua vé email</b> </summary>
    <ul><li>Người làm: </li>
    <li>Mô tả: 
        <ul></ul>
    </li>
    <li>Deadline: 28/12/2022</li>
    </ul>
  </detail>
  
 - <details><summary> <b>22.Thực hiện đánh giá + bình luận</b> </summary>
    <ul><li>Người làm: </li>
    <li>Mô tả: 
        <ul></ul>
    </li>
    <li>Deadline: 29/12/2022</li>
    </ul>
  </detail>
  
**Những ngày còn lại test và viết báo cáo...**
