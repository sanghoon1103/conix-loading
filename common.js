// 공통 컴포넌트를 불러오는 함수
async function loadComponent(id, url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.text();
        document.getElementById(id).innerHTML = data;

        // 헤더를 불러온 후, 현재 페이지 메뉴에 강조(active) 효과 주기
        if (id === 'header-placeholder') {
            setActiveLink();
        }
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

// 현재 주소에 따라 메뉴에 'active' 클래스 추가
function setActiveLink() {
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html";
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        if (link.getAttribute('href') === page) {
            link.classList.add('active');
        }
    });
}

// 페이지가 로드되면 실행
document.addEventListener("DOMContentLoaded", () => {
    loadComponent('header-placeholder', 'header.html');
    loadComponent('footer-placeholder', 'footer.html');
});
