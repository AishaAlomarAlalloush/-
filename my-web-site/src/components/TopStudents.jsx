import { useEffect, useState } from "react";
import styled from "styled-components";

import maleAvatar from "../../src/assets/images/male.jpg";
import femaleAvatar from "../../src/assets/images/female.jpg";


const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  padding: 0.5rem;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.15);
  }
`;


const Name = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;


export default function TopStudents() {
  const [students, setStudents] = useState([
    {
        id: "1",
        name: "أحمد",
        gender: "male",
        description: "مهذب , نشيط , له مستقبل باهر",
        rating: 8.7
    },
        {
        id: "2",
        name: "مريم",
        description: "عطوفة , ذكية , داعية المستقبل",
        rating: 8.6
    },
        {
        id: "3",
        name: "خديجة",
        description: "أتقنت التجويد في عمر 5 سنوات",
        rating: 8
    },
        {
        id: "4",
        name: "بلال",
        gender: "male",
        description: "متقن لأحكام التجويد , أركان الصلاة وواجباتها",
        rating: 7.9
    },
        {
        id: "5",
        name: "سهى",
        description: "أتقنت التجويد في عمر 6 سنوات",
        rating: 7.4
    },
        {
        id: "6",
        name: "عمر",
        gender: "male",
        description: "حافظ لأكثر من 200 حديث",
        rating: 7.2
    }
  ]);


  useEffect(() => {
    // Replace with your API endpoint
    fetch("/api/users/topStudents")
      .then((res) => res.json())
      .then((data) => setStudents(data.slice(0, 8)))
      .catch((err) => console.error("Error fetching students:", err));
  }, []);

  return (
    <div class="container">
      <div class="grid">
        {students.map((student) => (
          <Card key={student.id}>
            <div class="img">
              <img width= "60" height = "60" src={student.gender === "male" ? maleAvatar : femaleAvatar} alt="img" loading="lazy" />
            </div>
            <Name>{student.name}</Name>
            <p>{student.description || "Outstanding student"}</p>
            <h3 >⭐ {student.rating}</h3>
          </Card>
        ))}
      </div>
    </div>
  );
}