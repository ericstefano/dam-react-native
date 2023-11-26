import { Pencil } from "@tamagui/lucide-icons";
import { Button, Card, type CardProps, H6, Stack, Text } from "tamagui";

import { DeleteExpenseAlertDialog } from "./DeleteExpenseAlertDialog";
import EditExpenseDialog from "./EditExpenseDialog";

type ExpenseCardProps = {
  itemName: string;
  itemQuantity: number;
  itemValue: string;
} & CardProps;

export default function ExpenseCard({
  itemName,
  itemQuantity,
  itemValue,
  ...props
}: ExpenseCardProps) {
  return (
    <Card
      bg="$gray2"
      dsp="flex"
      fd="row"
      jc="space-evenly"
      zi="$0"
      pr="$9"
      {...props}
    >
      <Card.Header>
        <H6 color="$purple11">Item</H6>
        <Text fontSize="$1">{itemName}</Text>
      </Card.Header>
      <Card.Header>
        <H6 color="$yellow11">Quantidade</H6>
        <Text fontSize="$1">{`${itemQuantity} ${
          itemQuantity > 1 ? "unidades" : "unidade"
        }`}</Text>
      </Card.Header>
      <Card.Header>
        <H6 color="$green11">Valor</H6>
        <Text fontSize="$1">{itemValue}</Text>
      </Card.Header>
      <Stack
        space="$2"
        pos="absolute"
        right="$2.5"
        top="$1"
        zi="$1"
      >
        <DeleteExpenseAlertDialog />
        <EditExpenseDialog
          trigger={
            <Button
              circular
              color="$blue10"
              size="$2.5"
              icon={Pencil}
            />
          }
        />
      </Stack>
    </Card>
  );
}
