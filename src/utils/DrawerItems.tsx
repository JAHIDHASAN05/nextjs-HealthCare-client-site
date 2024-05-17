import { USER_ROLE } from "@/constans/role";
import { DrawerItem, UserRole } from "@/types";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import TryIcon from '@mui/icons-material/Try';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
 const DrawerItems = (role :UserRole):DrawerItem[] => {
    const RuleMenus:DrawerItem[]=[]
    
    switch (role) {
        case USER_ROLE.SUPER_ADMIN:
            RuleMenus.push(
                {
                title:'Dashboard',
                path:`${role}`,
                icon: DashboardIcon
                },
                {
                title:'Manage Users',
                path:`${role}/manage-users`,
                icon: GroupOutlinedIcon
                },
                {
                title:'overview',
                path:`${role}/overview`,
                icon: RemoveRedEyeOutlinedIcon
                },
        )
            
            break;

            case USER_ROLE.ADMIN:
                RuleMenus.push(
                    {
                        title:'Dashboard',
                        path:`${role}`,
                        icon: DashboardIcon
                    },
                    {
                        title:'Specialist',
                        path:`${role}/specialist`,
                        icon: TryIcon
                    },
                    {
                        title:'Doctors',
                        path:`${role}/doctors`,
                        icon: MedicalInformationIcon
                    },
                    {
                        title:'Schedules',
                        path:`${role}/schedules`,
                        icon: MedicalInformationIcon
                    },
                    {
                        title:'Appointments',
                        path:`${role}/appointments`,
                        icon: MedicalInformationIcon
                    },
                    {
                        title:'Reviews',
                        path:`${role}/Reviews`,
                        icon: MedicalInformationIcon
                    },

                )
                break;
                case USER_ROLE.DOCTOR:
                    RuleMenus.push(
                        {
                            title:'Dashboard',
                            path:`${role}`,
                            icon: DashboardIcon
                        },
                        {
                            title:'Schedules',
                            path:`${role}/schedules`,
                            icon: MedicalInformationIcon
                        },
                        {
                            title:'Appointments',
                            path:`${role}/appointments`,
                            icon: MedicalInformationIcon
                        },
                    )
                    break

                    case USER_ROLE.PATIENT:
                        RuleMenus.push(
                            {
                                title:'Appointments',
                                path:`${role}`,
                                icon:DashboardIcon
                            },
                            {
                                title:'Prescription',
                                path:`${role}/prescription`,
                                icon:MedicalInformationIcon
                            },
                            {
                                title:'Payment History',
                                path:`${role}/payment-history`,
                                icon:TryIcon
                            },

                        )
    
        default:
            break;
    }
    
    return [...RuleMenus]
};

export default DrawerItems;