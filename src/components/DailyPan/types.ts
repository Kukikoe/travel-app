export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export interface ActivityProps {
  img: string;
  alt: string;
  title: string;
  button?: ButtonProps;
  duration: string;
  occupation: string;
  traffic: string;
}

export interface HeaderProps {
  title: string;
  fullDuration: string;
}

export interface Plan extends HeaderProps {
  activities: ActivityProps[];
}

export interface DailyPlanProps {
  plan: Plan[];
}
