import { Pencil } from "@tamagui/lucide-icons";
import { Button, Card, type CardProps, H6, Stack, Text } from "tamagui";

import { formatPrice } from "../utils/number";

import { DeleteExpenseAlertDialog } from "./DeleteExpenseAlertDialog";
import EditExpenseDialog from "./EditExpenseDialog";
import { ModifyExpenseFormData } from "./ModifyExpenseForm";

type ExpenseCardProps = {
  item: ModifyExpenseFormData & { id: string };
} & CardProps;

export default function ExpenseCard({ item, ...props }: ExpenseCardProps) {
  return (
    <Card
      bg="$gray2"
      dsp="flex"
      fw="wrap"
      fd="row"
      gap="$8"
      jc="space-between"
      zi="$0"
      pr="$9"
      {...props}
    >
      <Card.Header>
        <H6 color="$purple11">Nome</H6>
        <Text fontSize="$1">{item.name}</Text>
      </Card.Header>
      <Card.Header>
        <H6 color="$yellow11">Quantidade</H6>
        <Text fontSize="$1">{`${item.quantity} ${
          item.quantity > 1 ? "unidades" : "unidade"
        }`}</Text>
      </Card.Header>
      <Card.Header>
        <H6 color="$green11">Valor</H6>
        <Text fontSize="$1">{formatPrice(item.value)}</Text>
      </Card.Header>
      <Stack
        space="$2"
        pos="absolute"
        right="$2.5"
        top="$1"
        zi="$1"
      >
        <DeleteExpenseAlertDialog itemId={item.id} />
        <EditExpenseDialog
          item={item}
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
