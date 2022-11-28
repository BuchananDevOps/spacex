import Card from "./card"
import CardContent from "./card-content"
import CardFooter from "./card-footer"
import CardDetails from "./card-details"

export type CardType = typeof Card & {
  Content: typeof CardContent
  Body: typeof CardContent
  Footer: typeof CardFooter
  Actions: typeof CardFooter
  Details: typeof CardDetails
}
;(Card as CardType).Content = CardContent
;(Card as CardType).Body = CardContent
;(Card as CardType).Footer = CardFooter
;(Card as CardType).Actions = CardFooter
;(Card as CardType).Details = CardDetails

export type { CardProps } from "./card"
export type { CardContentProps } from "./card-content"
export type { CardFooterProps } from "./card-footer"
export type { CardDetailsProps } from "./card-details"

export default Card as CardType
