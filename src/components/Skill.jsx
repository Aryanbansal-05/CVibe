import { useState } from "react";
import plusIcon from "../assets/icons8-plus.svg";
import xIcon from "../assets/icons8-cross-30.svg";

function CreateForm({
  skill,
  updateSkill,
  addSkillSet,
  deleteSkillSet,
  onDelete,
}) {
  const [inputValue, setInputValue] = useState("");
  function handleAdd(e) {
    e.preventDefault();
    if (inputValue.trim()) {
      addSkillSet("Skills", skill.id, inputValue);
      setInputValue("");
    }
  }
  return (
    <div className="flex flex-row-reverse justify-between py-4">
      <button
        onClick={() => onDelete("Skills", skill.id)}
        className=" mt-1 mr-1 px-2 h-8"
        aria-label="Delete Skill"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="gray"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-trash-2 w-5 h-5 hover:stroke-red transition ease-in delay-150"
        >
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
      </button>
      <div className="w-[90%] flex flex-col gap-3 ">
        <div className="flex flex-col gap-1">
          <label htmlFor={`skillName-${skill.id}`}>Skill Name</label>
          <input
            type="text"
            id={`skillName-${skill.id}`}
            value={skill.skillName}
            onChange={(e) =>
              updateSkill("Skills", skill.id, "skillName", e.target.value)
            }
            className="rounded-md p-1 bg-gray-200 border-gray-200"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor={`skillSet-${skill.id}`}>Skill Set</label>
          <div className="flex gap-2">
            <input
              type="text"
              id={`skillSet-${skill.id}`}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="rounded-md p-1 bg-gray-200 border-gray-200 w-full"  
            />
            <button
              onClick={handleAdd}
              className="bg-rose px-1 rounded-full hover:scale-105 transition ease-in delay-150 custom-sm:flex-shrink-0"
              aria-label="Add item"
            >
              <img src={plusIcon} className="w-6 h-6" />
            </button>
          </div>
          <div>
            <ul className="flex flex-col gap-1 p-2">
              {skill.skillSet.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between gap-1 p-1 rounded-md bg-white text-black text-sm font-medium"
                >
                  <span>{item}</span>
                  <button
                    onClick={() => deleteSkillSet("Skills", skill.id, index)}
                    className="flex-shrink-0"
                    aria-label="Delete item"
                  >
                    <img src={xIcon} className="w-[14px] h-[14px]" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Skill({
  skills,
  updateSkill,
  addSkillSet,
  deleteSkillSet,
  addSkill,
  deleteSkill,
  isActive,
  onShow,
}) {
  function handleAddSkill(e) {
    e.preventDefault();
    addSkill("Skills");
  }
  return (
    <section className=" p-8 rounded-lg">
      <h1 className="font-semibold text-2xl mb-4">Skills</h1>
      <hr className="mb-5 mt-2 border-1 border-gray-400" />
      {isActive ? (
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4"
        >
          {skills.map((skill) => (
            <CreateForm
              key={skill.id}
              skill={skill}
              updateSkill={updateSkill}
              addSkillSet={addSkillSet}
              deleteSkillSet={deleteSkillSet}
              onDelete={deleteSkill}
            />
          ))}
          <button
            onClick={handleAddSkill}
            className="dark-shadow bg-blue-200 text-black py-2 px-4 rounded-md w-full mt-2"
            aria-label="Add skill"
          >
            Add Skill
          </button>
        </form>
      ) : (
        <button
          className="dark-shadow bg-blue-400 rounded-md text-white py-1 px-4"
          onClick={onShow}
          aria-label="Show"
        >
          Show
        </button>
      )}
    </section>
  );
}