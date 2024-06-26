import { USER_ROLE } from "@/constans/role";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import exp from "constants";

export type IMeta ={
  page :number;
  limit: number;
  total: number;
}



export type UserRole = keyof typeof USER_ROLE;


export interface DrawerItem{
  title:string;
  path:string;
  parentPath?:string;
  icon?:OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {muiName:string};
  child? :DrawerItem[]
}


export const Gender= ['MALE', 'FEMALE']