import { Button, Menu, Portal } from "@chakra-ui/react";
import { categories } from "../../data/category_data";

export default function MenuComponent() {
  return (
    <>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button size="sm" variant="outline">
            Categories
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {categories.map((category, index) => (
                <Menu.Item
                  key={index}
                  asChild
                  value={category}
                  onClick={(e) => console.log(e.target.innerText)}
                >
                  <p>{category}</p>
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </>
  );
}
