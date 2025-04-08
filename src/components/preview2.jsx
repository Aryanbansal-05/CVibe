import { format, isValid, parseISO } from "date-fns";
import React from "react";

const formatDate = (date) => {
    if (!date) return "";

    let dateToFormat;

    if (typeof date === "string") {
        dateToFormat = parseISO(date);
    } else {
        dateToFormat = new Date(date);
    }

    if (!isValid(dateToFormat)) {
        console.warn("Invalid date provided : ", date);
        return "";
    }

    return format(dateToFormat, "MMM yyyy");
};

function DisplayName({ info }) {
    return (
        <>
            <h1 className="text-4xl font-bold bg-white mt-10 text-gray-800 tracking-wider">
                {info.firstName + " " + info.lastName}
            </h1>
            <h2 className="font-semibold tracking-widest text-gray-800">{info.occupation}</h2>
        </>
    );
}



function DisplayPersonalInfo({ info }) {
    return (
        <>


            <div className="flex flex-col gap-1 items-left ml-7 mt-5">



            </div>
            {info.profilePic ? (
                <img
                    src={URL.createObjectURL(info.profilePic)}
                    alt="Profile"
                    className="w-40 h-40 rounded-full object-cover shadow-md ml-7 mt-10"
                />
            ) : (
                <img
                    src="/default-profile.jpg" // <- Replace this path with your default image path
                    alt="Default Profile"
                    className="w-40 h-40 rounded-full object-cover shadow-md ml-7 mt-10"
                />)}

            <h2 className="font-sans mt-5 ml-7 text-2xl">Contact</h2>
            <hr className="my-1 ml-7" />
            <div className="flex flex-col space-y-2 mt-5 ml-7 text-xs ">
                <h3 className="font-bold">Address</h3>
                <span>{info.cityAddress}</span>
                <h3 className="font-bold">Phone No.</h3>
                <span>{info.phoneNum}</span>
                <h3 className="font-bold">Email</h3>
                <span className="underline">{info.email}</span>
                <h3 className="font-bold ">LinkedIn</h3>
                <span className="underline">{info.linkedin}</span>
                <h3 className="font-bold ">Github</h3>
                <span className="underline">{info.Github}</span>
            </div>


        </>

    );
}
function PersonalSection({ personalInfo }) {
    return (
        <section>
            {personalInfo?.map((info) => (
                <DisplayPersonalInfo key={info.id} info={info} />
            ))}
        </section>
    );
}

function PersonalName({ personalInfo }) {
    return (
        <section>
            {personalInfo?.map((info) => (
                <DisplayName key={info.id} info={info} />
            ))}
        </section>
    );
}

function DisplayEducation({ edu }) {
    return (
        <div>
            <div className="flex justify-between">
                <h2 className="font-semibold">{edu.school}</h2>
                <p className="italic text-[12px]">
                    <span>{formatDate(edu.fromDate)}</span>
                    <span>{" - " + formatDate(edu.toDate)}</span>
                </p>
            </div>
            <h2>{edu.fieldStudy}</h2>
            <div>
                <ul className="list-disc pl-5">
                    {edu.descriptions.map((item, index) => (
                        <li key={index}>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
function EducationSection({ education }) {
    return (

        <section className="flex flex-col mt-10 ">
            <h1 className="text-lg font-semibold">EDUCATION</h1>
            <hr className="my-1" />
            <div className="flex flex-col gap-2">
                {education?.map((edu) => (
                    <DisplayEducation key={edu.id} edu={edu} />
                ))}
            </div>
        </section>

    );
}
function DisplayExperience({ experience = {} }) {
    return (
        <div>
            <div className="flex justify-between">
                <h2 className="font-semibold">{experience.company}</h2>
                <p className="italic text-[12px]">
                    <span>{formatDate(experience.fromWorkDate)}</span>
                    <span>{" - " + formatDate(experience.toWorkDate)}</span>
                </p>
            </div>
            <h2>{experience.role}</h2>
            <div>
                <ul className="list-disc pl-5">
                    {experience.descriptions?.map((item, index) => (
                        <li key={index}>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
function ExperienceSection({ experiences }) {
    return (
        <section className="flex flex-col mt-4 ">
            <h1 className="text-lg font-semibold">EXPERIENCE</h1>
            <hr className="my-2" />
            <div className="flex flex-col gap-2">
                {experiences?.map((experience) => (
                    <DisplayExperience key={experience.id} experience={experience} />
                ))}
            </div>
        </section>
    );
}
function DisplaySkills({ skill }) {
    return (
        <div>
            <h2 className="font-semibold inline">{skill.skillName}: </h2>
            {skill.skillSet.map((item, index) => (
                <span key={index}>
                    {item}
                    {index !== skill.skillSet.length - 1 && ", "}
                </span>
            ))}
        </div>
    );
}
function SkillsSection({ skills = {} }) {
    return (
        <section className="flex flex-col mt-4 ">
            <h1 className="text-lg font-semibold">SKILLS</h1>
            <hr className="my-2" />
            <div className="flex flex-col gap-2">
                {skills?.map((skill) => (
                    <DisplaySkills key={skill.id} skill={skill} />
                ))}
            </div>
        </section>
    );
}
export default function Preview2({
    personalInfo,
    education,
    experiences,
    skills,
}) {
    return (
        <>
            <div className="preview bg-gray-800 text-gray-800 w-[60%] p-15 custom-sm:w-full ">
                <section className="print bg-white text-sm mx-auto max-w-[800px] aspect-[1/1.414]">
                    <section className="grid grid-cols-3">
                        <div className="col-span-1 bg-gray-700 text-white">
                            <PersonalSection personalInfo={personalInfo} />
                        </div>
                        <div className="col-span-2 col-start-2 pt-10 mb-153 pl-5">
                            <div>
                                <PersonalName personalInfo={personalInfo}></PersonalName>
                            </div>
                            <section className="grid grid-cols-3 pr-5">
                                <div className="col-span-3 col-start-1">
                                    <EducationSection education={education} />
                                </div>
                            </section>
                            <section className="grid grid-cols-3 pr-5">
                                <div className="col-span-3 col-start-1">
                                    <ExperienceSection experiences={experiences} />
                                </div>
                            </section>
                            <section className="grid grid-cols-3 pr-5">
                                <div className="col-span-3 col-start-1">
                                    <SkillsSection skills={skills} />
                                </div>
                            </section>

                        </div>
                    </section>


                </section>
            </div>
        </>
    );
}