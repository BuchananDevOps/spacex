import Card from "./card"
import CardContent from "./card-content"
import CardFooter from "./card-footer"

export type CardType = typeof Card & {
  Content: typeof CardContent
  Body: typeof CardContent
  Footer: typeof CardFooter
  Actions: typeof CardFooter
}
;(Card as CardType).Content = CardContent
;(Card as CardType).Body = CardContent
;(Card as CardType).Footer = CardFooter
;(Card as CardType).Actions = CardFooter

export type { CardProps } from "./card"
export type { CardContentProps } from "./card-content"
export type { CardFooterProps } from "./card-footer"

export default Card as CardType
