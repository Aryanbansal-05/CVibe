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

function DisplayPersonalInfo({ info }) {
    return (
        <div className="flex flex-col gap-2 items-center">
            <h1 className="text-3xl font-bold">
                {info.firstName + " " + info.lastName}
            </h1>
            <p className="flex flex-wrap justify-center gap-2">
                <span>{info.cityAddress}</span>|<span>{info.phoneNum}</span>|
                <span className="underline">{info.email}</span>|
                <span className="underline">{info.linkedin}</span>| <span className="underline">{info.Github}</span>
            </p>
        </div>
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
        <section className="flex flex-col mt-4">
            <h1 className="text-md font-semibold">EDUCATION</h1>
            <hr className="my-2" />
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
        <section className="flex flex-col mt-4">
            <h1 className="text-md font-semibold">EXPERIENCE</h1>
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
        <section className="flex flex-col mt-4">
            <h1 className="text-md font-semibold">SKILLS</h1>
            <hr className="my-2" />
            <div className="flex flex-col gap-2">
                {skills?.map((skill) => (
                    <DisplaySkills key={skill.id} skill={skill} />
                ))}
            </div>
        </section>
    );
}
export default function Preview({
    personalInfo,
    education,
    experiences,
    skills,
}) {
    return (
        <div className="preview font-serif bg-gray-800 text-black w-[60%] p-15 custom-sm:w-full">
            <section className="print bg-white text-md p-10 mx-auto max-w-[800px] aspect-[1/1.414]">

                <PersonalSection personalInfo={personalInfo} />
                <EducationSection education={education} />
                <ExperienceSection experiences={experiences} />
                <SkillsSection skills={skills} />
            </section>
        </div>
    );
}