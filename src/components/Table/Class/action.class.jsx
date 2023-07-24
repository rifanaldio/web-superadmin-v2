import { HiOutlineMagnifyingGlass } from "react-icons/hi2"

class action {
    constructor(
      label = 'string',
      icon = <HiOutlineMagnifyingGlass />,
      onClick = null,
      type = 'button',
      color = ''
    ) {
      this.label = label
      this.icon = icon
      this.onClick = onClick
      this.type = type
      this.color = color
    }
  }
  
  export default action