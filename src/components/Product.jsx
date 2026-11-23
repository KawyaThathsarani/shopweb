import { Link } from "react-router";
//import {Card,CardContent,CardFooter,}from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {buttonVariants}from "@/components/ui/button";
//import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function Product(props) {
   /* return(
        <Card className="overflow-hidden transition hover:shadow-lg">
            <CardContent>
                <div className="flex h-48 items-center justify-center rounded-lg bg-orange-50 p-4">
                    <img src={props.image} alt={props.name} className="h-full w-full object-contain"/>
                </div>

                <Badge variant="secondary" className="mt-4">{props.category}</Badge>
                <h2 className="mt-3 text-lg font-semibold">{props.name}</h2>
                <p className="mt-3 text-2xl font-bold text-Orange-600">${Number(props.price)}</p>

            </CardContent>
            <CardFooter>
                <Link to={`/products/${props.id}`} className={buttonVariants({className:"w-full"})}> View Product</Link>
            </CardFooter>
        </Card>
    );  */

      return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={props.image}
        alt={props.name}
        className="relative z-20 aspect-video w-full object-cover brightness-100  dark:brightness-100"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">{props.category}</Badge>
        </CardAction>
        <CardTitle className="text-bold text-md">{props.name}</CardTitle>
        <CardDescription className="text-bold text-2xl">
            ${props.price}
        </CardDescription>
      </CardHeader>
      <CardFooter>
            <Link to={`/products/${props.id}`} className={buttonVariants({className:"w-full"})}> View Product</Link>
      </CardFooter>
    </Card>
  )
}

export default Product;