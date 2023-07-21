import { HiOutlineMagnifyingGlass } from "react-icons/hi2"

class action {
    constructor(
      label = 'string',
      icon = <HiOutlineMagnifyingGlass />,
      onClick = null,
    ) {
      this.label = label
      this.icon = icon
      this.onClick = onClick
    }
  }
  
  export default action