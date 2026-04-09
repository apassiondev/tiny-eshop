import { cn } from "@/lib/utils";

const ProductPrice = (
    { value, className }: { value: number, className?: string }
) => {
    // two decimal places
    const stringValue = value.toFixed(2);

    // split into integer and decimal parts
    const [intValue, floatValue] = stringValue.split(".");

    return (
        <p className={cn("text-2xl", className)}>
            <span className="text-xs align-super">$</span>
            {intValue}
            <span className="text-xs align-super">.{floatValue}</span>
        </p>
    );
}

export default ProductPrice