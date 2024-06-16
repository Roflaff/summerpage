import React, { useState, useEffect } from 'react';

const List = () => {
  const courses = [
    "자아와명상2",
    "기술보고서작성및발표",
    "불교와인간",
    "EAS2",
    "테크노앙트레프레너십과리더십",
    "미래위험사회와 안전",
    "커리어 디자인",
    "EAS1",
    "사랑,우정,관용",
    "자아와명상1",
  ];
//   const [courses, setCourses] = useState([]);
//
//   useEffect(() => {
//     // 서버에서 courses 목록을 가져오는 비동기 함수 호출
//     const fetchCourses = async () => {
//       try {
//         const response = await fetch('http://서버주소/courses');
//         if (response.ok) {
//           const data = await response.json();
//           setCourses(data.courses); // 서버로부터 받아온 courses 목록을 상태에 설정
//         } else {
//           console.error('서버 응답 실패');
//         }
//       } catch (error) {
//         console.error('서버 요청 중 오류:', error);
//       }
//     };
//
//     fetchCourses(); // 비동기 함수 호출
//   }, []); // 컴포넌트가 처음 렌더링될 때 한 번만 호출

  return (
    <div>
      <h2 style={{ color: '#757575'}}>수강 강의 목록</h2>
      <br />
      <ul style={{ fontSize:'14px', lineHeight: '1.8'}}>
        {courses.map((course, index) => (
          <div key={index} style={{ textAlign: 'left' }}>- {course}</div>
        ))}
      </ul>
    </div>
  );
};

export default List;
