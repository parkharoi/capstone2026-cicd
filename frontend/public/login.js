// 백엔드 API 기본 주소
const API_BASE_URL = "http://localhost:8080/api/members";

/**
 * 회원가입 처리
 * POST /api/members/register
 */
async function handleRegister() {
    const userId = document.getElementById('regUserId').value;
    const password = document.getElementById('regPassword').value;
    const name = document.getElementById('regName').value;

    // 회원가입 요청 데이터
    const memberData = {
        userId: userId,
        password: password,
        name: name
    };

    try {
        // 백엔드 회원가입 API 호출
        const response = await fetch(`${API_BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(memberData)
        });

        if (response.ok) {
            alert("회원가입 성공!");
        } else {
            // 백엔드에서 반환한 오류 메시지 표시
            const msg = await response.text();
            alert("실패: " + msg);
        }
    } catch (error) {
        // 네트워크 또는 API 통신 오류
        console.error("회원가입 통신 에러:", error);
        alert("회원가입 서버 통신에 실패했습니다.");
    }
}

/**
 * 로그인 처리
 * POST /api/members/login
 */
async function handleLogin() {
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    // 로그인 요청 데이터
    const loginData = {
        userId: userId,
        password: password
    };

    try {
        // 백엔드 로그인 API 호출
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });

        if (response.ok) {
            // 로그인 성공 시 회원 정보 표시
            const user = await response.json();
            alert(`${user.name}님, 환영합니다!`);
            console.log("로그인 유저 정보:", user);
        } else {
            alert("로그인 실패: 아이디 또는 비밀번호를 확인하세요.");
        }
    } catch (error) {
        // 네트워크 또는 API 통신 오류
        console.error("로그인 통신 에러:", error);
        alert("로그인 서버 통신에 실패했습니다.");
    }
}
