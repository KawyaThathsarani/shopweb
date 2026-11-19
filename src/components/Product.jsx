import { Link } from "react-router";
import {Card,CardContent,CardFooter,}from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {buttonVariants}from "@/components/ui/button";


function Product(props) {
    return(
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
    );
}

export default Product;