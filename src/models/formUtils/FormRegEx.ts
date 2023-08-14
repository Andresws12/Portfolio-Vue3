export enum FormRegEx {
  EMAIL = '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}',
  PASSWORD = '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$',
}
