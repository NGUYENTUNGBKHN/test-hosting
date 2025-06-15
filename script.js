document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.getElementById('cardContainer');
    const openCardBtn = document.getElementById('openCardBtn');
    const websiteContent = document.getElementById('websiteContent');

    openCardBtn.addEventListener('click', function() {
        cardContainer.classList.add('open'); // Thêm class 'open' để kích hoạt CSS transition

        // Sau khi hiệu ứng mở thiệp hoàn tất, hiển thị nội dung web
        cardContainer.addEventListener('transitionend', function() {
            cardContainer.style.display = 'none'; // Ẩn thiệp đi
            websiteContent.classList.add('show'); // Hiển thị nội dung web
            document.body.style.overflow = 'auto'; // Cho phép cuộn trang
        }, { once: true }); // Đảm bảo sự kiện chỉ chạy một lần
    });
});