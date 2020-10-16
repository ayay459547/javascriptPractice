<?php
$host = 'localhost';
//改成你登入phpmyadmin帳號
$user = 'root';
//改成你登入phpmyadmin密碼
$passwd = 'ta017197';
//資料庫名稱
$database = 'userDB';
//實例化mysqli(資料庫路徑, 登入帳號, 登入密碼, 資料庫)
$connect = new mysqli($host, $user, $passwd, $database);
 
if ($connect->connect_error) {
    die("連線失敗: " . $connect->connect_error);
}
echo "連線成功";

//設定連線編碼，防止中文字亂碼
$connect->query("SET NAMES 'utf8'");


$userName = $_POST[userName];
$userEmail = $_POST[userEmail];
$userPwd = $_POST[userPwd];


 
$insertSql = "INSERT INTO userdata (userName,Email,PASSWORD) VALUES ('$userName','$userEmail','$userPwd')";
//呼叫query方法(SQL語法)
$status = $connect->query($insertSql);
 
if ($status) {
    echo '新增成功';
} else {
    echo "錯誤: " . $insertSql . "<br>" . $connect->error;
}
?>