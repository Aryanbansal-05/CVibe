import { useState } from "react";
import plusIcon from "../assets/icons8-plus.svg";
import xIcon from "../assets/icons8-cross-30.svg";


function CreateForm({
  experience,
  updateExperience,
  addDescription,
  deleteDescription,
  onDelete,
}) {
  const [inputValue, setInputValue] = useState("");
  

  function handleAdd(e) {
    e.preventDefault();
    if (inputValue.trim()) {
      addDescription("Experience", experience.id, inputValue);
      setInputValue("");
    }
  }
  
  
  
  return (
    <div className="flex flex-row-reverse justify-between py-4">
      <button
        onClick={() => onDelete("Experience", experience.id)}
        className=" mt-1 mr-1 px-2 h-8"
        aria-label="Delete Experience"
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
      <div className="w-[100%] flex flex-wrap gap-3 ">
        <div className="flex flex-col gap-1 w-70">
          <label htmlFor={`company-${experience.id}`}>Company</label>
          <input
            type="text"
            id={`company-${experience.id}`}
            value={experience.company}
            onChange={(e) =>
              updateExperience(
                "Experience",
                experience.id,
                "company",
                e.target.value,
              )
            }
            className="rounded-md p-1 bg-gray-200 border-gray-200"
          />
        </div>
        <div className="flex flex-col gap-1 w-70">
          <label htmlFor={`role-${experience.id}`}>Role</label>
          <input
            type="text"
            id={`role-${experience.id}`}
            value={experience.role}
            onChange={(e) =>
              updateExperience(
                "Experience",
                experience.id,
                "role",
                e.target.value,
              )
            }
            className="rounded-md p-1 bg-gray-200 border-gray-200"
          />
        </div>
        <div className="flex flex-col gap-1 w-70">
          <label htmlFor={`fromWorkDate-${experience.id}`}>From</label>
          <input
            type="month"
            id={`fromWorkDate-${experience.id}`}
            value={experience.fromWorkDate}
            onChange={(e) =>
              updateExperience(   "Experience", experience.id,"fromWorkDate", e.target.value,
              )
            }
            className="rounded-md p-1 bg-gray-200 border-gray-200"
          />
        </div>
        <div className="flex flex-col gap-1 w-70">
          <label htmlFor={`toWorkDate-${experience.id}`}>To</label>
          <input
            type="month"
            id={`toWorkDate-${experience.id}`}
            value={experience.toWorkDate}
            onChange={(e) =>
              updateExperience(
                "Experience",
                experience.id,
                "toWorkDate",
                e.target.value,
              )
            }
            className="rounded-md p-1 bg-gray-200 border-gray-200"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor={`description-${experience.id}`}>Description</label>
          <div className="flex gap-2">
            <input
              type="text"
              id={`description-${experience.id}`}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="rounded-md p-1 bg-gray-200 border-gray-200  w-135"
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
              {experience.descriptions.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between gap-1 p-1 rounded-md bg-white text-black text-sm font-medium"
                >
                  <span>{item}</span>
                  <button
                    onClick={() =>
                      deleteDescription("Experience", experience.id, index)
                    }
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
export default function Experience({
  experiences,
  updateExperience,
  addDescription,
  deleteDescription,
  addExperience,
  deleteExperience,
  isActive,
  onShow,
}) {
  function handleAddExperience(e) {
    e.preventDefault();
    addExperience("Experience");
  }
  return (
    <section className=" p-8 rounded-lg">
      <h1 className="font-semibold text-2xl mb-4">Experience</h1>
      <hr className="mb-5 mt-2 border-1 border-gray-400" />
      {isActive ? (
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4"
        >
          {experiences.map((experience) => (
            <CreateForm
              key={experience.id}
              experience={experience}
              updateExperience={updateExperience}
              addDescription={addDescription}
              deleteDescription={deleteDescription}
              onDelete={deleteExperience}
            />
          ))}
          <button
            onClick={handleAddExperience}
            className="dark-shadow bg-blue-200 text-black py-2 px-4 rounded-md w-full mt-2"
            aria-label="Add Experience"
          >
            Add Experience
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