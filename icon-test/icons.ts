export enum Icons {
  Activity = "activity",
  Image = "image",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Activity]: "61697",
  [Icons.Image]: "61698",
};

export type IconsId =
  | "activity"
  | "image";
