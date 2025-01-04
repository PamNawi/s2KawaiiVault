import { htmlToJsx } from "../../util/jsx"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const Content: QuartzComponent = ({ fileData, tree }: QuartzComponentProps) => {
  const content = htmlToJsx(fileData.filePath!, tree)
  const classes: string[] = fileData.frontmatter?.cssclasses ?? []
  const classString = ["popover-hint", ...classes].join(" ")
  return <article class={classString}>{content}
  <img src="https://i.imgur.com/h9nuUgm.gif" alt="RibbonDivider" style={{ verticalAlign: 'middle'}} />
  </article>
}

export default (() => Content) satisfies QuartzComponentConstructor
