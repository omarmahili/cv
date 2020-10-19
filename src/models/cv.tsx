export interface ExperienceDetailsData {
  from: string;
  to?: string;
  professionOrDegree?: string;
  companyOrInstitute?: string;
  location?: string;
  description?: string;
}

export interface InfoData {
  email: string;
  phoneNumber: string;
  githubNickname: string;
  birthDate: string;
}

export interface StackOverflowData {
  from: number;
  reputation: string;
  answers: string;
  peopleReached: string;
}

export interface ProfileData {
  imageBase64?: string;
  fullname: string;
  expertise: string;
  description: string;
}

interface CVData {
  experiences: {
    title: string;
    list: ExperienceDetailsData[];
  }[];
  skills: string[];
  profile: ProfileData;
  info: InfoData;
  stackoverflow: StackOverflowData;
}

export default CVData;
