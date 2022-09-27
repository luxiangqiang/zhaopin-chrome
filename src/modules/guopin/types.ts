export interface IFormat {
  name: string;
  title: string;
  code: string;
  type: string;
  salaryFrom: string;
  salaryTo: string;
  amount: number;
  salmonths: number;
  description: string;
  category: string | string[];
  city: string[];
  education: string;
  specialized: string[];
  experienceFrom: string;
  jobdata: string;
}