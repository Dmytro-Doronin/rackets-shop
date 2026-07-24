import {notFound} from "next/navigation";
import {getRacket} from "@/app/racket/[racketId]/page";
import {RacketClientPage} from "@/app/racket/[racketId]/ui/RacketClientPage";

type RacketContainerProps = {
    racketId: string;
};

export const RacketContainer = async ({
    racketId,
}: RacketContainerProps) => {

    const racket = await getRacket(racketId)
    if (!racket) {
        return notFound()
    }
    const product = racket.product

    return (
        <RacketClientPage product={product}/>
    );
};

