import {
  FaRobot,
  FaMicrochip,
  FaTrophy,
  FaMedal,
  FaCertificate,
  FaWifi,
  FaBolt,
  FaSatelliteDish,
} from 'react-icons/fa6'
import { TbDrone } from 'react-icons/tb'
import { GiMechanicalArm } from 'react-icons/gi'

/** Maps string keys used in data/portfolio.js to icon components */
export const iconMap = {
  robot: FaRobot,
  chip: FaMicrochip,
  drone: TbDrone,
  trophy: FaTrophy,
  medal: FaMedal,
  cert: FaCertificate,
  wifi: FaWifi,
  bolt: FaBolt,
  satellite: FaSatelliteDish,
  arm: GiMechanicalArm,
}

export function Icon({ name, ...props }) {
  const Cmp = iconMap[name] || FaMicrochip
  return <Cmp {...props} />
}
