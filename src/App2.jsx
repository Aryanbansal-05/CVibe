import React,{useState} from 'react';
import Editor2 from './components/Editor2';
import Preview2 from './components/preview2';
import './App.css'

function App2() {
  const [personalInfo, setPersonalInfo] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      cityAddress: "London, UK",
      phoneNum: "123456789",
      occupation:"Web Developer",
      email: "johndoe.fake@email.com",
      linkedin: "https://linkedin.com/username",
      Github:"https://github.com/username",
      
      
    },
  ]);

  const [education, setEducation] = useState([
    {
      id: 1,
      school: "Somewhere College",
      fieldStudy: "BS Computer Science",
      fromDate: "2014-08",
      toDate: "2018-09",
      descriptions: [
        "Best in innovative technological solution awardee",
        "Relevant coursework: Software Development 101, Data Structures & Algorithm",
      ],
    },
  ]);
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      company: "This Company, Inc.",
      role: "Software Engineer",
      fromWorkDate: "2018-03",
      toWorkDate: "2022-09",
      descriptions: [
        "Managed a team of 4 people in delivering project bla bla bla",
      ],
    },
  ]);
  const [skills, setSkills] = useState([
    {
      id: 1,
      skillName: "Technical Skills",
      skillSet: ["Embedded Programming", "Game Development"],
    },
  ]);
  const updateArray = (sec, id, field, value) => {
    if (sec === "Personal") {
      setPersonalInfo((prevInfo) =>
        prevInfo.map((info) =>
          info.id === id ? { ...info, [field]: value } : info,
        ),
      );
    }
    if (sec === "Experience") {
      setExperiences((prevExperiences) =>
        prevExperiences.map((exp) =>
          exp.id === id ? { ...exp, [field]: value } : exp,
        ),
      );
    }
    if (sec === "Education") {
      setEducation((prevEducation) =>
        prevEducation.map((edu) =>
          edu.id === id ? { ...edu, [field]: value } : edu,
        ),
      );
    }
    if (sec === "Skills") {
      setSkills((prevSkills) =>
        prevSkills.map((skill) =>
          skill.id === id ? { ...skill, [field]: value } : skill,
        ),
      );
    }
  };
  const addDescription = (sec, id, description) => {
    if (sec === "Experience") {
      setExperiences((prevExperiences) =>
        prevExperiences.map((exp) =>
          exp.id === id
            ? { ...exp, descriptions: [...exp.descriptions, description] }
            : exp,
        ),
      );
    }
    if (sec === "Education") {
      setEducation((prevEducation) =>
        prevEducation.map((edu) =>
          edu.id === id
            ? { ...edu, descriptions: [...edu.descriptions, description] }
            : edu,
        ),
      );
    }
    if (sec === "Skills") {
      setSkills((prevSkills) =>
        prevSkills.map((skill) =>
          skill.id === id
            ? { ...skill, skillSet: [...skill.skillSet, description] }
            : skill,
        ),
      );
    }
  };
  const deleteDescription = (sec, id, index) => {
    if (sec === "Experience") {
      setExperiences((prevExperiences) =>
        prevExperiences.map((exp) =>
          exp.id === id
            ? {
                ...exp,
                descriptions: exp.descriptions.filter((_, i) => i !== index),
              }
            : exp,
        ),
      );
    }
    if (sec === "Education") {
      setEducation((prevEducation) =>
        prevEducation.map((edu) =>
          edu.id === id
            ? {
                ...edu,
                descriptions: edu.descriptions.filter((_, i) => i !== index),
              }
            : edu,
        ),
      );
    }
    if (sec === "Skills") {
      setSkills((prevSkills) =>
        prevSkills.map((skill) =>
          skill.id === id
            ? {
                ...skill,
                skillSet: skill.skillSet.filter((_, i) => i !== index),
              }
            : skill,
        ),
      );
    }
  };
  const addForm = (sec) => {
    if (sec === "Experience") {
      // Math.max() is used to avoid duplication of id when deleting and then adding experience
      const newId =
        experiences.length > 0
          ? Math.max(...experiences.map((exp) => exp.id), 0) + 1
          : 1;
      const newExperience = {
        id: newId,
        company: "",
        role: "",
        fromWorkDate: "",
        toWorkDate: "",
        descriptions: [],
      };

      setExperiences((prevExperiences) => [...prevExperiences, newExperience]);
    }
    if (sec === "Education") {
      const newId =
        education.length > 0
          ? Math.max(...education.map((edu) => edu.id), 0) + 1
          : 1;
      const newEducation = {
        id: newId,
        school: "",
        fieldStudy: "",
        fromDate: "",
        toDate: "",
        descriptions: [],
      };

      setEducation((prevEducation) => [...prevEducation, newEducation]);
    }
    if (sec === "Skills") {
      const newId =
        skills.length > 0
          ? Math.max(...skills.map((skill) => skill.id), 0) + 1
          : 1;
      const newSkills = {
        id: newId,
        skillName: "",
        skillSet: [],
      };

      setSkills((prevSkills) => [...prevSkills, newSkills]);
    }
  };
  const deleteForm = (sec, id) => {
    if (sec === "Experience") {
      setExperiences((prevExperiences) =>
        prevExperiences.filter((exp) => exp.id !== id),
      );
    }
    if (sec === "Education") {
      setEducation((prevEducation) =>
        prevEducation.filter((edu) => edu.id !== id),
      );
    }
    if (sec === "Skills") {
      setSkills((prevSkills) => prevSkills.filter((skill) => skill.id !== id));
    }
  };

  return (
    <>
      <div className="flex w-full h-full custom-sm:flex-col ">
       
        <Editor2
          personalInfo={personalInfo}
          education={education}
          experiences={experiences}
          skills={skills}
          updateArray={updateArray}
          addDescription={addDescription}
          deleteDescription={deleteDescription}
          addForm={addForm}
          deleteForm={deleteForm}
        />
       
        <Preview2 
        personalInfo={personalInfo}
        education={education}
        experiences={experiences}
        skills={skills}

        />
      </div>
    </>
  );
}

export default App2;