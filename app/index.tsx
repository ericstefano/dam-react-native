import { Plus } from "@tamagui/lucide-icons";
import { Button, H3, ScrollView, Stack, YStack } from "tamagui";

import CreateExpenseDialog from "../components/CreateExpenseDialog";
import ExpenseCard from "../components/ExpenseCard";
import NoExpenseFoundCard from "../components/NoExpenseFoundCard";

export default function Home() {
  return (
    <Stack
      p="$4"
      flex={1}
    >
      <Stack>
        <H3 mb="$3">Meus gastos</H3>
        <ScrollView>
          <YStack
            space="$4"
            mb="$4"
          >
            <ExpenseCard
              itemName="Placa de Vídeo"
              itemQuantity={2}
              itemValue="5.122,52 R$"
            />
            <NoExpenseFoundCard />
          </YStack>
        </ScrollView>
      </Stack>

      <CreateExpenseDialog
        trigger={
          <Button
            pos="absolute"
            bottom="$5"
            right="$5"
            size="$5"
            circular
            scaleIcon={1.5}
            theme="active"
            color="$blue10"
            icon={Plus}
          />
        }
      />
    </Stack>
  );
}
