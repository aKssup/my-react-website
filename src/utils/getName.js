import Resume from "../settings/resume.json";

const names = Resume.basics.name.split(" ");

export const FirstName = "Akarsh Srivastava";

export const LastName = names[names.length - 1];

export const Initials = FirstName.charAt(0)
    .toUpperCase()
    .concat(LastName.charAt(0).toUpperCase());
