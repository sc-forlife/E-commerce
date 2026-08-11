import { Collapsible, Stack, Text } from "@chakra-ui/react";
import { LuChevronRight } from "react-icons/lu";
import { SelectedProduct } from "../../pages/ViewProduct/ViewProduct";
import { useContext } from "react";
import SpinnerComponent from "../Spinner/SpinnerComponent";
import CollapsibleComponent from "../CollapsibleComponent/CollapsibleComponent";

export default function ProductDetailsComponent() {
  const { product } = useContext(SelectedProduct);
  const sizing = { base: "13px", md: "15px" };

  return (
    <>
      {product ? (
        <>
          <CollapsibleComponent
            title={"Product Dimensions"}
            content={
              <>
                <Stack>
                  <Text fontSize={sizing}>
                    Width: {product.dimensions.width}
                  </Text>
                  <Text fontSize={sizing}>
                    Depth: {product.dimensions.depth}
                  </Text>
                  <Text fontSize={sizing}>
                    Height: {product.dimensions.height}
                  </Text>
                </Stack>
              </>
            }
          />
          <CollapsibleComponent
            title={"Return Policy"}
            content={
              <>
                <Stack>
                  <Text fontSize={sizing}>{product.returnPolicy}</Text>
                </Stack>
              </>
            }
          />
          <CollapsibleComponent
            title={"Stock"}
            content={
              <>
                <Stack>
                  <Text fontSize={sizing}>Stock: {product.stock}</Text>
                </Stack>
              </>
            }
          />
          <CollapsibleComponent
            title={"Weight"}
            content={
              <>
                <Stack>
                  <Text fontSize={sizing}>Weight: {product.weight}</Text>
                </Stack>
              </>
            }
          />
          <CollapsibleComponent
            title={"Warranty Information"}
            content={
              <>
                <Stack>
                  <Text fontSize={sizing}>{product.warrantyInformation}</Text>
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
