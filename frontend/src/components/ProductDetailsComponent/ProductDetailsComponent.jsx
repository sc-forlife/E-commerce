import { Collapsible, Stack, Text } from "@chakra-ui/react";
import { LuChevronRight } from "react-icons/lu";
import { StoreProduct } from "../ProductExtraData/ProductExtraData";
import { useContext } from "react";
import SpinnerComponent from "../Spinner/SpinnerComponent";
import CollapsibleComponent from "../CollapsibleComponent/CollapsibleComponent";

export default function ProductDetailsComponent() {
  const { product } = useContext(StoreProduct);

  console.log(product);

  return (
    <>
      {product ? (
        <>
          <CollapsibleComponent
            title={"Product Dimensions"}
            content={
              <>
                <Stack>
                  <Text>Width: {product.dimensions.width}</Text>
                  <Text>Depth: {product.dimensions.depth}</Text>
                  <Text>Height: {product.dimensions.height}</Text>
                </Stack>
              </>
            }
          />
          <CollapsibleComponent
            title={"Return Policy"}
            content={
              <>
                <Stack>
                  <Text>{product.returnPolicy}</Text>
                </Stack>
              </>
            }
          />
          <CollapsibleComponent
            title={"Stock"}
            content={
              <>
                <Stack>
                  <Text>Stock: {product.stock}</Text>
                </Stack>
              </>
            }
          />
          <CollapsibleComponent
            title={"Weight"}
            content={
              <>
                <Stack>
                  <Text>Weight: {product.weight}</Text>
                </Stack>
              </>
            }
          />
          <CollapsibleComponent
            title={"Warranty Information"}
            content={
              <>
                <Stack>
                  <Text>{product.warrantyInformation}</Text>
                </Stack>
              </>
            }
          />
        </>
      ) : (
        <SpinnerComponent />
      )}
    </>
  );
}
