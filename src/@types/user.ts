// ----------------------------------------------------------------------



export type SocialLinks = {
  id: string;
  facebookLink: string;
  instagramLink: string;
  linkedinLink: string;
  twitterLink: string;
};

export type UserManager = {
  id: string;
  orgName: string;
  email: string;
  photoURL: File | any;
  about: string | null;
  isPublic: boolean;
  phoneNumber: string;
  address: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
  company: string;
  isVerified: boolean;
  status: string;
  role: string;
};

export type UserData = {
  id: string;
  avatarUrl: string;
  cover: string;
  orgName: string;
  follower: number;
  following: number;
  totalPost: number;
  position: string;
};

export type NotificationSettings = {
  activityComments: boolean;
  activityAnswers: boolean;
  activityFollows: boolean;
  applicationNews: boolean;
  applicationProduct: boolean;
  applicationBlog: boolean;
};

